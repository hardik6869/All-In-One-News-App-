import React from "react";
import NewsApi from "./NewsApi";
import VisitorNav from "./VisitorNav";

const VisitorUser = () => {
  return (
    <>
      <VisitorNav />
      <NewsApi />
    </>
  );
};

export default VisitorUser;
