import React from 'react';
import { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import './Book.css'
import "react-datepicker/dist/react-datepicker.css";
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext/UserContext';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';
import { loadStripe } from '@stripe/stripe-js';


const Book = () => {
    const { user } = useContext(AuthContext)
    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

    console.log(user.email);
    const data = localStorage.getItem('room-detail')
    const roomDetails = JSON.parse(data)
    const { image, des, price, name, _id } = roomDetails
    const navigate = useNavigate()
    const [checkindate, setcheckindate] = useState(null)
    const [checkOutDate, setCheckOutDate] = useState(null)



    const handleClick = (id) => {
        const bookedRoomData = {
            checkin: checkindate,
            checkout: checkOutDate,
            email: user.email,
            room: roomDetails,
        }
        fetch('https://hotel-web-server.vercel.app/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookedRoomData)

        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                navigate('/dashboard/booking')
                toast.success('Your Room has been Booked Please Check Your Email')
            })

        // localStorage.setItem('bookedRomm', JSON.stringify(bookedRoomData))
    }

    return (
        <div className='bg-slate-900 p-5 md:p-20 '>

            <div className='flex flex-col md:flex-row justfy-start md:justify-center'>
                <div>
                    <img style={{ width: '500px' }} className='rounded-lg' src={image} alt="" />
                    <div>
                        <h2 className="text-3xl text-gray-200 font-bold">{name}</h2>
                        <p className='text-gray-400 w-80'>{des}</p>
                        <p className='font-semibold text-white'>Price:${price}</p>
                    </div>
                </div>
                <div className='px-2 md:px-10'>

                    <h2 className='text-3xl font-bold'>Book Your Room</h2>
                    <div className=' justify-around'>
                        <div className='mr-4 my-4'>
                            <p className='font-semibold'>Check In</p>
                            <ReactDatePicker
                                selected={checkindate}

                                onChange={date => setcheckindate(date)}
                                className='rounded p-2 text-gray-700 font-semibold'
                                dateFormat='dd/MM/yyy'
                                minDate={new Date()}

                            ></ReactDatePicker>
                        </div>
                        <div className='rounded my-4'>
                            <p className='font-semibold'>Check Out</p>
                            <ReactDatePicker
                                selected={checkOutDate}
                                className='rounded p-2 text-gray-700 font-semibold'
                                onChange={date => setCheckOutDate(date)}
                                dateFormat='dd/MM/yyy'
                                minDate={new Date()}
                            ></ReactDatePicker>
                        </div>
                        <div className='rounded my-4'>
                            <p className='font-semibold'>Guests</p>
                            <input min="0" max="5" className='rounded p-2 text-gray-700 font-semibold' type="number" name="" id="" />
                        </div>

                    </div>

                    <div>
                        {/* <Elements stripe={stripePromise}>
                            <CheckOutForm
                                checkindate={checkindate}
                                checkOutDate={checkOutDate}
                                roomDetails={roomDetails} />
                        </Elements> */}
                    </div>

                    <button type="button" onClick={() => handleClick(_id)} className="px-8 py-3  my-4 font-semibold border rounded hover:bg-slate-50 hover:text-gray-800 border-gray-100 text-gray-100">Confirm Book</button>

                    {/* <button type="button" className="px-8 py-3  my-4 font-semibold border rounded hover:bg-slate-50 hover:text-gray-800 border-gray-100 text-gray-100">Option</button> */}


                </div>
            </div>

        </div>
    );
};

export default Book;