import React from "react";
import { Routes, Route } from "react-router-dom";
import { AdminHeader } from "./AdminHeader";
import { Dashboard } from "../../pages/admin/Dashboard";
import { PostBlog } from "../../pages/admin/posts/PostBlog";
import { UpdateBlog } from "../../pages/admin/posts/Updateblog";
import { Deleteblog } from "../../pages/admin/posts/Deleteblog";

export const AdminRoutes = () => {
  return (
    <Routes>
      <Route element={<AdminHeader />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="posts" element={<PostBlog />} />
        <Route path="posts/edit/:id" element={<UpdateBlog />} />
        <Route path="/admin/posts/dashboard/" element={<Deleteblog />} />
      </Route>
    </Routes>
  );
};
