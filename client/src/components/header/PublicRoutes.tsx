import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PublicHeader } from "./PublicHeader";
import { Home } from "../../pages/Home";
import { About } from "../../pages/About";
import { Index as AdminIndex } from "../../pages/admin/Index";
import { Blog } from "../../pages/Blog";
import { Login } from "../auth/Login";
import { Signup } from "../auth/Signup";
import { AdminProtectedRoute } from "./AdminProtectedRoute";

export const PublicRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route element={<PublicHeader />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
          {/* Admin Routes */}
          <Route path="/admin/*" element={<AdminIndex />} />
        </Routes>
      </Router>
    </>
  );
};
