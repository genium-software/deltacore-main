import React, { Fragment } from "react";
import LandingHeader from "./landing-page/LandingHeader";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

const LandingLayout = ({ url, children }) => {
  console.log("MATCH:", url);

  return (
    <Fragment>
      <LandingHeader linksAreShown={url === "/" ? true : false} />
      <div style={{ minHeight: "calc(100vh - 80px)" }}>{children}</div>
      <Footer />
    </Fragment>
  );
};

export default LandingLayout;
