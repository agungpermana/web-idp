import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    // Main Footer Container
    <footer className="bg-[#051E33] text-gray-400 border-t border-gray-800">
      
      {/* Top Section - 4 Columns Layout */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Logo, Description, and Headquarters */}
          <div className="space-y-6">
            {/* LOGO IDP (Sesuai Navbar) */}
            <Link to="/" className="inline-block">
              <span className="text-3xl font-extrabold tracking-wider font-sans bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent drop-shadow-sm">
                IDP
              </span>
            </Link>
            
            <p className="text-sm leading-relaxed text-gray-400">
              IDP’s cutting-edge software platform makes computer vision easy for a wide range of applications across all industries.
            </p>
            
            <div className="space-y-2 pt-4">
              <p className="text-white font-semibold text-sm uppercase tracking-wide">Headquarters</p>
              <div className="text-sm text-gray-400">
                <p>400 Castro St., Suite 600,</p>
                <p>Mountain View, CA 94041</p>
                <a href="mailto:support@landing.ai" className="hover:text-blue-400 transition-colors mt-1 block">
                  support@landing.ai
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Product & Research Links */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-white font-semibold text-sm uppercase tracking-wide">Product</p>
              <ul className="space-y-2 text-sm">
                <li><Link to="/agentic-document-extraction" className="hover:text-blue-400 transition">Agentic Document Extraction</Link></li>
                <li><Link to="/landinglens" className="hover:text-blue-400 transition">LandingLens</Link></li>
                <li><Link to="/snowflake" className="hover:text-blue-400 transition">Snowflake Native Apps</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <p className="text-white font-semibold text-sm uppercase tracking-wide">Research</p>
              <ul className="space-y-2 text-sm">
                <li><Link to="/agentic-object-detection" className="hover:text-blue-400 transition">Agentic Object Detection</Link></li>
                <li><Link to="/visionagent" className="hover:text-blue-400 transition">VisionAgent: Agentic Coder</Link></li>
              </ul>
            </div>
          </div>

          {/* Column 3: Industries & Resources Links */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-white font-semibold text-sm uppercase tracking-wide">Industries</p>
              <ul className="space-y-2 text-sm">
                <li><Link to="/industries/financial" className="hover:text-blue-400 transition">Financial Services</Link></li>
                <li><Link to="/industries/healthcare" className="hover:text-blue-400 transition">Healthcare</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <p className="text-white font-semibold text-sm uppercase tracking-wide">Resources</p>
              <ul className="space-y-2 text-sm">
                <li><Link to="/blog" className="hover:text-blue-400 transition">Blogs</Link></li>
                <li><Link to="/webinar" className="hover:text-blue-400 transition">Webinars & Events</Link></li>
                <li><a href="https://discord.com" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">Discord</a></li>
                <li><a href="https://community.landing.ai/" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">Circle Community</a></li>
              </ul>
            </div>
          </div>
          
          {/* Column 4: Company & Trust Links */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-white font-semibold text-sm uppercase tracking-wide">Company</p>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about-us" className="hover:text-blue-400 transition">About Us</Link></li>
                <li><Link to="/careers" className="hover:text-blue-400 transition">Careers</Link></li>
                <li><Link to="/partners" className="hover:text-blue-400 transition">Partners</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <p className="text-white font-semibold text-sm uppercase tracking-wide">Trust</p>
              <ul className="space-y-2 text-sm">
                <li><Link to="/security" className="hover:text-blue-400 transition">Security & Compliance</Link></li>
                <li><a href="https://trust.landing.ai/" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">Trust Center</a></li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar - Copyright and Social Icons */}
      <div className="border-t border-gray-800/50 bg-[#041829]">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm gap-4">
          
          {/* Copyright */}
          <div className="text-gray-500 text-center md:text-left flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
            <span>© IDP. All Rights Reserved 2025</span>
            <div className="hidden md:block w-1 h-1 bg-gray-600 rounded-full"></div>
            <Link to="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
            <div className="hidden md:block w-1 h-1 bg-gray-600 rounded-full"></div>
            <Link to="/legal" className="hover:text-white transition">Legal</Link>
          </div>

          {/* Social Icons (SVG Asli) */}
          <div className="flex space-x-5">
            {/* LinkedIn */}
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition transform hover:scale-110">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            
            {/* Twitter / X */}
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition transform hover:scale-110">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>

            {/* GitHub */}
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition transform hover:scale-110">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>

            {/* Youtube */}
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition transform hover:scale-110">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;