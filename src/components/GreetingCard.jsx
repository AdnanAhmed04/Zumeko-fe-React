import React from "react";
import { Calendar, Building2, Users } from "lucide-react";

const GreetingCard = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-6 shadow-lg">
      {/* Top Section */}
      <div className="flex items-center space-x-3">
        <span className="text-3xl">👋</span>
        <div>
          <h2 className="text-xl font-bold">Good morning, Margelyn!</h2>
          <p className="text-sm opacity-90">Ready to make today productive?</p>
        </div>
      </div>

      {/* Info Pills */}
      <div className="flex flex-wrap gap-3 mt-6">
        <div className="flex items-center gap-2 bg-blue-500/40 px-3 py-1 rounded-full text-sm">
          <Calendar size={16} /> March 15, 2024
        </div>
        <div className="flex items-center gap-2 bg-blue-500/40 px-3 py-1 rounded-full text-sm">
          <Building2 size={16} /> All Branches
        </div>
        <div className="flex items-center gap-2 bg-blue-500/40 px-3 py-1 rounded-full text-sm">
          <Users size={16} /> 105 Active Employees
        </div>
      </div>

      {/* Divider */}
      <hr className="border-white/20 my-6" />

      {/* Footer */}
      <div className="flex justify-between text-xs opacity-80">
        <p>Your organization is running smoothly today</p>
        <p>Last updated: Just now</p>
      </div>
    </div>
  );
};

export default GreetingCard;
