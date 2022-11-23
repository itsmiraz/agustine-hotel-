import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import RoomSmallCard from '../Admin/RoomCard/RoomSmallCard';

const AllRooms = () => {

    const [rooms, setRooms] = useState([])

    useEffect(() => {
        fetch('https://hotel-web-server.vercel.app/room')
            .then(res => res.json())
            .then(data => setRooms(data.rooms))
    }, [rooms])

    const handleForm = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.title.value;
        const price = form.price.value;
        const image = form.url.value;
        const capacity = form.capacity.value;
        const des = form.des.value;

        const roomDetails = {
            name,
            price,
            image,
            capacity,
            des
        }
        console.log(roomDetails);

        fetch('https://hotel-web-server.vercel.app/room', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(roomDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Room Added Success Fully')
                    form.reset()
                }
            })

    }


    const handleDelele = (room) => {
        const agree = window.confirm('Are You sure You want to delete')
        console.log(room._id);
        if (agree) {
            fetch(`https://hotel-web-server.vercel.app/room/${room._id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount >= 0) {
                        toast.error('Room Deleted Success Fully')
                        const remainingUser = rooms
                            .filter(us => us._id !== room._id)
                        setRooms(remainingUser)
                    }
                })
        }

    }


    return (
        <div className='h-screen w-full'>
              <h1 className='text-center my-4 text-3xl font-bold'>Rooms:{rooms.length}</h1>
                    <div className='px-40'>
                        {
                            rooms.map(room => <RoomSmallCard
                                key={room._id}
                                room={room}
                                handleDelele={handleDelele}
                            ></RoomSmallCard>)
                        }
                    </div>
        </div>
    );
};

export default AllRooms;