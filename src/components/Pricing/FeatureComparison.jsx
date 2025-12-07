// components/Pricing/FeatureComparison.jsx
import React from 'react';
import { CheckIcon } from '@heroicons/react/outline';

const FeatureComparison = () => {
  const features = [
    {
      category: 'Core Features',
      items: [
        { name: 'Parsing', plans: { explore: true, pro: true, visionary: true, enterprise: true } },
        { name: 'Intelligent Chunking', plans: { explore: true, pro: true, visionary: true, enterprise: true } },
        { name: 'Field extraction', plans: { explore: true, pro: true, visionary: true, enterprise: true } },
        { name: 'List Extraction', plans: { explore: true, pro: true, visionary: true, enterprise: true } },
        { name: 'Table Extraction', plans: { explore: true, pro: true, visionary: true, enterprise: true } },
        { name: 'Visual Grounding', plans: { explore: true, pro: true, visionary: true, enterprise: true } },
        { name: 'Figures Summaries', plans: { explore: true, pro: true, visionary: true, enterprise: true } },
        { name: 'Split Classification', plans: { explore: true, pro: true, visionary: true, enterprise: true } },
        { name: 'Confidence Scoring (Preview)', plans: { explore: true, pro: true, visionary: true, enterprise: true } },
        { name: 'Multilingual documents', plans: { explore: true, pro: true, visionary: true, enterprise: true } },
        { name: 'Custom Processing Pipeline', plans: { explore: true, pro: true, visionary: true, enterprise: true } },
      ]
    },
    {
      category: 'Organization Support',
      items: [
        { name: 'Organization Support', plans: { explore: true, pro: true, visionary: true, enterprise: true } },
        { name: 'Seats', plans: { explore: '1', pro: 'Up to 5 seats', visionary: 'Up to 15 seats', enterprise: 'Custom' } },
        { name: 'Support Level', plans: { explore: 'Community', pro: 'Enhanced', visionary: 'Priority', enterprise: 'Designated' } },
      ]
    },
    {
      category: 'Security & Deployment',
      items: [
        { name: 'Security & Deployment', plans: { explore: true, pro: true, visionary: true, enterprise: true } },
        { name: 'Rate limits', plans: { explore: 'Standard', pro: 'Higher', visionary: 'Premium', enterprise: 'Priority' } },
        { name: 'Zero Data Retention', plans: { explore: true, pro: true, visionary: true, enterprise: true } },
        { name: 'HIPAA/BAA (include ZDR)', plans: { explore: true, pro: true, visionary: true, enterprise: true } },
        { name: 'VPC, VPL and On Prem Deployments', plans: { explore: true, pro: true, visionary: true, enterprise: true } },
        { name: 'SLA & Uptimes', plans: { explore: true, pro: true, visionary: true, enterprise: true } },
      ]
    }
  ];

  const plans = ['explore', 'pro', 'visionary', 'enterprise'];
  const planNames = {
    explore: 'Explore',
    pro: 'Team',
    visionary: 'Visionary',
    enterprise: 'Enterprise'
  };

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Feature Comparison
        </h2>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-4 px-4 font-semibold text-gray-700">Features</th>
                {plans.map(plan => (
                  <th key={plan} className="text-center py-4 px-4 font-semibold text-gray-700">
                    {planNames[plan]}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((category, categoryIndex) => (
                <React.Fragment key={categoryIndex}>
                  <tr className="bg-gray-50">
                    <td colSpan={5} className="py-3 px-4 font-bold text-gray-900">
                      {category.category}
                    </td>
                  </tr>
                  {category.items.map((item, itemIndex) => (
                    <tr key={itemIndex} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-4 text-gray-700">
                        {item.name}
                        {item.name === 'Parsing' && (
                          <div className="mt-1">
                            <a 
                              href="https://docs.landing.ai/ade/ade-file-types" 
                              className="text-sm text-green-600 hover:text-green-700"
                            >
                              View Supported File Formats
                            </a>
                          </div>
                        )}
                      </td>
                      {plans.map(plan => (
                        <td key={plan} className="text-center py-4 px-4">
                          {typeof item.plans[plan] === 'boolean' ? (
                            item.plans[plan] ? (
                              <CheckIcon className="w-5 h-5 text-green-500 mx-auto" />
                            ) : (
                              <div className="w-5 h-5 mx-auto"></div>
                            )
                          ) : (
                            <span className="text-sm text-gray-700">{item.plans[plan]}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FeatureComparison;