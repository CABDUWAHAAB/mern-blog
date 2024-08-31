import React from "react";
import { Link, Outlet } from "react-router-dom";
import { isLoggedIn } from "./authUtils";
import "./header.scss";
import { Profile } from "../Profile/Profile";

export const PublicHeader = () => {
  const loggedIn = isLoggedIn(); // Check login status
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
          {/* Conditionally show profile if logged in */}
          {loggedIn ? (
            <li className="header__list">
              <Profile />
            </li>
          ) : (
            <>
              <li className="header__list">
                <Link className="header__link" to="/login">
                  Login
                </Link>
              </li>
              <li className="header__list">
                <Link className="header__link" to="/signup">
                  Signup
                </Link>
              </li>
            </>
          )}
        </ul>
      </header>
      <Outlet />
    </>
  );
};
