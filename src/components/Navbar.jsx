import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom"; 

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

  // --- DATA MENU (Sama seperti sebelumnya) ---
  const productMenuItems = {
    "Our Products": [
      { icon: "📄", title: "Product 1", desc: "Extracts structured data from any document", path: "/product-1" },
      { icon: "💡", title: "Product 2", desc: "End-to-end Visual AI platform", path: "/roduct-1" },
      { icon: "❄️", title: "product 3", desc: "Native App Integration", path: "/product-1" },
    ]
  };

  const solutionMenuItems = {
    "By Industry": [
      { icon: "🏭", title: "Manufacturing", desc: "Optimize production with AI", path: "/solution-1" },
      { icon: "🏥", title: "Healthcare", desc: "Revolutionize patient care", path: "/solution-1" },
    ],
    "By Use Case": [
      { icon: "🔍", title: "Quality Inspection", desc: "Automated defect detection", path: "/solution-1" },
      { icon: "📦", title: "Logistics", desc: "Streamline supply chain", path: "/solution-1" },
    ]
  };

  const resourceMenuItems = {
    "Learning Center": [
      { icon: "📚", title: "Blog", path: "/blog" },
      { icon: "🎓", title: "Events & Webinars", path: "/event" }
    ],
  };

  const companyMenuItems = {
    "Company": [
      { icon: "🏢", title: "About Us", path: "/about" },
      { icon: "👥", title: "Careers", path: "/careers" },
      { icon: "👋", title: "Partners", path: "/partners" },
      { icon: "📞", title: "Contact Us", path: "/contact" },

    ]
  };

  const navItems = [
    { name: "Product", dropdown: true, menu: productMenuItems },
    { name: "Solutions", dropdown: true, menu: solutionMenuItems }, 
    { name: "Resources", dropdown: true, menu: resourceMenuItems }, 
    { name: "Pricing", dropdown: false, path: "/pricing" }, 
    { name: "Company", dropdown: true, menu: companyMenuItems }, 
  ];

  return (
    <header className="bg-gray-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">

          <Link to="/" className="flex items-center gap-2">
            <span className="text-3xl font-extrabold tracking-wider font-sans bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent drop-shadow-sm">
              IDP
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:block h-full" ref={menuRef}>
            <ul className="flex space-x-8 h-full items-center text-white">
              {navItems.map((item, index) => (
                <li key={item.name} className="relative flex items-center h-full">
                  {item.dropdown ? (
                    <button 
                      className="text-sm font-medium hover:text-blue-400 transition flex items-center h-full px-2 outline-none focus:outline-none"
                      onMouseEnter={() => setOpenMenu(index)}
                    >
                      {item.name}
                      <span className="ml-1 text-[10px]">
                        {openMenu === index ? "▲" : "▼"}
                      </span>
                    </button>
                  ) : (
                    <Link 
                      to={item.path || "#"}
                      className="text-sm font-medium hover:text-blue-400 transition flex items-center h-full px-2"
                    >
                      {item.name}
                    </Link>
                  )}

                  {item.dropdown && openMenu === index && item.menu && (
                    <div 
                      className="dropdown-container absolute top-full left-0 mt-0 bg-white rounded-b-xl shadow-2xl border border-gray-200"
                      style={{ minWidth: '600px', maxWidth: '720px' }}
                      onMouseEnter={() => setOpenMenu(index)}
                      onMouseLeave={() => setOpenMenu(null)}
                    >
                      <div className="absolute -top-2 left-6 w-4 h-4 bg-white transform rotate-45 border-t border-l border-gray-200"></div>
                      
                      <div className="flex p-8 gap-8 pt-10">
                        {Object.entries(item.menu).map(([categoryName, links]) => (
                          <div key={categoryName} className="flex-1">
                            <h3 className="text-xs font-semibold uppercase text-gray-500 mb-4 tracking-wider">
                              {categoryName}
                            </h3>
                            <div className="space-y-2">
                              {Array.isArray(links) && links.map((link) => (
                                <Link
                                  key={link.title}
                                  to={link.path}
                                  className="block p-3 rounded-lg hover:bg-blue-50 transition group"
                                  onClick={() => setOpenMenu(null)}
                                >
                                  <div className="flex items-start">
                                    <span className="mr-3 text-xl mt-0.5">{link.icon}</span>
                                    <div>
                                      <p className="text-sm font-bold text-gray-900 group-hover:text-blue-600">
                                        {link.title}
                                      </p>
                                      {link.desc && (
                                        <p className="text-xs text-gray-500 mt-0.5 group-hover:text-gray-700 leading-snug">
                                          {link.desc}
                                        </p>
                                      )}
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* DESKTOP CTA BUTTONS */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/signup"
              className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2.5 rounded-lg transition-colors font-medium text-sm border border-transparent"
            >
              Start for Free
            </Link>

            <a
              href="https://landing.ai/contact-us"
              target="_blank" 
              rel="noopener noreferrer"
              className="border border-blue-500 text-blue-500 hover:bg-blue-500/10 px-5 py-2.5 rounded-lg transition-colors font-medium text-sm"
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
        <div className="lg:hidden bg-gray-900 shadow-lg pb-6 border-t border-gray-800 absolute w-full left-0">
          <div className="px-4 space-y-1 pt-4">
            {navItems.map((item) => (
              <div key={item.name}>
                 <Link
                    to={item.path || "#"} 
                    className="block px-3 py-3 rounded-md text-white hover:bg-gray-800 transition-colors font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                 >
                   {item.name}
                 </Link>
              </div>
            ))}

            <div className="pt-6 border-t border-gray-800 space-y-3 mt-4">
              <Link
                to="/"
                className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-3 rounded-lg w-full transition-colors font-medium text-center block border border-gray-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Start for Free
              </Link>
              <Link
                href="/"
                className="border border-blue-500 text-blue-500 hover:bg-blue-500/10 px-4 py-3 rounded-lg w-full transition-colors font-medium text-center block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;