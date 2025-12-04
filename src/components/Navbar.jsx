import React, { useState } from "react";

const Navbar = () => {
  // State to manage the visibility of the main 'Product' mega menu
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);
  // State for mobile menu open/close (kept your original 'open' state)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Data structure for the Product Mega Menu content
  const productMenuItems = {
    product: [
      { icon: '📄', title: 'Agentic Document Extraction', desc: 'Extracts structured data from any document' },
      { icon: '💡', title: 'LandingLens', desc: 'End-to-end Visual AI platform for training and deploying vision models' },
      { icon: '❄️', title: 'Snowflake Native Apps', desc: 'Agentic Document Extraction and LandingLens as a Native App' },
    ],
    research: [
      { icon: '👁️', title: 'Agentic Object Detection', desc: 'Identifies specific items with a text prompt' },
      { icon: '💻', title: 'VisionAgent: Agentic Coder', desc: 'GenAI-Powered app builder for developer' },
    ]
  };

  const navItems = [
    { name: "Product", isDropdown: true, open: isProductMenuOpen, setOpen: setIsProductMenuOpen, menuContent: productMenuItems },
    { name: "Solutions", isDropdown: true, href: "#" },
    { name: "Resources", isDropdown: true, href: "https://landing.ai/resources" },
    { name: "Pricing", isDropdown: false, href: "#PricingPopup" },
    { name: "Company", isDropdown: true, href: "#" },
  ];

  return (
    // 1. Main Navbar Container - dark background, sticky, centered content
    <header className="bg-gray-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo - Left */}
          <div className="flex-shrink-0">
            <a href="https://landing.ai/">
              <img
                className="h-8 w-auto"
                src="https://landing.ai/wp-content/uploads/2024/06/DarkLogo.svg"
                alt="Landing AI Logo"
              />
            </a>
          </div>

          {/* Desktop Navigation - Center (Hidden on small screens) */}
          <nav className="hidden lg:block h-full">
            <ul className="flex space-x-8 h-full items-center">
              {navItems.map((item) => (
                <li
                  key={item.name}
                  className="relative h-full flex items-center"
                  // Use onMouseEnter/onMouseLeave for the dropdown hover effect
                  onMouseEnter={() => item.isDropdown && item.setOpen && item.setOpen(true)}
                  onMouseLeave={() => item.isDropdown && item.setOpen && item.setOpen(false)}
                >
                  <a
                    href={item.href || "#"}
                    className="text-white text-sm font-medium hover:text-blue-400 flex items-center transition duration-150"
                  >
                    {item.name}
                    {item.isDropdown && (
                      <span className="ml-2 transform transition-transform duration-200">
                        {/* Chevron/Caret icon. Using text for simplicity */}
                        {item.open ? '▲' : '▼'}
                      </span>
                    )}
                  </a>

                  {/* Mega Menu Dropdown */}
                  {item.isDropdown && item.open && item.menuContent && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-0 w-max bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
                      <div className="flex p-8">
                        {/* Product Column */}
                        <div className="mr-12">
                          <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">PRODUCT</h3>
                          <div className="space-y-4">
                            {item.menuContent.product.map((link) => (
                              <a key={link.title} href="#" className="block max-w-sm p-2 -m-2 rounded-lg hover:bg-gray-50 transition duration-150">
                                <p className="text-base font-medium text-gray-900 flex items-start">
                                  <span className="mr-2 text-xl">{link.icon}</span>
                                  {link.title}
                                </p>
                                <p className="mt-1 text-sm text-gray-500 pl-7">{link.desc}</p>
                              </a>
                            ))}
                          </div>
                        </div>
                        {/* Research Column */}
                        <div>
                          <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">RESEARCH</h3>
                          <div className="space-y-4">
                            {item.menuContent.research.map((link) => (
                              <a key={link.title} href="#" className="block max-w-sm p-2 -m-2 rounded-lg hover:bg-gray-50 transition duration-150">
                                <p className="text-base font-medium text-gray-900 flex items-start">
                                   <span className="mr-2 text-xl">{link.icon}</span>
                                  {link.title}
                                </p>
                                <p className="mt-1 text-sm text-gray-500 pl-7">{link.desc}</p>
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Buttons - Right */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="#"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-150"
            >
              Start for Free
            </a>
            <a
              href="https://landing.ai/contact-us"
              className="px-4 py-2 text-sm font-medium text-white border border-gray-600 rounded-lg hover:bg-gray-700 transition duration-150"
            >
              Get In Touch
            </a>
          </div>

          {/* Mobile Menu Button - Hamburger (Visible on small screens) */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Icon */}
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> // X icon
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /> // Hamburger icon
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-20 w-full bg-gray-900 shadow-lg pb-4">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
             {/* Simplified mobile menu items */}
             {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href || "#"}
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-700 space-y-2">
                 <a
                    href="#"
                    className="block px-3 py-2 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Start for Free
                  </a>
                  <a
                    href="https://landing.ai/contact-us"
                    className="block px-3 py-2 rounded-md text-base font-medium text-white border border-gray-700 hover:bg-gray-700"
                  >
                    Get In Touch
                  </a>
              </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;