// AdminHeader.tsx
import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./adminHeader.scss";

export const AdminHeader = () => {
  return (
    <>
      <aside className="adminHead">
        <header className="adminHead__header">
          <ul className="adminHead__ul">
            <li className="adminHead__li">
              <Link className="adminHead__link" to="/admin/dashboard">
                Dashboard
              </Link>
            </li>
            <li className="adminHead__li">
              <Link className="adminHead__link" to="/admin/posts">
                Posts
              </Link>
            </li>
          </ul>
        </header>
      </aside>
      <Outlet />
    </>
  );
};
