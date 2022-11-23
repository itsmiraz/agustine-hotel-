import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { SyncLoader } from 'react-spinners';
import { AuthContext } from '../Context/AuthContext/UserContext';
import useAdmin from '../Hooks/useAdmin';



const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
  const [isAdmin,isAdminLoading]  = useAdmin(user?.email)
    const location = useLocation()

    if (loading || isAdminLoading) {

        return <div className='flex justify-center m-80'><SyncLoader
            color="hsla(86, 0%, 100%, 1)"
            size={15}
        /></div>

    }


    if (user && user.uid && isAdmin) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default AdminRoute;