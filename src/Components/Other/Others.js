import React from 'react';
import Iframe from 'react-iframe'
import './Others.css'
import { FaFacebook, FaInstagram, FaMapMarker, FaPhone, FaYoutube } from "react-icons/fa";
const Others = () => {
    return (
        <div className='bg-slate-900 py-10'>
            <div className=' '>
                <h2 className='text-4xl text-center text-gray-50 font-bold'>About us</h2>

            </div>
            <div className="flex md:flex-row flex-col-reverse  justify-around text-gray-50 py-10">
                <div className=' md:text-start text-center '>

                    <h2 className='text-3xl my-4 font-bold'>Our Location</h2>

                    <div className='flex md:text-start text-center md:justify-start justify-center items-center'>
                        <FaMapMarker></FaMapMarker>
                        <p className='px-2'> Mouchak,Gazipur,Bangladesh</p>
                    </div>
                    <div className='flex md:justify-start justify-center items-center'>
                        <FaPhone></FaPhone>
                        <p className='px-2'>
                            Phone: 012323232
                        </p >
                    </div>
                    <h2 className='text-3xl md:justify-start justify-center my-4 text-gray-300 font-bold'>Find us On Social Media</h2>
                    <div className="flex md:justify-start justify-center my-2">
                        <FaFacebook className='w-12 h-6 hover:text-purple-500 '></FaFacebook>
                        <FaInstagram className='w-12 h-6 hover:text-purple-500  '></FaInstagram>
                        <FaYoutube className='w-12 h-6  hover:text-purple-500 '></FaYoutube>
                    </div>
                </div>
                <div className='p-5'>
                    <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240081.79591506752!2d90.19050817427738!3d24.01390425664111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755dba115b08b1f%3A0xf0f85551b0f57350!2sFarishta%20Multi%20Cuisine%20Restaurant!5e0!3m2!1sen!2sbd!4v1666598977870!5m2!1sen!2sbd"

                        height="320px"
                        id="map"
                        className="rounded-lg "
                        display="block"
                        position="relative" />
                </div>
            </div>

        </div >
    );
};

export default Others;