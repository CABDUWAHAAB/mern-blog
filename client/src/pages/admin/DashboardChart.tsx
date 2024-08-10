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
            height={290}
            width={660}
            xAxis={[
              { data: ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6"], scaleType: "band" },
            ]}
            margin={{ top: 30, bottom: 30, left: 30, right: 55 }}
          />
        </div>
      </article>
      {/* PieChart */}
      <article className="Dashboard__PieCharRight">
        <PieChart
          className="Dashboard__PieChart"
          series={[
            {
              highlightScope: { faded: "global", highlighted: "item" },
              faded: { innerRadius: 30, additionalRadius: -10, color: "gray" },
              data,
              innerRadius: 30,
              outerRadius: 100,
              paddingAngle: 5,
              cornerRadius: 5,
              startAngle: -190,
              endAngle: 180,
              cx: 150,
              cy: 150,
            },
          ]}
          height={300}
          width={450}
        />
      </article>
      {/* Data Tables */}
      <article className="Dashboard__TableCard">
        <table className="Dashboard__Table">
          <thead className="">
            <tr className="">
              <th className="">ID</th>
              <th className="">Title</th>
              <th className="">Image</th>
              <th className="">Comment</th>
              <th className="">Date</th>
              <th className="">ViewsPost</th>
              <th className="">Views</th>
            </tr>
          </thead>
          <tbody className="">
            <tr className="">
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>
      </article>
    </>
  );
};
