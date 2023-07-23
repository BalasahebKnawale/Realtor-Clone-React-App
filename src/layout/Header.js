import classNames from "classnames";
import React from "react";
import { useLocation, useNavigate } from "react-router";

const Header = () => {
  const location = useLocation();
  const navigator = useNavigate();

  const finalClasses = (pathname) => {
    const classes = classNames(
      "py-3 cursor-pointer text-sm text-gray-500 font-semibold border-b-4 border-b-transparent ",
      {
        "border-b-red-700 text-black": location.pathname === pathname,
      }
    );
    return classes;
  };
  return (
    <div className="  border-b  shadow-md">
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
            <li className={finalClasses("/")} onClick={() => navigator("/")}>
              Home
            </li>
            <li
              className={finalClasses("/offers")}
              onClick={() => navigator("/offers")}
            >
              Offers
            </li>
            <li
              className={finalClasses("/sign-in")}
              onClick={() => navigator("/sign-in")}
            >
              Sign in
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
