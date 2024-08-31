import React from "react";
import { AdminRoutes } from "../../components/header/AdminRoutes";
import { Aside } from "../../components/aside/Aside";
import "./adminIndex.scss";

export const Index = () => {
  return (
      <div className="index">
        <ul className="index__ul">
          <li className="index__li--right">
            <AdminRoutes />
          </li>
          <li className="index__li--left">
            <Aside />
          </li>
        </ul>
      </div>
  );
};
