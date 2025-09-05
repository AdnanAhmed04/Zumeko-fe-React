import React from "react";
import { Calendar, Users } from "lucide-react";

const announcements = [
  {
    id: 1,
    title: "Q1 All-Hands Meeting",
    description:
      "Join us for our quarterly review and planning session this Friday at 2 PM in the main conference room.",
    date: "March 22, 2024",
    team: "HR Team",
    tags: [
      { label: "meeting", color: "bg-blue-100 text-blue-600" },
      { label: "Urgent", color: "bg-red-500 text-white" },
    ],
    pinned: true,
  },
  {
    id: 2,
    title: "New Health Insurance Benefits",
    description:
      "We're excited to announce enhanced health insurance coverage starting April 1st. Check your email for details.",
    date: "March 20, 2024",
    team: "Benefits Team",
    tags: [{ label: "benefits", color: "bg-green-100 text-green-600" }],
    pinned: false,
  },
  {
    id: 3,
    title: "Office Renovation Update",
    description:
      "The 3rd floor renovation will begin next week. Temporary workspaces have been arranged on the 2nd floor.",
    date: "March 18, 2024",
    team: "Facilities",
    tags: [{ label: "facility", color: "bg-purple-100 text-purple-600" }],
    pinned: false,
  },
];

const CompanyAnnouncements = () => {
  return (
    <div className="p-6 bg-white shadow rounded-2xl">
      {/* Header */}
      <div className="mb-4">
        <h2 className=" text-xl md:text-xl font-semibold flex items-center gap-2">
          📢 Company Announcements
        </h2>
        <p className="text-gray-500 text-md md:text-sm">Latest updates and news</p>
      </div>

      {/* Announcements List */}
      <div className="space-y-4">
        {announcements.map((item) => (
          <div
            key={item.id}
            className="p-4 bg-gray-50 rounded-xl flex flex-col gap-2 hover:shadow transition"
          >
            <div className="flex items-center justify-between ">
              <h3 className="font-semibold flex items-center gap-1 text-md md:text-sm">
                {item.pinned && <span className="text-red-500 ">📌</span>} {item.title}
              </h3>
              <div className="flex gap-2">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`px-2 py-0.5  text-sm md:text-xs rounded-full ${tag.color}`}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-gray-600 text-md md:text-sm">{item.description}</p>

            <div className="flex items-center justify-between text-sm md:text-sm text-gray-500">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <Calendar size={16} /> {item.date}
                </span>
                <span className="flex items-center gap-1">
                  <Users size={14} /> {item.team}
                </span>
              </div>
              <a href="#" className="text-blue-600 font-medium">
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-6 text-center">
        <a href="#" className="text-blue-600 font-medium">
          View all announcements →
        </a>
      </div>
    </div>
  );
};

export default CompanyAnnouncements;