import React, { Fragment } from "react";
import Companies from "../old-ui-src/components/layout/companies/Companies";
import MainLayout from "../old-ui-src/components/layout/MainLayout";
const Home = () => (
  <Fragment>
    <MainLayout>
      <Companies />
    </MainLayout>
  </Fragment>
);
export default Home;
