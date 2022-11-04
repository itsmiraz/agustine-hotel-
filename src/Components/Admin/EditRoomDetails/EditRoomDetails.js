import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';

const EditRoomDetails = () => {
    const data = useLoaderData()
    const { name, price, image, capacity, des, _id } = data
    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const des = form.des.value;
        const capacity = form.capacity.value;
        const image = form.photoUrl.value;
        const room = { name, price, des, capacity, image };
        console.log(room);
        fetch(`https://hotel-web-server.vercel.app/room/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(room)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Edited Success Fully')
                navigate('/admin')
            })
    }
    return (
        <div className='bg-slate-900' >
            <h1 className='text-4xl  font-bold py-5 text-center'>Edit Room Details</h1>
            <form onSubmit={handleSubmit} className='bg-slate-900 p-10  grid grid-cols-2 '>
                <div>
                    <img className='mx-auto w-3/4 rounded-lg' src={image} alt="" />
                    <input defaultValue={image} name='photoUrl' id="username" type="text" placeholder='Update Photo URL' className="flex mx-auto items-center w-3/4 h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 dark:text-gray-900 focus:dark:border-violet-400 focus:ring-violet-400" />

                </div>
                <div className='font-semibold'>
                    <p>Title</p>
                    <input defaultValue={name} name='name' id="username" type="text" placeholder='Title' className="flex items-center w-full h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 dark:text-gray-900 focus:dark:border-violet-400 focus:ring-violet-400" />
                    <p>Price</p>
                    <input defaultValue={price} name='price' id="username" type="text" placeholder='Price' className="flex items-center w-full h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 dark:text-gray-900 focus:dark:border-violet-400 focus:ring-violet-400" />
                    <p>Capacity</p>
                    <input defaultValue={capacity} name='capacity' id="username" type="text" placeholder='Price' className="flex items-center w-full h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 dark:text-gray-900 focus:dark:border-violet-400 focus:ring-violet-400" />
                    <p>Details</p>
                    <textarea defaultValue={des} name='des' id="username" type="text" placeholder='Room Des' className="flex items-center w-full h-32 px-4 mt-2 rounded focus:outline-none focus:ring-2 dark:text-gray-900 focus:dark:border-violet-400 focus:ring-violet-400" />

                    <button type="submit" className="px-8 py-3 my-4 font-semibold rounded dark:bg-gray-400 dark:text-gray-800">Edit</button>


                </div>

            </form>


        </div>
    );
};

export default EditRoomDetails;