import React, { useState } from "react";
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
  const [period, setPeriod] = useState("week");
  const [fontSize, setFontSize] = useState(14); // default for small screens

  const dataSets = {
    week: [
      { day: "Mon", ontime: 80, late: 10, absent: 5 },
      { day: "Tue", ontime: 75, late: 8, absent: 6 },
      { day: "Wed", ontime: 70, late: 12, absent: 8 },
      { day: "Thu", ontime: 82, late: 6, absent: 4 },
      { day: "Fri", ontime: 78, late: 9, absent: 7 },
      { day: "Sat", ontime: 60, late: 5, absent: 3 },
      { day: "Sun", ontime: 0, late: 0, absent: 0 },
    ],
    month: [
      { week: "Week 1", ontime: 320, late: 35, absent: 20 },
      { week: "Week 2", ontime: 310, late: 40, absent: 25 },
      { week: "Week 3", ontime: 300, late: 45, absent: 30 },
      { week: "Week 4", ontime: 325, late: 30, absent: 15 },
    ],
    year: [
      { month: "Jan", ontime: 950, late: 100, absent: 50 },
      { month: "Feb", ontime: 900, late: 120, absent: 60 },
      { month: "Mar", ontime: 920, late: 110, absent: 55 },
      { month: "Apr", ontime: 930, late: 105, absent: 52 },
      { month: "May", ontime: 910, late: 115, absent: 58 },
      { month: "Jun", ontime: 940, late: 108, absent: 54 },
      { month: "Jul", ontime: 960, late: 102, absent: 51 },
      { month: "Aug", ontime: 970, late: 98, absent: 49 },
      { month: "Sep", ontime: 950, late: 100, absent: 50 },
      { month: "Oct", ontime: 930, late: 105, absent: 52 },
      { month: "Nov", ontime: 920, late: 110, absent: 55 },
      { month: "Dec", ontime: 940, late: 108, absent: 54 },
    ],
  };

  const xAxisKey = {
    week: "day",
    month: "week",
    year: "month",
  };

  const getButtonStyles = (buttonPeriod) =>
    period === buttonPeriod
      ? "px-4 py-1.5 text-sm rounded-full bg-green-100 text-green-700 font-medium"
      : "px-4 py-1.5 text-sm rounded-full border border-gray-300 text-gray-600 ";

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="p-2 bg-gray-50 border border-gray-200 rounded  text-md">
          <p className="font-medium">{payload[0].payload[xAxisKey[period]]}</p>
          <p>
            <span className="font-bold text-green-600">On-Time:</span>{" "}
            {payload[0].payload.ontime}
          </p>
          <p>
            <span className="font-bold text-yellow-600">Late:</span>{" "}
            {payload[0].payload.late}
          </p>
          <p>
            <span className="font-bold text-red-600">Absent:</span>{" "}
            {payload[0].payload.absent}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="p-3 md:p-6 bg-white rounded-2xl  border-2 border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg md:text-xl font-semibold text-gray-800">
          Attendance Summary
        </h2>
        <div className="flex gap-3 text-md  md:text-lg ">
          <button
            className={getButtonStyles("week")}
            onClick={() => setPeriod("week")}
          >
            Week
          </button>
          <button
            className={getButtonStyles("month")}
            onClick={() => setPeriod("month")}
          >
            Month
          </button>
          <button
            className={getButtonStyles("year")}
            onClick={() => setPeriod("year")}
          >
            Year
          </button>
        </div>
      </div>

     <ResponsiveContainer width="100%" height={300}>
  <BarChart
    data={dataSets[period]}
    barGap={0}
    barSize={70} // ⬅️ increased from 30 to 50
  >
<XAxis dataKey={xAxisKey[period]} stroke="#6b7280" tick={{ fontSize, fontWeight: 600, fill: "#374151" }} />
   <YAxis hide />
    <Tooltip content={<CustomTooltip />} cursor={{ fill: "transparent" }} />
    <Legend
      formatter={(value) => (
        <span className="text-gray-600 font-medium">{value}</span>
      )}
      iconType="circle"
      iconSize={12}
    />

    {/* On-Time */}
    <Bar
      dataKey="ontime"
      stackId="a"
      fill="#22c55e"
      name="On-Time"
      radius={[4, 4, 0, 0]}
    />

    {/* Late */}
    <Bar
      dataKey="late"
      stackId="a"
      fill="#eab308"
      name="Late"
      radius={[4, 4, 0, 0]}
    />

    {/* Absent */}
    <Bar
      dataKey="absent"
      stackId="a"
      fill="#ef4444"
      name="Absent"
      radius={[4, 4, 0, 0]}
    />
  </BarChart>
</ResponsiveContainer>

    </div>
  );
}
