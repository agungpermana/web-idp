import React from 'react';

const CareersPage = () => {
  const benefits = [
    {
      icon: "https://landing.ai/wp-content/uploads/2022/10/icon_health_plans.png",
      title: "Health",
      description: "Our people and dependents* are covered by comprehensive medical, dental, and vision."
    },
    {
      icon: "https://landing.ai/wp-content/uploads/2022/10/icon_work_station.png",
      title: "Enviroment",
      description: "We provide an allowance for you to set up a workstation however you want."
    },
    {
      icon: "https://landing.ai/wp-content/uploads/2022/10/icon_fitness.png",
      title: "Wellness",
      description: "We offer a fitness stipend to be used on well-being and fitness programs."
    },
    {
      icon: "https://landing.ai/wp-content/uploads/2022/10/icon_lifelong_learning.png",
      title: "Lifelong learning",
      description: "With an education stipend, you are encouraged to keep learning and growing"
    },
    {
      icon: "https://landing.ai/wp-content/uploads/2022/10/icon_PTO.png",
      title: "PTO",
      description: "We provided generous paid time off* so you can strive toward a balanced lifestyle."
    },
    {
      icon: "https://landing.ai/wp-content/uploads/2022/10/icon_retirement_saving.png",
      title: "Retirement",
      description: "We offer retirement plans* to help you plan for your future!"
    },
    {
      icon: "https://landing.ai/wp-content/uploads/2022/10/icon_virtual_meetings.png",
      title: "Events",
      description: "We love having fun! We set up virtual and in-person events to connect with each other."
    },
    {
      icon: "https://landing.ai/wp-content/uploads/2022/10/icon_global_company.png",
      title: "Global citizen",
      description: "Our people reside in North America, Latin America, and Asia. Join our global network!"
    }
  ];

  const footerLinks = {
    product: [
      { name: "Agentic Document Extraction", url: "#" },
      { name: "LandingLens", url: "#" },
      { name: "Snowflake Native Apps", url: "#" }
    ],
    research: [
      { name: "Agentic Object Detection", url: "#" },
      { name: "VisionAgent: Agentic Coder", url: "#" }
    ],
    industries: [
      { name: "Financial Services", url: "#" },
      { name: "Healthcare", url: "#" }
    ],
    resources: [
      { name: "Blogs", url: "#" },
      { name: "Webinars & Events", url: "#" },
      { name: "Discord", url: "#" },
      { name: "Circle Community", url: "#" },
      { name: "Youtube", url: "#" }
    ],
    company: [
      { name: "About Us", url: "#" },
      { name: "Careers", url: "#" },
      { name: "Partners", url: "#" }
    ],
    trust: [
      { name: "Security & Compliance", url: "#" },
      { name: "Trust Center", url: "#" }
    ]
  };

  const socialLinks = [
    { platform: "LinkedIn", url: "#", icon: "linkedin" },
    { platform: "Twitter", url: "#", icon: "twitter" },
    { platform: "GitHub", url: "#", icon: "github" },
    { platform: "YouTube", url: "#", icon: "youtube" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Alternative Background */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-700 py-20 px-4">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-6">
              Join the team
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              LandingAI is building a world-class team of AI Experts, Machine Learning Engineers, 
              Software Developers, Applied Scientists, and Product Managers. See Artificial 
              Intelligence (AI), sales, engineer jobs and machine learning careers below.
            </p>
          </div>
        </div>
      </section>

      {/* Jobs Iframe Section */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <iframe 
              src="https://jobs.lever.co/AIFund?department=LandingAI" 
              width="100%" 
              height="800" 
              frameBorder="0"
              title="LandingAI Careers"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-4">
              LandingAI Benefits
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 w-20 h-20 flex items-center justify-center">
                    <img 
                      src={benefit.icon} 
                      alt={benefit.title}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm italic">
              *Subject to country of employment
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Logo and Description */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div>
              <a href="#">
                <img 
                  src="https://landing.ai/wp-content/uploads/2024/06/DarkLogo.svg" 
                  alt="Landing AI" 
                  className="h-8 mb-6"
                  loading="lazy"
                />
              </a>
              <p className="text-gray-400 mb-6 max-w-lg">
                LandingAI's cutting-edge software platform makes computer vision easy for 
                a wide range of applications across all industries
              </p>
              <div className="mb-4">
                <strong className="block mb-2">Headquarters</strong>
                <address className="text-gray-400 not-italic">
                  400 Castro St., Suite 600,<br />
                  Mountain View, CA 94041<br />
                  support@landing.ai
                </address>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Product & Research */}
              <div>
                <h4 className="font-bold mb-4 text-lg">Product</h4>
                <ul className="space-y-2">
                  {footerLinks.product.map((link, index) => (
                    <li key={index}>
                      <a href={link.url} className="text-gray-400 hover:text-white transition-colors">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
                
                <h4 className="font-bold mb-4 text-lg mt-6">Research</h4>
                <ul className="space-y-2">
                  {footerLinks.research.map((link, index) => (
                    <li key={index}>
                      <a href={link.url} className="text-gray-400 hover:text-white transition-colors">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Industries & Resources */}
              <div>
                <h4 className="font-bold mb-4 text-lg">Industries</h4>
                <ul className="space-y-2">
                  {footerLinks.industries.map((link, index) => (
                    <li key={index}>
                      <a href={link.url} className="text-gray-400 hover:text-white transition-colors">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
                
                <h4 className="font-bold mb-4 text-lg mt-6">Resources</h4>
                <ul className="space-y-2">
                  {footerLinks.resources.map((link, index) => (
                    <li key={index}>
                      <a href={link.url} className="text-gray-400 hover:text-white transition-colors">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company & Trust */}
              <div>
                <h4 className="font-bold mb-4 text-lg">Company</h4>
                <ul className="space-y-2">
                  {footerLinks.company.map((link, index) => (
                    <li key={index}>
                      <a href={link.url} className="text-gray-400 hover:text-white transition-colors">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
                
                <h4 className="font-bold mb-4 text-lg mt-6">Trust</h4>
                <ul className="space-y-2">
                  {footerLinks.trust.map((link, index) => (
                    <li key={index}>
                      <a href={link.url} className="text-gray-400 hover:text-white transition-colors">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-gray-400 text-sm">
                  © LandingAI. All Rights Reserved 2025
                  <a href="#" className="ml-2 hover:text-white">Privacy Policy</a>
                  <span className="mx-2">|</span>
                  <a href="#" className="hover:text-white">Legal</a>
                </p>
              </div>
              
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url}
                    className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500 transition-all"
                    title={`Follow on ${social.platform}`}
                  >
                    <span className="sr-only">{social.platform}</span>
                    <div className="w-5 h-5 bg-current rounded" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CareersPage;