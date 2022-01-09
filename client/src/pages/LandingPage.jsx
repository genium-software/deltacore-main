import React from "react";

import AboutUs from "../old-ui-src/components/layout/landing-pages/AboutUs";
import BigIntro from "../old-ui-src/components/layout/landing-pages/BigIntro";
import ContactUs from "../old-ui-src/components/layout/landing-pages/ContactUs";
import Description from "../old-ui-src/components/layout/landing-pages/Description";
import Features from "../old-ui-src/components/layout/landing-pages/Features";
import LandingLayout from "../old-ui-src/components/layout/LandingLayout";

import {useLocation} from "react-router-dom";

const LandingPage = () => {
  const location = useLocation();
  return (
    <LandingLayout url={location.pathname}>
      <BigIntro />
      <section id="about">
        <Description />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="company">
        <AboutUs />
      </section>
      <section id="contact-us">
        <ContactUs />
      </section>
    </LandingLayout>
  );
};

export default LandingPage;
