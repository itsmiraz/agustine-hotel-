import React from 'react';
import { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import './Book.css'
import "react-datepicker/dist/react-datepicker.css";
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';


const Book = () => {
    const data = localStorage.getItem('room-detail')
    const roomDetails = JSON.parse(data)
    console.log("🚀 ~ file: Book.js ~ line 7 ~ Book ~ roomDetails", roomDetails)
    const { image_url, details, price, title, _id } = roomDetails

    const [checkindate, setcheckindate] = useState(null)
    const [checkOutDate, setCheckOutDate] = useState(null)



    const handleClick = (id) => {
        const bookedRoomData = {
            checkin: checkindate,
            checkout: checkOutDate,
            room: roomDetails,
        }

        localStorage.setItem('bookedRomm', JSON.stringify(bookedRoomData))
        toast.success('Your Room has been Booked Please Check Your Email')
    }

    return (
        <div className='bg-slate-900 p-20 '>

            <div className='flex justify-center'>
                <div>
                    <img style={{ width: '500px' }} className='rounded-lg' src={image_url} alt="" />
                    <div>
                        <h2 className="text-3xl text-gray-200 font-bold">{title}</h2>
                        <p className='text-gray-400 w-80'>{details}</p>
                        <p className='font-semibold text-white'>Price:${price}</p>
                    </div>
                </div>
                <div className=' px-10'>

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
                    <Link to='/home'>
                        <button onClick={() => handleClick(_id)} type="button" className="px-8 py-3  my-4 font-semibold border rounded hover:bg-slate-50 hover:text-gray-800 border-gray-100 text-gray-100">Confirm Book</button>

                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Book;