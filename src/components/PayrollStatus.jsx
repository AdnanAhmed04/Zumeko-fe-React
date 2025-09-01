import React from 'react';

const PayrollStatus = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="flex items-center mb-4">
        <span className="text-green-500 text-2xl mr-2">$</span>
        <h2 className="text-xl font-semibold">Payroll Status</h2>
      </div>
      <p className="text-gray-600 mb-2">March 2024</p>
      <div className="mb-4">
        <p className="text-gray-700 font-medium">Processing Progress</p>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{ width: '93%' }}
          ></div>
        </div>
        <p className="text-sm text-gray-600 mt-1">93% Complete</p>
        <p className="text-sm text-gray-600">98 of 105 employees processed</p>
      </div>
      <div className="space-y-2 mb-4">
        <p className="text-green-600 flex items-center">
          <span className="w-5 h-5 bg-green-500 rounded-full mr-2"></span>
          Data Collection
        </p>
        <p className="text-green-600 flex items-center">
          <span className="w-5 h-5 bg-green-500 rounded-full mr-2"></span>
          Calculations
        </p>
        <p className="text-yellow-600 flex items-center">
          <span className="w-5 h-5 bg-yellow-500 rounded-full mr-2"></span>
          Review & Approval
        </p>
        <p className="text-red-600 flex items-center">
          <span className="w-5 h-5 bg-red-500 rounded-full mr-2"></span>
          Payment Processing
        </p>
      </div>
      <div className="bg-yellow-100 p-4 rounded-lg mb-4">
        <p className="text-yellow-700 font-medium">Action Required</p>
        <p className="text-yellow-700">3 payroll entries need approval</p>
        <button className="mt-2 bg-yellow-300 text-yellow-800 px-4 py-2 rounded hover:bg-yellow-400">
          Review Now
        </button>
      </div>
      <p className="text-gray-500 text-sm">Est. completion: March 28, 2024</p>
      <p className="text-gray-500 text-sm">Last processed: February 28, 2024</p>
    </div>
  );
};

export default PayrollStatus;