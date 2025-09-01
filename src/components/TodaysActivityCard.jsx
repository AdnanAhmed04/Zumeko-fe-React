import React from 'react';

function TodaysActivityCard() {
  return (
    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow md:w-[25%]">
      <div className="flex gap-3 items-center">
        <h3 className="text-gray-700 font-medium">Today's Activity</h3>
        <span className="text-gray-400 text-sm"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-info h-5 w-5 text-gray-400"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg></span>
      </div>
      <div className="text-3xl font-bold mt-2">89</div>
      <p className="text-gray-600 text-sm mt-1">Employees checked in</p>
    </div>
  );
}

export default TodaysActivityCard;