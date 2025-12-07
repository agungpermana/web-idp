// components/Pricing/PlanToggle.jsx
import React from 'react';

const PlanToggle = ({ activePlanType, setActivePlanType }) => {
  return (
    <div className="border-b border-gray-200 pb-4 mb-6">
      <div className="flex justify-center space-x-4">
        <div 
          className={`cursor-pointer px-6 py-3 rounded-lg transition-all ${activePlanType === 'monthly' 
            ? 'bg-blue-600 text-white shadow-md' 
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          onClick={() => setActivePlanType('monthly')}
        >
          <div className="font-medium">
            Monthly Plan
          </div>
        </div>
        <div 
          className={`cursor-pointer px-6 py-3 rounded-lg transition-all relative ${activePlanType === 'annual' 
            ? 'bg-blue-600 text-white shadow-md' 
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          onClick={() => setActivePlanType('annual')}
        >
          <div className="font-medium">
            Annual Plan 
            <span className="absolute -top-2 -right-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
              Save 10%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanToggle;