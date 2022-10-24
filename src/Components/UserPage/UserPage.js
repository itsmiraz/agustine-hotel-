import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext/UserContext';

const UserPage = () => {

    const { user } = useContext(AuthContext)
    const data = localStorage.getItem('bookedRomm')
    const bookedRoom = JSON.parse(data)

    let total;


    if (bookedRoom) {

        const { image_url, title, price } = bookedRoom.room



        const chek1 = parseFloat(bookedRoom.checkin.slice(8, 10))

        const chek2 = parseFloat(bookedRoom.checkout.slice(8, 10))
        const totalDate = chek2 - chek1;
        const TotalBill = price * totalDate;
        total = TotalBill


    }





    const handleCancelButton = () => {
        localStorage.removeItem('bookedRomm')
    }

    return (
        <div className='bg-slate-800 py-20 flex md:flex-row flex-col justify-around'>
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
            <div className=' text-center bg-gray-900 rounded-lg mt-10  z-0 drop-shadow-lg p-5'>
                <h3 className='text-3xl text-gray-200 font-bold my-4'> Your Booking</h3>
                {
                    bookedRoom ?
                        <>
                            <div className='flex items-center md:flex-row flex-col bg-gray-200 p-2 rounded-lg text-gray-700 font-semibold'>
                                <img className='md:w-32 w-10  rounded-lg' src={bookedRoom ?
                                    bookedRoom.room.image_url

                                    :
                                    <></>
                                } alt="" />
                                <div className='text-start pl-2'>
                                    <h3 className='text-xl'>{bookedRoom ?
                                        <span>{bookedRoom.room.title}</span>
                                        :
                                        <></>
                                    }</h3>
                                    <p>Price:${bookedRoom ?
                                        <span>{bookedRoom.room.price}</span>
                                        :
                                        <></>
                                    }</p>
                                </div>
                                <div className='px-4'>
                                    Check In:
                                    <h2>
                                        {bookedRoom.checkin.slice(0, 10)}
                                    </h2>
                                </div>
                                <div className='px-4'>
                                    Check Out:
                                    <h2>
                                        {bookedRoom.checkout.slice(0, 10)}
                                    </h2>
                                </div>
                                <div className='px-4'>
                                    Total Bill Will Be
                                    <h3>{total}</h3>
                                </div>
                                <div>
                                    <button onClick={handleCancelButton} type="button" className="px-2 py-1 font-semibold border rounded bg-slate-800 border-gray-100 text-gray-100">Cancel Book</button>
                                </div>
                            </div>
                        </>

                        :
                        <><h1>You have not any booked room yet</h1></>
                }
            </div>
        </div>
    );
};

export default UserPage;