import React from "react";

import AboutUs from "../components/layout/landing-page/AboutUs";
import BigIntro from "../components/layout/landing-page/BigIntro";
import ContactUs from "../components/layout/landing-page/ContactUs";
import Description from "../components/layout/landing-page/Description";
import Features from "../components/layout/landing-page/Features";
import LandingLayout from "../components/layout/LandingLayout";

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
