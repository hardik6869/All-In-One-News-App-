import React from "react";
import { NavLink } from "react-router-dom";

const UserNavbar = () => {
  const LogoutHandler = () => {
    localStorage.removeItem("token");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary ">
        <span className="mr-3 text-xl font-weight-bold shadow-lg rounded">
          All In One News Place
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active shadow mx-2">
              <NavLink className="text-light nav-link" to="/home">
                <i className="fa-solid fa-house-chimney"></i> Home
              </NavLink>
            </li>
            <li className="nav-item shadow mx-2">
              <NavLink className="text-light nav-link" to="/post">
                <i className="fa fa-signs-post"></i> Posted
              </NavLink>
            </li>
            <li className="nav-item shadow mx-2">
              <NavLink className="text-light nav-link" to="/addnews">
                <i className="fa-regular fa-newspaper"></i> AddNews
              </NavLink>
            </li>
            <li className="nav-item shadow mx-2 ">
              <NavLink className="nav-link text-light" to="/userprofile">
                <i className="fa-regular fa-address-card"></i> UserProfile
              </NavLink>
            </li>
          </ul>

          <NavLink
            className="shadow px-2 pl-1 text-light"
            to="/"
            onClick={() => LogoutHandler()}
          >
            <i className="fa-solid fa-right-from-bracket"></i> Logout
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default UserNavbar;
