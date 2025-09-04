import React from "react";

const GenderDiversity = () => {
  const total = 100;
  const maleCount = 65;
  const femaleCount = 35;

  const malePercentage = (maleCount / total) * 100;
  const femalePercentage = (femaleCount / total) * 100;

  // Circle properties
  const radius = 12.9155;
  const circumference = 2 * Math.PI * radius;

  // Stroke lengths
  const maleStroke = (malePercentage / 100) * circumference;
  const femaleStroke = (femalePercentage / 100) * circumference;

  return (
<div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200 h-full min-h-[400px] flex justify-between flex-col items-center">
      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-800 mb-6">
        Gender Diversity
      </h2>

      {/* Donut Chart */}
      <div className="relative w-48 h-48 flex items-center justify-center">
        <svg className="w-full h-full" viewBox="0 0 36 36">
          {/* Male Portion */}
          <circle
            cx="18"
            cy="18"
            r={radius}
            fill="none"
            stroke="#3b82f6"
            strokeWidth="8"
            strokeDasharray={`${maleStroke} ${circumference}`}
            strokeDashoffset="0"
            transform="rotate(-90 18 18)"
          />

          {/* Female Portion */}
          <circle
            cx="18"
            cy="18"
            r={radius}
            fill="none"
            stroke="#ec4899"
            strokeWidth="8"
            strokeDasharray={`${femaleStroke} ${circumference}`}
            strokeDashoffset={-maleStroke}
            transform="rotate(-90 18 18)"
          />
        </svg>

        {/* Centered Total */}
        <div className="absolute flex flex-col items-center justify-center">
          <span className="text-3xl font-bold text-gray-900">{total}</span>
          <p className="text-sm text-gray-500">Total</p>
        </div>
      </div>

      {/* Legend Boxes */}
      <div className="mt-6 w-full space-y-3 text-sm">
        {/* Male */}
        <div className="flex items-center justify-between bg-gray-50 p-3 rounded-xl">
          <div className="flex items-center">
            <span className="w-3.5 h-3.5 bg-blue-500 rounded-full mr-2"></span>
            <p className="text-gray-700">Male</p>
          </div>
          <div className="text-right">
            <p className="font-semibold text-gray-800">{maleCount}</p>
            <p className="text-gray-500 text-xs">
              {malePercentage.toFixed(1)}%
            </p>
          </div>
        </div>

        {/* Female */}
        <div className="flex items-center justify-between bg-gray-50 p-3 rounded-xl">
          <div className="flex items-center">
            <span className="w-3.5 h-3.5 bg-pink-500 rounded-full mr-2"></span>
            <p className="text-gray-700">Female</p>
          </div>
          <div className="text-right">
            <p className="font-semibold text-gray-800">{femaleCount}</p>
            <p className="text-gray-500 text-xs">
              {femalePercentage.toFixed(1)}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenderDiversity;
