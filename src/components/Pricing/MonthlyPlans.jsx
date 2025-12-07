// components/Pricing/MonthlyPlans.jsx
import React, { useState } from 'react';
import { CheckIcon, XIcon } from '@heroicons/react/outline';

const MonthlyPlans = ({ activePlanTab, isMobile }) => {
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
      price: '$250',
      credits: '27.5k credits/month',
      buttonText: 'Continue',
      buttonLink: 'https://va.landing.ai/plan',
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
      price: '$2,000',
      credits: '260k credits/month',
      buttonText: 'Continue',
      buttonLink: 'https://va.landing.ai/plan',
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

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-300`}>
      {plans.map(plan => (
        <div
          key={plan.id}
          className={`bg-white rounded-xl border shadow-sm hover:shadow-md transition-shadow ${
            isMobile && activePlanTab !== plan.id ? 'hidden' : 'block'
          } ${activePlanTab === plan.id ? 'border-blue-500 ring-2 ring-blue-100' : 'border-gray-200'}`}
        >
          <div className="p-6">
            {/* Plan Header */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
              
              {/* Price Section */}
              <div className="mb-4">
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                  {plan.price !== 'Custom' && (
                    <span className="text-gray-600 ml-1">/month</span>
                  )}
                </div>
                <p className="text-gray-600 text-sm mt-1">{plan.credits}</p>
              </div>
              
              {/* Pricing Note for Team & Visionary */}
              {(plan.id === 'pro' || plan.id === 'visionary') && (
                <div className="bg-blue-50 rounded-lg p-3 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-900">
                      ${plan.id === 'pro' ? '1' : '1'} buys {plan.id === 'pro' ? '110' : '130'} credits
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                      {plan.id === 'pro' ? '+10% more' : '+30% more'}
                    </span>
                  </div>
                </div>
              )}
            </div>
            
            {/* CTA Button */}
            <a
              href={plan.buttonLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`block w-full text-center py-3 px-4 rounded-lg font-medium transition-all ${
                plan.id === 'enterprise'
                  ? 'bg-gray-900 text-white hover:bg-gray-800'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {plan.buttonText}
            </a>
            
            {/* Free Credits for Explore */}
            {plan.id === 'explore' && (
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600">
                  Start with{' '}
                  <img 
                    src="https://landing.ai/wp-content/uploads/2025/08/database.svg" 
                    className="inline-block w-4 h-4 align-text-bottom mx-1"
                    alt=""
                  />
                  {' '}1000 free credits
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
      ))}
    </div>
  );
};

export default MonthlyPlans;