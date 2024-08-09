import React from "react";
import "./asideHeader.scss";
import logo from "../../assets/logos/logo-color.png";
import { Link } from "react-router-dom";

export const AsideHeader = () => {
  return (
    <>
      <aside className="asideHeader">
        <div className="asideHeader__logo">
          <Link className="" to="/admin/dashboard">
            <img className="asideHeader__Imglogo" src={logo} alt={logo} />
          </Link>
        </div>
        <ul className="asideHeader__ul">
          <li className="asideHeader__li">
            <Link className="asideHeader__link" to="/admin/dashboard">
              Dashboard
            </Link>
          </li>
          <li className="asideHeader__li">
            <Link className="asideHeader__link" to="/admin/posts">
              Posts
            </Link>
          </li>
          <li className="asideHeader__li">
            <Link className="asideHeader__link" to="">
              Category
            </Link>
          </li>
          <li className="asideHeader__li">
            <Link className="asideHeader__link" to="">
              Comments
            </Link>
          </li>
          <li className="asideHeader__li">
            <Link className="asideHeader__link" to="">
              System User
            </Link>
          </li>
          <li className="asideHeader__li">
            <Link className="asideHeader__link" to="">
              Category
            </Link>
          </li>
        </ul>

        <section></section>
      </aside>
    </>
  );
};
