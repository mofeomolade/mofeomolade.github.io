import { Fragment } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon, ExternalLinkIcon, FileTextIcon, GithubIcon, PlayIcon } from '../components/icons';
import ProjectGallery from '../components/ProjectGallery';
import { BulletPoint, SectionLabel, Tag, btnGhost, cardClass } from '../components/ui';
import { getProject, projects } from '../data/content';
import NotFound from './NotFound';
import { useDocumentTitle } from '../hooks';

const kindOf = (label, url) => {
  if (/video/i.test(label)) return { Icon: PlayIcon, name: 'Video', rank: 0 };
  if (/github\.com/i.test(url)) return { Icon: GithubIcon, name: 'Code', rank: 2 };
  return { Icon: FileTextIcon, name: 'Document', rank: 1 };
};

function ResourceLink({ label, url }) {
  const { Icon, name } = kindOf(label, url);
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
        <span className="block text-[11px] font-mono tracking-widest text-cyan-500 uppercase mb-0.5">{name}</span>
        <span className="block text-white font-semibold group-hover:text-cyan-300 transition-colors">{label}</span>
      </span>
      <ExternalLinkIcon size={18} className="text-neutral-500 group-hover:text-cyan-400 transition-colors shrink-0" />
    </a>
  );
}

function Decision({ item, n }) {
  const more = [['Why', item.why], ['Tradeoff', item.tradeoff]].filter(([, v]) => v);
  return (
    <li className="py-5 first:pt-0 last:pb-0">
      <details className="group">
        <summary className="flex items-start gap-3 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
          <span className="font-mono text-xs text-cyan-500 tracking-widest pt-1.5">{String(n + 1).padStart(2, '0')}</span>
          <span className="flex-1 min-w-0">
            <span className="block text-white font-semibold text-base md:text-lg group-hover:text-cyan-300 transition-colors">{item.title}</span>
            <span className="block text-neutral-400 text-sm mt-1">{item.chose}</span>
          </span>
          <ArrowRightIcon size={16} className="mt-2 shrink-0 text-neutral-600 group-hover:text-cyan-400 group-open:rotate-90 transition-transform" />
        </summary>
        <dl className="grid grid-cols-[5rem_1fr] gap-x-4 gap-y-2 text-sm md:text-base mt-4 pl-7">
          {more.map(([label, text]) => (
            <Fragment key={label}>
              <dt className="font-mono text-[11px] tracking-widest uppercase text-neutral-500 pt-1">{label}</dt>
              <dd className="text-neutral-300 leading-relaxed">{text}</dd>
            </Fragment>
          ))}
        </dl>
      </details>
    </li>
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

  const hasGallery = project.gallery.length > 0;
  const hasDecisions = project.decisions?.length > 0;
  const hasLinks = project.links?.length > 0 || Boolean(project.repo);
  const improvements = project.improvements || [];
  // Videos first, then documents, then code
  const links = [...(project.links || [])].sort(([al, au], [bl, bu]) => kindOf(al, au).rank - kindOf(bl, bu).rank);

  return (
    <article className="fade-up flex flex-col gap-6">
      <div>
        <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-mono text-neutral-500 hover:text-cyan-400 transition-colors mb-5">
          <ArrowLeftIcon size={16} /> All projects
        </Link>
        <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight max-w-3xl">{project.heading}</h1>
      </div>

      {/* Top row: gallery on the left, videos / links / tools on the right */}
      <div className="grid lg:grid-cols-5 gap-6">
        {hasGallery && (
          <div className="lg:col-span-3 lg:relative lg:min-h-[26rem]">
            <ProjectGallery key={project.id} items={project.gallery} />
          </div>
        )}

        <aside
          aria-label="Project overview and resources"
          className={hasGallery ? 'lg:col-span-2 flex flex-col gap-4' : 'lg:col-span-5 grid md:grid-cols-2 gap-4'}
        >
          {/* Overview takes up any spare height so the right column always ends level with the gallery */}
          <section className={`${cardClass} flex-1 ${hasGallery ? '' : 'md:col-span-2'}`}>
            <SectionLabel className="mb-4">Overview</SectionLabel>
            <p className="text-neutral-300 text-sm md:text-base leading-relaxed">{project.desc}</p>
          </section>

          {hasLinks && (
            <section className="flex flex-col gap-3">
              <SectionLabel>Videos &amp; Links</SectionLabel>
              {links.map(([label, url]) => <ResourceLink key={url} label={label} url={url} />)}
              {project.repo && (
                <a href={project.repo} target="_blank" rel="noopener noreferrer" className={`${btnGhost} justify-center`}>
                  <GithubIcon size={18} /> View on GitHub
                </a>
              )}
            </section>
          )}

          <section className={`${cardClass} ${!hasGallery && !hasLinks ? 'md:col-span-2' : ''}`}>
            <SectionLabel className="mb-4">Tools</SectionLabel>
            <div className="flex flex-wrap gap-2">{project.tech.map((t) => <Tag key={t}>{t}</Tag>)}</div>
          </section>
        </aside>
      </div>

      {hasDecisions && (
        <section className={cardClass}>
          <SectionLabel className="mb-6">Key Design Choices</SectionLabel>
          <ul className="divide-y divide-white/[0.06]">
            {project.decisions.map((item, i) => <Decision key={item.title} item={item} n={i} />)}
          </ul>
        </section>
      )}

      <section className={cardClass}>
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

      {improvements.length > 0 && (
        <section className={cardClass}>
          <SectionLabel className="mb-6">Future Improvements</SectionLabel>
          <ul className="space-y-4 text-neutral-300 text-sm md:text-base">
            {improvements.map((it) => {
              const [label, text] = Array.isArray(it) ? it : [null, it];
              return (
                <li key={label || text} className="flex gap-3">
                  <BulletPoint />
                  <span>{label && <strong className="text-white block mb-1 font-medium">{label}</strong>}{text}</span>
                </li>
              );
            })}
          </ul>
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
