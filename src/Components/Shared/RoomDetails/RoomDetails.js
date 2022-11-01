import React, { useContext } from 'react';
import { FaCheck } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthContext/UserContext';

const RoomDetails = () => {
    const Roomdetails = useLoaderData()
    const { image, capacity, price, name, des } = Roomdetails;
    console.log("🚀 ~ file: RoomDetails.js ~ line 9 ~ RoomDetails ~ Roomdetails", Roomdetails)
    const { setRoomDetails } = useContext(AuthContext)

    const handleClick = () => {
        setRoomDetails(Roomdetails)
    }
    return (
        <div className='md:p-10 bg-slate-900'>
            <div className=" p-4 shadow-md rounded bg-gray-800  text-gray-100">

                <div className="space-y-3 grid grid-cols-1 md:grid-cols-2">
                    <div className='mr-4'>
                        <img alt='img' className='rounded' src={image} />

                    </div>
                    <div className="space-y-2">

                        <h3 className="text-4xl font-semibold text-violet-400">{name}</h3>

                        <p className="leading-snug text-gray-400">{des} </p>

                        <div>
                            <div className='my-2'>
                                <p className='font-semibold text-xl'>Facilites</p>
                                <span className='flex text-gray-400 items-center'><FaCheck></FaCheck>Air Condition</span>
                                <span className='flex text-gray-400 items-center'><FaCheck></FaCheck>SPA service</span>
                            </div>
                            <div>
                                <p className='font-semibold'>Capacity:{capacity}</p>
                                <p className='font-semibold'>Price:${price}</p>
                            </div>
                        </div>


                        <Link to='/book'>
                            <button onClick={handleClick} type="button" className="px-4 my-5 py-2 font-semibold rounded-full bg-gray-100 text-gray-800">Book Now</button>

                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomDetails;