import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/auth/Login";
import RegisterPage from "../pages/auth/Register";

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
