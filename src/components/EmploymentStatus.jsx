import React from "react";

const EmploymentStatus = () => {
  const total = 105;
  const fullTime = 85;
  const partTime = 12;
  const contract = 8;

  const fullTimePercentage = (fullTime / total) * 100;
  const partTimePercentage = (partTime / total) * 100;
  const contractPercentage = (contract / total) * 100;

  // Circle properties
  const radius = 12.9155;
  const circumference = 2 * Math.PI * radius;

  // Stroke lengths
  const fullTimeStroke = (fullTimePercentage / 100) * circumference;
  const partTimeStroke = (partTimePercentage / 100) * circumference;
  const contractStroke = (contractPercentage / 100) * circumference;

  return (
<div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200 h-full min-h-[400px] flex justify-between flex-col items-center">
      {/* Title */}
      <h2 className="text-xl md:text-lg font-semibold text-gray-800 mb-6">
        Employment Status
      </h2>

      {/* Donut Chart */}
      <div className="relative w-48 h-48 flex items-center justify-center">
        <svg className="w-full h-full" viewBox="0 0 36 36">
          {/* Full-time */}
          <circle
            cx="18"
            cy="18"
            r={radius}
            fill="none"
            stroke="#3b82f6" // blue
            strokeWidth="8"
            strokeDasharray={`${fullTimeStroke} ${circumference}`}
            strokeDashoffset="0"
            transform="rotate(-90 18 18)"
          />

          {/* Part-time */}
          <circle
            cx="18"
            cy="18"
            r={radius}
            fill="none"
            stroke="#a855f7" // purple
            strokeWidth="8"
            strokeDasharray={`${partTimeStroke} ${circumference}`}
            strokeDashoffset={-fullTimeStroke}
            transform="rotate(-90 18 18)"
          />

          {/* Contract */}
          <circle
            cx="18"
            cy="18"
            r={radius}
            fill="none"
            stroke="#f97316" // orange
            strokeWidth="8"
            strokeDasharray={`${contractStroke} ${circumference}`}
            strokeDashoffset={-(fullTimeStroke + partTimeStroke)}
            transform="rotate(-90 18 18)"
          />
        </svg>

        {/* Centered Total */}
        <div className="absolute flex flex-col items-center justify-center">
          <span className="text-3xl font-bold text-gray-900">{total}</span>
          <p className="text-lg md:text-sm text-gray-500">Total</p>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-6 w-full space-y-3 text-lg md:text-sm">
        {/* Full-time */}
        <div className="flex items-center justify-between bg-gray-50 p-3 rounded-xl">
          <div className="flex items-center">
            <span className="w-3.5 h-3.5 bg-blue-500 rounded-full mr-2"></span>
            <p className="text-gray-700">Full-time</p>
          </div>
          <div className="text-right">
            <p className="font-semibold text-gray-800">{fullTime}</p>
            <p className="text-gray-500 test-md md:text-xs">
              {fullTimePercentage.toFixed(1)}%
            </p>
          </div>
        </div>

        {/* Part-time */}
        <div className="flex items-center justify-between bg-gray-50 p-3 rounded-xl">
          <div className="flex items-center">
            <span className="w-3.5 h-3.5 bg-purple-500 rounded-full mr-2"></span>
            <p className="text-gray-700">Part-time</p>
          </div>
          <div className="text-right">
            <p className="font-semibold text-gray-800">{partTime}</p>
            <p className="text-gray-500 text-lg md:text-xs">
              {partTimePercentage.toFixed(1)}%
            </p>
          </div>
        </div>

        {/* Contract */}
        <div className="flex items-center justify-between bg-gray-50 p-3 rounded-xl">
          <div className="flex items-center">
            <span className="w-3.5 h-3.5 bg-orange-500 rounded-full mr-2"></span>
            <p className="text-gray-700">Contract</p>
          </div>
          <div className="text-right">
            <p className="font-semibold text-gray-800">{contract}</p>
            <p className="text-gray-500 test-md md:text-xs">
              {contractPercentage.toFixed(1)}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmploymentStatus;
