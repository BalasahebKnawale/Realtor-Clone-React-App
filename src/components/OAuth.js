import React from "react";
import { FcGoogle } from "react-icons/fc";

const OAuth = () => {
  return (
    <button
      className="w-full flex items-center justify-center bg-red-700 text-white uppercase py-3 px-7 mt-4 rounded text-sm font-medium 
  shadow-md hover:bg-red-800 transition duration-150 ease-in-out hover:shadow-lg active:bg-red-900"
    >
      <FcGoogle className="text-2xl bg-white rounded-full mr-3"></FcGoogle>
      Continue with Google
    </button>
  );
};

export default OAuth;
