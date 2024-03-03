"use client";
import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    lastweek: 40,
    currentweek: 30,
  },
  {
    name: "Tue",
    lastweek: 30,
    currentweek: 10,
  },
  {
    name: "Wed",
    lastweek: 20,
    currentweek: 20,
  },
  {
    name: "Thu",
    lastweek: 27,
    currentweek: 50,
  },
  {
    name: "Fri",
    lastweek: 18,
    currentweek: 60,
  },
];
const ChartPage = () => {
  // export default class Example extends PureComponent {
  //     static demoUrl = 'https://codesandbox.io/s/simple-area-chart-4ujxw';

  // render() {
  return (
    <div className="h-[350px] bg-blue-400 p-10 rounded-xl ml-[10rem] w-[60%] shadow-xl">
      <h1 className="text-3xl text-center font-bold">Insert text name!</h1>
      <ResponsiveContainer width="100%" height="100%" className="p-5">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="lastweek"
            stroke="#8884d8"
            fill="#8884d8"
          />
          <Area
            type="monotone"
            dataKey="currentweek"
            stroke="#3884d8"
            fill="#3884d8"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartPage;
