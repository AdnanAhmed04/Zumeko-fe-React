import React from "react";

const GreetingCard = () => {
  return (
    <div className="bg-gradient-to-r from-blue-700 to-purple-500 text-white rounded-2xl p-6 shadow-lg">
      {/* Top Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 space-y-3 sm:space-y-0">
        <span className="text-3xl bg-blue-500 p-1 rounded-full self-start sm:self-center">
          👋
        </span>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold">
            Good morning, Margelyn!
          </h2>
          <p className="text-base sm:text-lg opacity-90">
            Ready to make today productive?
          </p>
        </div>
      </div>

      {/* Info Pills */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-6 font-semibold">
        <div className="flex items-center gap-2 bg-blue-500/40 px-4 py-2 rounded-full text-sm">
          <span className="text-xl">📅</span> March 15, 2024
        </div>
        <div className="flex items-center gap-2 bg-blue-500/40 px-4 py-2 rounded-full text-sm">
          <span className="text-xl">🏢</span> All Branches
        </div>
        <div className="flex items-center gap-2 bg-blue-500/40 px-4 py-2 rounded-full text-sm">
          <span className="text-xl">👥</span> 105 Active Employees
        </div>
      </div>

      {/* Divider */}
      <hr className="border-white/20 my-6" />

      {/* Footer */}
      <div className="flex flex-col sm:flex-row justify-between gap-2 text-sm sm:text-md opacity-80">
        <p>Your organization is running smoothly today</p>
        <p>Last updated: Just now</p>
      </div>
    </div>
  );
};

export default GreetingCard;
