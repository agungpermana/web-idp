import React, { useState } from 'react';

export default function Solution1() {
  // State untuk mengelola FAQ
  const [openFaqIndex, setOpenFaqIndex] = useState(1);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Data for FAQs
  const faqs = [
    {
      question: "What file types are supported?",
      answer: "We support a wide range of document formats including PDF, JPEG, PNG, TIFF, and BMP to ensure flexibility for your workflow."
    },
    {
      question: "Which languages are supported?",
      answer: "Agentic Document Extraction supports multiple languages. Extraction accuracy depends on script type, image quality, and document formatting.",
      link: "Learn more"
    },
    {
      question: "What is “Grounding”?",
      answer: "Grounding is the ability of the AI to visually link extracted data back to the specific location in the original document, ensuring auditability and trust."
    },
    {
      question: "What is the pricing for Agentic Document Extraction?",
      answer: "Our pricing model is flexible based on volume and enterprise needs. Please contact our sales team for a detailed quote."
    }
  ];

  // Data for Additional Resources (New Section)
  const resources = [
    {
      type: "BLOG",
      // Placeholder image looking like code/technical blog
      image: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=1974&auto=format&fit=crop", 
      category: "MORE INFO",
      title: "Turbocharge Document Understanding Apps with Landing AI's Agentic Document Extraction"
    },
    {
      type: "BLOG",
      // Placeholder image looking like charts/data analysis
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", 
      category: "MORE INFO",
      title: "Going Beyond OCR+LLM: Introducing Agentic Document Extraction"
    },
    {
      type: "VIDEO", 
      // Placeholder image looking like a video presenter
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop", 
      category: "MORE INFO",
      title: "Agentic Document Extraction: 17x Faster, Smarter, with LLM-Ready Outputs"
    }
  ];

  return (
    <main className="flex-grow font-display bg-white text-gray-900">
      
      {/* --- HERO SECTION --- */}
      <section className="relative w-full py-15 lg:py-17 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop" 
            alt="AI Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/80 mix-blend-multiply"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
          <div className="flex flex-col items-center gap-8 text-center max-w-5xl mx-auto">
            <h1 className="text-white text-5xl font-bold leading-tight tracking-tight md:text-6xl font-display">
              <span className="text-blue-400">AI-Powered</span> <br /> 
              Agentic Document Extraction in <br /> Financial Services
            </h1>
            <p className="text-gray-200 text-xl leading-relaxed max-w-3xl">
              Harness the power of Artificial Intelligence to automate financial statement extraction, KYC, and contracts. Reduce manual work, improve compliance, and accelerate outcomes.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <button className="flex h-14 px-8 items-center justify-center rounded-lg bg-blue-600 text-white font-bold text-lg transition-transform hover:bg-blue-700 hover:scale-105 shadow-lg shadow-blue-600/30">
                Try AI Document Extraction
              </button>
              <button className="flex h-14 px-8 items-center justify-center rounded-lg border-2 border-white bg-transparent text-white font-bold text-lg transition-colors hover:bg-white/10">
                Talk to AI Experts
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTENT CONTAINER --- */}
      <div className="bg-white w-full text-gray-900">
        
        {/* --- SECTION 1: WHY USE --- */}
        <section className="py-16 md:py-24">
          <div className="flex flex-col gap-12 px-4 max-w-7xl mx-auto">
            <div className="flex flex-col gap-4 text-center items-center">
              <h1 className="text-gray-900 tracking-tight text-3xl md:text-4xl font-bold leading-tight max-w-4xl">
                Why Use Agentic Document Extraction for Financial Services?
              </h1>
              <p className="text-gray-600 text-lg font-normal leading-relaxed max-w-3xl">
                Agentic Document Extraction from LandingAI enables rapid deployment and reliable outcomes without additional training requirements, ideal for scalable financial services automation across document-heavy workflows.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {/* Item 1 */}
              <div className="flex flex-col gap-4 items-start">
                <div className="text-green-500 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75" />
                  </svg>
                </div>
                <h3 className="text-gray-900 text-xl font-bold leading-tight">Reduce Manual Review Efforts</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Automate data extraction and verification from a wide range of documents—including IDs, financial statements, and tax forms—to dramatically reduce operational overhead.
                </p>
              </div>
              {/* Item 2 */}
              <div className="flex flex-col gap-4 items-start">
                <div className="text-green-500 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" />
                  </svg>
                </div>
                <h3 className="text-gray-900 text-xl font-bold leading-tight">Meet Compliance Requirements</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Minimize errors and risk by leveraging visual grounding for information extracted from documents. Ensure compliance with regulatory standards effectively.
                </p>
              </div>
              {/* Item 3 */}
              <div className="flex flex-col gap-4 items-start">
                <div className="text-green-500 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                  </svg>
                </div>
                <h3 className="text-gray-900 text-xl font-bold leading-tight">Boost Customer Satisfaction</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Streamline onboarding, underwriting, and financial processing for a seamless customer journey. Free up staff from repetitive tasks to focus on service.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 2: USE CASES --- */}
        <section className="py-16 md:py-24 bg-gray-900 text-white">
          <div className="flex flex-col gap-12 px-4 max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Use Cases
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="flex flex-col gap-6">
                <div className="w-full aspect-[4/3] rounded-xl overflow-hidden border border-gray-700 bg-gray-800">
                   <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop" alt="KYC Documents" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-2xl font-bold leading-tight">Know Your Customer (KYC) <br/> & Customer Onboarding</h3>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">DOCUMENT TYPES: IDs, Utility Bills, Bank Statements</p>
                  <p className="text-gray-300 text-base leading-relaxed">Accelerate customer verification, reduce fraud risk, and ensure compliance with automated checks powered by intelligent document processing.</p>
                </div>
              </div>
              {/* Card 2 */}
              <div className="flex flex-col gap-6">
                <div className="w-full aspect-[4/3] rounded-xl overflow-hidden border border-gray-700 bg-gray-800">
                  <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop" alt="Loan Documents" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-2xl font-bold leading-tight">Mortgage & Loan Document <br/> Processing</h3>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">DOCUMENT TYPES: W-2s, Pay stubs, Tax Returns, Bank Statements</p>
                  <p className="text-gray-300 text-base leading-relaxed">Speed up approvals, minimize manual errors, and enhance the borrower experience through faster financial data extraction and approval pipelines.</p>
                </div>
              </div>
              {/* Card 3 */}
              <div className="flex flex-col gap-6">
                <div className="w-full aspect-[4/3] rounded-xl overflow-hidden border border-gray-700 bg-gray-800">
                  <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="Financial Statements" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-2xl font-bold leading-tight">Invoice & Financial Statement <br/> Extraction</h3>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">DOCUMENT TYPES: Invoices, Receipts, Balance Sheets</p>
                  <p className="text-gray-300 text-base leading-relaxed">Streamline accounts processing, improve data accuracy, and enable real-time financial insights through financial document automation.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 3: FAQS --- */}
        <section className="py-16 md:py-24 bg-white">
          <div className="px-4 max-w-7xl mx-auto flex flex-col gap-10">
            <h2 className="text-4xl font-bold text-center text-gray-900">FAQs</h2>
            
            <div className="flex flex-col gap-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
                  <button 
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                  >
                    <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                    <span className={`text-blue-500 transform transition-transform duration-200 ${openFaqIndex === index ? 'rotate-45' : 'rotate-0'}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                    </span>
                  </button>
                  
                  <div 
                    className={`px-6 text-gray-600 text-base leading-relaxed transition-all duration-300 ease-in-out overflow-hidden ${
                      openFaqIndex === index ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0 pb-0'
                    }`}
                  >
                    {faq.answer}
                    {faq.link && (
                      <a href="#" className="underline ml-1 text-gray-900 font-medium hover:text-blue-600 transition-colors">
                        {faq.link}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- SECTION 4: ADDITIONAL RESOURCES (REPLACED "FROM COMPLEX TO SIMPLE") --- */}
        <section className="py-16 md:py-24 bg-white border-t border-gray-100">
          <div className="flex flex-col gap-12 px-4 max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center">
              <h2 className="text-gray-900 text-3xl md:text-4xl font-bold leading-tight tracking-tight">
                Additional Resources
              </h2>
            </div>

            {/* Grid 3 Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {resources.map((resource, index) => (
                <div key={index} className="flex flex-col gap-6 p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
                  {/* Thumbnail Image */}
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                    <img
                      src={resource.image}
                      alt={resource.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay Label (BLOG/VIDEO) */}
                    <div className="absolute top-3 right-3 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider z-10">
                      {resource.type}
                    </div>
                    {/* Dark overlay for better text contrast */}
                     <div className="absolute inset-0 bg-black/20"></div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-2 items-start">
                    <p className="text-blue-600 text-xs font-bold uppercase tracking-wider">
                      {resource.category}
                    </p>
                    <h3 className="text-gray-900 text-xl font-bold leading-snug">
                      {resource.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- CTA SECTION --- */}
        <section className="py-16 md:py-24 bg-gray-900 border-t border-gray-100">
          <div className="px-4 text-center max-w-7xl mx-auto">
            <div className="flex flex-col gap-6 items-center">
              <h2 className="text-white text-3xl font-bold tracking-tight md:text-4xl">Ready to automate your workflow?</h2>
              <p className="text-gray-600 max-w-2xl text-lg">
                Start creating beautiful, functional automation today with the simplicity and power of our AI.
              </p>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-blue-600 text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-blue-700 transition-colors">
                <span className="truncate">Get Started</span>
              </button>
            </div>
          </div>
        </section>
        
      </div>
    </main>
  );
}