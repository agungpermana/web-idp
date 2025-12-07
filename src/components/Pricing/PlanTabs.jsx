// components/Pricing/PlanTabs.jsx
import React from 'react';

const PlanTabs = ({ activePlanTab, setActivePlanTab, isMobile }) => {
  const planTabs = [
    { id: 'explore', label: 'Explore' },
    { id: 'pro', label: 'Team' },
    { id: 'visionary', label: 'Visionary' },
    { id: 'enterprise', label: 'Enterprise' }
  ];

  return (
    <div className="border-b border-gray-200 mb-8">
      <div className="flex flex-wrap justify-center gap-2 md:gap-4">
        {planTabs.map(tab => (
          <button
            key={tab.id}
            id={tab.id}
            className={`px-4 md:px-6 py-3 rounded-t-lg font-medium transition-all ${activePlanTab === tab.id 
              ? 'bg-white border-t border-l border-r border-gray-300 text-blue-600 -mb-px' 
              : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'}`}
            onClick={() => setActivePlanTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PlanTabs;