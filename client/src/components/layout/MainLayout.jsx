import React, { Fragment } from "react";
import Header from "./dashboard/Header";
import Footer from "./Footer";
const MainLayout = ({ children }) => {
  return (
    <Fragment>
      <Header>
        <div style={{ minHeight: "100vh" }}>{children}</div>
      </Header>
      <Footer />
    </Fragment>
  );
};

export default MainLayout;
