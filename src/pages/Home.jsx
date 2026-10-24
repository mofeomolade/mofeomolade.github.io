import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, ExternalLinkIcon, MaximizeIcon } from '../components/icons';
import Gallery from '../components/Gallery';
import {
  BulletPoint, Divider, Modal, SectionLabel, TechItem, btnGhost, btnPrimary, cardClass, interactiveCardClass,
} from '../components/ui';
import { experience, gallery, languages, tools, getProject } from '../data/content';
import { asset } from '../utils';

const INTRO =
  "I'm a UBC Computer Engineering student with a passion for electronics. I love exploring anything related to robotics, EVs, embedded systems, semiconductors, and more!";

function ExperienceDetails() {
  return (
    <div className="space-y-8">
      {experience.map((job, i) => (
        <div key={`${job.org}-${job.dates}`}>
          {i > 0 && <Divider className="mb-8" />}
          <h4 className="text-xl font-bold text-white mb-1">
            {job.role} <span className="text-cyan-500 font-normal">@ {job.org}</span>
          </h4>
          <p className="text-sm font-mono text-neutral-500 mb-3">{job.dates}{job.location && ` · ${job.location}`}</p>
          <ul className="space-y-3 text-neutral-300 text-sm md:text-base">
            {job.points.map((pt) => (
              <li key={pt} className="flex gap-3"><BulletPoint /><span>{pt}</span></li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

const TechBlock = ({ label, items, className = '' }) => (
  <section className={`${cardClass} ${className}`}>
    <SectionLabel>{label}</SectionLabel>
    <Divider />
    <div className="flex flex-wrap gap-x-2 gap-y-1">
      {items.map((t) => <TechItem key={t.title} {...t} />)}
    </div>
  </section>
);

export default function Home() {
  const [showExperience, setShowExperience] = useState(false);
  const current = getProject('battery-pack-boards');
  const openExperience = () => setShowExperience(true);

  return (
    <div>
      {/* Hero */}
      <section className="grid lg:grid-cols-5 gap-8 lg:gap-14 lg:items-start mb-10 md:mb-12">
        <div className="lg:col-span-3 lg:pt-4 reveal">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-6">
            Mofe{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Omolade</span>
          </h1>
          <p className="text-neutral-400 text-base md:text-lg leading-relaxed max-w-xl mb-8">{INTRO}</p>
          <div className="flex flex-wrap items-center gap-3">
            <Link to="/projects" className={btnPrimary}>View projects <ArrowRightIcon size={16} /></Link>
            <a href={asset('resume.pdf')} target="_blank" rel="noopener noreferrer" className={btnGhost}>
              Resume <ExternalLinkIcon size={14} />
            </a>
          </div>
        </div>

        <div className="lg:col-span-2">
          <Gallery items={gallery} />
        </div>
      </section>

      {/* One continuous grid: experience, current project, tools */}
      <section className="grid grid-cols-1 md:grid-cols-6 gap-5">
        <div
          role="button"
          tabIndex={0}
          aria-haspopup="dialog"
          onClick={openExperience}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), openExperience())}
          className={`${interactiveCardClass} cursor-pointer md:col-span-4 reveal`}
          style={{ '--i': 1 }}
        >
          <MaximizeIcon size={18} className="absolute top-6 right-6 text-neutral-600 group-hover:text-cyan-400 transition-colors" />
          <SectionLabel>Experience</SectionLabel>
          <Divider />
          <ul className="relative ml-1 pl-6 border-l border-cyan-500/25 space-y-6">
            {experience.map((job) => (
              <li key={`${job.org}-${job.dates}`} className="relative">
                <span className="absolute -left-[29px] top-1.5 w-2.5 h-2.5 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.7)]" aria-hidden="true" />
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
                  <div>
                    <span className="text-white font-semibold">{job.role}</span>
                    <span className="text-cyan-500 font-mono text-sm whitespace-nowrap"> @ {job.org}</span>
                  </div>
                  <span className="font-mono text-xs text-neutral-500 shrink-0">{job.dates}</span>
                </div>
                <p className="text-neutral-400 text-sm mt-1">{job.summary}</p>
              </li>
            ))}
          </ul>
        </div>

        <Link to={`/projects/${current.id}`} className={`${interactiveCardClass} md:col-span-2 reveal`} style={{ '--i': 2 }}>
          <ArrowRightIcon size={18} className="absolute top-6 right-6 text-neutral-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
          <SectionLabel>Current Project</SectionLabel>
          <Divider />
          <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-3">{current.heading}</h4>
          <p className="text-neutral-400 text-sm leading-relaxed">{current.desc}</p>
        </Link>

        <TechBlock label="Tools" items={tools} className="md:col-span-3 reveal" />
        <TechBlock label="Languages" items={languages} className="md:col-span-3 reveal" />

      </section>

      {showExperience && (
        <Modal title="Experience Details" onClose={() => setShowExperience(false)}>
          <ExperienceDetails />
        </Modal>
      )}
    </div>
  );
}
