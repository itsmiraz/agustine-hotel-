import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const VerifyAdmin = () => {
    const navigate = useNavigate()
    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        const username = form.username.value;
        const password = form.password.value;

        console.log(username, password);
        const user = 'miraj7731'
        const pass = '#kimb7731#123456#'
        console.log(user);
        if (username === user && password === pass) {
            toast.success('Logined SuccessFully')
            return navigate('/admin')
        }
        else {
            toast.error('Admin Not Found')
        }
    }

    return (
        <div className='flex py-20 justify-center'>
            <div className="flex flex-col  max-w-md p-6 rounded-md drop-shadow-lg shadow-2xl sm:p-10 bg-gray-800 text-gray-100">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Sign in</h1>
                    <p className="text-sm text-gray-400">Sign in to access access Admin Panel</p>
                </div>
                <form onSubmit={handleSubmit} noValidate="" action="" className="space-y-12 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="text" className="block mb-2 text-sm">UserName</label>
                            <input type="text" name="username" id="username" placeholder="Username" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label htmlFor="password" className="text-sm">Password</label>
                            </div>
                            <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900">Sign in</button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default VerifyAdmin;