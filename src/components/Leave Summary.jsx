import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", Sick: 2, Vacation: 4, Personal: 1, Emergency: 0 },
  { day: "Tue", Sick: 1, Vacation: 3, Personal: 2, Emergency: 1 },
  { day: "Wed", Sick: 2, Vacation: 3, Personal: 1, Emergency: 0 },
  { day: "Thu", Sick: 1, Vacation: 4, Personal: 2, Emergency: 0 },
  { day: "Fri", Sick: 2, Vacation: 5, Personal: 1, Emergency: 1 },
  { day: "Sat", Sick: 0, Vacation: 1, Personal: 1, Emergency: 0 },
  { day: "Sun", Sick: 0, Vacation: 1, Personal: 0, Emergency: 0 },
];

const LeaveSummary = () => {
  return (
    <div className="p-6 bg-white shadow rounded-2xl">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-semibold flex items-center gap-2">
            📅 Leave Summary
          </h2>
          <p className="text-gray-500 text-sm">Leave types and counts taken</p>
        </div>
        <div className="space-x-2">
          <button className="px-3 py-1 text-sm rounded-full bg-blue-600 text-white">
            Weekly
          </button>
          <button className="px-3 py-1 text-sm rounded-full border">Monthly</button>
          <button className="px-3 py-1 text-sm rounded-full border">Yearly</button>
        </div>
      </div>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="day" />
            <YAxis hide />
            <Tooltip />
            <Legend />
            <Bar dataKey="Sick" stackId="a" fill="#ef4444" name="Sick Leave" />
            <Bar dataKey="Vacation" stackId="a" fill="#3b82f6" name="Vacation" />
            <Bar dataKey="Personal" stackId="a" fill="#8b5cf6" name="Personal" />
            <Bar dataKey="Emergency" stackId="a" fill="#f59e0b" name="Emergency" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex justify-around mt-6 text-center">
        <div>
          <p className="text-red-500 text-lg font-semibold">9</p>
          <p className="text-sm text-gray-600">Sick Leave</p>
        </div>
        <div>
          <p className="text-blue-500 text-lg font-semibold">29</p>
          <p className="text-sm text-gray-600">Vacation</p>
        </div>
        <div>
          <p className="text-purple-500 text-lg font-semibold">10</p>
          <p className="text-sm text-gray-600">Personal</p>
        </div>
        <div>
          <p className="text-yellow-500 text-lg font-semibold">2</p>
          <p className="text-sm text-gray-600">Emergency</p>
        </div>
      </div>
    </div>
  );
};

export default LeaveSummary;
