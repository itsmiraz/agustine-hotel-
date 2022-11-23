import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const data = useLoaderData()
    return (
        <div>
            <h1>{ data.title}</h1>
        </div>
    );
};

export default Payment;