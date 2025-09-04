import React from 'react';

const Weather = () => {
  const forecast = [
    { day: "Today", icon: "☁️", high: "75°", low: "62°", color: "text-gray-500" },
    { day: "Tomorrow", icon: "☀️", high: "78°", low: "65°", color: "text-yellow-500" },
    { day: "Saturday", icon: "🌤️", high: "71°", low: "58°", color: "text-blue-400" },
  ];

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200 h-full min-h-[400px] flex flex-col">
      {/* Header */}
      <div className="flex items-center mb-2">
        <svg xmlns="http://www.w3.org/2000/svg"
          width="24" height="24" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round"
          className="lucide lucide-cloud h-6 w-6 sm:h-5 sm:w-5 mr-2 text-blue-600">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
        </svg>
        <h2 className="text-xl sm:text-lg font-semibold text-gray-800">Weather</h2>
      </div>

      {/* Location */}
      <p className="text-gray-500 mb-2 text-lg sm:text-base">New York, NY</p>

      {/* Current Weather */}
      <div className="text-center p-4 sm:mb-6 flex-grow bg-gray-50 items-center justify-center flex flex-col rounded-lg">
        <div className="text-4xl sm:text-2xl mb-2 flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg"
            width="28" height="28" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round"
            className="lucide lucide-cloud h-14 w-14 sm:h-12 sm:w-12 text-blue-600 mb-1">
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
          </svg>
          <p className="font-bold text-3xl sm:text-2xl">72°F</p>
        </div>
        <p className="text-gray-600 text-lg sm:text-base mb-1">Partly Cloudy</p>
        <p className="text-gray-500 text-base sm:text-sm">💧 65% &nbsp; ☔ 8 mph</p>
      </div>

      {/* Forecast */}
      <div className="mb-4">
        <p className="text-gray-700 font-medium mb-2 text-lg sm:text-base">3-Day Forecast</p>
        <ul className="space-y-2">
          {forecast.map((day, idx) => (
            <li key={idx} className="flex items-center justify-between bg-white p-3 sm:p-2 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center">
                <span className={`${day.color} text-xl sm:text-base mr-2`}>{day.icon}</span>
                <p className="text-lg sm:text-base font-semibold">{day.day}</p>
              </div>
              <p className="text-gray-700 text-lg sm:text-base font-semibold">
                {day.high} <span className="text-gray-500">{day.low}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer link */}
      <a
        href="#"
        className="mt-auto flex justify-center text-blue-600 hover:text-blue-800 text-base sm:text-sm font-medium transition-colors duration-200"
      >
        View full forecast →
      </a>
    </div>
  );
};

export default Weather;
