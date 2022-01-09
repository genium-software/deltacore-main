import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../old-ui-src/pages/Home";
import LandingPage from "../old-ui-src/pages/LandingPage";
import LoginPage from "../old-ui-src/pages/auth/Login";
import RegisterPage from "../old-ui-src/pages/auth/Register";

const AuthRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/dashboard" element={<Home />} />
      <Route exact path="/login" element={<LoginPage />} />
      <Route exact path="/register" element={<RegisterPage />} />
    </Routes>
  );
};

export default AuthRouter;
