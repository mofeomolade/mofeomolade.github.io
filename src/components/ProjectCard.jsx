import { Link } from 'react-router-dom';
import { ArrowRightIcon } from './icons';
import { Tag, interactiveCardClass } from './ui';

export default function ProjectCard({ project, index, style, className = '' }) {
  return (
    <Link to={`/projects/${project.id}`} className={`${interactiveCardClass} h-full reveal ${className}`} style={style}>
      <div className="flex items-start justify-between mb-5">
        <span className="font-mono text-xs text-cyan-500 tracking-widest">{String(index + 1).padStart(2, '0')}</span>
        <ArrowRightIcon size={18} className="text-neutral-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
      </div>
      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors mb-3">{project.title}</h3>
      <p className="text-neutral-400 text-sm leading-relaxed mb-5 flex-1 line-clamp-4">{project.desc}</p>
      <div className="flex flex-wrap gap-2">
        {project.status && (
          <span className="text-[11px] font-mono font-semibold tracking-wider text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 rounded px-2 py-1 uppercase">
            {project.status}
          </span>
        )}
        {project.tech.slice(0, 4).map((t) => <Tag key={t}>{t}</Tag>)}
      </div>
    </Link>
  );
}
