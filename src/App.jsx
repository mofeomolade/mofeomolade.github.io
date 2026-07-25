import React, { useEffect, useState } from 'react';

// --- INLINE SVG COMPONENTS ---

const GithubIcon = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const LinkedinIcon = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GitIcon = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M13.09 23.549a1.54 1.54 0 0 1-2.18 0L.451 13.089a1.54 1.54 0 0 1 0-2.179l7.191-7.19 2.733 2.733a1.85 1.85 0 0 0 .964 2.326v6.66a1.849 1.849 0 1 0 1.54 0V8.957l2.508 2.508a1.85 1.85 0 1 0 1.09-1.09l-2.634-2.634a1.85 1.85 0 0 0-2.378-2.377L8.73 2.63 10.91.451a1.54 1.54 0 0 1 2.179 0l10.459 10.46a1.54 1.54 0 0 1 0 2.179z"/>
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

const TechItemPNG = ({ src, name }) => (
  <div className="group relative flex flex-col items-center justify-center p-2 text-white cursor-default h-full min-h-[70px]">
    <div 
      className="w-[28px] h-[28px] bg-neutral-300 transition-all duration-300 group-hover:-translate-y-2 group-hover:bg-cyan-400 relative z-10"
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
      title={name}
    />
    <span className="absolute bottom-1 text-[10px] sm:text-xs font-mono tracking-wider text-neutral-500 opacity-0 transform translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 z-0">
      {name}
    </span>
  </div>
);

const TechItem = ({ Icon, name }) => (
  <div className="group relative flex flex-col items-center justify-center p-2 text-neutral-300 cursor-default h-full min-h-[70px]">
    <Icon 
      size={28} 
      className="transition-all duration-300 group-hover:text-cyan-400 group-hover:-translate-y-2 relative z-10" 
    />
    <span className="absolute bottom-1 text-[10px] sm:text-xs font-mono tracking-wider text-neutral-500 opacity-0 transform translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 z-0">
      {name}
    </span>
  </div>
);

// Crosshair corner decorations for cards to keep the engineering motif
const Corners = () => (
  <>
    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-neutral-600 rounded-tl-sm transition-colors group-hover:border-cyan-500/50"></div>
    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-neutral-600 rounded-tr-sm transition-colors group-hover:border-cyan-500/50"></div>
    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-neutral-600 rounded-bl-sm transition-colors group-hover:border-cyan-500/50"></div>
    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-neutral-600 rounded-br-sm transition-colors group-hover:border-cyan-500/50"></div>
  </>
);

