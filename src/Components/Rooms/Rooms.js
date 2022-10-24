import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RoomCard from '../Shared/RoomCard/RoomCard';

const Rooms = () => {
    const rooms = useLoaderData()

    return (
        <div className='bg-slate-900 '>
            <h1 className='text-4xl text-center text-gray-300 font-bold py-10'>Our Best Rooms </h1>
            <div >
                <div className='grid grid-cols-1 mt-9 md:grid-cols-3 pb-10 gap-5 justify-items-center z-0 md:px-20'>
                    {
                        rooms.map(room => <RoomCard
                            key={room._id
                            }
                            room={room}
                        ></RoomCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Rooms;