import React from "react";
import { AppBar, Toolbar, Container } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/actions";

const Navbar = () => {
  const { isLogin } = useSelector((state) => state.LoginOut.isLogin);
  const dispatch = useDispatch();
  const LogoutHandler = () => {
    dispatch(logout());
    localStorage.removeItem("token");
  };
  return (
    <>
      <Container fixed>
        <AppBar position="static">
          <Toolbar>
            <NavLink to="/">Home</NavLink>
            {!isLogin ? (
              <>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/signup">Signup</NavLink>
              </>
            ) : (
              <>
                <NavLink to="/signup" to="/" onClick={() => LogoutHandler()}>
                  Logout
                </NavLink>
              </>
            )}
          </Toolbar>
        </AppBar>
      </Container>
    </>
  );
};

export default Navbar;
