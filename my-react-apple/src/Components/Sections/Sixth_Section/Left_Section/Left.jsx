import arcade from "../../../../assets/images/icons/arcade.png"
const Left = () => {
  return (
    <>
      <div className="left-side-wrapper col-sm-12 col-md-6">
        <div className="left-side-container">
          <div className="top-logo-wrapper">
            <div className="logo-wrapper">
              <img src={arcade} />
            </div>
          </div>
          <div className="description-wraper white">
            Agent 8 is a small hero on a big mission.
          </div>
          <div className="links-wrapper">
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
