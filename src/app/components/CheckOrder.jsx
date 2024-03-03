import React from "react";

const CheckOrder = () => {
  return (
    <div className=" ml-[10rem] flex items-start h-[40%] w-[60%] justify-between absolute rounded-xl bg-blue-400 shadow-xl ">
      <div className="  ">
        <h2 className="text-4xl p-5 mt-8 ml-8 lg:p-2 font-bold ">
          Lastest Purchases:
        </h2>
        <table className="text-xl m-10 lg:p-2 w-[100%] text-white p-10 border-t border-gray-200">
          <thead className=" ">
            <tr className=" lg:p-8">
              <td className="p-5 lg:p-10">Name</td>
              <td className="p-5 lg:p-10">Status</td>
              <td className="p-5 lg:p-10">Date</td>
              <td className="p-5 lg:p-10">Amount</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-5 lg:p-10 ">
                <span className="flex-col">Hello world</span>
              </td>
              <td className="p-5 lg:p-10">
                <span className="">Pending</span>
              </td>
              <td className="p-5 lg:p-10">11.11.2023</td>
              <td className="p-5 lg:p-10">$12</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="p-5 lg:p-10 ">
                <span className="flex-col">Hello world</span>
              </td>
              <td className="p-5 lg:p-10">
                <span className="">Pending</span>
              </td>
              <td className="p-5 lg:p-10">11.11.2023</td>
              <td className="p-5 lg:p-10">$12</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CheckOrder;
