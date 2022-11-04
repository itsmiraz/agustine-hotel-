import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import RoomCard from '../Shared/RoomCard/RoomCard';

const Rooms = () => {

    const [roosms, setRooms] = useState([])
    const [count, setCount] = useState(10)

    const [size, setSize] = useState(6);
    const [page, setPage] = useState(0);



    const pages = Math.ceil(count / size);
    useEffect(() => {
        const url = `http://localhost:5000/room?page=${page}&size=${size}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCount(data.count)
                setRooms(data.rooms)
            })
    }, [page, size])

    return (
        <div className='bg-slate-900 '>
            <h1 className='text-4xl text-center text-gray-300 font-bold py-10'>Our Best Rooms </h1>
            <div >
                <div className='grid grid-cols-1 mt-9 md:grid-cols-3 pb-10 gap-5 justify-items-center z-0 md:px-20'>
                    {
                        roosms.map(room => <RoomCard
                            key={room._id
                            }
                            room={room}
                        ></RoomCard>)
                    }
                </div>
                <div className='text-center font-semibold  m-5'>

                    <div className='my-2'>
                        {
                            [...Array(pages).keys()].map(number => <button
                                key={number}
                                className={`mr-2 bg-slate-600   w-6 h-6 ${page === number && 'bg-white text-slate-900'}`}
                                onClick={() => setPage(number)}
                            >
                                {number + 1}
                            </button>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rooms;