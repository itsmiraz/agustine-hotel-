import React from 'react';
import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../Components/Shared/Header/Header';
import { AuthContext } from '../Context/AuthContext/UserContext';
import useAdmin from '../Hooks/useAdmin';

const DashboardLayout = () => {
    const {user} = useContext(AuthContext)
const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="dashboardbtn" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content  relative flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    {/* <label  className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
                    <label htmlFor="dashboardbtn" className="btn  fixed top-20 left-5 drawer-button lg:hidden btn-circle swap swap-rotate">


                        <input type="checkbox" />


                        <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>


                        <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>

                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboardbtn" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                        <li><Link to='/dashboard/userDetail'>User</Link></li>
                        <li><Link to='/dashboard/booking'>Bookings</Link></li>
                        {
                            isAdmin && 
                            <>
                             <li><Link to='/dashboard/allusers'>AllUsers</Link></li>
                            <li><Link to='/dashboard/allrooms'>Rooms</Link></li>
                            <li><Link to='/dashboard/addroom'>Add a Room</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;