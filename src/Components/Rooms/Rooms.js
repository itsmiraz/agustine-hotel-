import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import { ScrollRestoration } from 'react-router-dom';
import LoadingAnimation from '../Shared/LoadingAnimation/LoadingAnimation';
import RoomCard from '../Shared/RoomCard/RoomCard';

const Rooms = () => {

    const [roosms, setRooms] = useState([])
    const [count, setCount] = useState(10)

    const [size, setSize] = useState(6);
    const [page, setPage] = useState(0);

    const pages = Math.ceil(count / size);


    
    const { data:AllData, isLoading } = useQuery({

        queryKey: ['rooms', 'count',page,size],
        queryFn: async () => {
            const res = await fetch(`https://hotel-web-server.vercel.app/room?page=${page}&size=${size}`)
            const data = await res.json()
            setCount(data.count)
            setRooms(data.rooms)  
            return data
        }

    })

   

    if (isLoading) {
        return <LoadingAnimation></LoadingAnimation>
    }


    return (
        <div className='bg-[#0D1117]'>
            <h1 className='text-4xl text-center text-gray-300 font-bold py-10'>Our Best Rooms </h1>
            <div >
              
                        
                     
                            <div className='grid grid-cols-1 mt-9 md:grid-cols-3 pb-10 gap-5 justify-items-center z-0 md:px-20'>
                                {
                                    roosms?.map(room => <RoomCard
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
                                className={`mr-2 w-6 h-6 ${page === number && 'bg-slate-100 text-slate-900'}`}
                                onClick={() => setPage(number)}
                            >
                                {number + 1}
                            </button>)
                        }
                    </div>
                </div>
            </div>
            <ScrollRestoration></ScrollRestoration>
        </div>
    );
};

export default Rooms;