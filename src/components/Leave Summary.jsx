import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { getData } from "../services/api";
import endpoints from "../services/endpoints";

export default function LeaveSummary() {
  const [period, setPeriod] = useState("weekly");
  const [data, setData] = useState([]);

  const xAxisKey = {
    weekly: "day",
    monthly: "week",
    yearly: "month",
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getData(`${endpoints.leaveStats}?unit=${period}`);
        
        // ✅ Console raw response
        console.log(`🌍 Raw ${period} Leave API Response:`, res);

        if (res && res.data) {
          // Transform API data to chart format
          const transformed = res.data.map((item) => ({
            label: item.label || item.day || item.week || item.month,
            Sick: item.Sick || 0,
            Vacation: item.Vacation || 0,
            Personal: item.Personal || 0,
            Emergency: item.Emergency || 0,
          }));

          // ✅ Console transformed data
          console.log(`📊 Transformed ${period} Leave Data:`, transformed);

          setData(transformed);
        }
      } catch (err) {
        console.error(`❌ ${period} Leave fetch error:`, err);
      }
    };

    fetchData();
  }, [period]);

  const getButtonStyles = (buttonPeriod) =>
    period === buttonPeriod
      ? "px-3 py-1 text-sm rounded-full bg-blue-600 text-white"
      : "px-3 py-1 text-sm rounded-full border border-gray-300 text-gray-600";

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const row = payload[0].payload;
      return (
        <div className="p-2 bg-white border border-gray-200 rounded shadow-lg text-sm">
          <p className="font-medium">{row.label}</p>
          <p><span className="font-bold text-red-600">Sick:</span> {row.Sick}</p>
          <p><span className="font-bold text-blue-600">Vacation:</span> {row.Vacation}</p>
          <p><span className="font-bold text-purple-600">Personal:</span> {row.Personal}</p>
          <p><span className="font-bold text-yellow-600">Emergency:</span> {row.Emergency}</p>
        </div>
      );
    }
    return null;
  };

  // Calculate totals dynamically
  const totals = data.reduce(
    (acc, curr) => {
      acc.Sick += curr.Sick;
      acc.Vacation += curr.Vacation;
      acc.Personal += curr.Personal;
      acc.Emergency += curr.Emergency;
      return acc;
    },
    { Sick: 0, Vacation: 0, Personal: 0, Emergency: 0 }
  );

  return (
    <div className="p-3 md:p-6 bg-white shadow rounded-2xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg md:text-xl font-semibold text-gray-800">
            Leave Summary
          </h2>
          <p className="text-gray-500 text-sm">Leave types and counts taken</p>
        </div>
        <div className="flex gap-1 md:gap-3 md:text-lg">
          <button className={getButtonStyles("weekly")} onClick={() => setPeriod("weekly")}>Weekly</button>
          <button className={getButtonStyles("monthly")} onClick={() => setPeriod("monthly")}>Monthly</button>
          <button className={getButtonStyles("yearly")} onClick={() => setPeriod("yearly")}>Yearly</button>
        </div>
      </div>

      {/* Chart */}
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={8} barSize={50}>
            <XAxis dataKey="label" stroke="#6b7280" tick={{ fontSize: 14, fontWeight: 600, fill: "#374151" }} />
            <YAxis hide />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: "transparent" }} />
            <Legend
              formatter={(value) => <span className="text-gray-600 font-normal">{value}</span>}
              iconType="circle"
              iconSize={12}
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
          <p className="text-red-500 text-xl md:text-lg font-semibold">{totals.Sick}</p>
          <p className="text-md md:text-sm text-gray-600">Sick Leave</p>
        </div>
        <div>
          <p className="text-blue-500 text-xl md:text-lg font-semibold">{totals.Vacation}</p>
          <p className="text-md md:text-sm text-gray-600">Vacation</p>
        </div>
        <div>
          <p className="text-purple-500 text-xl md:text-lg font-semibold">{totals.Personal}</p>
          <p className="text-md md:text-sm text-gray-600">Personal</p>
        </div>
        <div>
          <p className="text-yellow-500 text-xl md:text-lg font-semibold">{totals.Emergency}</p>
          <p className="text-md md:text-sm text-gray-600">Emergency</p>
        </div>
      </div>
    </div>
  );
}
