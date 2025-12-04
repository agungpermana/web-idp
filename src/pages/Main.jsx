import React from 'react';

export default function Main() {
  // Data untuk Section Diagram (Unstructured Data)
  const inputs = [
    { label: "Images", icon: "image" },
    { label: "Videos", icon: "videocam" },
    { label: "Documents", icon: "folder" },
    { label: "Metadata", icon: "code" },
    { label: "Labels", icon: "sell" },
  ];

  const outputs = [
    { label: "Object Detection", icon: "center_focus_strong" },
    { label: "Documents Understanding", icon: "description" },
    { label: "Segmentation", icon: "crop_free" },
    { label: "Video Q&A", icon: "smart_display" },
    { label: "Activity Tracking", icon: "query_stats" },
  ];

  // Data untuk CTA Links (Section Paling Bawah)
  const ctaLinks = [
    { label: "Agentic Document Extraction", href: "#" },
    { label: "LandingLens", href: "#" },
    { label: "LandingLens on Snowflake", href: "#" },
  ];

  // Daftar logo dipisah ke array agar mudah di-looping
  const logos = [
    { name: "Google", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDc6VhD_bhI_kITvOlWM4TO6gUc_e94uo9xmRjKtCaS-ncQMrjRf6ebhtpwqek5qsnAN3mIXPSlrxqmbIsTpGbAlXvykUSRM_Xd6a3zZH1F2EAx0wzO5pvW0IjkEchy_06ue4BcHQ7RdXfCRtsqVijo_g0F8wHRExBfbfhd2t72naceYiU8T_dA7sBQeb0VHYXCnYeCOagFEZ-td9_bM_5g7Oa8Y3c7eLMmf_XfkHuIKMkDP5O4r_G5In0Qj8_MEDvQCt1vg4MI1H0" },
    { name: "Amazon", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDK_gjYYLU_YtLx8Y4cbOrlBW7AUpnZSXZZJn_AARUddZElN_37E30kA6bBfCCTKL-zIDwJekfVSKvtjzZgNCM6dBaUUxerbM6llBipBGh7b-chobkVnqbyI1lOSQ4NYa4loovRSpiCzg3VoWqOOatTAh5BgfkVP8fIer0nnMwvrYNFB3WyUFAzNBvrj02oyMnqsl3h_zPiq9o0ChqY7lR5U5AQuaiUw9-9EJDiuEAvxmRkaRktecMNbFsXSwJUz_NGAJmMkcrJ1PY" },
    { name: "Netflix", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAa5TGNd90ezouOZf36E7UOlry8GL2evFr1MMyCcRyXzi0xr_aFsRPnyUIho6hB0xr-7IlaCPP387aHAAaVMQhUZNGK6SuqXJgVnXcrU3eoYghRfVMel6th8A0M6XS-4XxitGjBTqlZYEXT0IoIAvnhFgBLgft_z3mseCHT6nTxkzSoXkNMgy_UHPc_W3taS5XJGQ3tWJVWE6Wk-UpuM5ICBoiPs5k2OmA_wDsGVW2pbgW01PO2RcQEQ0wsFiJpr-4VzknbneaunpU" },
    { name: "Slack", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1B0cWYCQg786X_ac5UFV1DxJuM0-fmQykD0D9ykreqyn0f43pbOfMPjLeRg-1afosDb518L_kZLLInGY-AtJ4xBW4gFWEBFEBrkmwbAQ8Ti_evvYA2yEyizt5lGvritWdDnZaL6jHIYNiL2Ic5qA79KB360YsFvi8ZjnB8Me2bubXjkMRqMW79yG7o5Rg56K1MOIQU_0lp9OsyB9a5OmU1Ty268iV4ufrn1MDSWmUykntP8fziALO1h5IuRqYIbXpERxD8KmM93E" },
    { name: "Microsoft", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUN9_ZWR9RdlI2Vbha8u_w6jsWgydfLdBGPt4IShap58UfSgIuxicEGuxnVIUe-6FVaFsfC1EbIyUQi8nRLmYu85RfNmTuEmf0gM7DC8h4RDwxl3LarxQH5pWdAtJZZ039AnKQwtTOJcIJlyJk96FddpZW3ke1aGqYz_Czl8aFMtae80WkEgB6qeqBhTcr2Z2f60gEptdyblkCTtbprynmoQ16PA2NPpPvGdqG1OQXVWY8OOvXo-zZNh7DNiGf20tn81j2Sep6Hx4" },
    { name: "Apple", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVI7JuLm7VeiQjifooQp-ImEcCAhw85TgJjGMGsm_S1gnm1K590UBI9Efru8bF9s7U1EDsA2nageHzIxTS8vmdjhIoJS5Mf0kLeSJUY7TkSlvCmC-gb9azoQFJ0oZjakOWTA1fuXQumK2iOqBIxc5_3RBkV0m-CapSekwr3RtFCrPvxtvfO6xfv4FPA5bbX-G6nXtSVEA8IK6ik93j80zMKJ1StGDNGsskTHQu5hOlhC_jjSGxxPUXvq8mGQjhAz3QLez9p6LXsBU" },
  ];

  return (
    <main className="flex-1 bg-[#0B1120] font-display text-[#E0E0E0]">
      
      {/* Styles */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
        .group:hover .animate-scroll {
          animation-play-state: paused;
        }
      `}</style>

      {/* Section 1: Hero */}
      <section className="relative py-32 sm:py-40 lg:py-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="h-full w-full object-cover object-[center_30%]"
            alt="Abstract 3D render of a glowing neural network structure"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPerW7COYhD6BbdUL0bAWR8z0t6PWSrT0ourS0Ao8SwMRCPlQNix5Nst6WUy9vluFEDoL7LwfC1kwZH66UAzIc98QhRLbpYTie8o-my23GRD2xgLaVdXpsFos0OwujfHOd5LaAlZBwMd7GDdM0aNekoVhSkYZJQhjlgEgAVaCFVaI6jqxS0xm-qRtnYKWWGt8CBX0NeQZTF2s-ZPEQbnVv4KzE-SBgAYZTZuqkGBXNodMlH8FB7rR9xVoU7NT3K663N6WWYEMA_uM"
          />
          <div className="absolute inset-0 bg-[#0B1120]/80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
            <div className="flex flex-col gap-4">
              <h1 className="bg-gradient-to-r from-blue-500 via-cyan-400 to-green-500 bg-clip-text text-4xl font-black leading-tight tracking-tighter text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
                Unlock the Value of Computer Vision
              </h1>
              <h2 className="mx-auto max-w-2xl text-lg font-normal leading-normal text-[#E0E0E0] md:text-xl">
                Our advanced platform provides real-time analytics and scalable deployment to help you leverage the full potential of visual data.
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="flex h-12 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-[#2563EB] px-8 text-base font-bold leading-normal tracking-[0.015em] text-white transition-transform hover:scale-105 hover:bg-[#1d4ed8]">
                <span className="truncate">Get Started</span>
              </button>

              <button className="flex h-12 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg border border-white/50 bg-transparent px-8 text-base font-bold leading-normal tracking-[0.015em] text-white transition-colors hover:bg-white/10">
                <span className="truncate">View Demo</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Trusted By */}
      <section className="py-12 sm:py-16 border-b border-white/5 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h4 className="text-center text-sm font-bold uppercase leading-normal tracking-widest text-white/50 mb-8">
            Trusted by Industry Leaders
          </h4>
          <div className="relative w-full group">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0B1120] to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0B1120] to-transparent z-10"></div>
            <div className="flex overflow-hidden w-full">
              <div className="flex animate-scroll min-w-full justify-around items-center gap-16 px-8">
                {logos.map((logo, index) => (
                  <img key={`logo-1-${index}`} className="h-12 w-auto max-w-none object-contain opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0" alt={`${logo.name} logo`} src={logo.src} />
                ))}
              </div>
              <div className="flex animate-scroll min-w-full justify-around items-center gap-16 px-8">
                {logos.map((logo, index) => (
                  <img key={`logo-2-${index}`} className="h-12 w-auto max-w-none object-contain opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0" alt={`${logo.name} logo`} src={logo.src} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Unlocks Value (Diagram) */}
      <section className="py-20 lg:py-32 bg-[#0B1120]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl text-blue-500 mb-2">
              <span className="text-white">Unlocks Value of </span> <span className="text-[#3B82F6]">Unstructured Data</span>
            </h2>
            <p className="text-lg text-[#E0E0E0]/80">
              Transforming unstructured data like documents and images into insights to drive efficiency and innovation across various industries.
            </p>
          </div>

          <div className="relative rounded-3xl border border-blue-500/20 bg-[#0F1629] p-8 lg:p-12 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-4 flex flex-col gap-6">
                {inputs.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-start lg:justify-end gap-4 group">
                    <span className="text-sm font-semibold text-white/90">{item.label}</span>
                    <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-[#1E293B] border border-white/10 text-blue-400 shadow-sm transition-all group-hover:border-blue-500/50 group-hover:shadow-blue-500/20">
                      <span className="material-symbols-outlined text-xl">{item.icon}</span>
                      <div className="hidden lg:block absolute left-full top-1/2 w-8 h-[2px] bg-gradient-to-r from-blue-500/50 to-transparent translate-y-[-50%]"></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="lg:col-span-4 flex justify-center py-8 lg:py-0">
                <div className="relative flex items-center justify-center">
                   <div className="absolute inset-0 rounded-full border border-dashed border-blue-500/30 w-40 h-40 animate-[spin_10s_linear_infinite]"></div>
                   <div className="absolute inset-0 rounded-full border border-blue-500/10 w-52 h-52"></div>
                   <div className="relative h-24 w-24 rounded-full bg-[#1E293B] border-4 border-[#0B1120] ring-2 ring-blue-500 shadow-[0_0_30px_rgba(37,99,235,0.4)] flex items-center justify-center z-20">
                     <span className="material-symbols-outlined text-4xl text-white">dataset</span>
                   </div>
                   <div className="hidden lg:block absolute w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent top-1/2 -translate-y-1/2"></div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-6">
                {outputs.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-start gap-4 group">
                    <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-[#1E293B] border border-white/10 text-green-400 shadow-sm transition-all group-hover:border-green-500/50 group-hover:shadow-green-500/20">
                      <span className="material-symbols-outlined text-xl">{item.icon}</span>
                      <div className="hidden lg:block absolute right-full top-1/2 w-8 h-[2px] bg-gradient-to-l from-green-500/50 to-transparent translate-y-[-50%]"></div>
                    </div>
                    <span className="text-sm font-semibold text-white/90">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Features */}
      <section className="py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
              Powerful Features to Drive Results
            </h2>
            <p className="max-w-2xl text-lg text-[#E0E0E0]">
              Our platform is equipped with cutting-edge tools to help you seamlessly integrate computer vision into your operations and unlock new efficiencies.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col gap-4 rounded-xl border border-white/10 bg-white/5 p-8 hover:bg-white/10 transition-colors">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                <span className="material-symbols-outlined text-2xl text-white">label</span>
              </div>
              <h3 className="text-xl font-bold text-white">Automated Data Labeling</h3>
              <p className="text-[#E0E0E0]">
                Accelerate your model training with our AI-powered labeling tools, reducing manual effort and improving accuracy.
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-xl border border-white/10 bg-white/5 p-8 hover:bg-white/10 transition-colors">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                <span className="material-symbols-outlined text-2xl text-white">monitoring</span>
              </div>
              <h3 className="text-xl font-bold text-white">Real-time Analytics</h3>
              <p className="text-[#E0E0E0]">
                Gain immediate insights from live video streams and image data to make critical decisions on the fly.
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-xl border border-white/10 bg-white/5 p-8 hover:bg-white/10 transition-colors">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                <span className="material-symbols-outlined text-2xl text-white">cloud_upload</span>
              </div>
              <h3 className="text-xl font-bold text-white">Scalable Deployment</h3>
              <p className="text-[#E0E0E0]">
                Effortlessly deploy and manage your models at scale, from edge devices to the cloud, with our robust infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 5: CTA (Unleashing Power) - BARU --- */}
      <section className="pb-20 sm:pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* KOTAK KIRI: Gradient Box */}
            <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-green-400 p-10 sm:p-14 flex flex-col justify-center items-start shadow-2xl shadow-blue-500/10">
              <h2 className="text-4xl font-bold leading-tight text-white mb-8 max-w-md">
                Unleashing the Power of Visual AI
              </h2>
              <div className="flex flex-wrap gap-4">
                <button className="flex h-12 cursor-pointer items-center justify-center rounded-lg bg-white px-6 text-base font-bold text-[#0B1120] transition-transform hover:scale-105">
                  Start for Free
                </button>
                <button className="flex h-12 cursor-pointer items-center justify-center rounded-lg border border-white bg-transparent px-6 text-base font-bold text-white transition-colors hover:bg-white/10">
                  Get In Touch
                </button>
              </div>
            </div>

            {/* KOTAK KANAN: Links Box */}
            <div className="rounded-3xl bg-[#0F1629] border border-white/5 p-10 sm:p-14 flex flex-col justify-center shadow-2xl shadow-black/20">
              <h3 className="text-sm font-semibold text-blue-400 mb-8 uppercase tracking-wide">
                Start your Visual AI Journey Today
              </h3>
              <div className="flex flex-col gap-6">
                {ctaLinks.map((link, idx) => (
                  <a key={idx} href={link.href} className="group flex items-center justify-between border-b border-white/10 pb-4 transition-colors hover:border-blue-500/50">
                    <span className="text-lg font-medium text-white group-hover:text-blue-400 transition-colors">
                      {link.label}
                    </span>
                    <span className="material-symbols-outlined text-white/50 group-hover:text-blue-400 transition-transform group-hover:translate-x-1">
                      arrow_forward
                    </span>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}