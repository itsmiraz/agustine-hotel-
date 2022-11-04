import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext/UserContext';
import BookedRoomCard from './bookedRoomCard/BookedRoomCard';

const UserPage = () => {

    const { user, logOut } = useContext(AuthContext)
    const [bookedRomm, setbookedRoom] = useState([])

    useEffect(() => {
        fetch(`https://hotel-web-server.vercel.app/orders?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('agustineToken')}`
            }
        })
            .then(res => {

                if (res.status === 401 || res.status === 403) {
                    return logOut()
                }
                return res.json()
            })
            .then(data => {
                console.log('database', data);
                setbookedRoom(data)
            })
    }, [user.email, logOut])

    const handleCancelBook = id => {
        fetch(`https://hotel-web-server.vercel.app/orders/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0)
                    toast.error('You successFully Canceled Your Book')
                const remainingBooking = bookedRomm.filter(room => room._id !== id)
                setbookedRoom(remainingBooking)
            })
    }

    return (
        <div className='bg-slate-800 py-10 flex md:flex-row flex-col justify-around'>
            <div className=' text-center  pb-20 z-0 drop-shadow-lg p-5'>
                <h3 className='text-3xl text-gray-200 my-4 font-bold'> Your Information</h3>

                <div className="flex  flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 bg-gray-900 text-gray-100">
                    <img src={user?.photoURL ?
                        user.photoURL
                        :
                        'https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg'

                    } alt="" className="w-32 h-32 mx-auto rounded-full bg-gray-500 aspect-square" />
                    <div className="space-y-4 text-center divide-y divide-gray-700">
                        <div className="my-2 space-y-1">
                            <h2 className="text-xl font-semibold sm:text-2xl">
                                {user?.displayName ?
                                    <span>{user.displayName}</span>
                                    :
                                    <span>Anonymus</span>

                                }

                            </h2>
                            <p className="px-5 text-xs sm:text-base text-gray-400">{user.email}</p>
                        </div>

                    </div>
                </div>

            </div>
            <div className=' text-center bg-gray-900 rounded-lg   z-0 drop-shadow-lg p-5'>
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

export default UserPage;