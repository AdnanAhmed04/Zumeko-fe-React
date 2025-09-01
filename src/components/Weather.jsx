import React from 'react';

const Weather = () => {
  return (
    <div className="bg-blue-50 p-6 rounded-lg shadow-md border border-gray-200">
      <div className="flex items-center mb-4">
        <span className="text-blue-600 text-2xl mr-2">☁️</span>
        <h2 className="text-xl font-semibold">Weather</h2>
      </div>
      <p className="text-gray-600 mb-4">New York, NY</p>
      <div className="text-center mb-6">
        <div className="text-blue-600 text-4xl mb-2">72°F</div>
        <p className="text-gray-700 font-medium">Partly Cloudy</p>
        <p className="text-gray-500 text-sm">
          65% ☔ 8 mph
        </p>
      </div>
      <div className="mb-4">
        <p className="text-gray-700 font-medium mb-2">3-Day Forecast</p>
        <div className="space-y-2">
          <div className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm">
            <div className="flex items-center">
              <span className="text-gray-500 text-lg mr-2">☁️</span>
              <p>Today</p>
            </div>
            <p className="text-gray-700">75° 62°</p>
          </div>
          <div className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm">
            <div className="flex items-center">
              <span className="text-yellow-500 text-lg mr-2">☀️</span>
              <p>Tomorrow</p>
            </div>
            <p className="text-gray-700">78° 65°</p>
          </div>
          <div className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm">
            <div className="flex items-center">
              <span className="text-gray-500 text-lg mr-2">🌤️</span>
              <p>Saturday</p>
            </div>
            <p className="text-gray-700">71° 58°</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;