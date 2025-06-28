import React from "react";
import { Link } from "react-router-dom";

const NavBarList = ({ LinkName, LinkUrl }) => {
  return (
    <>
      <li className="nav-item">
        <Link className="nav-link js-scroll-trigger" to={LinkUrl}>
          {LinkName}
        </Link>
      </li>
    </>
  );
};

export default NavBarList;
