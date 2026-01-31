import Announcement from "@/components/shared/Announcement";
import BigCalender from "@/components/shared/BigCalender";
import EventCalender from "@/components/shared/EventCalender";

const page = () => {
  return (
    <section className="p-4 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-2">
      <div className="bg-white p-6 rounded-lg ">
        <h1 className="text-xl font-semibold mb-2 text-gray-600">Your Schedule (4A)</h1>

        {/* Calender Here */}

        <div className="w-full h-full">
          <BigCalender />
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg">
        <EventCalender />
        <Announcement />
      </div>
    </section>
  );
};

export default page;
