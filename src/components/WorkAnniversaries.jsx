import React from 'react';

const WorkAnniversaries = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 w-64 h-48 flex flex-col">
      <div className="flex items-center mb-2">
        <span className="text-blue-500 text-xl mr-2">🎉</span>
        <h2 className="text-lg font-semibold">Work Anniversaries</h2>
      </div>
      <p className="text-gray-500 text-sm mb-4">Next 7 days</p>
      <div className="space-y-2">
        <div className="flex items-center bg-gray-50 p-2 rounded-lg">
          <div className="w-8 h-8 bg-gray-200 rounded-full mr-2"></div>
          <div>
            <p className="text-gray-800 text-sm">Jin Wei Yee Hed</p>
            <p className="text-gray-500 text-xs">jinwei@eazio.com</p>
          </div>
          <div className="ml-auto text-right">
            <p className="text-blue-500 text-sm">Mar 20</p>
            <p className="text-gray-500 text-xs">2 years</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkAnniversaries;