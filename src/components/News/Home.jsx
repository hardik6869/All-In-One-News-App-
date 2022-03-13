import React from "react";
import UserLayout from "../Navigation/UserLayout";
import News from "./News";
function Home() {
  return (
    <UserLayout>
      <News />
    </UserLayout>
  );
}

export default Home;
