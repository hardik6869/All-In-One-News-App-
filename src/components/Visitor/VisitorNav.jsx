import React from "react";
import { NavLink } from "react-router-dom";

const VisitorNav = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#5da1ce" }}
      >
        <span className="mr-3 text-xl font-weight-bold shadow-lg rounded">
          All In One News App
        </span>

        <ul className="navbar-nav mr-auto">
          <li className="nav-item active shadow mx-2">
            <NavLink className="navbar-brand nav-link text-light" to="/">
              Home
            </NavLink>
          </li>
        </ul>
        <NavLink
          className="navbar-brand text-light shadow nav-link"
          to="/login"
        >
          SignIn
        </NavLink>

        <NavLink
          className="navbar-brand text-light shadow nav-link"
          to="/signup"
        >
          SignUp
        </NavLink>
      </nav>
    </>
  );
};

export default VisitorNav;
