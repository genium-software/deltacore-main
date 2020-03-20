import React from "react";

import AboutUs from "../components/layout/landing-pages/AboutUs";
import BigIntro from "../components/layout/landing-pages/BigIntro";
import ContactUs from "../components/layout/landing-pages/ContactUs";
import Description from "../components/layout/landing-pages/Description";
import Features from "../components/layout/landing-pages/Features";
import LandingLayout from "../components/layout/LandingLayout";

const LandingPage = ({ match }) => {
  return (
    <LandingLayout url={match.url}>
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
