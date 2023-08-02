import { getAuth, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { toast } from "react-toastify";

const Profile = () => {
  const [changeDetail, setChangeDetail] = useState(false);
  const auth = getAuth();

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const onNameChangeHandler = (e) => {
    setFormData({ ...formData, name: e.target.value });
  };
  const onEmailChangeHandler = (e) => {
    setFormData({ ...formData, email: e.target.value });
  };
  const onloggedOut = () => {
    auth.signOut();
    navigate("/");
  };
  const onEditNameHandler = () => {
    changeDetail && onsubmitHandler();
    setChangeDetail(!changeDetail);
  };

  const onsubmitHandler = async () => {
    try {
      if (auth.displayName !== formData.name) {
        updateProfile(auth.currentUser, { displayName: formData.name });

        const docRef = doc(db, "users", auth.currentUser.uid);
        await updateDoc(docRef, {
          name: formData.name,
        });
      }
      toast.success("Profile Name updated !");
    } catch (error) {
      toast.error("Not Able to update");
    }
  };

  return (
    <section className="mx-auto w-[90%] md:w-[50%]">
      <div className="text-3xl text-center mt-6 font-semibold">My Profile</div>
      <div className=" mt-6 px-3 ">
        <form>
          <input
            className={` w-full mb-6 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded ${
              changeDetail && "bg-red-200 focus:bg-red-200"
            }`}
            placeholder="Full Name"
            disabled={!changeDetail}
            onChange={onNameChangeHandler}
            type="text"
            id="name"
            value={formData.name}
          ></input>
          <input
            className="w-full mb-6 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded"
            placeholder="Email Id"
            onChange={onEmailChangeHandler}
            type="email"
            id="email"
            value={formData.email}
          ></input>
        </form>
        <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6">
          <p>
            Do you want to change your Name
            <span
              onClick={onEditNameHandler}
              className="text-red-500 ml-1 hover:text-red-700 cursor-pointer"
            >
              {!changeDetail ? "Edit" : "Apply changes"}
            </span>
          </p>
          <p
            onClick={onloggedOut}
            className="text-blue-600 hover:text-blue-800 cursor-pointer"
          >
            Sign Out
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
