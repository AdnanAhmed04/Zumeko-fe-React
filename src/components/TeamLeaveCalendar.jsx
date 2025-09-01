import React from 'react';

const TeamLeaveCalendar = () => {
  return (
    <div className="bg-blue-50 p-6 rounded-lg shadow-md border border-gray-200">
      <div className="flex items-center mb-4">
        <span className="text-blue-600 text-2xl mr-2">📅</span>
        <h2 className="text-xl font-semibold">Team Leave Calendar</h2>
      </div>
      <p className="text-gray-600 mb-4">Who's out this week</p>
      <div className="space-y-4">
        <div className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
            <div>
              <p className="text-gray-800">Alex Thompson</p>
              <p className="text-blue-500 flex items-center">
                <span className="w-4 h-4 bg-blue-500 rounded-full mr-1"></span>
                Vacation Leave
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-gray-600">3 days</p>
            <p className="text-gray-600">Mar 10-20</p>
            <span className="inline-block bg-black text-white text-sm px-2 py-1 rounded-full">
              approved
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
            <div>
              <p className="text-gray-800">Lise Wang</p>
              <p className="text-red-500 flex items-center">
                <span className="w-4 h-4 bg-red-500 rounded-full mr-1"></span>
                Sick Leave
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-gray-600">1 day</p>
            <p className="text-gray-600">Today</p>
            <span className="inline-block bg-black text-white text-sm px-2 py-1 rounded-full">
              approved
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
            <div>
              <p className="text-gray-800">David Miller</p>
              <p className="text-purple-500 flex items-center">
                <span className="w-4 h-4 bg-purple-500 rounded-full mr-1"></span>
                Personal Leave
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-gray-600">2 days</p>
            <p className="text-gray-600">Mar 22-23</p>
            <span className="inline-block bg-gray-300 text-gray-700 text-sm px-2 py-1 rounded-full">
              pending
            </span>
          </div>
        </div>
      </div>
      <p className="text-blue-600 mt-4 text-sm">
        View full calendar →
      </p>
    </div>
  );
};

export default TeamLeaveCalendar;