"use client";
import Image from "next/image";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

// #region Sample data
const data = [
  {
    name: "Jan",
    income: 4000,
    expense: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    income: 3000,
    expense: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    income: 2000,
    expense: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    income: 2780,
    expense: 3908,
    amt: 2000,
  },
  {
    name: "May",
    income: 1890,
    expense: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    income: 2390,
    expense: 3800,
    amt: 2500,
  },
  {
    name: "Jul",
    income: 3490,
    expense: 4300,
    amt: 2100,
  },
  {
    name: "Aug",
    income: 3000,
    expense: 2400,
    amt: 2400,
  },
  {
    name: "Sep",
    income: 4000,
    expense: 1398,
    amt: 2210,
  },
  {
    name: "Oct",
    income: 2000,
    expense: 9800,
    amt: 2290,
  },
  {
    name: "Nov",
    income: 2780,
    expense: 3908,
    amt: 2000,
  },
  {
    name: "Dec",
    income: 1890,
    expense: 4800,
    amt: 2181,
  },
];
// #endregion
const FinanceChart = () => {
  return (
    <div className="bg-white h-full w-full rounded-xl p-4">
      {/* Title */}
      <div className="flex items-center justify-between p-4">
        <h2 className="text-lg font-semibold mb-2">Finance Overview</h2>
        <Image src="/moreDark.png" alt="info" width={16} height={16} className="ml-2" />
      </div>
      {/* Chart */}
      <div>
        <LineChart
          style={{
            width: "100%",
            maxWidth: "100%",
            height: "100%",
            maxHeight: "70vh",
            aspectRatio: 1.618,
          }}
          responsive
          data={data}
          barSize={10}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis tickSize={4} dataKey="name" />
          <YAxis width="auto" />
          <Tooltip />
          <Legend verticalAlign="top" height={36} />
          <Line
            strokeWidth={5}
            type="monotone"
            dataKey="income"
            stroke="#CFCEFF"
            activeDot={{ r: 8 }}
          />
          <Line strokeWidth={5} type="monotone" dataKey="expense" stroke="#C3EBFA" />
        </LineChart>
      </div>
    </div>
  );
};

export default FinanceChart;
