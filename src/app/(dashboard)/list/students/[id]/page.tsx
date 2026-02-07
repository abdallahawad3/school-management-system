import PerformancePieChart from "@/components/charts/PerformancePieChart";
import Announcement from "@/components/shared/Announcement";
import BigCalender from "@/components/shared/BigCalender";
import { Calendar, HouseHeart, LucidePhoneCall, MailIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const SingleStudentPage = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] p-4 gap-4">
      {/* Left */}
      <div>
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* User Info Card */}
          <div className="bg-sky py-6 px-4 rounded-md grid grid-cols-[1fr_2fr] gap-2">
            {/* User Image */}
            <div className="flex items-center justify-center">
              <Image
                src="https://images.pexels.com/photos/5414817/pexels-photo-5414817.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Student image"
                width={120}
                height={120}
                className="w-28 h-28 rounded-full object-cover "
              />
            </div>
            {/* User Info */}
            <div className="flex flex-col flex-1 justify-center">
              <div className="mb-2">
                <h2 className="text-2xl font-semibold">Catherine Johnson</h2>
                <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                <p className="flex items-center gap-1 text-gray-600">
                  <HouseHeart size={16} />
                  <span className="text-xs break-all">A+</span>
                </p>
                <p className="flex items-center gap-1 text-gray-600">
                  <MailIcon size={16} />
                  <span className="text-xs break-all">John@gmail.com</span>
                </p>
                <p className="flex items-center gap-1 text-gray-600">
                  <LucidePhoneCall size={16} />
                  <span className="text-xs break-all">0100111115</span>
                </p>
                <p className="flex items-center gap-1 text-gray-600">
                  <Calendar size={16} />
                  <span className="text-xs break-all">Jana 2025</span>
                </p>
              </div>
            </div>
          </div>
          {/* Small User Info Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="flex items-center gap-2 bg-white p-4 rounded-md shadow-sm">
              <Image src={"/singleAttendance.png"} alt="Attendance" width={30} height={30} />
              <div>
                <p className="text-sm text-gray-500">6th</p>
                <h3 className="text-lg font-semibold">Grade</h3>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white p-4 rounded-md shadow-sm">
              <Image src={"/singleBranch.png"} alt="Branches" width={30} height={30} />
              <div>
                <p className="text-sm text-gray-500">Branches</p>
                <h3 className="text-lg font-semibold">2</h3>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white p-4 rounded-md shadow-sm">
              <Image src={"/singleLesson.png"} alt="Lessons" width={30} height={30} />
              <div>
                <p className="text-sm text-gray-500">Lessons</p>
                <h3 className="text-lg font-semibold">16</h3>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white p-4 rounded-md shadow-sm">
              <Image src={"/singleClass.png"} alt="Classes" width={30} height={30} />
              <div>
                <p className="text-sm text-gray-500">Class</p>
                <h3 className="text-lg font-semibold">6A</h3>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom */}
        <div className="mt-4 bg-white p-4 rounded-md">
          <h2>Student Schedule</h2>
          <BigCalender />
        </div>
      </div>
      {/* Right */}
      <div className="">
        <div className="bg-white p-4 rounded-md">
          <h2 className="text-lg font-semibold">Shortcuts</h2>
          <div className="mt-4 mb-4 flex flex-wrap gap-2 text-xs text-gray-500">
            <Link className="p-2 rounded-md bg-sky" href="/list/Students">
              Student&lsquo;s Classes
            </Link>
            <Link className="p-2 rounded-md bg-skyLight" href="/list/Students/new">
              Add New Students
            </Link>
            <Link className="p-2 rounded-md bg-purple" href="/list/Students/schedule">
              Student&lsquo;s Lessons
            </Link>
            <Link className="p-2 rounded-md bg-purpleLight" href="/list/Students/attendance">
              Student&lsquo;s Attendance
            </Link>
            <Link className="p-2 rounded-md bg-yellow" href="/list/Students/payments">
              Student&lsquo;s Exams
            </Link>
            <Link className="p-2 rounded-md bg-yellowLight" href="/list/Students/payments">
              Student&lsquo;s Assignments
            </Link>
          </div>
        </div>
        <div className="my-4">
          <PerformancePieChart isAnimationActive={true} />
        </div>
        <Announcement />
      </div>
    </section>
  );
};

export default SingleStudentPage;
