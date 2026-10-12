import { Link, useParams } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon, ExternalLinkIcon, FileTextIcon, GithubIcon, PlayIcon } from '../components/icons';
import { BulletPoint, SectionLabel, Tag, btnGhost, cardClass } from '../components/ui';
import { getProject, projects } from '../data/content';
import NotFound from './NotFound';
import { useDocumentTitle } from '../hooks';
import { asset } from '../utils';

const frames = {
  photo: 'border border-white/10 rounded-lg overflow-hidden',
  light: 'bg-neutral-200 rounded-lg p-2 border border-white/10 flex items-center justify-center',
  dark: 'bg-black rounded-lg border border-white/10 flex items-center justify-center overflow-hidden',
};

function GalleryImage({ item }) {
  const src = encodeURI(asset(item.src)); // some filenames contain spaces
  const isPhoto = item.type === 'photo';
  const sizing = isPhoto
    ? item.wide || item.full ? 'w-full h-auto' : 'w-full h-48 md:h-56 object-cover'
    : 'w-full max-h-64 object-contain';

  return (
    <a
      href={src}
      target="_blank"
      rel="noreferrer"
      className={`${frames[item.type]} ${item.wide ? 'md:col-span-2' : ''} ${item.full ? 'self-start' : ''} block`}
      aria-label={`Open ${item.alt} full size`}
    >
      <img
        src={src}
        alt={item.alt}
        loading="lazy"
        decoding="async"
        className={`${item.wide && !isPhoto ? 'w-full h-auto max-h-none' : sizing} opacity-90 hover:opacity-100 transition-opacity`}
      />
    </a>
  );
}

function ResourceLink({ label, url }) {
  const isVideo = /video/i.test(label);
  const Icon = isVideo ? PlayIcon : FileTextIcon;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 p-4 rounded-xl border border-cyan-500/30 bg-cyan-500/[0.07] hover:bg-cyan-500/[0.14] hover:border-cyan-400/60 transition-colors"
    >
      <span className="flex items-center justify-center w-11 h-11 rounded-lg bg-cyan-500/15 text-cyan-400 shrink-0">
        <Icon size={22} />
      </span>
      <span className="flex-1 min-w-0">
        <span className="block text-[11px] font-mono tracking-widest text-cyan-500 uppercase mb-0.5">
          {isVideo ? 'Video' : 'Document'}
        </span>
        <span className="block text-white font-semibold group-hover:text-cyan-300 transition-colors">{label}</span>
      </span>
      <ExternalLinkIcon size={18} className="text-neutral-500 group-hover:text-cyan-400 transition-colors shrink-0" />
    </a>
  );
}

export default function ProjectDetail() {
  const { id } = useParams();
  const project = getProject(id);
  useDocumentTitle(project ? project.title : 'Not found');
  if (!project) return <NotFound />;

  const index = projects.findIndex((p) => p.id === id);
  const prev = projects[index - 1];
  const next = projects[index + 1];

  return (
    <article className="fade-up flex flex-col gap-8">
      <div>
        <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-mono text-neutral-500 hover:text-cyan-400 transition-colors mb-8">
          <ArrowLeftIcon size={16} /> All projects
        </Link>
        <p className="font-mono text-xs tracking-[0.25em] text-cyan-500 uppercase flex items-center gap-3 mb-4">
          <span className="h-px w-8 bg-cyan-500" aria-hidden="true" /> Project {String(index + 1).padStart(2, '0')}
        </p>
        <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight max-w-3xl">{project.heading}</h1>
        <p className="text-neutral-400 text-base md:text-lg leading-relaxed max-w-3xl mt-5">{project.desc}</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 items-start">
        {/* Sidebar: resources first on mobile, sticky on desktop */}
        <aside className="order-first lg:order-last lg:sticky lg:top-24 flex flex-col gap-4">
          {project.links?.length > 0 && (
            <section aria-label="Project resources" className="flex flex-col gap-3">
              {project.links.map(([label, url]) => <ResourceLink key={url} label={label} url={url} />)}
            </section>
          )}
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noopener noreferrer" className={`${btnGhost} justify-center`}>
              <GithubIcon size={18} /> View on GitHub
            </a>
          )}
          <div className={`${cardClass} gap-4`}>
            <div>
              <p className="text-[11px] font-mono tracking-widest text-neutral-500 uppercase mb-2">Tech</p>
              <div className="flex flex-wrap gap-2">{project.tech.map((t) => <Tag key={t}>{t}</Tag>)}</div>
            </div>
          </div>
        </aside>

        <section className={`${cardClass} lg:col-span-2`}>
          <SectionLabel className="mb-6">Technical Highlights</SectionLabel>
          <ul className="space-y-5 text-neutral-300 text-sm md:text-base">
            {project.highlights.map(([label, text]) => (
              <li key={label} className="flex gap-3">
                <BulletPoint />
                <span><strong className="text-white block mb-1 font-medium">{label}</strong>{text}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {project.gallery.length > 0 && (
        <section className={cardClass}>
          <SectionLabel className="mb-6">Gallery</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.gallery.map((item) => <GalleryImage key={item.src} item={item} />)}
          </div>
        </section>
      )}

      <nav className="grid grid-cols-2 gap-4 font-mono text-sm" aria-label="More projects">
        {prev ? (
          <Link to={`/projects/${prev.id}`} className="group flex flex-col gap-1 p-4 rounded-xl border border-white/[0.07] bg-[#080c14]/80 hover:border-cyan-500/40 transition-colors">
            <span className="text-neutral-600 text-xs flex items-center gap-1"><ArrowLeftIcon size={12} /> Previous</span>
            <span className="text-neutral-300 group-hover:text-cyan-400 transition-colors">{prev.title}</span>
          </Link>
        ) : <span />}
        {next && (
          <Link to={`/projects/${next.id}`} className="group flex flex-col gap-1 p-4 rounded-xl border border-white/[0.07] bg-[#080c14]/80 hover:border-cyan-500/40 transition-colors text-right items-end col-start-2">
            <span className="text-neutral-600 text-xs flex items-center gap-1">Next <ArrowRightIcon size={12} /></span>
            <span className="text-neutral-300 group-hover:text-cyan-400 transition-colors">{next.title}</span>
          </Link>
        )}
      </nav>
    </article>
  );
}
