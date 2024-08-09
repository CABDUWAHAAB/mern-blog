import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { PieChart } from "@mui/x-charts/PieChart";

export const DashboardChart = () => {
  /*Pie Chart*/
  const data = [
    { id: 0, value: 10, label: "series A" },
    { id: 1, value: 15, label: "series B" },
    { id: 2, value: 20, label: "series C" },
  ];

  return (
    <>
      <article className="Dashboard__ChartBarLeft">
        <div className="Dashboard__Bart">
          <BarChart
            className="Dashboard__BartChart"
            series={[{ data: [35, 44, 24, 34, 27, 50] }]}
            height={450}
            width={670}
            xAxis={[
              { data: ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6"], scaleType: "band" },
            ]}
            margin={{ top: 30, bottom: 30, left: 30, right: 30 }}
          />
        </div>
      </article>
      <article className="Dashboard__PieCharRight">
        <PieChart
          series={[
            {
              data,
              highlightScope: { faded: "global", highlighted: "item" },
              faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
            },
          ]}
          height={450}
          width={400}
        />
      </article>
    </>
  );
};
