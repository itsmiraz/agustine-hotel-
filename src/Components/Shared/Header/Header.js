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
        <div className=' bg-slate-900  sticky top-0 z-50 drop-shadow-lg text-white items-center md:px-10 px-4 py-4 flex justify-between w-full'>

          <Link to='/'>  <h1 className='text-3xl  z-50  font-bold'>AGUSTINE</h1></Link>

            <div>
                <ul className={`md:flex items-center  right-0 bg-slate-900 w-full text-white text-center justify-center md:static duration-300 ease-linear absolute ${open ? 'top-12' : 'top-[-200px]'}`}>
                    <li onClick={() => setOpen(!open)} className=' mx-4  mt-0'>
                        <Link to='/home'>Home</Link>
                    </li>
                    <li onClick={() => setOpen(!open)} className=' mx-4  mt-0'>
                        <Link to='/rooms'>Rooms</Link>
                    </li>
                    <li onClick={() => setOpen(!open)} className=' mx-4  mt-0'>
                        <Link to='/about'>About us</Link>
                    </li>


                    {
                        user?.uid ?
                            <>
                                <li onClick={() => setOpen(!open)} className=' ' >
                                    <span>{user.displayName ?
                                        <span className='flex justify-center items-center mx-2'>
                                            <span>{user.displayName}</span>
                                            <Link to='/dashboard/userDetail'><p className='ml-4'>Dashboard</p></Link>
                                        </span>
                                        :
                                        <div className='flex justify-center items-center gap-2 mx-3'>
                                            <span>Anonymus</span>
                                           <Link to='/dashboard/userDetail'> <FaUser></FaUser></Link>
                                        </div>
                                    }</span>
                                </li>
                                <li onClick={() => setOpen(!open)} className=' mx-4'>
                                    <Link ><button onClick={handleLogOut} className="px-2 py-1 md:my-0 my-2  rounded-full z-10 bg-gray-100 text-gray-800">Log Out</button></Link>

                                </li>

                            </>
                            :
                            <>
                                <li onClick={() => setOpen(!open)}>
                                    <Link to='/login'><button className="px-3 py-1 md:my-0 mt-2  rounded-full border text-white mx-2">Sign In</button></Link>
                                </li >
                                <li onClick={() => setOpen(!open)}>
                                    <Link to='/register'><button className="px-3 py-1 md:my-0 my-2  rounded-full bg-purple-500 text-white">Sign Up</button></Link>
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