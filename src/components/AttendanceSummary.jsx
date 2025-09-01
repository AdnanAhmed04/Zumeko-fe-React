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

export default function AttendanceSummary() {
  const data = [
    { day: "Mon", ontime: 80, late: 10, absent: 5 },
    { day: "Tue", ontime: 75, late: 8, absent: 6 },
    { day: "Wed", ontime: 70, late: 12, absent: 8 },
    { day: "Thu", ontime: 82, late: 6, absent: 4 },
    { day: "Fri", ontime: 78, late: 9, absent: 7 },
    { day: "Sat", ontime: 60, late: 5, absent: 3 },
    { day: "Sun", ontime: 0, late: 0, absent: 0 },
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow border">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Attendance Summary</h2>
        <div className="flex gap-2">
          <button className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-700">
            Week
          </button>
          <button className="px-3 py-1 text-sm rounded-full border">
            Month
          </button>
          <button className="px-3 py-1 text-sm rounded-full border">
            Year
          </button>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} barSize={40}>
          <XAxis dataKey="day" />
          <YAxis hide />
          <Tooltip />
          <Legend />
          <Bar dataKey="ontime" stackId="a" fill="#22c55e" name="On-Time" />
          <Bar dataKey="late" stackId="a" fill="#eab308" name="Late" />
          <Bar dataKey="absent" stackId="a" fill="#ef4444" name="Absent" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
