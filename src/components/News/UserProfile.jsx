/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";

import UserLayout from "../Navigation/UserLayout";

const UserProfile = () => {
  useEffect(() => {
    fetchItemList();
  }, []);

  const fetchItemList = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/users/`);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <UserLayout>
      <h1> userProfile</h1>
    </UserLayout>
  );
};
export default UserProfile;
