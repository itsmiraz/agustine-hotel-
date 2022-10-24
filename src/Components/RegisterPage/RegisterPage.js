import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext/UserContext';

const RegisterPage = () => {

    const { signUp } = useContext(AuthContext)
    const [error, setError] = useState('')

    const handleSubmit = e => {

        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signUp(email, password)
            .then(result => {
                const user = result.user;
                form.reset()
                toast.success('Register SuccessFully')
                console.log("🚀 ~ file: RegisterPage.js ~ line 21 ~ handleSubmit ~ user", user)
            })
            .catch(error => {
                console.log('error', error);
                setError(error.message)
            })

        console.log(email, password);


    }

    return (
        <div className='flex justify-center bg-slate-900'>
            <div className="w-full max-w-md p-8 space-y-3 shadow-lg my-10 rounded-xl bg-gray-800 text-gray-100">
                <h1 className="text-2xl font-bold text-center">Register</h1>
                <form onSubmit={handleSubmit} noValidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block text-gray-400">Name</label>
                        <input type="text" name="name" id="username" placeholder="Name" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block text-gray-400">PhotoURL</label>
                        <input type="text" name="photo" id="username" placeholder="PhotoURL" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block text-gray-400">Email</label>
                        <input type="text" name="email" id="username" placeholder="Email" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block text-gray-400">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />

                    </div>
                    <p className='text-red-500'>{error}</p>
                    <button type='submit' className="block w-full p-3 text-center rounded-sm text-white font-semibold bg-violet-600">Register</button>
                </form>

                <p className="text-xs text-center sm:px-6 text-gray-400">Already Have an Account?
                    <Link rel="noopener noreferrer" to='/login' className="underline text-gray-100">Sign In</Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;