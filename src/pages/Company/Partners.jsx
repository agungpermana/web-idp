import React from 'react';

const BuilderProgramPage = () => {
  const programBenefits = [
    {
      icon: "https://landing.ai/wp-content/uploads/2020/10/Priority-Rate-Limit-Feature-Access-icon.svg",
      title: "Priority Rate Limit & Feature Access",
      description: "Higher throughput, and early access to new API capabilities (e.g. Confidence Scoring, Chat, etc.)"
    },
    {
      icon: "https://landing.ai/wp-content/uploads/2025/09/support123.svg",
      title: "Dedicated Support",
      description: "Direct Slack or Teams channel for joint collaboration & designated MLE & PDM support"
    },
    {
      icon: "https://landing.ai/wp-content/uploads/2025/09/Flexible-Predictable-Pricing-icon.svg",
      title: "Flexible & Predictable Pricing",
      description: "Credit-based pricing, with feature specific add-ons to fit your product and gtm model"
    },
    {
      icon: "https://landing.ai/wp-content/uploads/2025/09/Development-Center-icon.svg",
      title: "Development Center",
      description: "Python library, helper tools, benchmarks, and messaging guides to get production-ready fast"
    }
  ];

  const productHighlights = [
    {
      image: "https://landing.ai/wp-content/uploads/2025/09/Complex-Layout-Extraction-IMG.webp",
      title: "Complex Layout Extraction",
      features: [
        "Captures intricate document details beyond basic OCR, including checkboxes and form layouts",
        "Accurately recognizes and describes various input fields, tables, and visual elements",
        "Enhances data extraction from complex documents like claim forms"
      ]
    },
    {
      image: "https://landing.ai/wp-content/uploads/2025/09/Images-Tables-Extraction-img.webp",
      title: "Images & Tables Extraction",
      features: [
        "Accurately extracts data from charts, tables, and complex visual layouts",
        "Eliminates errors and partial interpretations common in text-only analysis",
        "Enables comprehensive data capture for precise insights across industries"
      ]
    },
    {
      image: "https://landing.ai/wp-content/uploads/2025/09/Visual-Grounding-img.webp",
      title: "Visual Grounding",
      features: [
        "Pinpoints exact locations of visual elements and text in documents",
        "Enables answer verification by linking responses to source information",
        "Builds trust through transparent, traceable AI-generated insights"
      ]
    }
  ];

  const testimonials = [
    {
      logo: "https://landing.ai/wp-content/uploads/2025/09/At-TCG-Process.svg",
      quote: "At TCG Process, we help enterprises automate complex processes with accuracy and trust. We continuously evaluate emerging technologies to ensure our customers can seamlessly integrate the latest best-of-breed solutions into their operations, and we are proud to partner with Landing AI in this mission. Their Agentic Document Extraction (ADE) has proven to be both accurate and easy to use. Now, as one of the first partners in Landing AI's new Builder Program, we are building on that foundation to deliver reliable, transparent, and scalable automation that our customers can validate and trust.",
      author: "Neil Walker",
      position: "Head of Product"
    },
    {
      logo: "https://landing.ai/wp-content/uploads/2025/09/eolas-logo-1.webp",
      quote: "We've tried lots of different document extractors and they've all worked to some extent but LandingAI has seemed to work the best so far.",
      author: "Dr. Declan Kelly",
      position: "Founder and CEO, Eolas Medical"
    },
    {
      logo: "https://landing.ai/wp-content/uploads/2025/09/ph-data.svg",
      quote: "LandingAI's Builder Program aligns perfectly with phData's mission to help enterprises build reliable, production-grade AI. With ADE, developers and data teams gain structured, governed access to document intelligence—whether it's parsing financial filings, extracting healthcare data, or streamlining legal reviews. We're excited to bring this capability to customers and co-create new solutions.",
      author: "Dominick Rocco",
      position: "VP of AI and Machine Learning, PhData"
    }
  ];

  const scrollToApply = () => {
    const applySection = document.getElementById('apply');
    if (applySection) {
      applySection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Builder Program application submitted');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 py-24 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Become a Builder<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                with Agentic Document Extraction
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Extract insight from any document with the most advanced Agentic Document 
              Extraction API on the market. Build faster, better, and safer.
            </p>
            
            <button
              onClick={scrollToApply}
              className="group bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold text-lg px-10 py-4 rounded-full hover:from-blue-600 hover:to-cyan-600 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              Become a Builder
              <svg className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Description */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                What the Program Offers
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                For companies interested in becoming an ADE Partner, our program will provide you the APIs, 
                priority rate limit, and the technical & go-to-market resources you need to build and 
                launch confidently with ADE.
              </p>
            </div>

            {/* Right Column - Benefits */}
            <div className="space-y-8">
              {programBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-6 group">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <img 
                      src={benefit.icon} 
                      alt={benefit.title}
                      className="w-10 h-10"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <img 
                src="https://landing.ai/wp-content/uploads/2025/09/landing-icon-cube.svg" 
                alt="Landing AI"
                className="w-24 h-auto"
                loading="lazy"
              />
            </div>
            <h2 className="text-4xl font-bold text-gray-900">
              Product Highlights
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productHighlights.map((highlight, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={highlight.image}
                    alt={highlight.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {highlight.title}
                  </h3>
                  
                  <ul className="space-y-3">
                    {highlight.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/sb0d-fmBdvA?feature=oembed&enablejsapi=1&origin=https%3A%2F%2Flanding.ai"
                title="LandingAI Builder's Program"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See what our partners say about building with LandingAI's Agentic Document Extraction
            </p>
          </div>

          <div className="space-y-12">
            {/* Full-width testimonial */}
            <div className="bg-white rounded-3xl p-10 shadow-xl border border-blue-100">
              <div className="mb-8">
                <img 
                  src={testimonials[0].logo}
                  alt="TCG Process"
                  className="h-12 w-auto"
                  loading="lazy"
                />
              </div>
              <blockquote className="text-xl text-gray-700 leading-relaxed mb-8 italic">
                "{testimonials[0].quote}"
              </blockquote>
              <div>
                <p className="font-bold text-gray-900">{testimonials[0].author}</p>
                <p className="text-gray-600">{testimonials[0].position}</p>
              </div>
            </div>

            {/* Two-column testimonials */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.slice(1).map((testimonial, index) => (
                <div key={index} className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:border-blue-200 transition-colors">
                  <div className="mb-6">
                    <img 
                      src={testimonial.logo}
                      alt={testimonial.author}
                      className="h-10 w-auto"
                      loading="lazy"
                    />
                  </div>
                  <blockquote className="text-gray-600 leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.author}</p>
                    <p className="text-gray-600 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Apply Section */}
      <section id="apply" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Apply to the LandingAI Builder Program
            </h2>
            <p className="text-lg text-gray-600">
              Join our community of builders and unlock the full potential of Agentic Document Extraction
            </p>
          </div>

          <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 md:p-12 shadow-2xl border border-blue-100">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Enter your first name"
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Your company"
                  />
                </div>
                
                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                    Website URL *
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="https://example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Business email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="you@company.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-2">
                    Job title *
                  </label>
                  <input
                    type="text"
                    id="jobTitle"
                    name="jobTitle"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Your position"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="userId" className="block text-sm font-medium text-gray-700 mb-2">
                  LandingAI user ID (If different from the business email above)
                </label>
                <input
                  type="text"
                  id="userId"
                  name="userId"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Optional"
                />
              </div>

              <div>
                <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-2">
                  Comments and other information
                </label>
                <textarea
                  id="comments"
                  name="comments"
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Tell us about your use case or any questions..."
                ></textarea>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    required
                    className="mt-1 w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="terms" className="ml-3 text-sm text-gray-700">
                    I agree to the the LandingAI{' '}
                    <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                      terms of service
                    </a>{' '}
                    and{' '}
                    <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                      privacy policy
                    </a>{' '}
                    and I consent to LandingAI processing my information and agree to receive other 
                    communications from LandingAI. I can unsubscribe at any time. *
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-lg py-4 rounded-xl hover:from-blue-700 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuilderProgramPage;