const data = [
  {
    id: 1,
    title: "School reopens on 5th September",
    date: "2023-08-25",
    description: "After the summer break, classes will resume on the 5th of September.",
    color: "#EDF9FD",
  },
  {
    id: 2,
    title: "Parent-Teacher Meeting Scheduled",
    date: "2023-08-20",
    color: "#F1F0FF",
    description: "A meeting is scheduled for the 15th of September to discuss student progress.",
  },
  {
    id: 3,
    title: "New Library Books Arrived",
    date: "2023-08-18",
    color: "#FEFCE8",
    description: "A new collection of books has been added to the school library.",
  },
];
const Announcement = () => {
  return (
    <div className="bg-white p-4 rounded-sm">
      {/* Title */}
      <div className="flex justify-between items-center">
        <p className="font-bold text-gray-800">Announcements</p>
        <span className=" text-gray-600 text-xs cursor-pointer ">View All</span>
      </div>
      {/* Announcements List */}
      <div className="mt-4 space-y-4  ">
        {data.map((announcement) => (
          <div
            key={announcement.id}
            className="p-2 rounded-md"
            style={{ backgroundColor: announcement.color }}
          >
            <div className="flex justify-between items-center">
              <p className="font-semibold text-gray-700">{announcement.title}</p>
              <span className="text-gray-500 text-xs">{announcement.date}</span>
            </div>
            <p className="text-gray-600 text-sm mt-1">{announcement.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcement;
