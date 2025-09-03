import React from "react";

const GreetingCard = () => {
  return (
    <div className="bg-gradient-to-r from-blue-700 to-purple-500 text-white rounded-2xl p-8 shadow-lg">
      {/* Top Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 space-y-5 sm:space-y-0">
        <span className="text-5xl sm:text-3xl bg-blue-500 p-4 sm:p-2 rounded-full self-start sm:self-center">
          👋
        </span>
        <div>
          <h2 className="text-4xl sm:text-3xl font-extrabold sm:font-bold">
            Good morning, Margelyn!
          </h2>
          <p className="text-2xl sm:text-lg opacity-90">
            Ready to make today productive?
          </p>
        </div>
      </div>

      {/* Info Pills */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-5 sm:gap-3 mt-10 sm:mt-6 font-semibold">
        <div className="flex items-center gap-4 sm:gap-2 bg-blue-500/40 px-6 py-4 sm:px-4 sm:py-2 rounded-full text-xl sm:text-sm">
          <span className="text-3xl sm:text-xl">📅</span> March 15, 2024
        </div>
        <div className="flex items-center gap-4 sm:gap-2 bg-blue-500/40 px-6 py-4 sm:px-4 sm:py-2 rounded-full text-xl sm:text-sm">
          <span className="text-3xl sm:text-xl">🏢</span> All Branches
        </div>
        <div className="flex items-center gap-4 sm:gap-2 bg-blue-500/40 px-6 py-4 sm:px-4 sm:py-2 rounded-full text-xl sm:text-sm">
          <span className="text-3xl sm:text-xl">👥</span> 105 Active Employees
        </div>
      </div>

      {/* Divider */}
      <hr className="border-white/20 my-10 sm:my-6" />

      {/* Footer */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-2 text-xl sm:text-sm opacity-80">
        <p>Your organization is running smoothly today</p>
        <p>Last updated: Just now</p>
      </div>
    </div>
  );
};

export default GreetingCard;
