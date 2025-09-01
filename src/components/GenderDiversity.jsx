import React from 'react';

const GenderDiversity = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 w-64 h-72 flex flex-col items-center">
      <h2 className="text-lg font-semibold mb-4">Gender Diversity</h2>
      <div className="w-32 h-32 flex items-center justify-center relative">
        <div className="absolute w-32 h-32 bg-blue-400 rounded-full"></div>
        <div className="absolute w-32 h-32 bg-pink-400 rounded-full transform -rotate-90 origin-bottom-left" style={{ clipPath: 'polygon(0 0, 65% 0, 50% 100%)' }}></div>
        <div className="absolute flex items-center justify-center w-20 h-20 bg-white rounded-full">
          <span className="text-2xl font-bold">105</span>
          <p className="text-xs text-gray-500">Total</p>
        </div>
      </div>
      <div className="mt-4 space-y-2 w-full text-sm">
        <div className="flex items-center">
          <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
          <p className="flex-1">Male</p>
          <p className="ml-auto">65</p>
          <p className="ml-2 text-gray-500">65.0%</p>
        </div>
        <div className="flex items-center">
          <span className="w-3 h-3 bg-pink-500 rounded-full mr-2"></span>
          <p className="flex-1">Female</p>
          <p className="ml-auto">35</p>
          <p className="ml-2 text-gray-500">35.0%</p>
        </div>
      </div>
    </div>
  );
};

export default GenderDiversity;