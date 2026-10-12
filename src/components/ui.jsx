import { useEffect } from 'react';
import { CloseIcon, GitIcon, PythonIcon } from './icons';
import { asset } from '../utils';

export const cardClass =
  'w-full relative p-6 md:p-7 bg-[#080c14]/80 rounded-2xl border border-white/[0.07] text-left flex flex-col';
export const interactiveCardClass =
  `${cardClass} group transition-all duration-300 hover:border-cyan-500/40 hover:bg-[#0a1120]/90 hover:-translate-y-0.5 hover:shadow-[0_10px_40px_-14px_rgba(6,182,212,0.3)] focus-visible:border-cyan-500/50`;

export const btnPrimary =
  'inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-500 text-black text-sm font-semibold font-mono tracking-wide hover:bg-cyan-400 transition-colors';
export const btnGhost =
  'inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/15 text-neutral-200 text-sm font-mono tracking-wide hover:border-cyan-500/60 hover:text-cyan-300 transition-colors';

export const SectionLabel = ({ children, className = '' }) => (
  <h3 className={`text-cyan-500 text-xs font-bold tracking-widest flex items-center gap-2 uppercase ${className}`}>
    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" aria-hidden="true" />
    {children}
  </h3>
);

export const Divider = ({ className = 'my-5' }) => (
  <div className={`w-full h-px bg-gradient-to-r from-cyan-500/25 via-white/10 to-transparent ${className}`} />
);

export const BulletPoint = () => (
  <span className="w-1.5 h-1.5 mt-2 rounded-sm bg-cyan-500 shrink-0" aria-hidden="true" />
);

export const Tag = ({ children }) => (
  <span className="text-[11px] font-mono tracking-wider text-neutral-300 bg-white/[0.04] border border-white/10 rounded px-2 py-1">
    {children}
  </span>
);

export const PageHeading = ({ eyebrow, title, children }) => (
  <div className="mb-10 md:mb-12 reveal">
    {eyebrow && (
      <p className="font-mono text-xs tracking-[0.25em] text-cyan-500 uppercase flex items-center gap-3 mb-4">
        <span className="h-px w-8 bg-cyan-500" aria-hidden="true" /> {eyebrow}
      </p>
)}
    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-none">{title}</h1>
    {children && <p className="text-neutral-400 mt-5 max-w-2xl leading-relaxed">{children}</p>}
  </div>
);

const icons = { git: GitIcon, python: PythonIcon };

export function TechItem({ src, icon, title, size = 36 }) {
  const Icon = icon && icons[icon];
  return (
    <div className="group flex flex-col items-center justify-center h-20 w-24 cursor-default">
      <div className="transition-transform duration-300 group-hover:-translate-y-2 flex flex-col items-center gap-2">
        {Icon ? (
          <Icon size={36} className="text-neutral-500 group-hover:text-cyan-400 transition-colors duration-300" />
        ) : (
          <div
            role="img"
            aria-label={title}
            className="bg-neutral-500 group-hover:bg-cyan-400 transition-colors duration-300"
            style={{
              width: size,
              height: size,
              WebkitMask: `url(${asset(src)}) center / contain no-repeat`,
              mask: `url(${asset(src)}) center / contain no-repeat`,
            }}
          />
        )}
        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-medium text-xs font-mono whitespace-nowrap text-center">
          {title}
        </span>
      </div>
    </div>
  );
}

export function Modal({ title, onClose, children }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 fade-in" role="dialog" aria-modal="true" aria-label={title}>
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer" onClick={onClose} />
      <div className="relative z-10 w-full max-w-2xl bg-[#080c14] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        <div className="flex justify-between items-center p-5 md:p-6 border-b border-white/10">
          <h2 className="text-sm font-bold font-mono tracking-widest text-cyan-500 uppercase">{title}</h2>
          <button onClick={onClose} aria-label="Close" className="text-neutral-500 hover:text-white transition-colors bg-transparent border-none cursor-pointer p-1 rounded">
            <CloseIcon size={20} />
          </button>
        </div>
        <div className="p-6 md:p-8 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}
