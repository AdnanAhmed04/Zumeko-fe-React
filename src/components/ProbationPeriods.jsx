import React from 'react';

const ProbationPeriods = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 w-64 h-48 flex flex-col">
      <div className="flex items-center mb-2">
        <span className="text-blue-500 text-xl mr-2">📅</span>
        <h2 className="text-lg font-semibold">Probation Periods Ending Soon</h2>
      </div>
      <p className="text-gray-500 text-sm mb-4">Next 7 days</p>
      <div className="flex items-center justify-center h-full text-gray-500 text-sm">
        No probation periods ending soon in the next 7 days
      </div>
    </div>
  );
};

export default ProbationPeriods;