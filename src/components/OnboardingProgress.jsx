import React, { useEffect, useState } from "react";
import { getData } from "../services/api"; 
import endpoints from "../services/endpoints";

const OnboardingProgress = () => {
  const [total, setTotal] = useState(0);
  const [completed, setCompleted] = useState(0);
  const [requested, setRequested] = useState(0);

  useEffect(() => {
    const fetchOnboarding = async () => {
      try {
        const response = await getData(endpoints.onboardingRequests);
        console.log("onboarding response", response);

        const data = response?.data || response || {};

        setTotal(data.total || 0);
        setCompleted(data.completed || 0);
        setRequested(data.requested || 0);
      } catch (error) {
        console.error("Error fetching onboarding progress:", error);
      }
    };

    fetchOnboarding();
  }, []);

  const completedPercentage = total > 0 ? (completed / total) * 100 : 0;
  const requestedPercentage = total > 0 ? (requested / total) * 100 : 0;

  const radius = 12.9155;
  const circumference = 2 * Math.PI * radius;

  const completedStroke = (completedPercentage / 100) * circumference;
  const requestedStroke = (requestedPercentage / 100) * circumference;

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200 h-full min-h-[400px] flex justify-between flex-col items-center">

      <h2 className="text-xl md:text-lg font-semibold text-gray-800 mb-6">
        Onboarding Progress
      </h2>

      <div className="relative w-48 h-48 flex items-center justify-center">
        <svg className="w-full h-full" viewBox="0 0 36 36">
          {/* Completed */}
          <circle
            cx="18"
            cy="18"
            r={radius}
            fill="none"
            stroke="#22c55e"
            strokeWidth="8"
            strokeDasharray={`${completedStroke} ${circumference}`}
            strokeDashoffset="0"
            transform="rotate(-90 18 18)"
          />

          {/* Requested */}
          <circle
            cx="18"
            cy="18"
            r={radius}
            fill="none"
            stroke="#f97316"
            strokeWidth="8"
            strokeDasharray={`${requestedStroke} ${circumference}`}
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

        {/* Requested */}
        <div className="flex items-center justify-between bg-gray-50 p-3 rounded-xl">
          <div className="flex items-center">
            <span className="w-3.5 h-3.5 bg-orange-500 rounded-full mr-2"></span>
            <p className="text-gray-700">Requested</p>
          </div>
          <div className="text-right">
            <p className="font-semibold text-gray-800">{requested}</p>
            <p className="text-gray-500 text-xs">
              {requestedPercentage.toFixed(1)}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingProgress;
