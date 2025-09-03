import React from "react";
import { Calendar } from "lucide-react";

const ProbationPeriods = () => {
  // Example: no probation periods
  const probationList = [];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 w-full max-w-sm flex flex-col">
      {/* Header */}
      <div className="flex items-center mb-1">
        <span className="text-blue-500 text-xl mr-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar h-5 w-5 text-blue-600"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg></span>
        <h2 className="text-lg font-semibold text-gray-800">
          Probation Periods Ending Soon
        </h2>
      </div>
      <p className="text-gray-500 text-sm mb-4">Next 7 days</p>

      {probationList.length > 0 ? (
        <div className="space-y-3">
          {probationList.map((person, index) => (
            <div
              key={index}
              className="flex items-center bg-gray-50 p-3 rounded-xl hover:shadow-sm transition"
            >
              {/* Avatar */}
              <div className="w-10 h-10 flex-shrink-0 bg-gray-200 rounded-full mr-3"></div>

              {/* Info */}
              <div className="flex flex-col overflow-hidden">
                <p className="text-gray-800 text-sm font-medium truncate w-40">
                  {person.name}
                </p>
                <p className="text-gray-500 text-xs truncate">{person.email}</p>
              </div>

              {/* End Date */}
              <div className="ml-auto text-right whitespace-nowrap">
                <p className="text-sm font-medium">{person.endDate}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center flex-1 text-gray-500 text-sm py-6">
          <Calendar className="w-10 h-10 mb-2 text-gray-400" />
          <p className="text-center px-4">
            No probation periods ending soon in the next 7 days
          </p>
        </div>
      )}
    </div>
  );
};

export default ProbationPeriods;
