"use client";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, momentLocalizer, type View } from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from "@/lib/data";
import { useState } from "react";
const localizer = momentLocalizer(moment);

const BigCalender = () => {
  const [view, setView] = useState<View>("work_week");
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={calendarEvents}
        views={["work_week", "day"]}
        view={view}
        date={new Date(2026, 1, 1)} // Feb 1, 2026
        onView={(newView) => setView(newView)}
        defaultView="week"
        startAccessor="start"
        min={new Date(2026, 0, 31)}
        endAccessor="end"
        style={{ height: "98%" }}
      />
    </div>
  );
};

export default BigCalender;
