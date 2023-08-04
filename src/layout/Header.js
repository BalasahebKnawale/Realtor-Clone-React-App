import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Header = () => {
  const [userState, setUserState] = useState("Sign In");
  const location = useLocation();
  const navigator = useNavigate();

  const finalClasses = (pathname) => {
    console.log(`pathName : ${pathname} || location : ${location.pathname}`);
    console.log(pathname.find((p) => p === location.pathname));
    const classes = classNames(
      "py-3 cursor-pointer text-sm text-gray-500 font-semibold border-b-4 ",
      {
        "border-b-red-700 text-black": pathname.find(
          (p) => p === location.pathname
        ),
        "border-b-transparent ": !pathname.find((p) => p === location.pathname),
      }
    );
    return classes;
  };
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserState("Profile");
      } else {
        setUserState("Sign In");
      }
    });
  }, [auth]);
  return (
    <div className="  border-b bg-white  shadow-md">
      <header className="flex bg-white justify-between items-center max-w-7xl m-auto px-3 sticky top-0">
        <div>
          <img
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt="logo"
            className="h-5 cursor-pointer"
          ></img>
        </div>
        <div>
          <ul className="flex space-x-10 ">
            <li className={finalClasses(["/"])} onClick={() => navigator("/")}>
              Home
            </li>
            <li
              className={finalClasses(["/offers"])}
              onClick={() => navigator("/offers")}
            >
              Offers
            </li>
            <li
              className={finalClasses(["/sign-in", "/profile"])}
              onClick={() =>
                userState === "Profile"
                  ? navigator("/profile")
                  : navigator("/sign-in")
              }
            >
              {userState}
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