function HomeContent({ setActiveModal }) {
  return (
    <div className="w-full flex-1 flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      
      <div className="border-b border-neutral-800/80 pb-8 mb-8 mt-4">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-white text-left drop-shadow-lg m-0 leading-none">
          Mofe Omolade <span className="text-cyan-500 animate-terminal-blink">_</span>
        </h1>
        <div className="mt-6 space-y-4 text-neutral-400 text-base md:text-xl leading-relaxed max-w-2xl text-left">
          <p>
            I'm a UBC Computer Engineering student with a passion for electronics. I love exploring anything related to robotics, embedded programming, semiconductors, and more!
          </p>
        </div>
      </div>

      {/* Grid adapts beautifully from 1 column on mobile to up to 4 on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full mb-12 font-mono text-sm">
        
        {/* Experience Card */}
        <div 
          onClick={() => setActiveModal('experience')}
          className="relative p-6 bg-neutral-900/40 rounded-xl backdrop-blur-sm border border-neutral-800/80 hover:border-cyan-500/50 hover:bg-neutral-800/40 transition-all text-left flex flex-col h-full cursor-pointer group shadow-lg"
        >
          <Corners />
          <div className="absolute top-4 right-4 text-neutral-600 group-hover:text-cyan-400 transition-colors">
            <MaximizeIcon size={16} />
          </div>
          <h3 className="text-white font-semibold mb-4 pb-2 border-b border-neutral-800/80 tracking-wider flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
            EXPERIENCE
          </h3>
          <ul className="space-y-4 text-neutral-400 mt-2">
            <li className="leading-snug"><strong className="text-neutral-200 block">Electronics R&D Intern</strong>@ FulcrumAir</li>
            <li className="leading-snug"><strong className="text-neutral-200 block">ELEC Team Member</strong>@ UBC Rover</li>
            <li className="leading-snug"><strong className="text-neutral-200 block">EE Intern</strong>@ UCalgary</li>
          </ul>
        </div>

        {/* Tools Card */}
        <div className="relative p-6 bg-neutral-900/40 rounded-xl backdrop-blur-sm border border-neutral-800/80 hover:border-cyan-500/30 transition-all text-left flex flex-col h-full group">
          <Corners />
          <h3 className="text-white font-semibold mb-4 pb-2 border-b border-neutral-800/80 tracking-wider flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-cyan-500/50 rounded-full"></span>
            TOOLS
          </h3>
          <div className="grid grid-cols-3 gap-2 mt-2 content-start flex-1">
            <TechItemPNG src="/altium-logo.png" name="Altium" />
            <TechItemPNG src="/kicad.png" name="KiCad" />
            <TechItem Icon={GitIcon} name="Git" />
            <TechItemPNG src="/LT.png" name="LTspice" />
            <TechItem Icon={Stm32Icon} name="STM32" />
            <TechItemPNG src="/MATLAB.png" name="MATLAB" />
          </div>
        </div>

        {/* Languages Card */}
        <div className="relative p-6 bg-neutral-900/40 rounded-xl backdrop-blur-sm border border-neutral-800/80 hover:border-cyan-500/30 transition-all text-left flex flex-col h-full group">
          <Corners />
          <h3 className="text-white font-semibold mb-4 pb-2 border-b border-neutral-800/80 tracking-wider flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-cyan-500/50 rounded-full"></span>
            LANGUAGES
          </h3>
          <div className="grid grid-cols-2 gap-4 mt-2 content-start flex-1">
            <TechItemPNG src="/C.png" name="C/C++" />
            <TechItem Icon={PythonIcon} name="Python" />
          </div>
        </div>

        {/* Current Project Card */}
        <div 
          onClick={() => setActiveModal('currentProject')}
          className="relative p-6 bg-neutral-900/40 rounded-xl backdrop-blur-sm border border-neutral-800/80 hover:border-cyan-500/50 hover:bg-neutral-800/40 transition-all text-left flex flex-col h-full cursor-pointer group shadow-lg"
        >
          <Corners />
          <div className="absolute top-4 right-4 text-neutral-600 group-hover:text-cyan-400 transition-colors">
            <MaximizeIcon size={16} />
          </div>
          <h3 className="text-white font-semibold mb-4 pb-2 border-b border-neutral-800/80 tracking-wider flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-cyan-500/50 rounded-full"></span>
            CURRENT
          </h3>
          <div className="space-y-3 text-neutral-400 mt-2 flex flex-col flex-1">
            <p className="text-neutral-200 font-bold">Custom Motor Controller</p>
            <p className="text-xs leading-relaxed opacity-80">
              Designing a custom motor controller PCB supporting 24 V, 5 A loads and CAN communication.
            </p>
            <div className="mt-auto pt-4">
              <span className="inline-block px-2 py-1 text-[10px] uppercase tracking-widest text-cyan-400 bg-cyan-950/40 border border-cyan-900/50 rounded-sm">
                In Progress
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectsContent({ setActiveModal }) {
  const projects = [
    { 
      id: "motor-controller",
      title: "Custom Motor Controller", 
      desc: "Custom motor controller PCB supporting 24V, 5A loads and CAN communication.", 
      tech: "Altium Designer, LTspice, C++"
    },
    { 
      id: "drivetrain",
      title: "Autonomous Drivetrain", 
      desc: "Firmware and electrical design for a 6-wheel rover drivetrain using a Nucleo-F446RE, interfacing with an NVIDIA Jetson.", 
      tech: "STM32, C, UART"
    },
    { 
      id: "uav",
      title: "Buck Converter Module", 
      desc: "Designing a custom 24V-5V 2A synchronous buck converter.", 
      tech: "Altium, LTspice"
    },
    { 
      id: "hud",
      title: "Car HUD Speedometer", 
      desc: "Custom Heads-Up Display speedometer using a low-power MCU, GPS module, and high-brightness LCD.", 
      tech: "Arduino, GNSS, C++, SPI"
    }
  ];

  return (
    <div className="w-full flex-1 flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      
      <div className="border-b border-neutral-800/80 pb-8 mb-8 mt-4 text-left">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-white text-left drop-shadow-lg m-0 leading-none">
          Projects <span className="text-cyan-500 animate-terminal-blink">_</span>
        </h1>
        <p className="text-cyan-500/80 font-mono text-xs sm:text-sm uppercase tracking-widest mt-6">
          Cool things I've built :)
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 pb-8 text-left flex-1">
        {projects.map((proj) => (
          <div 
            key={proj.id} 
            onClick={() => setActiveModal(proj.id)}
            className="relative p-6 sm:p-8 bg-neutral-900/40 rounded-xl backdrop-blur-sm border border-neutral-800/80 hover:border-cyan-500/40 hover:bg-neutral-800/60 hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex flex-col h-full shadow-lg"
          >
            <div className="absolute top-6 right-6 text-neutral-600 group-hover:text-cyan-400 transition-colors">
              <MaximizeIcon size={18} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors pr-8">{proj.title}</h3>
            <p className="text-neutral-400 mb-8 flex-grow leading-relaxed">{proj.desc}</p>
            <div className="text-[10px] sm:text-xs font-mono text-neutral-500 uppercase tracking-widest border-t border-neutral-800/80 pt-4 mt-auto">
              [ {proj.tech} ]
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const ModalData = {
  experience: {
    title: "EXPERIENCE LOG",
    content: (
      <div className="space-y-8">
        <div className="relative pl-6 border-l border-neutral-800">
          <div className="absolute w-3 h-3 bg-cyan-500 rounded-full -left-[1.5px] top-1.5 transform -translate-x-1/2 ring-4 ring-[#0a0a0a]"></div>
          <h4 className="text-xl font-bold text-white mb-1">Electronics R&D Intern <span className="text-cyan-500 font-normal">@ FulcrumAir</span></h4>
          <p className="text-xs font-mono text-neutral-500 mb-3">Current</p>
          <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
            Developing and testing custom PCBs and embedded systems for industrial robotic applications. Focusing on maximizing power reliability, signal integrity, and firmware stability for high-voltage environments.
          </p>
        </div>
        <div className="relative pl-6 border-l border-neutral-800">
          <div className="absolute w-3 h-3 bg-neutral-700 rounded-full -left-[1.5px] top-1.5 transform -translate-x-1/2 ring-4 ring-[#0a0a0a]"></div>
          <h4 className="text-xl font-bold text-white mb-1">ELEC Team Member <span className="text-cyan-500 font-normal">@ UBC Rover</span></h4>
          <p className="text-xs font-mono text-neutral-500 mb-3">2025 - Present</p>
          <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
            Collaborating with a multi-disciplinary team to design and build a Mars rover for international competitions. Contributing to the electrical sub-team on sensor integration, power distribution, and serial communication.
          </p>
        </div>
        <div className="relative pl-6 border-l border-neutral-800">
          <div className="absolute w-3 h-3 bg-neutral-700 rounded-full -left-[1.5px] top-1.5 transform -translate-x-1/2 ring-4 ring-[#0a0a0a]"></div>
          <h4 className="text-xl font-bold text-white mb-1">Electrical Engineering Intern <span className="text-cyan-500 font-normal">@ UCalgary</span></h4>
          <p className="text-xs font-mono text-neutral-500 mb-3">2023</p>
          <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
            Assisted in research on op-amp based oscillator design. Prototyped circuits, performed validation tests, and ran SPICE simulation to validate signal behavior.
          </p>
        </div>
      </div>
    )
  },
  currentProject: {
    title: "PROJECT SPECS",
    content: (
      <div className="space-y-6">
        <h4 className="text-2xl font-bold text-white">Custom Motor Controller</h4>
        <div className="bg-neutral-900/60 border border-neutral-800/80 rounded-lg p-5 sm:p-6">
          <h5 className="font-mono text-cyan-500 text-xs mb-5 uppercase tracking-widest border-b border-neutral-800 pb-2">Technical Highlights</h5>
          <ul className="space-y-5 text-neutral-400 text-sm md:text-base">
            <li className="flex gap-4">
              <span className="text-cyan-500 mt-1">▹</span>
              <span><strong className="text-neutral-200 block mb-1">Hardware Design:</strong> Designing a compact motor driver module around the IFX007T half-bridge to support multichannel actuator control.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-cyan-500 mt-1">▹</span>
              <span><strong className="text-neutral-200 block mb-1">Embedded Firmware:</strong> Developing C++ firmware to handle motor control logic and CAN communication.</span>
            </li>
          </ul>
        </div>
      </div>
    )
  },
  "motor-controller": {
    title: "PROJECT SPECS",
    content: (
      <div className="space-y-6">
        <h4 className="text-2xl font-bold text-white">Custom Motor Controller</h4>
        <div className="bg-neutral-900/60 border border-neutral-800/80 rounded-lg p-5 sm:p-6">
          <h5 className="font-mono text-cyan-500 text-xs mb-5 uppercase tracking-widest border-b border-neutral-800 pb-2">Technical Highlights</h5>
          <ul className="space-y-5 text-neutral-400 text-sm md:text-base">
            <li className="flex gap-4">
              <span className="text-cyan-500 mt-1">▹</span>
              <span><strong className="text-neutral-200 block mb-1">Hardware Design:</strong> Designing a compact motor driver module around the IFX007T half-bridge to support multi-channel actuator control and CAN communication.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-cyan-500 mt-1">▹</span>
              <span><strong className="text-neutral-200 block mb-1">PCB Layout:</strong> Planning thorough SPICE simulations prior to physical assembly, followed by hardware debugging.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-cyan-500 mt-1">▹</span>
              <span><strong className="text-neutral-200 block mb-1">Embedded Firmware:</strong> Developing C++ firmware to handle motor control logic and serial communication for reliable in-field robot operation.</span>
            </li>
          </ul>
        </div>
      </div>
    )
  },
  "drivetrain": {
    title: "PROJECT SPECS",
    content: (
      <div className="space-y-6">
        <h4 className="text-2xl font-bold text-white">Autonomous Drivetrain System</h4>
        <div className="bg-neutral-900/60 border border-neutral-800/80 rounded-lg p-5 sm:p-6">
          <h5 className="font-mono text-cyan-500 text-xs mb-5 uppercase tracking-widest border-b border-neutral-800 pb-2">Technical Highlights</h5>
          <ul className="space-y-5 text-neutral-400 text-sm md:text-base">
            <li className="flex gap-4">
              <span className="text-cyan-500 mt-1">▹</span>
              <span><strong className="text-neutral-200 block mb-1">Hardware Integration:</strong> Utilized three L298N motor driver modules to drive six brushed DC motors.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-cyan-500 mt-1">▹</span>
              <span><strong className="text-neutral-200 block mb-1">Embedded Control:</strong> Wrote C firmware on a Nucleo-F446RE MCU to parse serial commands from an Nvidia Jetson for drivetrain execution.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-cyan-500 mt-1">▹</span>
              <span><strong className="text-neutral-200 block mb-1">Telemetry:</strong> Calculated rover speed using hall effect encoder data, transmitting velocity back to the Jetson.</span>
            </li>
          </ul>
        </div>
      </div>
    )
  },
  "uav": {
    title: "PROJECT SPECS",
    content: (
      <div className="space-y-6">
        <h4 className="text-2xl font-bold text-white">24V-5V Synchronous Buck</h4>
        <div className="bg-neutral-900/60 border border-neutral-800/80 rounded-lg p-5 sm:p-6">
          <h5 className="font-mono text-cyan-500 text-xs mb-5 uppercase tracking-widest border-b border-neutral-800 pb-2">Technical Highlights</h5>
          <ul className="space-y-5 text-neutral-400 text-sm md:text-base">
            <li className="flex gap-4">
              <span className="text-cyan-500 mt-1">▹</span>
              <span><strong className="text-neutral-200 block mb-1">Power Architecture:</strong> Discrete topology utilizing a high-side N-channel MOSFET, low-side synchronous switch, floating bootstrap gate drive, and an analog Type II control loop.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-cyan-500 mt-1">▹</span>
              <span><strong className="text-neutral-200 block mb-1">PCB Layout:</strong> Validating closed-loop stability in LTspice simulations before performing PCB layout in Altium.</span>
            </li>
          </ul>
        </div>
      </div>
    )
  },
  "hud": {
    title: "PROJECT SPECS",
    content: (
      <div className="space-y-6">
        <h4 className="text-2xl font-bold text-white">Car HUD Speedometer</h4>
        <div className="bg-neutral-900/60 border border-neutral-800/80 rounded-lg p-5 sm:p-6">
          <h5 className="font-mono text-cyan-500 text-xs mb-5 uppercase tracking-widest border-b border-neutral-800 pb-2">Technical Highlights</h5>
          <ul className="space-y-5 text-neutral-400 text-sm md:text-base">
            <li className="flex gap-4">
              <span className="text-cyan-500 mt-1">▹</span>
              <span><strong className="text-neutral-200 block mb-1">Embedded Programming:</strong> C++ firmware to parse NMEA data streams to compute velocity from positioning telemetry.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-cyan-500 mt-1">▹</span>
              <span><strong className="text-neutral-200 block mb-1">Electronics Design:</strong> Integrating Arduino Nano, GY-NEO6MV2 module, and SPI OLED display for safe operation on vehicle supply voltage.</span>
            </li>
          </ul>
        </div>

        {/* Gallery Section */}
        <div className="space-y-4 mt-8">
          <h5 className="font-mono text-cyan-500 text-xs uppercase tracking-widest border-b border-neutral-800 pb-2">Gallery</h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="group relative rounded-lg overflow-hidden border border-neutral-800/80 hover:border-cyan-500/50 transition-colors">
              <img src="/hud breadboard.jpg" alt="HUD Breadboard Prototype" className="w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="group relative rounded-lg overflow-hidden border border-neutral-800/80 hover:border-cyan-500/50 transition-colors">
              <img src="/HUD driver view.jpg" alt="HUD Driver View" className="w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="group relative rounded-lg overflow-hidden border border-neutral-800/80 hover:border-cyan-500/50 transition-colors md:col-span-2">
              <img src="/HUD Schematic.png" alt="HUD Schematic" className="w-full h-auto object-contain bg-neutral-200 opacity-90 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </div>
    )
  }
};

function Modal({ activeModal, setActiveModal }) {
  if (!activeModal || !ModalData[activeModal]) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-auto">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer animate-in fade-in duration-300"
        onClick={() => setActiveModal(null)}
      />
      
      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-2xl bg-[#0a0a0a] border border-neutral-800/80 rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] animate-in zoom-in-95 fade-in duration-300">
        
        {/* Header */}
        <div className="flex justify-between items-center p-5 md:p-6 border-b border-neutral-800/80 bg-neutral-900/40">
          <h2 className="text-sm md:text-base font-bold font-mono tracking-widest text-cyan-500 flex items-center gap-2">
            <span className="w-2 h-2 bg-cyan-500 block"></span>
            {ModalData[activeModal].title}
          </h2>
          <button 
            onClick={() => setActiveModal(null)}
            className="text-neutral-500 hover:text-cyan-400 transition-colors bg-transparent border-none cursor-pointer p-1.5 rounded hover:bg-neutral-800"
          >
            <CloseIcon size={20} />
          </button>
        </div>
        
        {/* Body */}
        <div className="p-6 md:p-8 overflow-y-auto text-left scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-transparent bg-gradient-to-b from-transparent to-neutral-900/20">
          {ModalData[activeModal].content}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname.includes('/projects') ? 'projects' : 'home';
    }
    return 'home';
  });
  const [activeModal, setActiveModal] = useState(null);

  // Handle custom routing to update the URL natively
  const navigate = (newPage) => {
    setPage(newPage);
    if (typeof window !== 'undefined') {
      const newUrl = newPage === 'home' ? '/' : '/projects';
      window.history.pushState({}, '', newUrl);
    }
  };

  // Listen for browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setPage(window.location.pathname.includes('/projects') ? 'projects' : 'home');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Lock body scroll when modal is open for a better mobile experience
  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [activeModal]);

  return (
    <div className="relative w-full min-h-screen bg-[#050505] text-[#e5e5e5] font-sans selection:bg-cyan-500 selection:text-black flex flex-col overflow-x-hidden">
      
      <style>{`
        @keyframes terminal-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-terminal-blink {
          animation: terminal-blink 1.2s step-end infinite;
        }
      `}</style>

      {/* Dynamic Grid Background replaces the Heavy WebGL canvas */}
      <div className="fixed inset-0 z-0 pointer-events-none" style={{
        backgroundImage: `
          radial-gradient(circle at 15% 50%, rgba(6, 182, 212, 0.04), transparent 30%),
          radial-gradient(circle at 85% 30%, rgba(15, 23, 42, 0.5), transparent 40%),
          linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), 
          linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
        `,
        backgroundSize: '100% 100%, 100% 100%, 40px 40px, 40px 40px',
        backgroundPosition: 'center center'
      }}>
        {/* Subtle grid animation overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505] opacity-80" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex-1 flex flex-col w-full max-w-6xl mx-auto px-6 sm:px-8 md:px-12 pt-8 sm:pt-12 pb-16">
        
        {/* Header / Navigation */}
        <header className="w-full flex flex-col sm:flex-row justify-end items-start sm:items-center gap-6 mb-12 sm:mb-16">
          <nav className="flex gap-6 sm:gap-8 font-mono text-sm sm:text-base tracking-widest items-center">
            <button 
              onClick={() => navigate('home')} 
              className={`flex items-center gap-2 transition-colors cursor-pointer bg-transparent border-0 p-0 hover:text-cyan-400 ${page === 'home' ? 'text-cyan-500' : 'text-neutral-500'}`}
            >
              [ Home ]
            </button>
            <button 
              onClick={() => navigate('projects')} 
              className={`flex items-center gap-2 transition-colors cursor-pointer bg-transparent border-0 p-0 hover:text-cyan-400 ${page === 'projects' ? 'text-cyan-500' : 'text-neutral-500'}`}
            >
              [ Projects ]
            </button>
            <a 
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition-colors cursor-pointer text-neutral-500 hover:text-cyan-400"
            >
              Resume
              <ExternalLinkIcon size={14} className="mb-0.5 opacity-80" />
            </a>
          </nav>
        </header>

        {/* Page Routing */}
        <main className="flex-1 flex flex-col w-full">
          {page === 'home' ? <HomeContent setActiveModal={setActiveModal} /> : <ProjectsContent setActiveModal={setActiveModal} />}
        </main>

        {/* Footer / Socials */}
        <footer className="w-full border-t border-neutral-800/80 pt-8 mt-12">
          <div className="flex flex-wrap justify-between items-center gap-6">
            <div className="flex justify-start items-center gap-6 sm:gap-8">
              <a href="https://github.com/mofeomolade" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-neutral-500 hover:text-cyan-400 transition-all hover:-translate-y-1 duration-300">
                <GithubIcon size={22} />
              </a>
              <a href="https://linkedin.com/in/momolade" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-neutral-500 hover:text-cyan-400 transition-all hover:-translate-y-1 duration-300">
                 <LinkedinIcon size={22} />
              </a>
              <a href="mailto:mofe.omolade@example.com" aria-label="Contact" className="text-neutral-500 hover:text-cyan-400 transition-all hover:-translate-y-1 duration-300">
                <MailIcon size={22} />
              </a>
            </div>
            <div className="font-mono text-xs text-neutral-600 tracking-widest uppercase">
              STATUS: ONLINE
            </div>
          </div>
        </footer>
        
      </div>

      {/* Global Modals */}
      <Modal activeModal={activeModal} setActiveModal={setActiveModal} />

    </div>
  );
}