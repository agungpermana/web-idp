import React, { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const productMenuItems = {
    product: [
      { icon: "📄", title: "Agentic Document Extraction", desc: "Extracts structured data from any document" },
      { icon: "💡", title: "LandingLens", desc: "End-to-end Visual AI platform for training and deploying vision models" },
      { icon: "❄️", title: "Snowflake Native Apps", desc: "Agentic Document Extraction and LandingLens as a Native App" },
    ],
    research: [
      { icon: "👁️", title: "Agentic Object Detection", desc: "Identifies specific items with a text prompt" },
      { icon: "💻", title: "VisionAgent: Agentic Coder", desc: "GenAI-Powered app builder for developers" },
    ],
  };

  const navItems = [
    { name: "Product", dropdown: true, menu: productMenuItems },
    { name: "Solutions", dropdown: true },
    { name: "Resources", dropdown: true },
    { name: "Pricing", dropdown: false },
    { name: "Company", dropdown: true },
  ];

  return (
    <header className="bg-gray-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">

          {/* LOGO */}
          <a href="https://landing.ai/">
            <img
              className="h-8 w-auto"
              src="https://landing.ai/wp-content/uploads/2024/06/DarkLogo.svg"
              alt="Landing AI Logo"
            />
          </a>

          {/* DESKTOP NAV */}
          <nav className="hidden bg-red lg:block h-full" ref={menuRef}>
            <ul className="flex space-x-8 h-full items-center text-white">
              {navItems.map((item, index) => (
                <li
                  key={item.name}
                  className="relative flex items-center h-full"
                >
                  {/* TOP NAV BUTTON */}
                  <button 
                    className="text-sm font-medium hover:text-blue-400 transition flex items-center h-full px-2"
                    onMouseEnter={() => item.dropdown && setOpenMenu(index)}
                    onMouseLeave={(e) => {
                      // Only close if not moving to dropdown
                      if (!e.relatedTarget?.closest('.dropdown-container')) {
                        item.dropdown && setOpenMenu(null);
                      }
                    }}
                  >
                    {item.name}
                    {item.dropdown && (
                      <span className="ml-1 text-[10px]">
                        {openMenu === index ? "▲" : "▼"}
                      </span>
                    )}
                  </button>

                  {/* DROPDOWN - with gap to prevent disappearing */}
                  {item.dropdown && openMenu === index && item.menu && (
                    <div 
                      className="dropdown-container absolute top-full left-0 mt-0 w-[720px] bg-white rounded-b-xl shadow-2xl border border-gray-200"
                      onMouseEnter={() => setOpenMenu(index)}
                      onMouseLeave={() => setOpenMenu(null)}
                    >
                      {/* Arrow/pointer at top */}
                      <div className="absolute -top-2 left-6 w-4 h-4 bg-white transform rotate-45 border-t border-l border-gray-200"></div>
                      
                      <div className="flex p-8 gap-16 pt-10">
                        {/* PRODUCT COLUMN */}
                        <div className="w-1/2">
                          <h3 className="text-xs font-semibold uppercase text-gray-500 mb-4">
                            Product
                          </h3>
                          <div className="space-y-4">
                            {item.menu.product.map((link) => (
                              <a
                                key={link.title}
                                href="#"
                                className="block p-3 rounded-lg hover:bg-gray-50 transition group"
                              >
                                <p className="text-base font-medium flex items-start text-gray-900 group-hover:text-blue-600">
                                  <span className="mr-2 text-xl">{link.icon}</span>
                                  {link.title}
                                </p>
                                <p className="ml-7 text-sm text-gray-500 group-hover:text-gray-700">{link.desc}</p>
                              </a>
                            ))}
                          </div>
                        </div>

                        {/* RESEARCH COLUMN */}
                        <div className="w-1/2">
                          <h3 className="text-xs font-semibold uppercase text-gray-500 mb-4">
                            Research
                          </h3>
                          <div className="space-y-4">
                            {item.menu.research.map((link) => (
                              <a
                                key={link.title}
                                href="#"
                                className="block p-3 rounded-lg hover:bg-gray-50 transition group"
                              >
                                <p className="text-base font-medium flex items-start text-gray-900 group-hover:text-blue-600">
                                  <span className="mr-2 text-xl">{link.icon}</span>
                                  {link.title}
                                </p>
                                <p className="ml-7 text-sm text-gray-500 group-hover:text-gray-700">{link.desc}</p>
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

          {/* DESKTOP CTA BUTTONS */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Primary button - matching navbar background color */}
            <a
              href="#"
              className="
                bg-blue-500
                hover:bg-gray-500
                text-white 
                px-5 py-2.5 
                rounded-lg 
                transition-colors 
                font-medium
                text-sm
                border border-primary
              "
            >
              Start for Free
            </a>

            {/* Outline primary button */}
            <a
              href="https://landing.ai/contact-us"
              className="
                border 
                border-blue-500 
                text-blue-500 
                hover:bg-blue-500/10 
                px-5 py-2.5 
                rounded-lg 
                transition-colors
                font-medium
                text-sm
              "
            >
              Get In Touch
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-gray-900 shadow-lg pb-6 border-t border-gray-800">
          <div className="px-4 space-y-1">
            {/* Nav Items */}
            {navItems.map((item) => (
              <a
                key={item.name}
                className="block px-3 py-3 rounded-md text-white hover:bg-gray-800 transition-colors"
                href="#"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}

            {/* CTA Buttons */}
            <div className="pt-4 border-t border-gray-800 space-y-3">
              <a
                href="#"
                className="
                  bg-gray-800 
                  hover:bg-gray-700 
                  text-white 
                  px-4 py-3 
                  rounded-lg 
                  w-full
                  transition-colors
                  font-medium
                  text-center
                  block
                  border border-gray-700
                "
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Start for Free
              </a>

              <a
                href="https://landing.ai/contact-us"
                className="
                  border 
                  border-blue-500 
                  text-blue-500 
                  hover:bg-blue-500/10 
                  px-4 py-3 
                  rounded-lg 
                  w-full 
                  transition-colors
                  font-medium
                  text-center
                  block
                "
                onClick={() => setIsMobileMenuOpen(false)}
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