import React, { useEffect, useState } from "react";
import { getData } from "../services/api"; // use relative path if alias not set
import endpoints from "../services/endpoints";

const EmploymentStatus = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchEmploymentStatus = async () => {
      try {
        const response = await getData(endpoints.employmentStatus);
        console.log("employment status raw response", response);

        // Safely extract data without crashing
        const status =
          response?.data?.employmentStatus ||
          response?.data?.data?.employmentStatus ||
          response?.employmentStatus ||
          {};

        setData(status);
      } catch (error) {
        console.error("Error fetching employment status:", error);
      }
    };

    fetchEmploymentStatus();
  }, []);

  if (!data || Object.keys(data).length === 0) {
    return (
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200 h-full min-h-[400px] flex justify-center items-center">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  const categories = Object.entries(data); // e.g. [["Head of Admin", 3], ["SQA", 5], ["Unassigned", 2]]
  const total = categories.reduce((sum, [, value]) => sum + value, 0);

  // Circle properties
  const radius = 12.9155;
  const circumference = 2 * Math.PI * radius;

  // Define a color palette
  const colors = ["#3b82f6", "#a855f7", "#f97316", "#10b981", "#ef4444", "#6366f1"];

  // Compute stroke data
  let offset = 0;
  const circleSegments = categories.map(([label, value], index) => {
    const percentage = (value / total) * 100;
    const strokeLength = (percentage / 100) * circumference;
    const segment = (
      <circle
        key={label}
        cx="18"
        cy="18"
        r={radius}
        fill="none"
        stroke={colors[index % colors.length]}
        strokeWidth="8"
        strokeDasharray={`${strokeLength} ${circumference}`}
        strokeDashoffset={-offset}
        transform="rotate(-90 18 18)"
      />
    );
    offset += strokeLength;
    return { segment, label, value, percentage, color: colors[index % colors.length] };
  });

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200 h-full min-h-[400px] flex justify-between flex-col items-center">
      {/* Title */}
      <h2 className="text-xl md:text-lg font-semibold text-gray-800 mb-6">
        Employment Status
      </h2>

      {/* Donut Chart */}
      <div className="relative w-48 h-48 flex items-center justify-center">
        <svg className="w-full h-full" viewBox="0 0 36 36">
          {circleSegments.map((c) => c.segment)}
        </svg>

        {/* Centered Total */}
        <div className="absolute flex flex-col items-center justify-center">
          <span className="text-3xl font-bold text-gray-900">{total}</span>
          <p className="text-lg md:text-sm text-gray-500">Total</p>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-6 w-full space-y-3 text-lg md:text-sm">
        {circleSegments.map(({ label, value, percentage, color }) => (
          <div
            key={label}
            className="flex items-center justify-between bg-gray-50 p-3 rounded-xl"
          >
            <div className="flex items-center">
              <span
                className="w-3.5 h-3.5 rounded-full mr-2"
                style={{ backgroundColor: color }}
              ></span>
              <p className="text-gray-700">{label}</p>
            </div>
            <div className="text-right">
              <p className="font-semibold text-gray-800">{value}</p>
              <p className="text-gray-500 text-md md:text-xs">
                {percentage.toFixed(1)}%
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmploymentStatus;
