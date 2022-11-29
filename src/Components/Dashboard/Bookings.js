import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { SyncLoader } from 'react-spinners';
import { AuthContext } from '../../Context/AuthContext/UserContext';
import BookedRoomCard from './BookedRoomCard';

const Bookings = () => {


    const { user, logOut } = useContext(AuthContext)
   

    const { data: bookedRomm = [], isLoading, refetch } = useQuery({
        queryKey: ['bookedRoom', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://hotel-web-server.vercel.app/bookings?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('agustineToken')}`
                }
            })
            if (res.status === 401 || res.status === 403) {
                    return logOut()
                }
       
            else {
                const data = await res.json()
           
                console.log(res)
                return data;
          }
        }
    })

    if (isLoading) {
        return <div className='flex justify-center m-80'><SyncLoader
            color="hsla(86, 0%, 100%, 1)"
            size={15}
        /></div>
    }

    const handleCancelBook = id => {
        fetch(`https://hotel-web-server.vercel.app/orders/${id}`, {
            method: 'DELETE',
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut()
                }
                return res.json()

            })
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0)
                    toast.error('You successFully Canceled Your Book')
                refetch()

            })
    }


    return (
        <div>
            <div className=' text-center bg-gray-900 rounded-lg h-screen w-full z-0 drop-shadow-lg p-5'>
                <h3 className='text-3xl text-gray-200 font-bold my-4'> Your Booking</h3>
                {
                    bookedRomm.length === 0 ?


                        <div className='text-center'>
                            <h1>You Have not any booked Room Yet.</h1>
                            <p>Book a <Link className='underline' to='/rooms'>Room?</Link></p>
                        </div>
                        :
                        <>
                            {
                                bookedRomm.map(booked => <BookedRoomCard

                                    key={booked._id}
                                    booked={booked}
                                    handleCancelBook={handleCancelBook}
                                ></BookedRoomCard>)
                            }

                        </>
                }




            </div>
        </div>
    );
};

export default Bookings;