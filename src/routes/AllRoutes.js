import { Route, Routes } from "react-router";
import HomePage from "../pages/HomePage";
import Profile from "../pages/Profile";
import Offers from "../pages/Offers";
import SignUp from "../pages/SignUp";
import ForgotPassword from "../pages/ForgotPassword";
import SignIn from "../pages/SignIn";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/offers" element={<Offers />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/forgot-password" element={<ForgotPassword />}></Route>
      </Routes>
    </>
  );
};
