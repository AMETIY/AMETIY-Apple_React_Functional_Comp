import React from "react";
import watch from "../../../../assets/images/icons/watch-series5-logo.png"
const Right = () => {
  return (
    <>
      <div className="right-side-wrapper col-sm-12 col-md-6">
        <div className="right-side-container">
          <div className="top-logo-wrapper">
            <div className="logo-wrapper">
              <img src={watch} />
            </div>
          </div>
          <div className="description-wraper">
            With the Always-On Retina display.
            <br />
            You’ve never seen a watch like this.
          </div>
          <div className="links-wrapperDiff">
            <ul>
              <li>
                <a href="">Learn more</a>
              </li>
              <li>
                <a href="">Buy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Right;
