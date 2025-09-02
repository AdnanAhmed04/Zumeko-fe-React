import React from 'react';

const Weather = () => {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200 h-full min-h-[400px] flex flex-col">
      <div className="flex items-center mb-4">
        <span className="text-blue-600 text-xl sm:text-2xl mr-2">☁️</span>
        <h2 className="text-lg sm:text-xl font-semibold">Weather</h2>
      </div>
      <p className="text-gray-600 mb-4 text-sm sm:text-base">New York, NY</p>
      <div className="text-center p-4  sm:mb-6 flex-grow bg-gray-100 items-center justify-center flex flex-col rounded-lg">
        <div className=" text-2xl sm:text-4xl mb-2 flex items-center flex-col ">
          <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cloud h-12 w-12 text-blue-600"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg></p><p className='font-semibold'>72°F</p></div>
        <p className="text-gray-500 text-sm sm:text-base mb-2">Partly Cloudy</p>
        <p className="text-gray-500 text-xs sm:text-sm mb-2">💧 65% ☔ 8 mph</p>
      </div>
      <div className="mb-4">
        <p className="text-gray-700 font-medium mb-2 text-sm sm:text-base">3-Day Forecast</p>
        <div className="space-y-2">
          <div className="flex items-center justify-between bg-white p-2 sm:p-3 rounded-lg shadow-sm">
            <div className="flex items-center">
              <span className="text-gray-500 text-base sm:text-lg mr-2">☁️</span>
              <p className="text-sm sm:text-base font-semibold">Today</p>
            </div>
            <p className="text-gray-700 text-sm sm:text-base font-semibold">75° <span className='text-gray-500'> 62°</span></p>
          </div>
          <div className="flex items-center justify-between bg-white p-2 sm:p-3 rounded-lg shadow-sm">
            <div className="flex items-center">
              <span className="text-yellow-500 text-base sm:text-lg mr-2">☀️</span>
              <p className="text-sm sm:text-base font-semibold">Tomorrow</p>
            </div>
            <p className="text-gray-700 text-sm sm:text-base font-semibold">78° <span className='text-gray-500'> 65°</span></p>
          </div>
          <div className="flex items-center justify-between bg-white p-2 sm:p-3 rounded-lg shadow-sm">
            <div className="flex items-center">
              <span className="text-gray-500 text-base sm:text-lg mr-2">🌤️</span>
              <p className="text-sm sm:text-base font-semibold">Saturday</p>
            </div>
            <p className="text-gray-700 text-sm sm:text-base font-semibold">71° <span className='text-gray-500'> 58°</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;