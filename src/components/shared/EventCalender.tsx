"use client";
import "react-calendar/dist/Calendar.css";

import { useState } from "react";
import Calendar from "react-calendar";
import Image from "next/image";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id: 1,
    title: "Math Exam",
    time: "10:00 AM - 12:00 PM",
    description: "Final math exam for grade 10.",
  },
  {
    id: 2,
    title: "Science Fair",
    time: "10:00 AM - 12:00 PM",
    description: "Annual science fair showcasing student projects.",
  },
  {
    id: 3,
    title: "Parent-Teacher Meeting",
    time: "10:00 AM - 12:00 PM",
    description: "Meeting to discuss student progress.",
  },
  {
    id: 4,
    title: "Sports Day",
    time: "10:00 AM - 12:00 PM",
    description: "Inter-school sports competitions and activities.",
  },
];

const EventCalender = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="w-full bg-white p-4 rounded-sm">
      <Calendar className={"w-full"} onChange={onChange} value={value} />
      <div className="mt-4">
        <div className="flex justify-between items-center border-t py-2">
          <h2 className="text-lg font-semibold mb-2">Upcoming Events</h2>
          <Image src={"/moreDark.png"} alt="No Events" width={20} height={20} />
        </div>
        <div className="space-y-3">
          {events.map((event) => (
            <div
              key={event.id}
              className="p-3 border border-t-4 odd:border-t-sky even:border-t-yellow rounded-lg hover:shadow-lg transition"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-gray-500">{event.title}</h3>
                <p className="text-sm text-gray-400">{event.time}</p>
              </div>
              <p className="text-sm text-gray-400">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventCalender;
