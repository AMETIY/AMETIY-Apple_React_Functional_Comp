import React from "react";
import Left from "./Left_Section/Left";
import Right from "./Right_Section/Right";

const Sixth = () => {
  return (
    <>
      <div class="sixth-heghlight-wrapper">
        <div class="container-fluid">
          <div class="row">
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
