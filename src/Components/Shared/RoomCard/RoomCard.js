import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './RoomCard.css'
const RoomCard = (props) => {
    const handleClick = () => {
        const roomDetail = (props.room)
        localStorage.setItem('room-detail', JSON.stringify(roomDetail))
    }

    const { name, price, image, capacity, des, _id } = props.room

    return (
        <div>
            <div style={{ height: '450px' }} className="card md:w-96 w-80 pb-2  rounded z-0  bg-gray-900 shadow-xl">
                <div className='h-[250px] cards overflow-hidden'>
                    <span className='inner'>   <img src={image} alt="Shoes" /></span>
                </div>
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


                        <div>
                            <Link to={`/rooms/${_id}`}><button className="px-2 mr-2 py-1  rounded-full border  text-white">Show Details</button></Link>

                        </div>
                        <div>
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