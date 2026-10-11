import { PageHeading } from '../components/ui';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/content';

export default function Projects() {
  return (
    <div>
      <PageHeading eyebrow="Portfolio" title="Projects">
        building cool stuff :)
      </PageHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} style={{ '--i': Math.min(i, 5) }} />
        ))}
      </div>
    </div>
  );
}
