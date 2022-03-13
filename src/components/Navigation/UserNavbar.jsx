import React from "react";
import { NavLink } from "react-router-dom";

const UserNavbar = () => {
  const LogoutHandler = () => {
    localStorage.removeItem("token");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary ">
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
            <li className="nav-item active">
              <i class="fa-solid fa-house-chimney"></i>
              <NavLink className="navbar-brand nav-link" to="/home">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <i class="fa fa-signs-post"></i>
              <NavLink className="navbar-brand nav-link" to="/post">
                Posted
              </NavLink>
            </li>
            <li className="nav-item">
              <i class="fa-regular fa-newspaper"></i>
              <NavLink className="navbar-brand nav-link" to="/addnews">
                AddNews
              </NavLink>
            </li>
            <li className="nav-item">
              <i class="fa-regular fa-address-card"></i>
              <NavLink className="navbar-brand nav-link" to="/userprofile">
                UserProfile
              </NavLink>
            </li>
          </ul>
          <i class="fa-solid fa-right-from-bracket"></i>
          <NavLink
            className="navbar-brand pl-1"
            to="/"
            onClick={() => LogoutHandler()}
          >
            Logout
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default UserNavbar;
