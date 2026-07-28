import React, { useEffect, useState } from 'react';

const GithubIcon = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const MailIcon = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg> 
);

const MaximizeIcon = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="15 3 21 3 21 9"></polyline>
    <polyline points="9 21 3 21 3 15"></polyline>
    <line x1="21" y1="3" x2="14" y2="10"></line>
    <line x1="3" y1="21" x2="10" y2="14"></line>
  </svg>
);

const CloseIcon = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const ExternalLinkIcon = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const GitIcon = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M13.09 23.549a1.54 1.54 0 0 1-2.18 0L.451 13.089a1.54 1.54 0 0 1 0-2.179l7.191-7.19 2.733 2.733a1.85 1.85 0 0 0 .964 2.326v6.66a1.849 1.849 0 1 0 1.54 0V8.957l2.508 2.508a1.85 1.85 0 1 0 1.09-1.09l-2.634-2.634a1.85 1.85 0 0 0-2.378-2.377L8.73 2.63 10.91.451a1.54 1.54 0 0 1 2.179 0l10.459 10.46a1.54 1.54 0 0 1 0 2.179z"/>
  </svg>
);

const Stm32Icon = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M 23.818 5.61 L 6.402 5.61 C 5.125 5.609 3.968 6.362 3.452 7.529 L 0.014 15.811 C -0.036 15.931 0.052 16.063 0.182 16.061 L 8.046 16.061 C 8.601 16.061 8.848 15.523 8.412 15.093 L 5.524 12.388 C 4.008 10.9 4.658 7.45 7.81 7.45 L 23.206 7.45 C 23.283 7.451 23.352 7.402 23.378 7.329 L 23.987 5.857 C 23.996 5.835 24.001 5.811 24 5.787 C 23.997 5.689 23.917 5.61 23.818 5.61 M 22.082 9.826 L 19.126 9.826 C 18.932 9.825 18.756 9.94 18.681 10.118 L 15.369 18.118 C 15.355 18.144 15.347 18.173 15.347 18.202 C 15.348 18.302 15.429 18.383 15.529 18.381 L 16.632 18.381 C 17.93 18.387 19.105 17.613 19.612 16.418 L 22.244 10.063 C 22.252 10.042 22.257 10.019 22.257 9.996 C 22.253 9.902 22.176 9.828 22.082 9.826 M 16.271 10.005 C 16.271 9.905 16.189 9.825 16.089 9.825 L 7.706 9.825 C 7.251 9.825 6.853 10.38 7.335 10.825 L 10.104 13.404 C 10.104 13.404 11.224 14.437 10.984 15.916 C 10.778 17.219 9.889 18.016 9.241 18.302 C 9.208 18.31 9.196 18.351 9.219 18.376 C 9.23 18.387 9.246 18.392 9.261 18.388 L 12.489 18.388 C 12.683 18.39 12.859 18.275 12.934 18.095 L 16.256 10.068 C 16.266 10.049 16.271 10.027 16.271 10.005"/>
  </svg>
);

const PythonIcon = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
  </svg>
);

const TechItem = ({ Icon }) => (
  <div className="group relative flex items-center justify-center p-2 rounded-lg hover:bg-white/5 transition-colors duration-300">
    <Icon 
      size={26} 
      className="text-neutral-400 group-hover:text-white transition-colors duration-300" 
    />
  </div>
);

const TechItemPNG = ({ src }) => (
  <div className="group relative flex items-center justify-center p-2 rounded-lg hover:bg-white/5 transition-colors duration-300">
    <div 
      className="w-[26px] h-[26px] bg-neutral-400 group-hover:bg-white transition-colors duration-300"
      style={{
        WebkitMaskImage: `url(${src})`,
        WebkitMaskSize: 'contain',
        WebkitMaskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskImage: `url(${src})`,
        maskSize: 'contain',
        maskRepeat: 'no-repeat',
        maskPosition: 'center',
      }}
    />
  </div>
);

