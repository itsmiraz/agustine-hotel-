import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext/UserContext";



const CheckOutForm = ({ roomDetails,checkOutDate,checkindate  }) => {
    const stripe = useStripe();
    const navigate = useNavigate()
    const elements = useElements();
    const { user } = useContext(AuthContext)
    const [transactionID, setTransactionID] = useState("");
    const [success, setSuccess] = useState("");
    const [cardError, setCardError] = useState("");
    const [proccessing, setProccessing] = useState(false);
    const [clientSecret, setClientSecret] = useState("");

    // const { price, Patientname, Patientemail, _id } = booking;
    const { price, _id } = roomDetails;

    useEffect(() => {
        fetch("https://hotel-web-server.vercel.app/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem('accesToken')}`
            },
            body: JSON.stringify({ price }),
        })
            .then(res => res.json())
            .then(data => setClientSecret(data.clientSecret));
    }, [price]);

    const handleSubmit = async event => {
        event.preventDefault();
        if (!stripe || !elements || proccessing) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
        });

        if (error) {
            console.log(error);
            setCardError(error.message);
        } else {
            setCardError("");
        }
        setSuccess('')
        setProccessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                       
                        email: user?.email,
                    },
                },
            },
        );

        if (confirmError) {
            setCardError(confirmError.message)
        }
        if (paymentIntent.status === 'succeeded') {
            setSuccess('Congrats Your Payment is Done')
            setTransactionID(paymentIntent.id)
            setProccessing(false)
            toast.success('Payment Success')
            navigate('/dashboard')
            // const payment = {
            //     email: user?.email,
            //     transactionID: paymentIntent.id,
            //     price,
            //     bookingID: _id

            // }
            const paidRoom = {
                checkin: checkindate,
                checkout: checkOutDate,
                transactionID: paymentIntent.id,
                email: user.email,
                price,
                bookingID: _id
               
            }

            fetch('https://hotel-web-server.vercel.app/payments', {
                method: 'POST',
                headers: {
                    'content-type': "application/json",
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(paidRoom)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })

        }

    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: "16px",
                                color: "#424770",
                                "::placeholder": {
                                    color: "#aab7c4",
                                },
                            },
                            invalid: {
                                color: "#9e2146",
                            },
                        },
                    }}
                />
                <p className="text-red-500">{cardError}</p>
                <button
                    className="btn bg-slate-200 text-slate-700 btn-sm my-4"
                    type="submit"
                    disabled={!stripe || !clientSecret}
                >
                    Pay
                </button>
            </form>
            {
                success && <div>
                    <p className="text-green-500">{success}</p>
                    <p className="">{transactionID}</p>
                </div>
            }
        </div>
    );
};

export default CheckOutForm;
