import React from "react";
import { Routes, Route } from "react-router-dom";
import { AdminHeader } from "./AdminHeader";
import { Dashboard } from "../../pages/admin/Dashboard";
import { PostBlog } from "../../pages/admin/posts/PostBlog";
import { UpdateBlog } from "../../pages/admin/posts/Updateblog";
import { AdminProtectedRoute } from "./AdminProtectedRoute";

export const AdminRoutes = () => {
  return (
    <Routes>
      <Route
        element={
          <AdminProtectedRoute>
            <AdminHeader />
          </AdminProtectedRoute>
        }
      >
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="posts" element={<PostBlog />} />
        <Route path="posts/edit/:id" element={<UpdateBlog />} />
      </Route>
    </Routes>
  );
};
