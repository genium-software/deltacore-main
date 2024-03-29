import React, { useState, useEffect, Fragment } from "react";
import logo from "Assets/images/logo.png";
import AuthButtons from "./AuthButtons";
import HeaderLink from "../../utils/StyledHeaderLink";
import { headerLinks } from "./data/landing-page";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";

const Header = ({ linksAreShown = true }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const styles = {
    shadow: {
      backgroundColor: "white",
      transition: "top 0.5s",
      boxShadow: "0px 14px 25px -20px rgba(0,0,0,0.1)",
    },
  };

  const hideAndShowNavBar = () => {
    if (typeof window !== "undefined") {
      let prevScrollpos = window.pageYOffset;
      const navbar = document.getElementById("navbar");
      window.onscroll = function () {
        const maxScroll = document.body.clientHeight - window.innerHeight;
        let currentScrollPos = window.pageYOffset;
        if (
          (maxScroll > 0 &&
            prevScrollpos > currentScrollPos &&
            prevScrollpos <= maxScroll) ||
          (maxScroll <= 0 && prevScrollpos > currentScrollPos) ||
          (prevScrollpos <= 0 && currentScrollPos <= 0)
        ) {
          navbar.style.top = "0"; // show
        } else {
          navbar.style.top = "-5.5rem"; // hide
        }
        prevScrollpos = currentScrollPos;
      };
    }
  };

  useEffect(() => {
    hideAndShowNavBar();
  }, []);

  return (
    <Fragment>
      <Navbar id="navbar" light expand="md" style={styles.shadow} sticky="top">
        <NavbarBrand href="/">
          <img
            src={"/static/frontend/" + logo}
            alt="DeltaCore Logo"
            width={220}
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {linksAreShown &&
              headerLinks.map((h, index) => {
                return (
                  <NavItem key={index}>
                    <HeaderLink id={index} href={h.link}>
                      {h.label}
                    </HeaderLink>
                  </NavItem>
                );
              })}
          </Nav>
          <Nav>
            <AuthButtons />
          </Nav>
        </Collapse>
      </Navbar>
    </Fragment>
  );
};

export default Header;
