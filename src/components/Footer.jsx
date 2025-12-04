import React from 'react';
// You would typically use a separate file for your logo, 
// but we'll use the static URL provided.
// You'll also want to use icons (e.g., Lucide, Heroicons, or simple SVGs) 
// for the social media links instead of the old Divi classes.

const Footer = () => {
  return (
    // Main Footer Container - Dark background for the whole section
    <footer className="bg-[#051E33] text-gray-400">
      
      {/* Top Section - 4 Columns Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
          
          {/* Column 1: Logo, Description, and Headquarters */}
          <div className="space-y-6">
            <a href="https://landing.ai/">
              <img
                loading="lazy"
                width="159"
                height="32"
                src="https://landing.ai/wp-content/uploads/2024/06/DarkLogo.svg"
                alt="Landing AI Logo"
                className="h-8 w-auto mb-4"
              />
            </a>
            
            <p className="text-sm leading-relaxed">
              LandingAI’s cutting-edge software platform makes computer vision easy for a wide range of applications across all industries
            </p>
            
            <div className="space-y-1">
              <p className="text-white font-semibold pt-4">Headquarters</p>
              <p className="text-sm">400 Castro St., Suite 600,</p>
              <p className="text-sm">Mountain View, CA 94041</p>
              <p className="text-sm">support@landing.ai</p>
            </div>
          </div>

          {/* Column 2: Product & Research Links */}
          <div className="space-y-8">
            <div className="space-y-3">
              <p className="text-white font-semibold">Product</p>
              <ul className="space-y-2 text-sm">
                <li><a href="https://landing.ai/agentic-document-extraction" className="hover:text-white transition">Agentic Document Extraction</a></li>
                <li><a href="https://landing.ai/landinglens" className="hover:text-white transition">LandingLens</a></li>
                <li><a href="https://landing.ai/snowflake" className="hover:text-white transition">Snowflake Native Apps</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <p className="text-white font-semibold">Research</p>
              <ul className="space-y-2 text-sm">
                <li><a href="https://landing.ai/agentic-object-detection" className="hover:text-white transition">Agentic Object Detection</a></li>
                <li><a href="https://landing.ai/visionagent" className="hover:text-white transition">VisionAgent: Agentic Coder</a></li>
              </ul>
            </div>
          </div>

          {/* Column 3: Industries & Resources Links */}
          <div className="space-y-8">
            <div className="space-y-3">
              <p className="text-white font-semibold">Industries</p>
              <ul className="space-y-2 text-sm">
                <li><a href="https://landing.ai/industries/automotive/" className="hover:text-white transition">Financial Services</a></li>
                <li><a href="https://landing.ai/industries/medical-devices/" className="hover:text-white transition">Healthcare</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <p className="text-white font-semibold">Resources</p>
              <ul className="space-y-2 text-sm">
                <li><a href="https://landing.ai/category/blog/" className="hover:text-white transition">Blogs</a></li>
                <li><a href="https://landing.ai/webinar/" className="hover:text-white transition">Webinars & Events</a></li>
                <li><a href="https://discord.com/invite/RVcW3j9RgR" className="hover:text-white transition">Discord</a></li>
                <li><a href="https://community.landing.ai/" className="hover:text-white transition">Circle Community</a></li>
                <li><a href="https://www.youtube.com/channel/UCYQS3jkfB79Diyr9sQJAj5Q" className="hover:text-white transition">Youtube</a></li>
              </ul>
            </div>
          </div>
          
          {/* Column 4: Company & Trust Links */}
          <div className="space-y-8">
            <div className="space-y-3">
              <p className="text-white font-semibold">Company</p>
              <ul className="space-y-2 text-sm">
                <li><a href="https://landing.ai/about-us/" className="hover:text-white transition">About Us</a></li>
                <li><a href="https://landing.ai/careers/" className="hover:text-white transition">Careers</a></li>
                <li><a href="https://landing.ai/partners/" className="hover:text-white transition">Partners</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <p className="text-white font-semibold">Trust</p>
              <ul className="space-y-2 text-sm">
                <li><a href="https://landing.ai/security-at-landingai" className="hover:text-white transition">Security & Compliance</a></li>
                <li><a href="https://trust.landing.ai/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Trust Center</a></li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar - Copyright and Social Icons */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row justify-between items-center text-sm">
          
          {/* Copyright and Legal Links */}
          <div className="text-gray-500 text-center md:text-left space-x-3">
            <span>© LandingAI. All Rights Reserved 2025</span>
            <a href="/privacy-policy/" className="hover:text-white transition">Privacy Policy</a>
            <span>|</span>
            <a href="/legal/" className="hover:text-white transition">Legal</a>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            {/* These need actual icon components or SVGs for production */}
            <a href="https://www.linkedin.com/company/landing-ai/" title="LinkedIn" className="text-gray-500 hover:text-white transition">
              {/* Placeholder for LinkedIn Icon */}
              <span className="text-xl">in</span>
            </a>
            <a href="https://twitter.com/landingAI" title="X (Twitter)" className="text-gray-500 hover:text-white transition">
              {/* Placeholder for X Icon */}
              <span className="text-xl">X</span>
            </a>
            <a href="https://github.com/landing-ai/" title="GitHub" className="text-gray-500 hover:text-white transition">
              {/* Placeholder for GitHub Icon */}
              <span className="text-xl"></span>
            </a>
            <a href="https://www.youtube.com/channel/UCYQS3jkfB79Diyr9sQJAj5Q" title="Youtube" className="text-gray-500 hover:text-white transition">
              {/* Placeholder for Youtube Icon */}
              <span className="text-xl">▶</span>
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;