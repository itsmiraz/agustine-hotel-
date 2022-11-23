import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddNewRoom = () => {


    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate()
    const imgHostKey = process.env.REACT_APP_imgbbKey

    const handleaddRoom = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image',image);
        const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`
        fetch(url,{
            method:'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {

                    const roomDetails = {
                            name : data.name,
                            price:data.price,
                            image:imgData.data.url,
                            capacity:data.capacity,
                            des:data.details,
                        }
                        fetch('http://localhost:5000/room', {
                                method: 'POST',
                                headers: {
                                    'content-type': 'application/json',
                                    authorization:`bearer ${localStorage.getItem('agustineToken')}`
                                },
                                body: JSON.stringify(roomDetails)
                            })
                                .then(res => res.json())
                                .then(data => {
                                    if (data.acknowledged) {
                                        toast.success('Room Added Success Fully')
                                        navigate('/dashboard/allrooms')
                                    }
                                })


                }
        })

    }
    return (

        <div className=' h-screen w-[400px] mx-auto'>
            <h1 className='text-center text-3xl my-4 font-bold'>Add a new Room</h1>

            <form onSubmit={handleSubmit(handleaddRoom)}>
                <div>
                    <label className="label">
                        <span className="label-text font-semibold">Image</span>
                    </label>
                    <input type='file'
                        {...register('image', { required: 'image is Required' })}
                        className='file-input  file-input-bordered w-full' placeholder="Name" />

                </div>
                <div>
                    <label className="label">
                        <span className="label-text font-semibold">Room Name</span>
                    </label>
                    <input type='text'
                        {...register('name', { required: 'Name is Required' })}
                        className='input input-bordered w-full my-2' placeholder="Name" />

                </div>
                <div>
                    <label className="label">
                        <span className="label-text font-semibold">Room Details</span>
                    </label>
                    <textarea  type='text'
                        {...register('details', { required: 'Details is Required' })}
                        className='input h-24 input-bordered w-full my-2' placeholder="Room Details" />

                </div>
                <div>
                    <label className="label">
                        <span className="label-text font-semibold">Price</span>
                    </label>
                    <input type='number'
                        {...register('price', { required: 'price is required' })}
                        className='input input-bordered w-full my-2' placeholder="price" />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text font-semibold">Capacity</span>
                    </label>
                    <input type='text'
                        {...register('capacity', { required: 'capacity is required' })}
                        className='input input-bordered w-full my-2' placeholder="capacity" />
                </div>




                <input value='Add Room' className='py-4 rounded-lg bg-white text-slate-900 w-full my-2' type="submit" />
            </form>


        </div>

    );
};

export default AddNewRoom;