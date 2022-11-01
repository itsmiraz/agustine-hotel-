import { createBrowserRouter } from "react-router-dom";
import Admin from "../Components/Admin/Admin";
import EditRoomDetails from "../Components/Admin/EditRoomDetails/EditRoomDetails";
import Book from "../Components/Book/Book";
import Home from "../Components/Home/Home";
import LoginPage from "../Components/LoginPage/LoginPage";
import Others from "../Components/Other/Others";
import RegisterPage from "../Components/RegisterPage/RegisterPage";
import Rooms from "../Components/Rooms/Rooms";
import RoomDetails from "../Components/Shared/RoomDetails/RoomDetails";
import UserPage from "../Components/UserPage/UserPage";
import Main from "../Layout/Main";
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
                loader: () => fetch('https://hotel-web-server.vercel.app/room'),
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
                path: '/user',
                element: <PrivateRoute><UserPage></UserPage></PrivateRoute>
            },
            {
                path: '/about',
                element: <Others></Others>
            },
            {
                path: '/admin',
                loader: () => fetch('https://hotel-web-server.vercel.app/room'),
                element: <Admin></Admin>
            },
            {
                path: '/roomdetails/:id',
                loader: ({ params }) => fetch(`https://hotel-web-server.vercel.app/room/${params.id}`),
                element: <EditRoomDetails></EditRoomDetails>
            }
        ]
    }
])