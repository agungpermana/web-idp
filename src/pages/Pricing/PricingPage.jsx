// pages/PricingPage.jsx
import React, { useState, useEffect } from 'react';
import PlanToggle from '../../components/Pricing/PlanToggle';
import PlanTabs from '../../components/Pricing/PlanTabs';
import MonthlyPlans from '../../components/Pricing/MonthlyPlans';
import AnnualPlans from '../../components/Pricing/AnnualPlans';
import FeatureComparison from '../../components/Pricing/FeatureComparison';
import FAQSection from '../../components/Pricing/FAQSection';

const PricingPage = () => {
  const [activePlanType, setActivePlanType] = useState('monthly');
  const [activePlanTab, setActivePlanTab] = useState('explore');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
            <span className="text-8xl font-extrabold tracking-wider font-sans bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent drop-shadow-sm">
              IDP
            </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Agentic Document Extraction
            </h1>
            <p className="text-xl text-gray-600">
              Choose The Plan That Is Right For You
            </p>
          </div>
          
          {/* Plan Type Toggle */}
          <PlanToggle 
            activePlanType={activePlanType}
            setActivePlanType={setActivePlanType}
          />
          
          {/* Plan Tabs */}
          <PlanTabs 
            activePlanTab={activePlanTab}
            setActivePlanTab={setActivePlanTab}
            isMobile={isMobile}
          />
          
          {/* Plans Container */}
          <div className="relative">
            {/* Monthly Plans */}
            <div className={`transition-all duration-300 ${activePlanType === 'monthly' ? 'block' : 'hidden'}`}>
              <MonthlyPlans activePlanTab={activePlanTab} isMobile={isMobile} />
            </div>
            
            {/* Annual Plans */}
            <div className={`transition-all duration-300 ${activePlanType === 'annual' ? 'block' : 'hidden'}`}>
              <AnnualPlans activePlanTab={activePlanTab} isMobile={isMobile} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Feature Comparison Table */}
      <FeatureComparison />
      
      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
};

export default PricingPage;