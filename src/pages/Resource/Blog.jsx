import React, { useState } from 'react';

// --- ICONS (Inline SVG) ---

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const FileTextIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/>
  </svg>
);

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('All Posts');
  
  const categories = [
    "All Posts", "Product", "Case Study", "Will It Extract", "Tutorial", "News"
  ];

  // --- DATA DUMMY ---
  const posts = [
    {
      id: 1,
      title: "Agentic Document Extraction Brochure.",
      category: "Product",
      image: "https://placehold.co/600x340/111827/FFF?text=Agentic+Document+Extraction+Brochure", 
      authorName: "LandingAI",
      authorAvatar: "https://placehold.co/40x40/e2e8f0/1e293b?text=LA", 
      date: "December 5, 2025",
      description: null 
    },
    {
      id: 2,
      title: "Intelligent Document Processing in Retail Banking",
      category: "Product", 
      image: "https://placehold.co/600x340/111827/FFF?text=IDP+in+Retail+Banking",
      authorName: "Dan Maloney",
      authorAvatar: "https://i.pravatar.cc/40?img=11", 
      date: "November 20, 2025",
      description: "Agentic Document Extraction (ADE) by LandingAI automates document-heavy processes in retail banking, including loans, KYC, and compliance. Its layout-..."
    },
    {
      id: 3,
      title: "Answer 99.15% of DocVQA Without Images in QA: Agentic Document...",
      category: "Product",
      image: "https://placehold.co/600x340/111827/FFF?text=99.15%25+Accuracy+DocVQA",
      authorName: "Ankit Khare, Shankar Jagadeesan",
      authorAvatar: "https://i.pravatar.cc/40?img=59", 
      date: "November 12, 2025",
      description: "We ran on the DocVQA validation split and got 5,286 correct out of 5,331 (99.15%). Of those 45 wrong answers, only 18 are true parsing shortcomings...."
    },
    {
      id: 4,
      title: "VisionAgent: The Future of Computer Vision",
      category: "Product",
      image: "https://placehold.co/600x340/111827/FFF?text=VisionAgent+AI",
      authorName: "Andrew Ng",
      authorAvatar: "https://placehold.co/40x40/e2e8f0/1e293b?text=AN", 
      date: "October 10, 2025",
      description: "Explore how VisionAgent is revolutionizing the way we build computer vision applications with natural language prompting."
    },
    {
      id: 5,
      title: "Visual Prompting: A New Paradigm",
      category: "Tutorial",
      image: "https://placehold.co/600x340/111827/FFF?text=Visual+Prompting",
      authorName: "LandingAI Team",
      authorAvatar: "https://placehold.co/40x40/e2e8f0/1e293b?text=LA", 
      date: "September 28, 2025",
      description: "Learn the basics of visual prompting and how it differs from traditional model training."
    },
    {
      id: 6,
      title: "Case Study: Manufacturing Defect Detection",
      category: "Case Study",
      image: "https://placehold.co/600x340/111827/FFF?text=Defect+Detection",
      authorName: "Sarah Chen",
      authorAvatar: "https://i.pravatar.cc/40?img=32", 
      date: "September 15, 2025",
      description: "See how a leading automotive manufacturer reduced defect rates by 40% using LandingLens."
    },
  ];

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Header --- */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            Blog
          </h1>
          <div className="h-1 w-16 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* --- Filter Categories --- */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-md border text-sm font-medium transition-colors duration-200 
                ${activeCategory === category 
                  ? 'bg-slate-700 text-white border-slate-700' 
                  : 'bg-white text-slate-500 border-slate-300 hover:bg-slate-50' 
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* --- Search Bar --- */}
        <div className="flex justify-center mb-16">
          <div className="relative w-full max-w-2xl">
            <input
              type="text"
              placeholder="Search resource"
              className="w-full py-3 px-4 pr-12 text-slate-600 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-slate-400 shadow-sm"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400">
              <SearchIcon />
            </div>
          </div>
        </div>

        {/* --- Grid Artikel --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
          {posts.map((post) => (
            <div 
              key={post.id} 
              className="group bg-white rounded-xl border border-slate-100 overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 flex flex-col"
            >
              {/* Gambar */}
              <div className="relative h-52 overflow-hidden bg-slate-100">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Konten */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-blue-500 font-medium text-sm mb-3">
                  <FileTextIcon />
                  <span>{post.category}</span>
                </div>
                <h3 className="text-xl font-bold text-black leading-snug mb-4 group-hover:text-blue-600 transition-colors">
                  <a href="#">{post.title}</a>
                </h3>
                <div className="flex items-center mt-auto mb-4">
                  <img 
                    src={post.authorAvatar} 
                    alt={post.authorName}
                    className="w-10 h-10 rounded-full mr-3 border border-slate-100"
                  />
                  <div>
                    <p className="text-sm font-bold text-slate-800 leading-none mb-1">
                      {post.authorName}
                    </p>
                    <p className="text-sm text-slate-500 leading-none">
                      {post.date}
                    </p>
                  </div>
                </div>
                {post.description && (
                   <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 border-t border-slate-100 pt-4">
                     {post.description}
                   </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* --- PAGINATION (UPDATED: CENTERED & STYLED) --- */}
        <div className="flex justify-center mt-16 mb-12">
          <nav className="flex items-center gap-2" aria-label="Pagination">
            
            {/* Page 1: Aktif */}
            <button 
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 transition-colors"
              aria-current="page"
            >
              1
            </button>
            
            {/* Page 2 */}
            <button 
              className="px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:text-blue-600 hover:border-blue-300 transition-colors"
            >
              2
            </button>
            
            {/* Page 3 */}
            <button 
              className="px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:text-blue-600 hover:border-blue-300 transition-colors"
            >
              3
            </button>
            
            {/* Ellipsis (...) */}
            <span className="px-4 py-2 text-sm font-medium text-slate-400 bg-transparent">
              ...
            </span>
            
            {/* Page 5 */}
            <button 
              className="px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:text-blue-600 hover:border-blue-300 transition-colors"
            >
              5
            </button>
            
            {/* Next Button */}
            <button 
              className="flex items-center px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:text-blue-600 hover:border-blue-300 transition-colors"
            >
              Next
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>

          </nav>
        </div>
        {/* --- End Pagination --- */}

      </div>
    </div>
  );
};

export default BlogPage;