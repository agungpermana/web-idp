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

  // --- DATA MENU ---

  // DATA 1: Product Menu (Format Object: Judul Kolom -> Array Item)
  const productMenuItems = {
    "Our Products": [
      { 
        icon: "📄", 
        title: "Agentic Document Extraction", 
        desc: "Extracts structured data from any document",
        path: "/product-1" 
      },
      { 
        icon: "💡", 
        title: "LandingLens", 
        desc: "End-to-end Visual AI platform", 
        path: "/product-1" 
      },
      { 
        icon: "❄️", 
        title: "Snowflake Native Apps", 
        desc: "Native App Integration", 
        path: "/product-1" 
      },
    ],
    "Research & Tools": [
      { 
        icon: "👁️", 
        title: "Agentic Object Detection", 
        desc: "Identifies specific items", 
        path: "/product-1" 
      },
      { 
        icon: "💻", 
        title: "VisionAgent: Agentic Coder", 
        desc: "GenAI-Powered app builder", 
        path: "/product-1" 
      },
    ],
  };

  // DATA 2: Solutions Menu (Format disamakan dengan Product agar layout konsisten)
  const solutionMenuItems = {
    "By Industry": [
      { 
        icon: "🏭", 
        title: "Manufacturing", 
        desc: "Optimize production with AI",
        path: "/solution-1" 
      },
      { 
        icon: "🏥", 
        title: "Healthcare", 
        desc: "Revolutionize patient care",
        path: "/solution-1"
      },
    ],
    "By Use Case": [
      { 
        icon: "🔍", 
        title: "Quality Inspection", 
        desc: "Automated defect detection",
        path: "/solution-1"
      },
      { 
        icon: "📦", 
        title: "Logistics", 
        desc: "Streamline supply chain",
        path: "/solution-1"
      },
    ]
  };

  // MAIN NAVIGATION CONFIG
  const navItems = [
    { name: "Product", dropdown: true, menu: productMenuItems },
    { name: "Solutions", dropdown: true, menu: solutionMenuItems }, 
    { name: "Resources", dropdown: true, menu: null }, // Menu null jika belum ada isinya
    { name: "Pricing", dropdown: false, path: "/pricing" }, 
    { name: "Company", dropdown: true, menu: null },
  ];

  return (
    <header className="bg-gray-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">

          {/* LOGO */}
          <Link to="/">
            <img
              className="h-8 w-auto"
              src="https://landing.ai/wp-content/uploads/2024/06/DarkLogo.svg"
              alt="Landing AI Logo"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:block h-full" ref={menuRef}>
            <ul className="flex space-x-8 h-full items-center text-white">
              {navItems.map((item, index) => (
                <li
                  key={item.name}
                  className="relative flex items-center h-full"
                >
                  {/* BUTTON TRIGGER */}
                  {item.dropdown ? (
                    <button 
                      className="text-sm font-medium hover:text-blue-400 transition flex items-center h-full px-2 outline-none focus:outline-none"
                      onMouseEnter={() => setOpenMenu(index)}
                      onMouseLeave={(e) => {
                        // Cek apakah mouse pindah ke dropdown, jika tidak, tutup
                        if (!e.relatedTarget?.closest('.dropdown-container')) {
                          setOpenMenu(null);
                        }
                      }}
                    >
                      {item.name}
                      <span className="ml-1 text-[10px]">
                        {openMenu === index ? "▲" : "▼"}
                      </span>
                    </button>
                  ) : (
                    // Link biasa (non-dropdown)
                    <Link 
                      to={item.path || "#"}
                      className="text-sm font-medium hover:text-blue-400 transition flex items-center h-full px-2"
                    >
                      {item.name}
                    </Link>
                  )}

                  {/* DYNAMIC DROPDOWN MENU */}
                  {/* Logic: Hanya render jika dropdown=true, index cocok, dan item.menu ADA datanya */}
                  {item.dropdown && openMenu === index && item.menu && (
                    <div 
                      className="dropdown-container absolute top-full left-0 mt-0 w-[720px] bg-white rounded-b-xl shadow-2xl border border-gray-200"
                      onMouseEnter={() => setOpenMenu(index)}
                      onMouseLeave={() => setOpenMenu(null)}
                    >
                      {/* Arrow Pointer */}
                      <div className="absolute -top-2 left-6 w-4 h-4 bg-white transform rotate-45 border-t border-l border-gray-200"></div>
                      
                      <div className="flex p-8 gap-16 pt-10">
                        {/* LOOPING COLUMNS (Product/Research/Industry dll) */}
                        {Object.entries(item.menu).map(([categoryName, links]) => (
                          <div key={categoryName} className="w-1/2">
                            <h3 className="text-xs font-semibold uppercase text-gray-500 mb-4">
                              {categoryName}
                            </h3>
                            <div className="space-y-4">
                              {links.map((link) => (
                                <Link
                                  key={link.title}
                                  to={link.path}
                                  className="block p-3 rounded-lg hover:bg-gray-50 transition group"
                                  onClick={() => setOpenMenu(null)} // Tutup menu saat diklik
                                >
                                  <p className="text-base font-medium flex items-start text-gray-900 group-hover:text-blue-600">
                                    <span className="mr-2 text-xl">{link.icon}</span>
                                    {link.title}
                                  </p>
                                  <p className="ml-7 text-sm text-gray-500 group-hover:text-gray-700">
                                    {link.desc}
                                  </p>
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
              className="bg-blue-500 hover:bg-gray-500 text-white px-5 py-2.5 rounded-lg transition-colors font-medium text-sm border border-transparent"
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
        <div className="lg:hidden bg-gray-900 shadow-lg pb-6 border-t border-gray-800">
          <div className="px-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path || "#"} 
                // Catatan: Mobile belum support dropdown bertingkat di kode ini, 
                // jadi sementara di-link ke root/hash. 
                className="block px-3 py-3 rounded-md text-white hover:bg-gray-800 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <div className="pt-4 border-t border-gray-800 space-y-3">
              <Link
                to="/signup"
                className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-3 rounded-lg w-full transition-colors font-medium text-center block border border-gray-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Start for Free
              </Link>

              <a
                href="https://landing.ai/contact-us"
                className="border border-blue-500 text-blue-500 hover:bg-blue-500/10 px-4 py-3 rounded-lg w-full transition-colors font-medium text-center block"
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