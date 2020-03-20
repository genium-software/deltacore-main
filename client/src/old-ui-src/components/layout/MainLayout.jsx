import React, { Fragment } from "react";
import Header from "../layout/dashboard/Header";
import Footer from "./Footer";
const MainLayout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setIsOpen(true);
  };

  const handleDrawerClose = () => {
    setIsOpen(false);
  };

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
