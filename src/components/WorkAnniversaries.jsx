import React from "react";

const WorkAnniversaries = () => {
  const anniversaries = [
    {
      name: "Jin Wei Yee Hed",
      email: "jinwei@eazio.com",
      date: "Mar 20",
      years: "2 years",
    }
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 w-full max-w-sm flex flex-col">
      {/* Header */}
      <div className="flex items-center mb-1">
        <span className="text-blue-500 text-xl mr-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-award h-5 w-5 text-blue-600"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg></span>
        <h2 className="text-lg font-semibold text-gray-800">
          Work Anniversaries
        </h2>
      </div>
      <p className="text-gray-500 text-sm mb-4">Next 7 days</p>

      {/* Anniversary List */}
      <div className="space-y-3">
        {anniversaries.map((person, index) => (
          <div
            key={index}
            className="flex items-center bg-gray-50 p-3 rounded-xl hover:shadow-sm transition"
          >
            {/* Avatar Placeholder */}
            <div className="w-10 h-10 flex-shrink-0 bg-gray-200 rounded-full mr-3"></div>

            {/* Info */}
            <div className="flex flex-col overflow-hidden">
              <p className="text-gray-800 text-sm font-medium truncate w-40">
                {person.name}
              </p>
              <p className="text-gray-500 text-xs truncate">{person.email}</p>
            </div>

            {/* Date & Years */}
            <div className="ml-auto text-right whitespace-nowrap">
              <p className=" text-sm font-medium">{person.date}</p>
              <p className="text-gray-500 text-xs">{person.years}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkAnniversaries;
