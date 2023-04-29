import React, { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const ProtectedRoute =  ({children}) => {
    const {user,loading} = useContext(AuthContext);

     const location = useLocation();
     if(loading){
        return  <Spinner className='w-5 px-auto' animation="border" role="status">
      </Spinner>;
     }
    if(user){
       return children;
    }
    return  <Navigate state={{from: location}} to='/login' replace></Navigate>;
};

export default ProtectedRoute;