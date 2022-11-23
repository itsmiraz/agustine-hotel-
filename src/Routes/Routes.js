import { createBrowserRouter } from "react-router-dom";
import Admin from "../Components/Admin/Admin";
import EditRoomDetails from "../Components/Admin/EditRoomDetails/EditRoomDetails";
import Book from "../Components/Book/Book";
import AddNewRoom from "../Components/Dashboard/AddNewRoom";
import AllRooms from "../Components/Dashboard/AllRooms";
import Allusers from "../Components/Dashboard/Allusers";
import Bookings from "../Components/Dashboard/Bookings";
import User from "../Components/Dashboard/User";
import Home from "../Components/Home/Home";
import LoginPage from "../Components/LoginPage/LoginPage";
import Others from "../Components/Other/Others";
import RegisterPage from "../Components/RegisterPage/RegisterPage";
import Rooms from "../Components/Rooms/Rooms";
import RoomDetails from "../Components/Shared/RoomDetails/RoomDetails";
import VerifyAdmin from "../Components/VerifyAdmin/VerifyAdmin";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch('https://hotel-web-server.vercel.app/room'),
                element: <Home></Home>
            },
            {
                path: '/home',
                loader: () => fetch('https://hotel-web-server.vercel.app/room'),
                element: <Home></Home>
            },
            {
                path: '/rooms/:id',
                loader: ({ params }) => fetch(`https://hotel-web-server.vercel.app/room/${params.id}`),
                element: <RoomDetails></RoomDetails>
            },
            {
                path: '/rooms',
                element: <Rooms></Rooms>
            },
            {
                path: '/book',
                element: <PrivateRoute><Book></Book></PrivateRoute>
            },
            {
                path: '/login',
                element: <LoginPage></LoginPage>
            },
            {
                path: '/register',
                element: <RegisterPage></RegisterPage>
            },
            
            {
                path: '/about',
                element: <Others></Others>
            },
            {
                path: '/verifyAdmin',
                element: <VerifyAdmin></VerifyAdmin>
            },
            {
                path: '/admin',

                element: <Admin></Admin>
            },
            {
                path: '/roomdetails/:id',
                loader: ({ params }) => fetch(`https://hotel-web-server.vercel.app/room/${params.id}`),
                element: <EditRoomDetails></EditRoomDetails>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard/userDetail',
                element:<PrivateRoute><User></User></PrivateRoute>
                
            },
            {
                path: '/dashboard/booking',
                element:<PrivateRoute><Bookings></Bookings> </PrivateRoute>
            },
            {
                path: '/dashboard/allusers',
                element:<AdminRoute><PrivateRoute><Allusers></Allusers></PrivateRoute></AdminRoute>
            },
            {
                path: '/dashboard/allrooms',
                element:<AdminRoute><PrivateRoute><AllRooms></AllRooms></PrivateRoute></AdminRoute>
            },
            {
                path: '/dashboard/addroom',
                element:<AdminRoute><PrivateRoute><AddNewRoom></AddNewRoom></PrivateRoute></AdminRoute>
            }
        ]
    }
])