import React from 'react';

const UpcomingBirthdays = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 w-64 h-48 flex flex-col">
      <div className="flex items-center mb-2">
        <span className="text-blue-500 text-xl mr-2">🎁</span>
        <h2 className="text-lg font-semibold">Upcoming Birthdays</h2>
      </div>
      <p className="text-gray-500 text-sm mb-4">Next 7 days</p>
      <div className="space-y-2">
        <div className="flex items-center bg-gray-50 p-2 rounded-lg">
          <div className="w-8 h-8 bg-gray-200 rounded-full mr-2"></div>
          <div>
            <p className="text-gray-800 text-sm">Himanshu Sen Sentu Saik...</p>
            <p className="text-gray-500 text-xs">himanshu@eazio.com</p>
          </div>
          <p className="ml-auto text-blue-500 text-sm">Mar 15</p>
        </div>
        <div className="flex items-center bg-gray-50 p-2 rounded-lg">
          <div className="w-8 h-8 bg-gray-200 rounded-full mr-2"></div>
          <div>
            <p className="text-gray-800 text-sm">Sarah Johnson</p>
            <p className="text-gray-500 text-xs">sarah@eazio.com</p>
          </div>
          <p className="ml-auto text-blue-500 text-sm">Mar 18</p>
        </div>
      </div>
    </div>
  );
};

export default UpcomingBirthdays;