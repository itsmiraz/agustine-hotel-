import React, { useState } from 'react';
import Book from './Book';
import Payment from './Payment';

const BookingPage = () => {

    const [checkindate, setcheckindate] = useState(null)
    const [checkOutDate, setCheckOutDate] = useState(null)

    return (
        <div>
            <Book
                checkindate={checkindate}
                checkOutDate={checkOutDate}
                setcheckindate={setcheckindate}
                setCheckOutDate={setCheckOutDate}
            ></Book>
            <Payment></Payment>
        </div>
    );
};

export default BookingPage;