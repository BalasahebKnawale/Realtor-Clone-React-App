import React from "react";
import { Navigate, Outlet } from "react-router";
import { useAuthStatus } from "../hooks/useAuthStatus";
import Spinner from "../components/Spinner";

const PrivateRoutes = () => {
  const { logedin, checkingStatus } = useAuthStatus();
  // console.log(useAuthStatus());
  if (checkingStatus) return <Spinner></Spinner>;
  return logedin ? <Outlet></Outlet> : <Navigate to="/sign-in"></Navigate>;
};

export default PrivateRoutes;
