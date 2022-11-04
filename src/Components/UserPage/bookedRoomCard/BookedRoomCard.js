import React from 'react';

const BookedRoomCard = ({ booked, handleCancelBook }) => {



    const bookedRoom = booked;
    const { price, name } = bookedRoom.room

    let total;
    if (bookedRoom) {

        const { price } = bookedRoom?.room
        const chek1 = parseFloat(bookedRoom.checkin.slice(8, 10))
        const chek2 = parseFloat(bookedRoom.checkout.slice(8, 10))
        const totalDate = chek2 - chek1;
        const TotalBill = price * totalDate;
        total = TotalBill


    }



    return (
        <div>

            <div className='flex items-center my-2 md:flex-row flex-col bg-gray-200 p-2 rounded-lg text-gray-700 font-semibold'>
                <div className='flex bg-gray-300 p-2 rounded-lg justify-between'>
                    <img className='md:w-32 w-20   rounded-lg'
                        src={bookedRoom?.room?.image} alt="" />
                    <div className='text-start pl-2'>
                        <h3 className='text-xl'>{name
                        }</h3>
                        <p>Price:${bookedRoom ?
                            <span>{price}</span>
                            :
                            <></>
                        }</p>
                    </div>
                </div>
                <div className='flex'>
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
                </div>
                <div className='bg-slate-300 p-2 m-2 rounded-lg'>
                    <div className='px-4'>
                        Total Bill Will Be
                        <h3>{total}</h3>
                    </div>
                    <div>
                        <button onClick={() => handleCancelBook(booked._id)} type="button" className="px-2 py-1 font-semibold border rounded bg-slate-800 border-gray-100 text-gray-100">Cancel Book</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookedRoomCard;