import React from "react";
import { Clock, Users, Activity, UserCheck } from "lucide-react";

const stats = [
  {
    title: "Late Arrivals",
    value: "33",
    description: "This week (↑12% from last week)",
    status: "Above average",
    statusColor: "text-red-600",
    bg: "bg-yellow-50",
    icon: <Clock className="w-6 h-6 text-blue-500" />,
  },
  {
    title: "Team Size",
    value: "105",
    description: "Active employees",
    status: "2 new hires",
    statusColor: "text-green-600",
    bg: "bg-white",
    icon: <Users className="w-6 h-6 text-blue-500" />,
  },
  {
    title: "Today's Activity",
    value: "89",
    description: "Employees checked in",
    status: "",
    statusColor: "",
    bg: "bg-white",
    icon: <Activity className="w-6 h-6 text-blue-500" />,
  },
  {
    title: "Attendance Rate",
    value: "98.6%",
    description: "This week (Target: 95%)",
    status: "Above target",
    statusColor: "text-green-600",
    bg: "bg-white",
    icon: <UserCheck className="w-6 h-6 text-blue-500" />,
  },
];

export default function DashboardCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((item, index) => (
        <div
          key={index}
          className={`p-5 rounded-xl shadow-sm border ${item.bg} flex flex-col justify-between`}
        >
          <div className="flex justify-between items-start">
            <div>
              <h4 className="text-gray-600 text-sm font-medium">{item.title}</h4>
              <h2 className="text-3xl font-bold text-gray-900">{item.value}</h2>
              <p className="text-sm text-gray-500">{item.description}</p>
              {item.status && (
                <p className={`text-sm mt-1 ${item.statusColor}`}>
                  ↗ {item.status}
                </p>
              )}
            </div>
            <div className="bg-gray-100 p-2 rounded-full">{item.icon}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
