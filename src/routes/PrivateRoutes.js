import React from 'react'
import { Navigate, Outlet } from 'react-router';
import {useAuthStatus} from '../hooks/useAuthStatus';

const PrivateRoutes = () => {
  const {logedin,checkingStatus} = useAuthStatus();
  // console.log(useAuthStatus());
  if(checkingStatus)
  return <h3>Loading</h3>
  return logedin?<Outlet></Outlet>:<Navigate to="/sign-in"></Navigate>
      
   

}

export default PrivateRoutes
