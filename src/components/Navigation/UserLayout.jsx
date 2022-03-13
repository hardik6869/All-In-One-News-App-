import React from "react";
import UserNavbar from "./UserNavbar";

const UserLayout = (props) => {
  const isLogin = localStorage.getItem("token");
  return (
    <>
      {isLogin && (
        <>
          <UserNavbar />
          {props.children}
        </>
      )}
    </>
  );
};

export default UserLayout;
