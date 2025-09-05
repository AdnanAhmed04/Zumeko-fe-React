import React from 'react';

function TodaysActivityCard() {
  return (
    <div className="bg-white rounded-lg p-8 md:p-4 border border-gray-200 shadow w-full md:w-[25%]">
      <div className="flex gap-5 md:gap-3 items-center">
        <h3 className="text-gray-700 font-bold text-lg md:text-base">Today's Activity</h3>
        <span className="text-gray-400 text-2xl md:text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-5 md:w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
          </svg>
        </span>
      </div>
      <div className="text-4xl md:text-3xl font-bold mt-5 md:mt-2">89</div>
      <p className="text-gray-600 text-md md:text-sm mt-4 md:mt-1">Employees checked in</p>
    </div>
  );
}

export default TodaysActivityCard;
