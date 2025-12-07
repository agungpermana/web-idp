// components/Pricing/AnnualPlans.jsx
import React, { useState } from 'react';
import { CheckIcon } from '@heroicons/react/outline';
import PricingDropdown from './PricingDropdown';

const AnnualPlans = ({ activePlanTab, isMobile }) => {
  const [selectedProPlan, setSelectedProPlan] = useState(2700); // Default annual pro plan
  const [selectedVisionaryPlan, setSelectedVisionaryPlan] = useState(21600); // Default annual visionary plan

  const annualPlanOptions = {
    pro: [
      { value: 2700, credits: 330000, oldValue: 3000, period: 'year' },
      { value: 5400, credits: 660000, oldValue: 6000, period: 'year' },
      { value: 10800, credits: 1320000, oldValue: 12000, period: 'year' },
      { value: 16200, credits: 1980000, oldValue: 18000, period: 'year' }
    ],
    visionary: [
      { value: 21600, credits: 3120000, oldValue: 24000, period: 'year' },
      { value: 37800, credits: 5460000, oldValue: 42000, period: 'year' },
      { value: 54000, credits: 7800000, oldValue: 60000, period: 'year' }
    ]
  };

  const plans = [
    {
      id: 'explore',
      name: 'Explore',
      description: 'Personal account — no team features',
      pricing: 'Pay-as-you-go',
      price: '$1',
      credits: '100 credits',
      buttonText: 'Start for Free',
      buttonLink: 'https://va.landing.ai/plan',
      freeCredits: '500 free credits',
      features: [
        'Parse with intelligent chunking',
        'Field extraction',
        'Visual grounding',
        'Document splitting & classification (Coming soon)',
        'Multilingual documents',
        'API & library access'
      ]
    },
    {
      id: 'pro',
      name: 'Team',
      description: 'Built for collaborative teams',
      price: '$2,700',
      credits: '330k credits/year',
      buttonText: 'Continue',
      buttonLink: 'https://va.landing.ai/plan',
      isDropdown: true,
      dropdownOptions: annualPlanOptions.pro,
      selectedValue: selectedProPlan,
      onSelect: setSelectedProPlan,
      features: [
        'Everything in Explore, plus:',
        'Team management (up to 5 users)',
        'Unlimited API key creation',
        'Email support',
        'Zero data retention available',
        'HIPAA-compliant processing'
      ]
    },
    {
      id: 'visionary',
      name: 'Visionary',
      description: 'Designed for high-volume processing',
      price: '$21,600',
      credits: '3,120k credits/year',
      buttonText: 'Continue',
      buttonLink: 'https://va.landing.ai/plan',
      isDropdown: true,
      dropdownOptions: annualPlanOptions.visionary,
      selectedValue: selectedVisionaryPlan,
      onSelect: setSelectedVisionaryPlan,
      features: [
        'Everything in Team, plus:',
        'Team management (up to 15 users)',
        'Confidence scoring',
        'Slack support',
        'Premium rate limits'
      ]
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Custom solutions for enterprises',
      price: 'Custom',
      credits: 'Credit volume matched to your needs',
      buttonText: 'Contact Us',
      buttonLink: 'https://landing.ai/contact-va',
      features: [
        'Everything in Visionary, plus:',
        'SaaS, VPL, VPC, and on-prem deployments',
        'Custom processing pipeline',
        'SLAs and uptime guarantees',
        'Priority rate limits',
        'Snowflake integration support'
      ]
    }
  ];

  const getSelectedPlan = (plan) => {
    if (plan.isDropdown) {
      const selectedOption = plan.dropdownOptions.find(opt => opt.value === plan.selectedValue);
      return {
        price: `$${selectedOption.value.toLocaleString()}`,
        oldPrice: selectedOption.oldValue ? `$${selectedOption.oldValue.toLocaleString()}` : null,
        credits: `${(selectedOption.credits / 1000).toLocaleString()}k credits/year`,
        creditRatio: plan.id === 'pro' ? 122 : 144
      };
    }
    return {
      price: plan.price,
      credits: plan.credits,
      creditRatio: plan.id === 'explore' ? 100 : null
    };
  };

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-300`}>
      {plans.map(plan => {
        const selected = getSelectedPlan(plan);
        
        return (
          <div
            key={plan.id}
            className={`bg-white rounded-xl border shadow-sm hover:shadow-md transition-all ${
              isMobile && activePlanTab !== plan.id ? 'hidden' : 'block'
            } ${activePlanTab === plan.id ? 'border-blue-500 ring-2 ring-blue-100 transform scale-[1.02]' : 'border-gray-200'}`}
          >
            <div className="p-6">
              {/* Plan Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                
                {/* Discount Badge for Annual */}
                <div className="mb-3">
                  <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-1 rounded-full">
                    Save 10% Annually
                  </span>
                </div>
                
                {/* Price Section */}
                <div className="mb-4">
                  {selected.oldPrice && (
                    <div className="mb-1">
                      <span className="text-sm text-gray-500 line-through mr-2">
                        {selected.oldPrice}/year
                      </span>
                    </div>
                  )}
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-gray-900">{selected.price}</span>
                    <span className="text-gray-600 ml-1">
                      {plan.id === 'explore' ? '' : '/year'}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mt-1">{selected.credits}</p>
                </div>
                
                {/* Credit Bonus for Pro & Visionary */}
                {(plan.id === 'pro' || plan.id === 'visionary') && (
                  <div className="bg-blue-50 rounded-lg p-3 mb-4">
                    <div className="flex justify-between items-center">
                      <div className="text-sm">
                        <span className="font-medium text-gray-900">
                          ${plan.id === 'pro' ? '1' : '1'} buys{' '}
                        </span>
                        <span className="font-bold text-gray-900">
                          <span className="line-through text-gray-500 mr-1">
                            {plan.id === 'pro' ? '110' : '130'}
                          </span>
                          {plan.id === 'pro' ? '122' : '144'}
                        </span>
                        <span className="font-medium text-gray-900"> credits</span>
                      </div>
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                        {plan.id === 'pro' ? '+10% more' : '+30% more'}
                      </span>
                    </div>
                  </div>
                )}
                
                {/* Pricing Dropdown for Pro & Visionary */}
                {plan.isDropdown && (
                  <div className="mb-4">
                    <PricingDropdown
                      options={plan.dropdownOptions}
                      selectedValue={plan.selectedValue}
                      onSelect={plan.onSelect}
                      uniqueId={`annual_${plan.id}`}
                      period="year"
                    />
                  </div>
                )}
              </div>
              
              {/* CTA Button */}
              <a
                href={plan.buttonLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center py-3 px-4 rounded-lg font-medium transition-all mb-4 ${
                  plan.id === 'enterprise'
                    ? 'bg-gray-900 text-white hover:bg-gray-800'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {plan.buttonText}
              </a>
              
              {/* Free Credits for Explore */}
              {plan.id === 'explore' && plan.freeCredits && (
                <div className="mb-4 text-center">
                  <p className="text-sm text-gray-600">
                    Start with{' '}
                    <img 
                      src="https://landing.ai/wp-content/uploads/2025/08/database.svg" 
                      className="inline-block w-4 h-4 align-text-bottom mx-1"
                      alt=""
                    />
                    {' '}{plan.freeCredits}
                  </p>
                </div>
              )}
              
              {/* Divider */}
              <div className="my-6 border-t border-gray-200"></div>
              
              {/* Features List */}
              <div className="space-y-3">
                <h4 className="font-medium text-gray-900">
                  {plan.id === 'explore' ? 'Includes Core Capabilities' : 
                   plan.id === 'pro' ? 'Everything in Explore, Plus:' :
                   plan.id === 'visionary' ? 'Everything in Team, plus:' :
                   'Everything in Visionary, plus:'}
                </h4>
                <ul className="space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AnnualPlans;