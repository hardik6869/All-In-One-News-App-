import React from "react";
import { AppBar, Toolbar, Container } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const UserNavbar = () => {
  const LogoutHandler = () => {
    localStorage.removeItem("token");
  };
  return (
    <>
      <Container fixed>
        <AppBar position="static">
          <Toolbar>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/post">AddItems</NavLink>
            <NavLink to="/addnews">AllItems</NavLink>
            <NavLink to="/userprofile">All Users</NavLink>
            <NavLink to="/" onClick={() => LogoutHandler()}>
              Logout
            </NavLink>
          </Toolbar>
        </AppBar>
      </Container>
    </>
  );
};

export default UserNavbar;
