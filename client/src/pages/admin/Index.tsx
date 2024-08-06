import React from "react";
import { AdminRoutes } from "../../components/header/AdminRoutes";
import { Aside } from "../../components/aside/Aside";

export const Index = () => {
  return (
    <>
      <div className="index">
        <AdminRoutes />
        <Aside />
      </div>
    </>
  );
};
