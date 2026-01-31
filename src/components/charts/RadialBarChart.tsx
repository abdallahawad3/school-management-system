"use client";
import Image from "next/image";
import { RadialBarChart, RadialBar, Legend, Tooltip } from "recharts";
// import { RechartsDevtools } from "@recharts/devtools";

// #region Sample data
const data = [
  {
    name: "total",
    count: 90,
    fill: "white",
  },
  {
    name: "Girls",
    count: 50,
    fill: "#FAE27C",
  },
  {
    name: "Boys",
    count: 40,
    fill: "#c3ebfa",
  },
];

// #endregion
const style = {
  top: "50%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};

const RadialBarChartComponent = () => {
  return (
    <div className="bg-white p-4 rounded-2xl w-full h-full">
      {/* Title */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold mb-2">Students</h2>
        <Image src="/moreDark.png" alt="info" width={16} height={16} className="ml-2" />
      </div>
      {/* Chart */}
      <div className="relative h-[75%] w-full flex items-center justify-center">
        <RadialBarChart
          innerRadius="30%"
          outerRadius="100%"
          style={{ width: "100%", maxWidth: "400px", aspectRatio: 1.618 }}
          responsive={true}
          cx="50%"
          cy="50%"
          barSize={40}
          data={data}
        >
          <RadialBar background dataKey="count" />
        </RadialBarChart>
        <Image
          src="/maleFemale.png"
          alt="students"
          width={40}
          height={40}
          className="md:w-[50px] md:h-[50px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      {/* Buttons */}
      <div className="flex justify-center -mt-4 gap-8">
        <div className="flex flex-col gap-1">
          <div className="size-4 bg-sky rounded-full" />
          <span className="font-bold text-sm">1289</span>
          <span className="text-sm font-medium text-gray-600">Boys (40%)</span>
        </div>
        <div className="flex flex-col gap-1">
          <div className="size-4 bg-yellow rounded-full" />
          <span className="font-bold text-sm">1289</span>
          <span className="text-sm font-medium text-gray-600">Girls (50%)</span>
        </div>
      </div>
    </div>
  );
};

export default RadialBarChartComponent;
