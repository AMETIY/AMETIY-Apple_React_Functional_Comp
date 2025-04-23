import logo from "../../../../assets/images/icons/apple-tv-logo.png";
import banker from "../../../../assets/images/home/banker.png";
const Left = () => {
  return (
    <>
      <div className="left-side-wrapper col-sm-12 col-md-6">
        <div className="left-side-container">
          <div className="top-logo-wrapper">
            <div className="logo-wrapper">
              <img src={logo} />
            </div>
          </div>

          <div className="tvshow-logo-wraper">
            <img src={banker} />
          </div>

          <div className="watch-more-wrapper">
            <a href="#">Watch now on the Apple TV App</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Left;
