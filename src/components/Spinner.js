import React from "react";
import spinner from "../assets/svg/spinner.svg";

const Spinner = () => {
  return (
    <div className="bg-black bg-opacity-50 z-50 flex items-center justify-center fixed left-0 right-0 top-0 bottom-0">
      <div>
        <img src={spinner} alt="loading...."></img>
      </div>
    </div>
  );
};

export default Spinner;
