import React from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import SideDrawer from "./SideDrawer";
import NavLinks from "./NavLinks";
import "./MainNavigation.css";
import Backdrop from "../UIElements/Backdrop";

const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawer] = React.useState(false);
  return (
    <>
      {drawerIsOpen && <Backdrop onClick={() => setDrawer(false)} />}
      {drawerIsOpen && (
        <SideDrawer>
          <nav className="main-navigation__drawer-nav">
            <NavLinks />
          </nav>
        </SideDrawer>
      )}

      <MainHeader>
        <button
          className="main-navigation__menu-btn"
          onClick={() => setDrawer(!drawerIsOpen)}
        >
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">YourPlaces</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  );
};

export default MainNavigation;