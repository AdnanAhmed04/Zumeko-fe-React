import React from 'react';

function LateArrivalsCard() {
  return (
    <div className="bg-yellow-50 rounded-lg p-8 md:p-4 border border-yellow-200 shadow w-full md:w-[25%]">
      <div className="flex gap-5 md:gap-3 items-center">
        <h3 className="text-gray-700 font-bold text-xl md:text-base">
          Late Arrivals
        </h3>
        <span className="text-gray-400 text-2xl md:text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 md:h-5 md:w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
          </svg>
        </span>
      </div>

      <div className="text-6xl md:text-2xl font-extrabold mt-5 md:mt-2">33</div>

      <p className="text-gray-600 text-xl md:text-sm mt-4 md:mt-1">
        This week (+12% from last week)
      </p>

      <p className="text-red-600 text-xl md:text-sm mt-4 md:mt-1 flex items-center gap-3 md:gap-1 font-bold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 md:h-4 md:w-4 text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
          <polyline points="16 17 22 17 22 11" />
        </svg>
        Above average
      </p>
    </div>
  );
}

export default LateArrivalsCard;
