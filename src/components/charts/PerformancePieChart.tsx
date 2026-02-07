"use client";
import Image from "next/image";
import { Dot, Pie, PieChart } from "recharts";
// #region Sample data
const data = [
  { name: "Group A", value: 92, fill: "#c3ebfa" },
  { name: "Group B", value: 8, fill: "#fae27c" },
];

export default function PerformancePieChart({
  isAnimationActive = true,
}: {
  isAnimationActive?: boolean;
}) {
  return (
    <div className="bg-white p-4 rounded-md relative ">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold mb-4">Performance Overview</h2>
        <Image src={"/moreDark.png"} alt="performance legend" width={20} height={20} />
      </div>
      <PieChart
        style={{
          width: "100%",
          maxWidth: "500px",
          maxHeight: "50vh",
          aspectRatio: 2,
        }}
        responsive
      >
        <Pie
          dataKey="value"
          startAngle={180}
          height={100}
          endAngle={0}
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={"50%"}
          fill="#8884d8"
          isAnimationActive={isAnimationActive}
        />
      </PieChart>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <p className="text-3xl font-bold ">9.2</p>
        <p className="text-sm text-gray-500">of 10 max LTS</p>
      </div>
      <p className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-sm text-gray-500">
        1st semester - 2nd semester
      </p>
    </div>
  );
}
