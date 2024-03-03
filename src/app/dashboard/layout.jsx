import React from "react";
import PageInfo from "../components/PageInfo";
import Links from "../components/Links";

const Layout = ({ children }) => {
  return (
    <div className=" flex p-5 ">
      <div className="flex-1">
        <Links />
        <PageInfo />
        <div className=""></div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
