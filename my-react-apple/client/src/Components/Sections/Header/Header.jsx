import logo from "../../../assets/images/icons/logo-sm.png";
import search from "../../../assets/images/icons/search-icon-sm.png";
import cart from "../../../assets/images/icons/cart-sm.png";
import NavBarList from "./NavBarList";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      {/* <!-- Header navigation --> */}
      <div className="nav-wrapper fixed-top">
        <Container>
          <Nav>
            <Navbar
              className="w-100 collapseOnSelect"
              expand="lg"
              variant="dark"
            >
              <button
                className="navbar-toggler navbar-toggler-right"
                type="button"
                data-toggle="collapse"
                data-target=".navbar-collapse"
              >
                ☰
              </button>
              <Link className="navbar-brand mx-auto" to="/">
                <img src={logo} />
              </Link>

              <Navbar.Collapse className="navbar-collapse collapse">
                <ul className="navbar-nav nav-justified w-100 nav-fill">
                  <NavBarList LinkUrl="/mac/" LinkName="Mac" />
                  <NavBarList LinkUrl="/Iphone/" LinkName="Iphone" />
                  <NavBarList LinkUrl="/Ipad/" LinkName="Ipad" />
                  <NavBarList LinkUrl="/watch/" LinkName="watch" />
                  <NavBarList LinkUrl="/tv/" LinkName="tv" />
                  <NavBarList LinkUrl="/Music/" LinkName="Music" />
                  <NavBarList LinkUrl="/Support/" LinkName="Support" />
                  <li className="nav-item">
                    <Link className="nav-link js-scroll-trigger" to="/search/">
                      <img src={search} />
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link js-scroll-trigger" to="/cart/">
                      <img src={cart} />
                    </Link>
                  </li>
                </ul>
              </Navbar.Collapse>
            </Navbar>
          </Nav>
        </Container>
      </div>
    </>
  );
};

export default Header;
