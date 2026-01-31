"use client";
import Image from "next/image";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const data = [
  {
    name: "Monday",
    absent: 50,
    present: 450,
    amt: 500,
  },
  {
    name: "Tuesday",
    absent: 30,
    present: 470,
    amt: 500,
  },
  {
    name: "Wednesday",
    absent: 40,
    present: 460,
    amt: 500,
  },
  {
    name: "Thursday",
    absent: 35,
    present: 465,
    amt: 500,
  },
  {
    name: "Friday",
    absent: 25,
    present: 475,
    amt: 500,
  },
  {
    name: "Saturday",
    absent: 20,
    present: 480,
    amt: 500,
  },
  {
    name: "Sunday",
    absent: 15,
    present: 485,
    amt: 500,
  },
];
// #endregion
const AttendanceLineChart = () => {
  return (
    <div className="bg-white p-4 rounded-2xl w-full h-full">
      {/* Title */}
      <div className="flex items-start mb-4 justify-between flex-col">
        <div className="flex items-center justify-between w-full">
          <h2 className="text-lg font-semibold mb-2">Attendance Overview</h2>
          <Image src="/moreDark.png" alt="info" width={16} height={16} />
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center mb-1">
            <div className="size-3 bg-sky rounded-full inline-block mr-2" />{" "}
            <span className="text-sm text-sky">present</span>
          </div>

          <div className="flex items-center mb-1">
            <div className="size-3 bg-yellow rounded-full inline-block mr-2" />{" "}
            <span className="text-sm text-yellow">absent</span>
          </div>
        </div>
      </div>
      {/* Chart */}
      <div className="h-[80%] flex justify-center items-center ">
        <BarChart
          style={{
            width: "100%",
            height: "100%",
            aspectRatio: 1.618,
          }}
          responsive={true}
          data={data}
        >
          <CartesianGrid vertical={false} stroke="#ddd" strokeDasharray="2 1" />
          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "#666" }} />
          <YAxis axisLine={false} />
          <Tooltip />
          <Bar
            dataKey="present"
            fill="#c3ebfa"
            activeBar={{ fill: "#EDF9FD" }}
            radius={[20, 20, 0, 0]}
            barSize={15}
          />
          <Bar
            dataKey="absent"
            fill="#fae27c"
            activeBar={{ fill: "#FEFCE8" }}
            radius={[20, 20, 0, 0]}
            barSize={15}
          />
        </BarChart>
      </div>
    </div>
  );
};

export default AttendanceLineChart;
