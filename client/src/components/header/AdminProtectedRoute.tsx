import React from "react";
import { Navigate } from "react-router-dom";

// Higher-order component for protecting admin routes
export const AdminProtectedRoute = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const role = localStorage.getItem("role"); // Get user role from localStorage

  if (role !== "admin") {
    // If the user is not an admin, redirect them to the homepage
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};
