import React from 'react';

// Reusable StatusItem component for status list
const StatusItem = ({ status, label, color, icon: Icon }) => (
  <p className={`flex items-center text-base sm:text-base md:text-base ${color}`}>
    <span className="w-5 h-5 sm:w-5 sm:h-5 mr-2 flex-shrink-0" aria-hidden="true">
      <Icon className="w-full h-full" />
    </span>
    {label}
  </p>
);

// SVG icons as components for reusability
const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-label="Completed"
  >
    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
    <path d="m9 11 3 3L22 4" />
  </svg>
);

const ClockIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-label="In Progress"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const AlertIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-label="Not Started"
  >
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
    <path d="M12 9v4" />
    <path d="M12 17h.01" />
  </svg>
);

const PayrollStatus = () => {
  // Sample dynamic data
  const payrollData = {
    month: 'March 2024',
    progress: 93,
    employeesProcessed: 98,
    totalEmployees: 105,
    completionDate: 'March 28, 2024',
    lastProcessed: 'February 28, 2024',
    statuses: [
      { label: 'Data Collection', color: 'text-green-600', icon: CheckIcon },
      { label: 'Calculations', color: 'text-green-600', icon: CheckIcon },
      { label: 'Review & Approval', color: 'text-yellow-600', icon: ClockIcon },
      { label: 'Payment Processing', color: 'text-red-600', icon: AlertIcon },
    ],
  };

  return (
<div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200 h-full min-h-[400px] flex flex-col ">
      {/* Header */}
      <div className="flex items-center mb-4">
        <span className="text-green-500 text-2xl sm:text-xl md:text-2xl mr-2 flex-shrink-0" aria-hidden="true">
          $
        </span>
        <h2 className="text-lg sm:text-lg md:text-xl font-semibold">Payroll Status</h2>
      </div>

      {/* Month */}
      <p className="text-gray-500 mb-2 text-base sm:text-sm md:text-base">{payrollData.month}</p>

      {/* Progress Section */}
      <div className="mb-4">
        <div className="flex justify-between items-center gap-x-2 sm:gap-x-4 flex-wrap">
          <p className="text-gray-700 font-medium text-base sm:text-sm md:text-base">Processing Progress</p>
          <p className="text-base sm:text-sm text-gray-600">{payrollData.progress}% Complete</p>
        </div>
        <div
          className="w-full bg-gray-200 rounded-full h-2 sm:h-2.5"
          role="progressbar"
          aria-valuenow={payrollData.progress}
          aria-valuemin="0"
          aria-valuemax="100"
          aria-label="Payroll processing progress"
        >
          <div
            className="bg-blue-600 h-2 mt-2 mb-2 sm:h-2.5 rounded-full"
            style={{ width: `${payrollData.progress}%` }}
          />
        </div>
        <p className="text-base sm:text-sm text-gray-600 mt-1">
          {payrollData.employeesProcessed} of {payrollData.totalEmployees} employees processed
        </p>
      </div>

      {/* Status List */}
      <div className="space-y-2 mb-4">
        {payrollData.statuses.map((status, index) => (
          <StatusItem key={index} {...status} />
        ))}
      </div>

      {/* Action Required */}
      <div className="bg-yellow-100 p-2 sm:p-3 md:p-4 rounded-lg mb-4">
        <p className="text-yellow-700 font-medium text-base sm:text-sm md:text-base">Action Required</p>
        <p className="text-yellow-700 text-base sm:text-sm md:text-base">3 payroll entries need approval</p>
        <button
          type="button"
          className="mt-2 text-yellow-800 px-3 sm:px-3 md:px-4 py-1.5 sm:py-1.5 md:py-2 rounded cursor-pointer border border-yellow-400 transition-colors duration-200 text-base sm:text-sm md:text-base"
          aria-label="Review payroll entries"
        >
          Review Now
        </button>
      </div>

      {/* Footer Info */}
      <p className="text-gray-500 text-base sm:text-sm">Est. completion: {payrollData.completionDate}</p>
      <p className="text-gray-500 text-base sm:text-sm">Last processed: {payrollData.lastProcessed}</p>
    </div>
  );
};

export default PayrollStatus;
