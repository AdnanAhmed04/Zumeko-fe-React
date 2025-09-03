import React from "react";

const OnboardingProgress = () => {
  const total = 11;
  const completed = 8;
  const inProgress = 3;

  const completedPercentage = (completed / total) * 100;
  const inProgressPercentage = (inProgress / total) * 100;

  // Circle properties
  const radius = 12.9155;
  const circumference = 2 * Math.PI * radius;

  // Stroke lengths
  const completedStroke = (completedPercentage / 100) * circumference;
  const inProgressStroke = (inProgressPercentage / 100) * circumference;

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 w-full max-w-sm flex flex-col items-center">
      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-800 mb-6">
        Onboarding Progress
      </h2>

      {/* Donut Chart */}
      <div className="relative w-48 h-48 flex items-center justify-center">
        <svg className="w-full h-full" viewBox="0 0 36 36">
          {/* Completed */}
          <circle
            cx="18"
            cy="18"
            r={radius}
            fill="none"
            stroke="#22c55e" // green
            strokeWidth="8"
            strokeDasharray={`${completedStroke} ${circumference}`}
            strokeDashoffset="0"
            transform="rotate(-90 18 18)"
          />

          {/* In Progress */}
          <circle
            cx="18"
            cy="18"
            r={radius}
            fill="none"
            stroke="#f97316" // orange
            strokeWidth="8"
            strokeDasharray={`${inProgressStroke} ${circumference}`}
            strokeDashoffset={-completedStroke}
            transform="rotate(-90 18 18)"
          />
        </svg>

        {/* Centered Total */}
        <div className="absolute flex flex-col items-center justify-center">
          <span className="text-3xl font-bold text-gray-900">{total}</span>
          <p className="text-sm text-gray-500">Total</p>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-6 w-full space-y-3 text-sm">
        {/* Completed */}
        <div className="flex items-center justify-between bg-gray-50 p-3 rounded-xl">
          <div className="flex items-center">
            <span className="w-3.5 h-3.5 bg-green-500 rounded-full mr-2"></span>
            <p className="text-gray-700">Completed</p>
          </div>
          <div className="text-right">
            <p className="font-semibold text-gray-800">{completed}</p>
            <p className="text-gray-500 text-xs">
              {completedPercentage.toFixed(1)}%
            </p>
          </div>
        </div>

        {/* In Progress */}
        <div className="flex items-center justify-between bg-gray-50 p-3 rounded-xl">
          <div className="flex items-center">
            <span className="w-3.5 h-3.5 bg-orange-500 rounded-full mr-2"></span>
            <p className="text-gray-700">In Progress</p>
          </div>
          <div className="text-right">
            <p className="font-semibold text-gray-800">{inProgress}</p>
            <p className="text-gray-500 text-xs">
              {inProgressPercentage.toFixed(1)}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingProgress;
