import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./header.scss";

export const PublicHeader = () => {
  return (
    <>
      <header className="header">
        <ul className="header__ul">
          <li className="header__list">
            <Link className="header__link" to="/">
              Home
            </Link>
          </li>
          <li className="header__list">
            <Link className="header__link" to="/about">
              About
            </Link>
          </li>
          <li className="header__list">
            <Link className="header__link" to="/blog">
              Blog
            </Link>
          </li>
          <li className="header__list">
            <Link className="header__link" to="/admin/dashboard">
              Admin
            </Link>
          </li>
        </ul>
      </header>
      <Outlet />
    </>
  );
};
