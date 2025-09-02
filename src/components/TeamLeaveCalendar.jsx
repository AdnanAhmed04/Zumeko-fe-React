import React from 'react';
import { Plane } from "lucide-react"; // keep lucide-react for vacation icon

const TeamLeaveCalendar = () => {
  const leaveData = [
    {
      id: 1,
      name: 'Alex Thompson',
      type: 'Vacation Leave',
      duration: '3 days',
      dates: 'Mar 10-20',
      status: 'approved',
      color: 'blue',
    },
    {
      id: 2,
      name: 'Lise Wang',
      type: 'Sick Leave',
      duration: '1 day',
      dates: 'Today',
      status: 'approved',
      color: 'red',
    },
    {
      id: 3,
      name: 'David Miller',
      type: 'Personal Leave',
      duration: '2 days',
      dates: 'Mar 22-23',
      status: 'pending',
      color: 'purple',
    },
  ];

  // Map leave.type to a unique icon (your provided SVGs)
  const leaveIcons = {
    "Vacation Leave": <Plane className="h-4 w-4 text-blue-500" />,
    "Sick Leave": (
      <svg xmlns="http://www.w3.org/2000/svg"
        className="lucide lucide-heart h-4 w-4 text-red-500"
        fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round"
        viewBox="0 0 24 24">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
      </svg>
    ),
    "Personal Leave": (
      <svg xmlns="http://www.w3.org/2000/svg"
        className="lucide lucide-briefcase h-4 w-4 text-purple-500"
        fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round"
        viewBox="0 0 24 24">
        <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        <rect width="20" height="14" x="2" y="6" rx="2"></rect>
      </svg>
    ),
  };

  const getStatusStyles = (status) => {
    return status === 'approved'
      ? 'bg-green-600 text-white'
      : 'bg-gray-200 text-gray-700';
  };

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200 h-full min-h-[400px] flex flex-col">
      <div className="flex items-center mb-2">
        <svg xmlns="http://www.w3.org/2000/svg" 
             width="24" height="24" 
             viewBox="0 0 24 24" 
             fill="none" 
             stroke="currentColor" 
             strokeWidth="2" 
             strokeLinecap="round" 
             strokeLinejoin="round" 
             className="lucide lucide-calendar h-5 w-5 mr-2 text-blue-600">
          <path d="M8 2v4"></path>
          <path d="M16 2v4"></path>
          <rect width="18" height="18" x="3" y="4" rx="2"></rect>
          <path d="M3 10h18"></path>
        </svg>
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Team Leave Calendar</h2>
      </div>
      <p className="text-gray-500 mb-2 text-sm sm:text-base">Who's out this week</p>
      <ul className="space-y-3 flex-grow overflow-auto">
        {leaveData.map((leave) => (
          <li
            key={leave.id}
            className="flex items-center justify-between bg-gray-50 p-3 rounded-lg transition-colors duration-200"
          >
            <div className="flex items-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 rounded-full mr-3 flex items-center justify-center text-gray-600 font-medium text-sm">
                {leave.name.charAt(0)}
              </div>
              <div>
                <p className="text-gray-800 font-semibold text-sm sm:text-base">{leave.name}</p>
                <p className="flex items-center text-xs sm:text-sm font-medium">
                  <span className="mr-2">
                    {leaveIcons[leave.type]}
                  </span>
                  {leave.type}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-gray-800 font-semibold text-xs sm:text-sm">{leave.duration}</p>
              <p className="text-gray-500 text-xs">{leave.dates}</p>
              <span
                className={`inline-block text-xs font-medium px-2 py-1 rounded-full mt-1 ${getStatusStyles(leave.status)}`}
              >
                {leave.status}
              </span>
            </div>
          </li>
        ))}
      </ul>
      <a
        href="#"
        className=" mt-4 flex justify-center text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-200"
      >
        View full calendar →
      </a>
    </div>
  );
};

export default TeamLeaveCalendar;
