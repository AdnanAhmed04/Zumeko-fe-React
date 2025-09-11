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

export default function AttendanceSummary() {
  const [period, setPeriod] = useState("week");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getData(
          `${endpoints.attendanceSummary}?unit=${period}`
        );

        if (res && res.data) {
          const transformed = res.data.map((item) => {
            const summary = Array.isArray(item.summary) ? item.summary : [];

            let ontime =
              item.ontime ??
              Number(summary.find((s) => s.status === "ON_TIME")?.count ?? 0);
            let late =
              item.late ??
              Number(
                summary.find((s) => s.status === "LATE_ARRIVED")?.count ?? 0
              );
            let absent =
              item.absent ??
              Number(summary.find((s) => s.status === "ABSENT")?.count ?? 0);

            const total = ontime + late + absent;

            return {
              label: item.label ?? item.day ?? item.name ?? "—",
              ontime,
              late,
              absent,
              placeholder: total === 0 ? 1 : 0, // ✅ tiny baseline bar only if all 0
            };
          });

          setData(transformed);
        }
      } catch (err) {
        console.error(`❌ ${period} attendance fetch error:`, err);
      }
    };

    fetchData();
  }, [period]);

  const getButtonStyles = (buttonPeriod) =>
    period === buttonPeriod
      ? "px-4 py-1.5 text-sm rounded-full bg-green-100 text-green-700 font-medium"
      : "px-4 py-1.5 text-sm rounded-full border border-gray-300 text-gray-600 ";

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const row = payload[0].payload;
      return (
        <div className="p-2 bg-white border border-gray-200 rounded shadow-lg text-sm">
          <p className="font-medium">{row.label}</p>
          <p>
            <span className="font-bold text-green-600">On-Time:</span>{" "}
            {row.ontime}
          </p>
          <p>
            <span className="font-bold text-yellow-600">Late:</span> {row.late}
          </p>
          <p>
            <span className="font-bold text-red-600">Absent:</span> {row.absent}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="p-3 md:p-6 bg-white rounded-2xl border-2 border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg md:text-xl font-semibold text-gray-800">
          Attendance Summary
        </h2>
        <div className="flex gap-3 text-md md:text-lg">
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

      {data.length > 0 ? (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} barGap={8} barSize={60}>
            <XAxis
              dataKey="label"
              stroke="#6b7280"
              tick={{ fontSize: 14, fontWeight: 600, fill: "#374151" }}
            />
            <YAxis hide />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: "transparent" }}
            />
            <Legend
              formatter={(value) => (
                <span className="text-gray-600 font-medium">{value}</span>
              )}
              iconType="circle"
              iconSize={12}
              payload={[
                { value: "On-Time", type: "circle", color: "#2291c5" },
                { value: "Late", type: "circle", color: "#eab308" },
                { value: "Absent", type: "circle", color: "#ef4444" },
                { value: "No data", type: "circle", color: "#33c05b" }, // ✅ static legend entry
              ]}
            />

            {/* ✅ Baseline tiny bar */}
            <Bar
              dataKey="placeholder"
              stackId="a"
              legendType="none"
              shape={(props) => {
                const { x, width, height, y } = props;
                return (
                  <rect
                    x={x}
                    y={y + height - 2}
                    width={width}
                    height={2}
                    fill="#33c05b"
                    rx={1}
                    ry={1}
                  />
                );
              }}
            />

            {/* Actual attendance data */}
            <Bar
              dataKey="ontime"
              stackId="a"
              fill="#2291c5"
              name="On-Time"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="late"
              stackId="a"
              fill="#eab308"
              name="Late"
              radius={[4, 4, 0, 0]}
            />

            <Bar
              dataKey="No data"
              stackId="a"
              fill="#33c05b"
              name="No data"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="absent"
              stackId="a"
              fill="#ef4444"
              name="Absent"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <div className="text-center text-gray-500 py-10">
          📭 No data available
        </div>
      )}
    </div>
  );
}
