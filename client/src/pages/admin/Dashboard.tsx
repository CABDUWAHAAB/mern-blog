import React from "react";
import "./dashboard.scss";
import { DashboardChart } from "./DashboardChart";

export const Dashboard = () => {
  return (
    <>
      <div className="Dashboard">
        <article className="Dashboard__dash">
          <DashboardChart />
        </article>
      </div>
    </>
  );
};
