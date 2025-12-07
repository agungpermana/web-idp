import React from 'react';

// --- ICONS ---
const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

const EventPage = () => {

  // --- DATA DUMMY SESUAI GAMBAR ---
  const heroEvent = {
    id: 1,
    category: "UPCOMING WEBINARS",
    title: "AI Driven Document Processing at Scale for Healthcare",
    image: "https://placehold.co/800x450/0f172a/FFF?text=Office+Hours+Webinar",
  };

  const upcomingEvents = [
    {
      id: 2,
      type: "on-demand",
      title: "On Demand Webinars",
      image: "https://placehold.co/600x340/1e1b4b/FFF?text=On+Demand+Webinars", 
      date: null,
      footerText: "LandingAI" // Teks khusus untuk kartu pertama
    },
    {
      id: 3,
      type: "webinar",
      title: "Office Hours: Agentic Document Extraction",
      image: "https://placehold.co/600x340/0f172a/FFF?text=Office+Hours+ADE", 
      date: "December 4, 2025",
      speakers: "Ron Baumert, Ava Xia, Seshu Reddy, Emilie Cooksey" // Tambahan data pembicara
    },
    {
      id: 4,
      type: "webinar",
      title: "AI-Driven Document Processing at Scale for Healthcare",
      image: "https://placehold.co/600x340/14532d/FFF?text=Healthcare+AI+Webinar", 
      date: "December 10, 2025",
      speakers: "Andrea Kropp & Quin Killough" // Tambahan data pembicara
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* --- 1. HERO SECTION (TETAP SAMA) --- */}
        <div className="bg-white rounded-[2.5rem] p-6 md:p-8 shadow-sm flex flex-col md:flex-row gap-8 items-center hover:shadow-md transition-shadow duration-300">
          <div className="w-full md:w-1/2">
            <div className="relative overflow-hidden rounded-2xl aspect-video bg-slate-900 shadow-inner">
              <img 
                src={heroEvent.image} 
                alt={heroEvent.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Free Live Webinar
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4">
            <div className="flex items-center gap-2 text-blue-600 font-semibold tracking-widest text-xs uppercase">
              <StarIcon />
              <span>{heroEvent.category}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight">
              {heroEvent.title}
            </h1>
          </div>
        </div>

        {/* --- 2. GRID SECTION (UPDATED TAMPILAN KARTU) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {upcomingEvents.map((event) => (
            // KONTAINER UTAMA KARTU
            <div 
              key={event.id} 
              className="bg-white rounded-[2.5rem] p-6 flex flex-col h-full shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              
              {/* 1. GAMBAR DI DALAM KARTU */}
              <div className="relative overflow-hidden rounded-2xl aspect-video bg-slate-900 mb-6">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Badge khusus on-demand (opsional sesuai gambar) */}
                {event.type === 'on-demand' && (
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                    Free Webinar
                  </div>
                )}
              </div>

              {/* 2. KONTEN TEKS DI DALAM KARTU */}
              <div className="flex flex-col flex-grow">
                
                {/* Tampilan Beda untuk 'On Demand' vs 'Webinar Biasa' */}
                {event.type === 'on-demand' ? (
                  <>
                    <h3 className="text-xl font-bold text-slate-800 mb-auto leading-tight">
                      {event.title}
                    </h3>
                    <div className="mt-8 pt-4">
                      <p className="font-bold text-slate-600 text-sm">
                        {event.footerText}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Tanggal (Biru) */}
                    <p className="text-blue-500 font-semibold text-sm mb-3">
                      {event.date}
                    </p>
                    
                    {/* Judul */}
                    <h3 className="text-xl font-bold text-slate-800 mb-4 leading-tight">
                      {event.title}
                    </h3>
                    
                    {/* Pembicara (Abu-abu) */}
                    <p className="text-slate-500 text-xs font-medium leading-relaxed mt-auto">
                      {event.speakers}
                    </p>
                  </>
                )}

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default EventPage;