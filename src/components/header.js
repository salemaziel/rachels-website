import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Button, Navbar, Nav, NavItem } from "react-bootstrap";
import headerStyles from "./header.module.css";

import NavMobile from './Navmobile'



//const Header = ({ siteTitle }) => (
const Header = () => (
  <>
    <header /*id="header" */ className={headerStyles.Header}>
      <div className="NoMobile">
      <h1>
        <Link to="/">
          <h1 className={headerStyles.Signature}>Rachel Ellyn Gurlin, PhD</h1>
        </Link>
      </h1>
      <nav id="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about" className={headerStyles.menu}>
              About
            </Link>
          </li>
          
          <li>
            <Link to="/science" className={headerStyles.menu}>
              Science
            </Link>
          </li>
          <li>
            <Link to="/photography" className={headerStyles.menu}>
              Photography
            </Link>
          </li>
          <li>
            <Link to="/art" className={headerStyles.menu}>
              Art
            </Link>
          </li>

          <li>
            <Link to="/contact" className={headerStyles.menu}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      </div>

      <div className="NoDesktop">
        <NavMobile />
      </div>
    </header>
  </>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;