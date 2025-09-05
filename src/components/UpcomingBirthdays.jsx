import React from "react";

const UpcomingBirthdays = () => {
  const birthdays = [
    {
      name: "Himanshu Sen Sentu Saik...",
      email: "himanshu@eazio.com",
      date: "Mar 15",
    },
    {
      name: "Sarah Johnson",
      email: "sarah@eazio.com",
      date: "Mar 18",
    },
  ];

  return (
<div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200  min-h-[300px] flex flex-col ">
      {/* Header */}
      <div className="flex items-center mb-1">
        <span className="text-blue-500 text-xl mr-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gift h-5 w-5 text-blue-600"><rect x="3" y="8" width="18" height="4" rx="1"></rect><path d="M12 8v13"></path><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path></svg></span>
        <h2 className="text-lg font-semibold text-gray-800">
          Upcoming Birthdays
        </h2>
      </div>
      <p className="text-gray-500 text-sm mb-4">Next 7 days</p>

      {/* Birthday List */}
      <div className="space-y-3">
        {birthdays.map((person, index) => (
          <div
            key={index}
            className="flex items-center bg-gray-50 p-3 rounded-xl hover:shadow-sm transition"
          >
            {/* Avatar Placeholder */}
            <div className="w-10 h-10 flex-shrink-0 bg-gray-200 rounded-full mr-3"></div>

            {/* Info */}
            <div className="flex flex-col overflow-hidden">
              <p className="text-gray-800 text-sm font-medium truncate w-40">
                {person.name}
              </p>
              <p className="text-gray-500 text-xs truncate">{person.email}</p>
            </div>

            {/* Date */}
            <p className="ml-auto text-sm font-medium whitespace-nowrap">
              {person.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingBirthdays;
