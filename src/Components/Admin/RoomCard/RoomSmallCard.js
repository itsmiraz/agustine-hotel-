import React from 'react';
import { Link } from 'react-router-dom';

const RoomSmallCard = ({ room, handleDelele }) => {
    const { name, price, image, capacity, _id } = room
    return (
        <div className='font-semibold my-4 flex gap-5 items-center bg-slate-200 p-4 rounded-lg text-gray-800'>
            <img style={{ width: '60px' }} src={image} alt="" />
            <p >{name}</p>
            <p>Price:${price}</p>
            <p>Capacity:{capacity}</p>
            <Link to={`/roomdetails/${_id}`}>
                <button type="button" className="px-8 py-1 font-semibold rounded bg-gray-700 dark:text-gray-100">Edit</button>

            </Link>
            <button onClick={() => handleDelele(room)} type="button" className="px-2 py-1 font-semibold rounded dark:bg-gray-700 dark:text-gray-100">X</button>
        </div>
    );
};

export default RoomSmallCard;