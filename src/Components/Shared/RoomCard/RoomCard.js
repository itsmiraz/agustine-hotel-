import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const RoomCard = (props) => {
    // const { setRoomDetails } = useContext(AuthContext)

    const handleClick = () => {
        const roomDetail = (props.room)
        localStorage.setItem('room-detail', JSON.stringify(roomDetail))
    }

    const { name, price, image, capacity, des, _id } = props.room

    return (
        <div>
            <div style={{ height: '450px' }} className="card md:w-96 w-80  rounded z-0  bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body p-4">
                    <h2 className="card-title">
                        {name}

                    </h2>
                    <p className='text-start'>{des.slice(0, 80)}...</p>
                    <div className='flex justify-between items-center font-semibold'>
                        <p className='text-start font-semibold'>Price:${price}</p>
                        <p>People Capacity: {capacity}</p>
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex items-center'>
                            <FaStar className='mr-2'></FaStar> 4.5
                        </div>
                        <div>
                            <Link to={`/rooms/${_id}`}><button className="px-2 mr-2 py-1  rounded-full border  text-white">Show Details</button></Link>
                            <Link to='/book'>
                                <button onClick={handleClick} className="px-2 py-1  rounded-full bg-purple-600 text-white">Book Now!</button>

                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomCard;