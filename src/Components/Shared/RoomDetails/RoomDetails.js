import React, { useContext } from 'react';
import { FaCheck } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthContext/UserContext';

const RoomDetails = () => {
    const Roomdetails = useLoaderData()
    const { image_url, price, title } = Roomdetails;
    const { setRoomDetails } = useContext(AuthContext)

    const handleClick = () => {
        setRoomDetails(Roomdetails)
    }
    return (
        <div className='md:p-10 bg-slate-900'>
            <div className=" p-4 shadow-md rounded bg-gray-800  text-gray-100">

                <div className="space-y-3 grid grid-cols-1 md:grid-cols-2">
                    <div className='mr-4'>
                        <img alt='img' className='rounded' src={image_url} />

                    </div>
                    <div className="space-y-4">

                        <h3 className="text-4xl font-semibold text-violet-400">{title}</h3>

                        <p className="leading-snug text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam omnis sed dolore iste magni, debitis itaque? Ipsa distinctio cum nostrum aliquid eveniet repellat
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit aut voluptatum, eum ea aperiam unde laborum veniam fuga culpa explicabo . </p>

                        <p className='font-semibold text-2xl'>Facilites</p>
                        <span className='flex items-center'><FaCheck></FaCheck>Air Condition</span>
                        <span className='flex items-center'><FaCheck></FaCheck>Air Condition</span>
                        <p className='font-semibold'>Price:${price}</p>
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