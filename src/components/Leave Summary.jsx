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

const dataSets = {
  weekly: [
    { day: "Mon", Sick: 2, Vacation: 4, Personal: 1, Emergency: 0 },
    { day: "Tue", Sick: 1, Vacation: 3, Personal: 2, Emergency: 1 },
    { day: "Wed", Sick: 2, Vacation: 3, Personal: 1, Emergency: 0 },
    { day: "Thu", Sick: 1, Vacation: 4, Personal: 2, Emergency: 0 },
    { day: "Fri", Sick: 2, Vacation: 5, Personal: 1, Emergency: 1 },
    { day: "Sat", Sick: 0, Vacation: 1, Personal: 1, Emergency: 0 },
    { day: "Sun", Sick: 0, Vacation: 1, Personal: 0, Emergency: 0 },
  ],
  monthly: [
    { week: "Week 1", Sick: 5, Vacation: 12, Personal: 4, Emergency: 1 },
    { week: "Week 2", Sick: 4, Vacation: 11, Personal: 3, Emergency: 2 },
    { week: "Week 3", Sick: 6, Vacation: 10, Personal: 5, Emergency: 0 },
    { week: "Week 4", Sick: 3, Vacation: 13, Personal: 2, Emergency: 1 },
  ],
  yearly: [
    { month: "Jan", Sick: 15, Vacation: 50, Personal: 20, Emergency: 5 },
    { month: "Feb", Sick: 14, Vacation: 48, Personal: 18, Emergency: 6 },
    { month: "Mar", Sick: 16, Vacation: 45, Personal: 22, Emergency: 4 },
    { month: "Apr", Sick: 13, Vacation: 52, Personal: 19, Emergency: 3 },
    { month: "May", Sick: 17, Vacation: 49, Personal: 21, Emergency: 5 },
    { month: "Jun", Sick: 15, Vacation: 51, Personal: 20, Emergency: 4 },
    { month: "Jul", Sick: 14, Vacation: 47, Personal: 23, Emergency: 6 },
    { month: "Aug", Sick: 16, Vacation: 50, Personal: 18, Emergency: 5 },
    { month: "Sep", Sick: 15, Vacation: 48, Personal: 20, Emergency: 4 },
    { month: "Oct", Sick: 14, Vacation: 49, Personal: 19, Emergency: 5 },
    { month: "Nov", Sick: 16, Vacation: 46, Personal: 21, Emergency: 6 },
    { month: "Dec", Sick: 15, Vacation: 50, Personal: 20, Emergency: 4 },
  ],
};

const LeaveSummary = () => {
  const [period, setPeriod] = useState("weekly");

  const xAxisKey = {
    weekly: "day",
    monthly: "week",
    yearly: "month",
  };

  const getButtonStyles = (buttonPeriod) =>
    period === buttonPeriod
      ? "px-3 py-1 text-sm rounded-full bg-blue-600 text-white"
      : "px-3 py-1 text-sm rounded-full border border-gray-300 text-gray-600";

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="p-2 bg-white border border-gray-200 rounded shadow-lg text-sm">
          <p className="font-medium">{payload[0].payload[xAxisKey[period]]}</p>
          <p><span className="font-bold text-red-600">Sick:</span> {payload[0].payload.Sick}</p>
          <p><span className="font-bold text-blue-600">Vacation:</span> {payload[0].payload.Vacation}</p>
          <p><span className="font-bold text-purple-600">Personal:</span> {payload[0].payload.Personal}</p>
          <p><span className="font-bold text-yellow-600">Emergency:</span> {payload[0].payload.Emergency}</p>
        </div>
      );
    }
    return null;
  };

  const totals = {
    weekly: {
      Sick: dataSets.weekly.reduce((sum, day) => sum + day.Sick, 0),
      Vacation: dataSets.weekly.reduce((sum, day) => sum + day.Vacation, 0),
      Personal: dataSets.weekly.reduce((sum, day) => sum + day.Personal, 0),
      Emergency: dataSets.weekly.reduce((sum, day) => sum + day.Emergency, 0),
    },
    monthly: {
      Sick: dataSets.monthly.reduce((sum, week) => sum + week.Sick, 0),
      Vacation: dataSets.monthly.reduce((sum, week) => sum + week.Vacation, 0),
      Personal: dataSets.monthly.reduce((sum, week) => sum + week.Personal, 0),
      Emergency: dataSets.monthly.reduce((sum, week) => sum + week.Emergency, 0),
    },
    yearly: {
      Sick: dataSets.yearly.reduce((sum, month) => sum + month.Sick, 0),
      Vacation: dataSets.yearly.reduce((sum, month) => sum + month.Vacation, 0),
      Personal: dataSets.yearly.reduce((sum, month) => sum + month.Personal, 0),
      Emergency: dataSets.yearly.reduce((sum, month) => sum + month.Emergency, 0),
    },
  };

  return (
    <div className="p-6 bg-white shadow rounded-2xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-semibold flex items-center gap-2">
            📅 Leave Summary
          </h2>
          <p className="text-gray-500 text-sm">Leave types and counts taken</p>
        </div>
        <div className="space-x-2">
          <button
            className={getButtonStyles("weekly")}
            onClick={() => setPeriod("weekly")}
          >
            Weekly
          </button>
          <button
            className={getButtonStyles("monthly")}
            onClick={() => setPeriod("monthly")}
          >
            Monthly
          </button>
          <button
            className={getButtonStyles("yearly")}
            onClick={() => setPeriod("yearly")}
          >
            Yearly
          </button>
        </div>
      </div>

      {/* Chart */}
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={dataSets[period]} barGap={8} barSize={70}>
            <XAxis dataKey={xAxisKey[period]} stroke="#6b7280" fontSize={12} />
            <YAxis hide />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: "transparent" }} />
            <Legend
              formatter={(value) => (
                <span className="text-gray-600 font-medium">{value}</span>
              )}
              iconType="circle"
              iconSize={10}
            />
            <Bar dataKey="Sick" stackId="a" fill="#ef4444" name="Sick Leave" radius={[4, 4, 0, 0]} />
            <Bar dataKey="Vacation" stackId="a" fill="#3b82f6" name="Vacation" radius={[4, 4, 0, 0]} />
            <Bar dataKey="Personal" stackId="a" fill="#8b5cf6" name="Personal" radius={[4, 4, 0, 0]} />
            <Bar dataKey="Emergency" stackId="a" fill="#f59e0b" name="Emergency" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Totals */}
      <div className="flex justify-around mt-6 text-center">
        <div>
          <p className="text-red-500 text-lg font-semibold">{totals[period].Sick}</p>
          <p className="text-sm text-gray-600">Sick Leave</p>
        </div>
        <div>
          <p className="text-blue-500 text-lg font-semibold">{totals[period].Vacation}</p>
          <p className="text-sm text-gray-600">Vacation</p>
        </div>
        <div>
          <p className="text-purple-500 text-lg font-semibold">{totals[period].Personal}</p>
          <p className="text-sm text-gray-600">Personal</p>
        </div>
        <div>
          <p className="text-yellow-500 text-lg font-semibold">{totals[period].Emergency}</p>
          <p className="text-sm text-gray-600">Emergency</p>
        </div>
      </div>
    </div>
  );
};

export default LeaveSummary;