function HomeContent() {
  const [activeModal, setActiveModal] = useState(null);

  const modalData = {
    experience: {
      title: "EXPERIENCE DETAILS",
      content: (
        <div className="space-y-8">
          <div>
            <h4 className="text-xl font-bold text-white mb-1">Electronics R&D Intern <span className="text-cyan-500 font-normal">@ FulcrumAir</span></h4>
            <p className="text-sm font-mono text-neutral-500 mb-3">May 2026 - Present</p>
            <ul className="space-y-3 text-neutral-300 text-sm md:text-base">
              <li className="flex gap-3">
                <span className="text-cyan-500 mt-1">▹</span>
                <span>Designed and integrated a custom motor driver PCB around the IFX007T, MAX33040E, and LMR50410-Q1.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-500 mt-1">▹</span>
                <span>Wrote C++ firmware for multichannel motor control, CAN telemetry transmission, and actuator feedback calculation.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-500 mt-1">▹</span>
                <span>Revised past schematics and PCB layout to implement electrical best practices and improve electronic reliability.</span>
              </li>
            </ul>
          </div>
          <div className="w-full h-px bg-neutral-800/50"></div>
          <div>
            <h4 className="text-xl font-bold text-white mb-1">Electrical Engineer <span className="text-cyan-500 font-normal">@ UBC Rover</span></h4>
            <p className="text-sm font-mono text-neutral-500 mb-3">September 2025 - Present</p>
            <ul className="space-y-3 text-neutral-300 text-sm md:text-base">
              <li className="flex gap-3">
                <span className="text-cyan-500 mt-1">▹</span>
                <span>Collaborated with chassis and software subteams to design a test rover for autonomous navigation training.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-500 mt-1">▹</span>
                <span>Developed power architecture, serial communication protocols, and firmware to integrate MCU and peripherals.</span>
              </li>
            </ul>
          </div>
          <div className="w-full h-px bg-neutral-800/50"></div>
          <div>
            <h4 className="text-xl font-bold text-white mb-1">EE Research Assistant <span className="text-cyan-500 font-normal">@ UCalgary</span></h4>
            <p className="text-sm font-mono text-neutral-500 mb-3">July 2023 - August 2023</p>
            <ul className="space-y-3 text-neutral-300 text-sm md:text-base">
              <li className="flex gap-3">
                <span className="text-cyan-500 mt-1">▹</span>
                <span>Modelled and simulated Op-Amp oscillator circuits in LTspice to support research in amplifier-based oscillators.</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    currentProject: {
      title: "PROJECT INSIGHTS",
      content: (
        <div className="space-y-4">
          <h4 className="text-2xl font-bold text-white">Custom Motor Controller</h4>
          <div className="bg-[#0a0a0c] border border-neutral-800/60 rounded-xl p-6">
            <h5 className="font-mono text-cyan-500 text-xs mb-4 uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span> Technical Highlights
            </h5>
            <ul className="space-y-4 text-neutral-300 text-sm md:text-base">
              <li className="flex gap-3">
                <span className="text-cyan-500 mt-1">▹</span>
                <span><strong className="text-white block mb-1 font-medium">Hardware Design:</strong> Designing a compact motor driver module around the IFX007T half-bridge to support multichannel actuator control. </span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-500 mt-1">▹</span>
                <span><strong className="text-white block mb-1 font-medium">Embedded Firmware:</strong> Developing C++ firmware to handle motor control logic and CAN communication.</span>
              </li>
            </ul>
          </div>
        </div>
      )
    }
  };

  return (
    <>
      <div className="w-full text-left animate-in fade-in duration-500">
        
        <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-2xl mb-12">
          I'm a UBC Computer Engineering student with a passion for electronics. I love exploring anything related to robotics, EVs, embedded programming, semiconductors, and more!
        </p>

        {/* Experience Block */}
        <div 
          onClick={() => setActiveModal('experience')}
          className="w-full mb-6 relative p-6 md:p-8 bg-[#0a0a0c] rounded-2xl border border-neutral-800/60 hover:border-cyan-500/30 transition-all text-left flex flex-col cursor-pointer group"
        >
          <div className="absolute top-6 right-6 md:top-8 md:right-8 text-neutral-600 group-hover:text-cyan-400 transition-colors">
            <MaximizeIcon size={18} />
          </div>
          
          <h3 className="text-cyan-500 text-xs font-bold tracking-widest mb-6 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span> EXPERIENCE
          </h3>
          
          <div className="w-full h-px bg-neutral-800/50 mb-6"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-sm">
            <div className="group/item">
              <span className="text-white font-semibold block mb-1 group-hover/item:text-cyan-400 transition-colors">Electronics R&D Intern</span>
              <span className="text-neutral-500">@ FulcrumAir</span>
            </div>
            <div className="group/item">
              <span className="text-white font-semibold block mb-1 group-hover/item:text-cyan-400 transition-colors">ELEC Team Member</span>
              <span className="text-neutral-500">@ UBC Rover</span>
            </div>
            <div className="group/item">
              <span className="text-white font-semibold block mb-1 group-hover/item:text-cyan-400 transition-colors">EE Intern</span>
              <span className="text-neutral-500">@ UCalgary</span>
            </div>
          </div>
        </div>

        {/* Tools and Languages Side-by-Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-6">
          
          {/* Tools Block */}
          <div className="relative p-6 md:p-8 bg-[#0a0a0c] rounded-2xl border border-neutral-800/60 flex flex-col">
            <h3 className="text-cyan-500 text-xs font-bold tracking-widest mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span> TOOLS
            </h3>
            
            <div className="w-full h-px bg-neutral-800/50 mb-6"></div>
            
            <div className="flex flex-wrap gap-4 items-center">
              <TechItemPNG src="/altium-logo.png" />
              <TechItemPNG src="/kicad.png" />
              <TechItem Icon={GitIcon} />
              <TechItemPNG src="/LT.png" />
              <TechItem Icon={Stm32Icon} />
              <TechItemPNG src="/MATLAB.png" />
            </div>
          </div>

          {/* Languages Block */}
          <div className="relative p-6 md:p-8 bg-[#0a0a0c] rounded-2xl border border-neutral-800/60 flex flex-col">
            <h3 className="text-cyan-500 text-xs font-bold tracking-widest mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span> LANGUAGES
            </h3>
            
            <div className="w-full h-px bg-neutral-800/50 mb-6"></div>
            
            <div className="flex flex-wrap gap-4 items-center">
              <TechItemPNG src="/C.png" />
              <TechItem Icon={PythonIcon} />
            </div>
          </div>
          
        </div>

        {/* Current Project Block */}
        <div 
          onClick={() => setActiveModal('currentProject')}
          className="w-full relative p-6 md:p-8 bg-[#0a0a0c] rounded-2xl border border-neutral-800/60 hover:border-cyan-500/30 transition-all text-left flex flex-col cursor-pointer group"
        >
          <div className="absolute top-6 right-6 md:top-8 md:right-8 text-neutral-600 group-hover:text-cyan-400 transition-colors">
            <MaximizeIcon size={18} />
          </div>
          
          <h3 className="text-cyan-500 text-xs font-bold tracking-widest mb-6 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span> CURRENT PROJECT
          </h3>
          
          <div className="w-full h-px bg-neutral-800/50 mb-6"></div>
          
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">Custom Motor Controller</h4>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-xl">
              Designing a custom motor controller PCB supporting 24 V, 5 A loads and CAN communication.
            </p>
            <div className="inline-block mt-2">
              <span className="text-xs font-mono font-semibold tracking-wider text-cyan-500 bg-cyan-500/10 border border-cyan-500/20 rounded px-3 py-1.5">
                IN PROGRESS
              </span>
            </div>
          </div>
        </div>

      </div>

      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 pointer-events-auto animate-in fade-in duration-200">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
            onClick={() => setActiveModal(null)}
          ></div>
          <div className="relative z-10 w-full max-w-2xl bg-[#0a0a0c] border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            <div className="flex justify-between items-center p-5 md:p-6 border-b border-neutral-800/80 bg-[#0a0a0c]">
              <h2 className="text-sm font-bold font-mono tracking-widest text-cyan-500 uppercase">{modalData[activeModal].title}</h2>
              <button 
                onClick={() => setActiveModal(null)}
                className="text-neutral-500 hover:text-white transition-colors bg-transparent border-none cursor-pointer p-1 rounded"
              >
                <CloseIcon size={20} />
              </button>
            </div>
            <div className="p-6 md:p-8 overflow-y-auto text-left scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-transparent">
              {modalData[activeModal].content}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function ProjectsContent() {
  const [activeModal, setActiveModal] = useState(null);

  const projects = [
    { 
      id: "motor-controller",
      title: "Custom Motor Controller", 
      desc: "Custom motor controller PCB supporting 24V, 5A loads and CAN communication.", 
      tech: "Altium, LTspice, C++",
      content: (
        <div className="space-y-6">
          <h4 className="text-2xl font-bold text-white">Custom Motor Controller</h4>
          
          <div className="bg-[#0a0a0c] border border-neutral-800/60 rounded-xl p-6">
            <h5 className="font-mono text-cyan-500 text-xs mb-4 uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span> Technical Highlights
            </h5>
            <ul className="space-y-4 text-neutral-300 text-sm md:text-base">
              <li className="flex gap-3">
                <span className="text-cyan-500 mt-1">▹</span>
                <span><strong className="text-white block mb-1 font-medium">Hardware Design:</strong> Designing a compact motor driver module around the IFX007T half-bridge to support multi-channel actuator control and CAN communication. </span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-500 mt-1">▹</span>
                <span><strong className="text-white block mb-1 font-medium">PCB Layout:</strong> Planning thorough SPICE simulations prior to physical assembly, followed by hardware debugging.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-500 mt-1">▹</span>
                <span><strong className="text-white block mb-1 font-medium">Embedded Firmware:</strong> Developing C++ firmware to handle motor control logic and serial communication for reliable in-field robot operation.</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#0a0a0c] border border-neutral-800/60 rounded-xl p-6">
            <h5 className="font-mono text-cyan-500 text-xs mb-4 uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span> Gallery
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* 3D Views - Side by Side on Medium+ Screens */}
              <img src="motor driver module top view.jpg" alt="Motor Driver Module Top View" className="w-full h-48 object-cover rounded-lg border border-neutral-800 opacity-90 hover:opacity-100 transition-opacity" />
              <img src="motor driver module bottom view.jpg" alt="Motor Driver Module Bottom View" className="w-full h-48 object-cover rounded-lg border border-neutral-800 opacity-90 hover:opacity-100 transition-opacity" />
              
              {/* Layout - Full Width */}
              <div className="md:col-span-2 bg-neutral-200 rounded-lg p-2 border border-neutral-800 flex items-center justify-center">
                 <img src="updated motor driver module layout.jpg" alt="Updated PCB Layout" className="w-full max-h-64 object-contain" />
              </div>

              {/* Schematics - Full Width */}
              <div className="md:col-span-2 bg-neutral-200 rounded-lg p-2 border border-neutral-800 flex items-center justify-center">
                 <img src="motor driver module schematic.jpg" alt="Motor Driver Module Schematic" className="w-full max-h-64 object-contain" />
              </div>
              
              <div className="md:col-span-2 bg-neutral-200 rounded-lg p-2 border border-neutral-800 flex items-center justify-center">
                 <img src="motor driver h bridge schematic.png" alt="H-Bridge Schematic" className="w-full max-h-64 object-contain" />
              </div>

            </div>
          </div>
        </div>
      )
    },
    { 
      id: "drivetrain",
      title: "Rover Powertrain", 
      desc: "Firmware and electrical design for a 6-wheel rover drivetrain using a Nucleo-F446RE, interfacing with an NVIDIA Jetson.", 
      tech: "STM32, C, UART",
      content: (
        <div className="space-y-6">
          <h4 className="text-2xl font-bold text-white">Rover Powertrain System</h4>
          <div className="bg-[#0a0a0c] border border-neutral-800/60 rounded-xl p-6">
            <h5 className="font-mono text-cyan-500 text-xs mb-4 uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span> Technical Highlights
            </h5>
            <ul className="space-y-4 text-neutral-300 text-sm md:text-base">
              <li className="flex gap-3">
                <span className="text-cyan-500 mt-1">▹</span>
                <span><strong className="text-white block mb-1 font-medium">Hardware Integration:</strong> Utilized three L298N motor driver modules to drive six brushed DC motors.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-500 mt-1">▹</span>
                <span><strong className="text-white block mb-1 font-medium">Embedded Control:</strong> Wrote C firmware on a Nucleo-F446RE MCU to parse serial commands from an Nvidia Jetson for drivetrain execution.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-500 mt-1">▹</span>
                <span><strong className="text-white block mb-1 font-medium">Telemetry:</strong> Calculated rover speed using hall effect encoder data, transmitting velocity back to the Jetson.</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-[#0a0a0c] border border-neutral-800/60 rounded-xl p-6">
            <h5 className="font-mono text-cyan-500 text-xs mb-4 uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span> Gallery
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <img src="mini rover prototype.jpg" alt="Mini Rover Prototype" className="w-full h-48 object-cover rounded-lg border border-neutral-800 opacity-90 hover:opacity-100 transition-opacity" />
              <div className="bg-neutral-200 rounded-lg p-2 border border-neutral-800 flex items-center justify-center">
                 <img src="mini rover block diagram.png" alt="Mini Rover Block Diagram" className="w-full h-48 object-contain" />
              </div>
            </div>
          </div>
        </div>
      )
    },
    { 
      id: "uav",
      title: "Buck Converter Module", 
      desc: "Designing a custom 24V-5V 2A synchronous buck converter.", 
      tech: "Altium, LTspice",
      content: (
        <div className="space-y-4">
          <h4 className="text-2xl font-bold text-white">24V-5V Synchronous Buck</h4>
          <div className="bg-[#0a0a0c] border border-neutral-800/60 rounded-xl p-6">
            <h5 className="font-mono text-cyan-500 text-xs mb-4 uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span> Technical Highlights
            </h5>
            <ul className="space-y-4 text-neutral-300 text-sm md:text-base">
              <li className="flex gap-3">
                <span className="text-cyan-500 mt-1">▹</span>
                <span><strong className="text-white block mb-1 font-medium">Power Architecture:</strong> Discrete topology utilizing a high-side N-channel MOSFET, low-side synchronous switch, floating bootstrap gate drive, and an analog Type II control loop.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-500 mt-1">▹</span>
                <span><strong className="text-white block mb-1 font-medium">PCB Layout:</strong> Validating closed-loop stability in LTspice simulations before performing PCB layout in Altium.</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    { 
      id: "hud",
      title: "Car HUD Speedometer", 
      desc: "Custom Heads-Up Display speedometer using a low-power MCU, GPS module, and high-brightness OLED.", 
      tech: "Arduino, GNSS, C++, SPI",
      content: (
        <div className="space-y-6">
          <h4 className="text-2xl font-bold text-white">Car HUD Speedometer</h4>
          
          <div className="bg-[#0a0a0c] border border-neutral-800/60 rounded-xl p-6">
            <h5 className="font-mono text-cyan-500 text-xs mb-4 uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span> Technical Highlights
            </h5>
            <ul className="space-y-4 text-neutral-300 text-sm md:text-base mb-6">
              <li className="flex gap-3">
                <span className="text-cyan-500 mt-1">▹</span>
                <span><strong className="text-white block mb-1 font-medium">Embedded Programming:</strong> C++ firmware to parse NMEA data streams to compute velocity from positioning telemetry.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-500 mt-1">▹</span>
                <span><strong className="text-white block mb-1 font-medium">Electronics Design:</strong> Integrating Arduino Nano, GY-NEO6MV2 module, and SPI OLED display for safe operation on vehicle supply voltage. </span>
              </li>
            </ul>
          </div>

          <div className="bg-[#0a0a0c] border border-neutral-800/60 rounded-xl p-6">
            <h5 className="font-mono text-cyan-500 text-xs mb-4 uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span> Gallery
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <img src="/hud%20breadboard.jpg" alt="Breadboard Prototype" className="w-full h-48 object-cover rounded-lg border border-neutral-800 opacity-90 hover:opacity-100 transition-opacity" />
              <img src="/HUD%20driver%20view.jpg" alt="Driver View Dashboard" className="w-full h-48 object-cover rounded-lg border border-neutral-800 opacity-90 hover:opacity-100 transition-opacity" />
              <div className="md:col-span-2 bg-neutral-200 rounded-lg p-2 border border-neutral-800 flex items-center justify-center">
                 <img src="/HUD%20Schematic.png" alt="HUD Schematic" className="w-full max-h-64 object-contain" />
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <>
      <div className="w-full text-left animate-in fade-in duration-500 flex flex-col gap-6">
        {projects.map((proj) => (
          <div 
            key={proj.id} 
            onClick={() => setActiveModal(proj.id)}
            className="w-full relative p-6 md:p-8 bg-[#0a0a0c] rounded-2xl border border-neutral-800/60 hover:border-cyan-500/30 transition-all text-left flex flex-col cursor-pointer group"
          >
            <div className="absolute top-6 right-6 md:top-8 md:right-8 text-neutral-600 group-hover:text-cyan-400 transition-colors">
              <MaximizeIcon size={18} />
            </div>
            
            <h3 className="text-cyan-500 text-xs font-bold tracking-widest mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span> {proj.title}
            </h3>
            
            <div className="w-full h-px bg-neutral-800/50 mb-6"></div>
            
            <p className="text-neutral-400 mb-6 leading-relaxed max-w-2xl">{proj.desc}</p>
            <div className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
              {proj.tech}
            </div>
          </div>
        ))}
      </div>

      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 pointer-events-auto animate-in fade-in duration-200">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
            onClick={() => setActiveModal(null)}
          ></div>
          <div className="relative z-10 w-full max-w-2xl bg-[#0a0a0c] border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            <div className="flex justify-between items-center p-5 md:p-6 border-b border-neutral-800/80 bg-[#0a0a0c]">
              <h2 className="text-sm font-bold font-mono tracking-widest text-cyan-500 uppercase">PROJECT INSIGHTS</h2>
              <button 
                onClick={() => setActiveModal(null)}
                className="text-neutral-500 hover:text-white transition-colors bg-transparent border-none cursor-pointer p-1 rounded"
              >
                <CloseIcon size={20} />
              </button>
            </div>
            <div className="p-6 md:p-8 overflow-y-auto text-left scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-transparent">
              {projects.find(p => p.id === activeModal)?.content}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default function App() {
  const [page, setPage] = useState('home');

  useEffect(() => {
    // Dynamic Favicon Generation
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/svg+xml';
    link.rel = 'icon';
    link.href = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%2306b6d4' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18.36 6.64a9 9 0 1 1-12.73 0'/%3E%3Cline x1='12' y1='2' x2='12' y2='12'/%3E%3C/svg%3E";
    document.getElementsByTagName('head')[0].appendChild(link);
    
    // Hide scrollbar globally for that clean app-like feel
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = 'auto';
    }
  }, []);

  return (
    <div
      style={{
        backgroundColor: '#050505',
        backgroundImage: `
          radial-gradient(circle at 50% 10%, #0f172a 0%, #000000 100%), 
          linear-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px), 
          linear-gradient(90deg, rgba(255, 255, 255, 0.015) 1px, transparent 1px)
        `,
        backgroundSize: '100% 100%, 40px 40px, 40px 40px',
        backgroundPosition: 'center top',
        backgroundAttachment: 'fixed',
      }}
      className="fixed inset-0 w-full h-[100dvh] font-sans selection:bg-cyan-500 selection:text-black text-[#e5e5e5] overflow-y-auto"
    >
      <style dangerouslySetInnerHTML={{__html: `
        ::-webkit-scrollbar { display: none; }
        * { -ms-overflow-style: none; scrollbar-width: none; }
        
        @keyframes terminal-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-terminal-blink {
          animation: terminal-blink 1.2s step-end infinite;
        }
      `}} />

      <div className="w-full max-w-4xl mx-auto px-6 sm:px-8 md:px-12 pt-12 md:pt-24 pb-24 md:pb-16 flex flex-col min-h-full">
        
        {/* Navigation & Header - Mobile Responsive Stacking */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-0 mb-8 md:mb-12">
          
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white m-0 leading-none">
            {page === 'home' ? 'Mofe Omolade' : 'Projects'}
            <span className="text-cyan-500 animate-terminal-blink">_</span>
          </h1>
          
          <nav className="flex gap-6 md:gap-8 font-mono text-sm md:text-base tracking-widest items-center">
            <button 
              onClick={() => setPage('home')} 
              className={`flex items-center transition-colors cursor-pointer bg-transparent border-0 p-0 ${page === 'home' ? 'text-cyan-500' : 'text-neutral-500 hover:text-white'}`}
            >
              [ Home ]
            </button>
            
            <button 
              onClick={() => setPage('projects')} 
              className={`flex items-center transition-colors cursor-pointer bg-transparent border-0 p-0 ${page === 'projects' ? 'text-cyan-500' : 'text-neutral-500 hover:text-white'}`}
            >
              [ Projects ]
            </button>

            <a 
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition-colors cursor-pointer text-neutral-500 hover:text-white"
            >
              Resume
              <ExternalLinkIcon size={14} className="mb-0.5 opacity-80" />
            </a>
          </nav>

        </div>

        {/* Dynamic Page Content */}
        <div className="flex-1 w-full">
          {page === 'home' && <HomeContent />}
          {page === 'projects' && <ProjectsContent />}
        </div>

        {/* Global Footer (Stays at the bottom naturally) */}
        <div className="w-full pt-12 mt-auto">
          <div className="flex justify-between items-center font-mono text-xs text-neutral-600">
            
            <div className="flex items-center gap-6">
              <a href="https://github.com/mofeomolade" target="_blank" aria-label="GitHub Profile" rel="noreferrer" className="text-neutral-500 hover:text-white transition-transform hover:-translate-y-1 duration-300">
                <GithubIcon size={20} />
              </a>
              
              <a href="https://linkedin.com/in/momolade" target="_blank" aria-label="LinkedIn Profile" rel="noreferrer" className="text-neutral-500 hover:text-white transition-all hover:-translate-y-1 duration-300 flex items-center justify-center">
                <div
                  className="w-5 h-5 bg-current transition-colors duration-300"
                  style={{
                    WebkitMaskImage: `url(/linkedin.png)`,
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskImage: `url(/linkedin.png)`,
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                  }}
                />
              </a>
              
              <a href="mailto:mofe.omolade@example.com" aria-label="Contact" className="text-neutral-500 hover:text-white transition-transform hover:-translate-y-1 duration-300">
                <MailIcon size={20} />
              </a>
            </div>

            <div className="tracking-widest uppercase opacity-50">
              STATUS: ONLINE
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}