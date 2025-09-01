import React from 'react';

function TeamSizeCard() {
  return (
    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow md:w-[25%]">
      <div className="flex gap-3 items-center">
        <h3 className="text-gray-700 font-medium">Team Size</h3>
        <span className="text-gray-400 text-sm"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-info h-5 w-5 text-gray-400"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg></span>
      </div>
      <div className="text-3xl font-bold mt-2">105</div>
      <p className="text-gray-600 text-sm mt-1">Active employees</p>
      <p className="text-green-600 text-sm mt-1 flex items-center gap-1 font-semibold"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-up h-4 w-4 text-green-500 mr-1"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg> 2 new hires</p>
    </div>
  );
}

export default TeamSizeCard;