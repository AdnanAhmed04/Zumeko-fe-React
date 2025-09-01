import React from "react";
import { User } from "lucide-react";

export default function EmployeeCard({ data }) {
    return (
        <div className="w-64 bg-white shadow-md rounded-xl p-4 flex flex-col justify-between">
            {/* Left side */}
            <div>
                <div className="flex items-center gap-2 text-gray-500">
                    <User size={20} />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">{data.count.toLocaleString()}</h2>
            </div>

            {/* Right side */}
            <div className="bg-green-100 text-green-600 px-2 py-1 rounded-lg text-xs font-semibold flex items-center gap-1">
                <span>↑</span>
                <span>{data.growth}%</span>
                <p className="text-sm text-blue-600 font-medium">{data.desc}</p>

            </div>
        </div>
    );
}
