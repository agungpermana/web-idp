// components/Pricing/FAQSection.jsx
import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'How do credits work?',
      answer: `Credits are usage units that get consumed each time you process a document. Every document processing task—like parsing or field extraction—uses credits based on the number of pages in the document.
      
      If you're on the Explore plan, you can buy credits on a pay-as-you-go basis.
      
      If you're on the Team, Visionary, or Enterprise plan, you get a monthly allotment of credits.`
    },
    {
      question: 'Is ADE compliant with HIPAA?',
      answer: `ADE supports HIPAA compliance on its Team, Visionary, and Enterprise plans. To ensure HIPAA compliance, you must:
      
      • Enable the Zero Data Retention (ZDR) option.
      • Have a signed Business Associate Agreement (BAA) in place with LandingAI.
      
      To learn more about our HIPAA compliance, check out our Trust Center and Security & Compliance page.`
    },
    {
      question: 'Does ADE support Zero Data Retention (ZDR)?',
      answer: `ADE supports zero data retention (ZDR) on its Team, Visionary, and Enterprise plans. To learn more about the ZDR option, check out our documentation.`
    },
    {
      question: 'Is ADE compliant with SOC2 Type II?',
      answer: `LandingAI is SOC 2 Type II compliant. To learn more, check out our Trust Center and Security & Compliance page.`
    },
    {
      question: 'Where can I learn more?',
      answer: `We offer several resources to help you learn more about Agentic Document Extraction:
      
      1. Documentation: Learn how to use our library and API
      2. Discord: Share your scripts and ask questions
      3. Scripts & Demos: Real-world document extraction use cases
      4. YouTube: Watch demos and video tutorials
      5. Community: Join the LandingAI community
      
      If you have additional questions, contact us at support@landing.ai.`
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          FAQs
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUpIcon className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5 text-gray-500" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 py-4 border-t border-gray-200">
                  <div className="text-gray-700 whitespace-pre-line">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;