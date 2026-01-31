import AttendanceLineChart from "@/components/charts/AttendanceLineChart";
import FinanceChart from "@/components/charts/FinanceChart";
import RadialBarChartComponent from "@/components/charts/RadialBarChart";
import Card from "@/components/ui/Card";

const page = () => {
  return (
    <div className="p-4 flex flex-col gap-4 md:flex-row">
      {/* Left Content*/}
      <div className="w-full lg:w-2/3 bg-blue-100">
        {/* Cards */}
        <div className="flex justify-between items-center flex-wrap gap-4 p-4">
          <Card type="admin" />
          <Card type="student" />
          <Card type="teacher" />
          <Card type="parent" />
        </div>

        {/* Charts */}
        <div className="p-4 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-4">
          {/* Count Chart */}
          <div className="w-full ">
            <RadialBarChartComponent />
          </div>

          {/* Line Chart */}
          <div className="w-full">
            <AttendanceLineChart />
          </div>

          {/* Bottom Chart */}
          <div className="basis-full col-span-full mt-4">
            <FinanceChart />
          </div>
        </div>
      </div>
      {/* Right Content */}
      <div className="w-full lg:w-1/3 bg-green-300">r</div>
    </div>
  );
};

export default page;
