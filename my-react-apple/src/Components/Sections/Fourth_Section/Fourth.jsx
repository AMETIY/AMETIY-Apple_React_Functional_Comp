import React from "react";
import Left from "./Left_Section/Left";
import Right from "./Right_Section/Right";
const Fourth = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
        {/* Left Side */}
            <Left />
            {/* Right Side */}
            <Right />
        </div>  
      </div>
    </>
  );
};

export default Fourth;
