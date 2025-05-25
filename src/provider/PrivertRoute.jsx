
import { AuthContext } from '../provider/AuthContext';
import React, { use } from 'react';
import Loading from '../components/ui/Loading';
import { Navigate, useLocation } from 'react-router';

const PrivertRoute = ({children}) => {
    const {user, loading} = use (AuthContext)

    const location = useLocation()
 

    if(loading){
        return <Loading/>
    }

    if(user && user?.email){
        return (children);
    }
    return <Navigate state={location.pathname} to='/auth/sign-up'></Navigate>
};

export default PrivertRoute;