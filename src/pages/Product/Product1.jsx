import React, { useState } from 'react';

export default function Product1() {
  // State untuk melacak industri mana yang sedang aktif
  const [activeIndustry, setActiveIndustry] = useState(0);

  // Data untuk Section Industry Highlights
  const industries = [
    {
      id: 0,
      name: "Healthcare",
      points: [
        "Streamlines patient intake by accurately capturing data from complex medical forms",
        "Enhances clinical decision-making through precise extraction of lab results and medical histories",
        "Improves billing accuracy and speeds up document processing"
      ],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCf1EQrvIJeISyAcxHpA9g9-pTB2ffpA_8ZBX3KsKa0QiedEC0TDaMeec_ZZ1dvTbozh08PmDb9ITuX7Z_lgTmFX7dvV3DfaxXgvkJDnJRYaIN5V3fjLSCYn9aoVxDR2OTv-3f1-JIdxKQD2W1RMI2z0NqtfPm0b9rhWUcWDoh0DdAtufR0xgV5QPagokNudPxgX40P4OZNJjjgZR1wmlfsLHA4Z9HUv-LheRlrQwdLmq8zEX5w3S3X5_Ldk-q2H3NkHAkLUWavlAk" 
    },
    {
      id: 1,
      name: "Financial Services",
      points: [
        "Automates loan application processing and credit risk analysis with high precision",
        "Extracts data from invoices, receipts, and bank statements instantly",
        "Ensures regulatory compliance by generating accurate audit trails from documents"
      ],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCf1EQrvIJeISyAcxHpA9g9-pTB2ffpA_8ZBX3KsKa0QiedEC0TDaMeec_ZZ1dvTbozh08PmDb9ITuX7Z_lgTmFX7dvV3DfaxXgvkJDnJRYaIN5V3fjLSCYn9aoVxDR2OTv-3f1-JIdxKQD2W1RMI2z0NqtfPm0b9rhWUcWDoh0DdAtufR0xgV5QPagokNudPxgX40P4OZNJjjgZR1wmlfsLHA4Z9HUv-LheRlrQwdLmq8zEX5w3S3X5_Ldk-q2H3NkHAkLUWavlAk" 
    },
    {
      id: 2,
      name: "Logistics",
      points: [
        "Optimizes supply chain operations by digitizing bills of lading and shipping manifests",
        "Tracks inventory in real-time through automated invoice processing",
        "Reduces customs clearance times with accurate document data extraction"
      ],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCf1EQrvIJeISyAcxHpA9g9-pTB2ffpA_8ZBX3KsKa0QiedEC0TDaMeec_ZZ1dvTbozh08PmDb9ITuX7Z_lgTmFX7dvV3DfaxXgvkJDnJRYaIN5V3fjLSCYn9aoVxDR2OTv-3f1-JIdxKQD2W1RMI2z0NqtfPm0b9rhWUcWDoh0DdAtufR0xgV5QPagokNudPxgX40P4OZNJjjgZR1wmlfsLHA4Z9HUv-LheRlrQwdLmq8zEX5w3S3X5_Ldk-q2H3NkHAkLUWavlAk" 
    },
    {
      id: 3,
      name: "Legal",
      points: [
        "Accelerates contract review by extracting key clauses and dates automatically",
        "Organizes case files by digitizing and indexing legal correspondence",
        "Enhances due diligence with rapid data extraction from varied legal documents"
      ],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCf1EQrvIJeISyAcxHpA9g9-pTB2ffpA_8ZBX3KsKa0QiedEC0TDaMeec_ZZ1dvTbozh08PmDb9ITuX7Z_lgTmFX7dvV3DfaxXgvkJDnJRYaIN5V3fjLSCYn9aoVxDR2OTv-3f1-JIdxKQD2W1RMI2z0NqtfPm0b9rhWUcWDoh0DdAtufR0xgV5QPagokNudPxgX40P4OZNJjjgZR1wmlfsLHA4Z9HUv-LheRlrQwdLmq8zEX5w3S3X5_Ldk-q2H3NkHAkLUWavlAk" 
    }
  ];

  // Data untuk Features Section
  const features = [
    {
      title: "Parsing",
      icon: "description",
      description: "Automatically identifies and separates document elements like headers, footers, and tables to create a structured representation of the content."
    },
    {
      title: "Enrichment",
      icon: "auto_fix_high",
      description: "Adds contextual metadata or inferred info to enhance understanding and discoverability without modifying the original text, making data more accessible for downstream applications."
    },
    {
      title: "Validation",
      icon: "verified",
      description: "Cross-references extracted data against defined rules and external databases to ensure accuracy and consistency across all records before final processing."
    },
    {
      title: "Transformation",
      icon: "transform",
      description: "Converts raw extracted data into standardized formats (JSON, XML, CSV) ready for direct integration into your ERP, CRM, or other business systems."
    }
  ];

  return (
    // Main container
    <main className="flex-1 font-display bg-[#f8f6f5] dark:bg-[#23140f] text-[#333333] dark:text-gray-200">
      
      {/* --- HERO SECTION --- */}
      <section className="relative w-full bg-[#0A192F] py-16 lg:py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 flex flex-col items-start gap-6 text-left z-10">
              <h1 className="text-white text-5xl font-bold leading-tight tracking-tight md:text-6xl font-display">
                Agentic <br /> Document Extraction
              </h1>
              <div className="flex flex-col gap-3">
                <h2 className="text-white text-lg font-bold leading-normal">
                  Beyond OCR: Intelligent Document Understanding with Visual Context.
                </h2>
                <p className="text-gray-300 text-lg leading-normal max-w-xl">
                  Convert decades of archived documents into LLM-ready data in hours rather than weeks.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-4">
                <button className="flex h-12 px-8 items-center justify-center rounded-lg bg-[#0066FF] text-white font-bold text-base transition-transform hover:scale-105 hover:bg-blue-600">
                  Start for Free
                </button>
                <button className="flex h-12 px-8 items-center justify-center rounded-lg border border-white bg-transparent text-white font-bold text-base transition-colors hover:bg-white/10">
                  Watch a Video
                </button>
              </div>
            </div>
            <div className="flex-1 w-full flex justify-center lg:justify-end z-10">
              <div className="relative w-full max-w-lg aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/10 group cursor-pointer bg-black/20">
                   <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCf1EQrvIJeISyAcxHpA9g9-pTB2ffpA_8ZBX3KsKa0QiedEC0TDaMeec_ZZ1dvTbozh08PmDb9ITuX7Z_lgTmFX7dvV3DfaxXgvkJDnJRYaIN5V3fjLSCYn9aoVxDR2OTv-3f1-JIdxKQD2W1RMI2z0NqtfPm0b9rhWUcWDoh0DdAtufR0xgV5QPagokNudPxgX40P4OZNJjjgZR1wmlfsLHA4Z9HUv-LheRlrQwdLmq8zEX5w3S3X5_Ldk-q2H3NkHAkLUWavlAk" alt="Agentic Document Extraction Video" className="w-full h-full object-cover opacity-90 transition-opacity group-hover:opacity-100" />
                   <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                        <span className="material-symbols-outlined text-[#0A192F] text-4xl ml-1">play_arrow</span>
                      </div>
                   </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- INTELLIGENT DOCUMENT UNDERSTANDING --- */}
      <section className="bg-white dark:bg-white text-[#333333] dark:text-[#333333] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 font-display">
              Intelligent Document Understanding
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed font-display">
              Agentic document extraction captures important details – including the different form fields, tables, and checkboxes – and provides accurate descriptions for these elements based on their visual layout.
            </p>
          </div>
          {/* Row 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 flex flex-col gap-6">
              <h3 className="text-2xl font-bold font-display">Complex Layout Extraction</h3>
              <ul className="space-y-6">
                <li className="flex gap-4 items-start">
                   <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#0066FF]" />
                   <p className="text-gray-600 text-lg leading-relaxed font-display">
                     Parse documents into semantic chunks to ensure high-quality data ingestion to prepare data for RAG LLM applications.
                   </p>
                </li>
                <li className="flex gap-4 items-start">
                   <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#0066FF]" />
                   <p className="text-gray-600 text-lg leading-relaxed font-display">
                     Zero-shot parsing of diverse document formats (PDFs, scans, tables) without requiring layout-specific training.
                   </p>
                </li>
              </ul>
            </div>
            <div className="flex-1 w-full">
               <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-200 bg-[#F0F4F8]">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCf1EQrvIJeISyAcxHpA9g9-pTB2ffpA_8ZBX3KsKa0QiedEC0TDaMeec_ZZ1dvTbozh08PmDb9ITuX7Z_lgTmFX7dvV3DfaxXgvkJDnJRYaIN5V3fjLSCYn9aoVxDR2OTv-3f1-JIdxKQD2W1RMI2z0NqtfPm0b9rhWUcWDoh0DdAtufR0xgV5QPagokNudPxgX40P4OZNJjjgZR1wmlfsLHA4Z9HUv-LheRlrQwdLmq8zEX5w3S3X5_Ldk-q2H3NkHAkLUWavlAk" alt="Interface showing layout extraction" className="w-full h-auto object-cover" />
               </div>
            </div>
          </div>
          {/* Row 2 */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20 mt-24 lg:mt-32">
            <div className="flex-1 flex flex-col gap-6">
              <h3 className="text-2xl font-bold font-display">Visual Context Understanding</h3>
              <ul className="space-y-6">
                <li className="flex gap-4 items-start">
                   <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#0066FF]" />
                   <p className="text-gray-600 text-lg leading-relaxed font-display">
                     Captures intricate semantic relationships between elements based on their visual proximity and styling.
                   </p>
                </li>
                <li className="flex gap-4 items-start">
                   <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#0066FF]" />
                   <p className="text-gray-600 text-lg leading-relaxed font-display">
                     Provides accurate descriptions for checkboxes, radio buttons, and complex table structures.
                   </p>
                </li>
              </ul>
            </div>
            <div className="flex-1 w-full">
               <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-200 bg-[#F0F4F8]">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCf1EQrvIJeISyAcxHpA9g9-pTB2ffpA_8ZBX3KsKa0QiedEC0TDaMeec_ZZ1dvTbozh08PmDb9ITuX7Z_lgTmFX7dvV3DfaxXgvkJDnJRYaIN5V3fjLSCYn9aoVxDR2OTv-3f1-JIdxKQD2W1RMI2z0NqtfPm0b9rhWUcWDoh0DdAtufR0xgV5QPagokNudPxgX40P4OZNJjjgZR1wmlfsLHA4Z9HUv-LheRlrQwdLmq8zEX5w3S3X5_Ldk-q2H3NkHAkLUWavlAk" alt="Interface showing visual context understanding" className="w-full h-auto object-cover" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- INDUSTRY HIGHLIGHTS --- */}
      <section className="bg-[#1F2937] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-16 text-center lg:text-left">
            Industry Highlights
          </h2>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* KIRI: Daftar Menu Opsi */}
            <div className="flex-1 flex flex-col gap-4">
              {industries.map((item) => (
                <div key={item.id} className="flex flex-col">
                  <button
                    onClick={() => setActiveIndustry(item.id)}
                    className={`
                      px-6 py-4 rounded-xl text-left font-bold text-lg transition-all duration-300
                      ${activeIndustry === item.id 
                        ? 'bg-[#FFFFFF] text-[#000000] shadow-lg scale-[1.02]' 
                        : 'bg-black/20 text-gray-400 hover:bg-black/40 hover:text-white'}
                    `}
                  >
                    {item.name}
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndustry === item.id ? 'max-h-96 opacity-100 mt-4 mb-4' : 'max-h-0 opacity-0'}`}>
                    <ul className="list-disc pl-6 space-y-3 text-gray-300">
                      {item.points.map((point, idx) => (
                        <li key={idx} className="leading-relaxed">{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            {/* KANAN: Gambar */}
            <div className="flex-1 lg:h-auto">
              <div className="relative w-full h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl bg-[#111827] border border-white/10">
                 {industries.map((item) => (
                   <img
                     key={item.id}
                     src={item.image}
                     alt={`${item.name} Interface`}
                     className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${activeIndustry === item.id ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                   />
                 ))}
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120]/20 to-transparent z-20 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- AGENTIC DOCUMENT EXTRACTION FEATURES --- */}
      <section className="bg-[#E5E7EB] py-16 lg:py-24 text-[#333333]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 font-display">
              Agentic Document Extraction Features
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Agentic Document Extraction offers comprehensive analysis from layout recognition to advanced image interpretation, enabling document management in financial services with complete transparency and control.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div 
                key={idx}
                className="group relative h-80 rounded-2xl bg-white shadow-lg cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-2xl"
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 transition-all duration-300 group-hover:opacity-0 group-hover:scale-90">
                  <span className="material-symbols-outlined text-6xl text-green-500 mb-6">
                    {feature.icon}
                  </span>
                  <h3 className="text-2xl font-bold text-[#333333]">
                    {feature.title}
                  </h3>
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-white opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
                  <h3 className="text-xl font-bold text-[#333333] mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- BOTTOM CTA SECTION (CENTERED) --- */}
      <section className="bg-[#15171b] py-24 lg:py-32 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Tambahan: mx-auto dan text-center untuk membuat konten di tengah */}
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-white text-5xl md:text-6xl font-bold tracking-tight mb-8 font-display">
              Agentic Document Extraction
            </h2>
            <p className="text-white text-xl md:text-2xl leading-relaxed mb-12 font-display">
              Beyond OCR: Intelligent Document Understanding with Visual Context. Convert
              decades of archived documents into LLM-ready data in hours rather than weeks.
            </p>
            {/* Tambahan: justify-center untuk membuat tombol di tengah */}
            <div className="flex flex-wrap justify-center gap-5">
              <button className="h-14 px-8 rounded-lg bg-[#1a73e8] hover:bg-blue-600 text-white font-bold text-lg transition-transform hover:scale-105">
                Start for Free
              </button>
              <button className="h-14 px-8 rounded-lg border-2 border-white text-white font-bold text-lg hover:bg-white/10 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}