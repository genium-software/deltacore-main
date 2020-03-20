import React, { Fragment } from "react";
import LandingHeader from "./landing-pages/LandingHeader";
import Footer from "./Footer";

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
