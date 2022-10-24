import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react';
import { FaUser } from "react-icons/fa";
import { AuthContext } from '../../../Context/AuthContext/UserContext';

const Header = () => {
    const [open, setOpen] = useState(false)


    const { user, logOut } = useContext(AuthContext)


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => { console.log('error', error); })
    }

    return (
        <div className=' bg-slate-800 sticky top-0 z-50 drop-shadow-lg text-white items-center md:px-10 px-4 py-3 flex justify-between w-full'>

            <h1 className='text-3xl  z-50  font-bold'>AGUSTINE</h1>

            <div>
                <ul className={`md:flex z-50 right-0 bg-slate-800 w-full text-white text-center justify-center md:static duration-300 ease-linear absolute ${open ? 'top-12' : 'top-[-200px]'}`}>
                    <li className='font-semibold mr-4 '>
                        <Link to='/home'>Home</Link>
                    </li>
                    <li className='font-semibold mr-4'>
                        <Link to='/rooms'>Rooms</Link>
                    </li>

                    {
                        user?.uid ?
                            <>
                                <li className='font-semibold mr-4' >
                                    <span>{user.displayName ?
                                        <div className='flex justify-center items-center mr-2'>
                                            <span>{user.displayName}</span>
                                            <Link to='/user'><img className='rounded-full mx-2' style={{ height: '30px' }} src={user.photoURL} alt="" /></Link>
                                        </div>
                                        :
                                        <div className='flex justify-center items-center gap-2 mr-3'>
                                            <span>Anonymus</span>
                                            <FaUser></FaUser>
                                        </div>
                                    }</span>
                                </li>
                                <li className='font-semibold mr-4'>
                                    <Link ><button onClick={handleLogOut} className="px-2 py-1 md:my-0 my-2 font-semibold rounded-full z-10 bg-gray-100 text-gray-800">Log Out</button></Link>

                                </li>

                            </>
                            :
                            <>
                                <li>
                                    <Link to='/login'><button className="px-3 py-1 md:my-0 mt-2 font-semibold rounded-full border text-white mr-2">Sign In</button></Link>
                                </li>
                                <li>
                                    <Link to='/register'><button className="px-3 py-1 md:my-0 my-2 font-semibold rounded-full bg-red-500 text-white">Sign Up</button></Link>
                                </li>
                            </>
                    }

                </ul>
                <div onClick={() => setOpen(!open)} className="h-6  bg-slate-800 text-white w-6 md:hidden" >
                    {open ? <XMarkIcon />
                        : <Bars3Icon />
                    }
                </div>
            </div>
        </div >
    );
};

export default Header;