import React from "react";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { toast } from "react-toastify";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "./../firebase";
import { useNavigate } from "react-router";

const OAuth = () => {
  const navigate = useNavigate();
  const onGoogleClickHandler = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      const user = result.user;
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
      navigate("/");
      console.log(user);
      toast.success("Authorised");
    } catch (error) {
      toast.error("Cant Authorise with google");
    }
  };
  return (
    <button
      type="button"
      onClick={onGoogleClickHandler}
      className="w-full flex items-center justify-center bg-red-700 text-white uppercase py-3 px-7 mt-4 rounded text-sm font-medium 
  shadow-md hover:bg-red-800 transition duration-150 ease-in-out hover:shadow-lg active:bg-red-900"
    >
      <FcGoogle className="text-2xl bg-white rounded-full mr-3"></FcGoogle>
      Continue with Google
    </button>
  );
};

export default OAuth;
