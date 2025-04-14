import React from "react";
import Left from "./Left_Section/Left";
import Right from "./Right_Section/Right";

const Sixth = () => {
  return (
    <>
      <div className="sixth-heghlight-wrapper">
        <div className="container-fluid">
          <div className="row">
            {/* Left Side */}
            <Left />
            {/* Right Side */}
            <Right />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sixth;
