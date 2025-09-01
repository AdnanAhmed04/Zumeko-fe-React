import React from 'react';

const EmploymentStatus = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 w-64 h-72 flex flex-col items-center">
      <h2 className="text-lg font-semibold mb-4">Employment Status</h2>
      <div className="w-32 h-32 flex items-center justify-center relative">
        <div className="absolute w-32 h-32 bg-blue-400 rounded-full"></div>
        <div className="absolute w-32 h-32 bg-purple-400 rounded-full transform -rotate-90 origin-bottom-left" style={{ clipPath: 'polygon(0 0, 81% 0, 50% 100%)' }}></div>
        <div className="absolute w-32 h-32 bg-orange-400 rounded-full transform -rotate-90 origin-bottom-left" style={{ clipPath: 'polygon(81% 0, 88.6% 0, 50% 100%)' }}></div>
        <div className="absolute flex items-center justify-center w-20 h-20 bg-white rounded-full">
          <span className="text-2xl font-bold">105</span>
          <p className="text-xs text-gray-500">Total</p>
        </div>
      </div>
      <div className="mt-4 space-y-2 w-full text-sm">
        <div className="flex items-center">
          <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
          <p className="flex-1">Full-time</p>
          <p className="ml-auto">85</p>
          <p className="ml-2 text-gray-500">81.0%</p>
        </div>
        <div className="flex items-center">
          <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
          <p className="flex-1">Part-time</p>
          <p className="ml-auto">12</p>
          <p className="ml-2 text-gray-500">11.4%</p>
        </div>
        <div className="flex items-center">
          <span className="w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
          <p className="flex-1">Contract</p>
          <p className="ml-auto">8</p>
          <p className="ml-2 text-gray-500">7.6%</p>
        </div>
      </div>
    </div>
  );
};

export default EmploymentStatus;