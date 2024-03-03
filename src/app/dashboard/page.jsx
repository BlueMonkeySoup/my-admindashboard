import React from "react";
import CheckOrder from "../components/CheckOrder";
import ChartPage from "../components/ChartPage";

const Dashboard = () => {
  return (
    <div className="flex gap-20 flex-col my-[5rem] ">
      <div className="flex flex-1 flex-col gap-20 items-center justify-between mb-[8rem]">
        <CheckOrder />
      </div>
      <div className="flex flex-col gap-20 items-center justify-between mt-[20rem] ">
        <ChartPage />
      </div>
    </div>
  );
};

export default Dashboard;
