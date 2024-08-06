import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PublicHeader } from "./PublicHeader";
import { Home } from "../../pages/Home";
import { About } from "../../pages/About";
import { Index as AdminIndex } from "../../pages/admin/Index";
import { Footer } from "../footer/Footer";

export const PublicRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicHeader />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
        {/* Admin Routes */}
        <Route path="/admin/*" element={<AdminIndex />} />
      </Routes>
      <Footer />
    </Router>
  );
};
