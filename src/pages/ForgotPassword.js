import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigator = useNavigate();
  const onChangeHadler = (event) => {
    setEmail(event.target.value);
  };
  const formSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success("Email Sent ");
      navigator("/");
    } catch (error) {
      toast.error("Could not sent Link" + error);
    }
  };
  return (
    <section>
      <div className="text-3xl font-semibold text-center mt-6">
        Forgot Password
      </div>
      <div className="flex w-screen flex-wrap justify-center items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%]  mb-12 ">
          <img
            src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80"
            alt="key"
            className="rounded-2xl w-full "
          ></img>
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20 mb-12">
          <form onSubmit={formSubmitHandler}>
            <input
              className="w-full rounded transition ease-in-out my-3"
              type="email"
              value={email}
              placeholder="emaild Id"
              id="email"
              onChange={onChangeHadler}
            ></input>
            <div className="flex justify-between text-sm sm:text-lg my-3">
              <span>
                Dont Have Account?{" "}
                <Link
                  className="mb-6 text-red-700 hover:text-red-800"
                  to="/sign-up"
                >
                  Register
                </Link>
              </span>
              <Link className="text-blue-700 hover:text-blue-800" to="/sign-in">
                SIGN IN
              </Link>
            </div>
            <button
              className="w-full bg-blue-600 text-white uppercase py-3 px-7 mt-4 rounded font-medium 
                shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800"
            >
              Send Link
            </button>
            <div
              className="flex items-center mt-4 before:border-t-2 before:flex-1 before: border-grey-500
                after:border-t-2 after:flex-1 after: border-grey-500"
            >
              <p className="text-center font-semibold mx-4">OR</p>
            </div>
            <OAuth></OAuth>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
