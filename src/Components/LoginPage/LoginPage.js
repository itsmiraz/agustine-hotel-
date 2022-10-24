import React, { useState } from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext/UserContext';

const LoginPage = () => {

    const [error, setError] = useState(null)
    const { signIn, googleSginIn } = useContext(AuthContext)

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const navigate = useNavigate()
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset()
                toast.success('Logined SuccessFully')

                setTimeout(() => {
                    navigate(from, { replace: true })

                }, 1500);
            })
            .catch(error => {
                if (error.message === 'Firebase: Error (auth/wrong-password).') {
                    setError('Wrong Pass')
                }

                console.error('error', error);

            })
    }
    const handleGoogleSignIN = () => {
        googleSginIn()
            .then(result => {
                const user = result.user;
                setTimeout(() => {
                    navigate(from, { replace: true })

                }, 500);
                console.log(user);
            })
            .catch(error => {
                console.log('error', error);
            })
    }
    return (
        <div className='flex md:px-0 px-5 justify-center bg-slate-900'>
            <div className="w-full max-w-md p-8 space-y-3 shadow-lg my-10 rounded-xl bg-gray-800 text-gray-100">
                <h1 className="text-2xl font-bold text-center">Login</h1>
                <form onSubmit={handleSubmit} noValidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block text-gray-400">Email</label>
                        <input type="text" name="email" id="username" placeholder="Email" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block text-gray-400">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                        <div className="flex justify-end text-xs text-gray-400">
                            <a rel="noopener noreferrer" href="/">Forgot Password?</a>
                        </div>
                    </div>
                    <p className='text-red-500'> {error}</p>
                    <button type='submit' className="block w-full p-3 text-center rounded-sm text-white font-semibold bg-violet-600">Sign in</button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                    <p className="px-3 text-sm text-gray-400">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                </div>
                <div className="flex justify-center space-x-4">
                    <button onClick={handleGoogleSignIN} aria-label="Log in with Google" className="p-3 rounded-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                    </button>

                </div>
                <p className="text-xs text-center sm:px-6 text-gray-400">Do not Have An Account?
                    <Link rel="noopener noreferrer" to='/register' className="underline text-gray-100">Register</Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;