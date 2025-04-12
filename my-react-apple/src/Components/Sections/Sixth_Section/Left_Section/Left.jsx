import React from "react";
import arcade from "../../../../assets/images/icons/arcade.png"
const Left = () => {
  return (
    <>
      <div class="left-side-wrapper col-sm-12 col-md-6">
        <div class="left-side-container">
          <div class="top-logo-wrapper">
            <div class="logo-wrapper">
              <img src={arcade} />
            </div>
          </div>
          <div class="description-wraper white">
            Agent 8 is a small hero on a big mission.
          </div>
          <div class="links-wrapper">
            <ul>
              <li>
                <a href="">
                  Play now<sup>2</sup>
                </a>
              </li>
              <li>
                <a href="">Learn about Apple Arcade</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Left;
