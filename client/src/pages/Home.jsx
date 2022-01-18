import React, { Fragment } from "react";
import Companies from "../components/layout/companies/Companies";
import MainLayout from "../components/layout/MainLayout";
const Home = () => (
  <Fragment>
    <MainLayout>
      <Companies />
    </MainLayout>
  </Fragment>
);
export default Home;
