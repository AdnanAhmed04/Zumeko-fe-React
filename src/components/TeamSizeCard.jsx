import React from 'react';

function TeamSizeCard() {
  return (
    <div className="bg-white rounded-lg p-8 md:p-4 border border-gray-200 shadow w-full md:w-[25%]">
      <div className="flex gap-5 md:gap-3 items-center">
        <h3 className="text-gray-700 font-bold text-2xl md:text-base">Team Size</h3>
        <span className="text-gray-400 text-2xl md:text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-5 md:w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
          </svg>
        </span>
      </div>
      <div className="text-6xl md:text-3xl font-bold mt-5 md:mt-2">105</div>
      <p className="text-gray-600 text-2xl md:text-sm mt-4 md:mt-1">Active employees</p>
      <p className="text-green-600 text-2xl md:text-sm mt-4 md:mt-1 flex items-center gap-3 md:gap-1 font-bold">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-4 md:w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
          <polyline points="16 7 22 7 22 13" />
        </svg>
        2 new hires
      </p>
    </div>
  );
}

export default TeamSizeCard;
