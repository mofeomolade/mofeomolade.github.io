import { lazy, Suspense, useEffect } from 'react';
import { NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { ExternalLinkIcon, GithubIcon, MailIcon } from './components/icons';
import { useDocumentTitle } from './hooks';
import { asset } from './utils';
import Home from './pages/Home';

// Only the visited route's code is downloaded
const Projects = lazy(() => import('./pages/Projects'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const NotFound = lazy(() => import('./pages/NotFound'));

const navClass = ({ isActive }) =>
  `transition-colors ${isActive ? 'text-cyan-400' : 'text-neutral-400 hover:text-white'}`;

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function HomeRoute() {
  useDocumentTitle('');
  return <Home />;
}

function ProjectsRoute() {
  useDocumentTitle('Projects');
  return <Projects />;
}

const socialLink = 'text-neutral-500 hover:text-cyan-400 transition-all hover:-translate-y-1 duration-300';
const wrap = 'w-full max-w-6xl mx-auto px-5 sm:px-8 md:px-10';

export default function App() {
  return (
    <div className="min-h-dvh flex flex-col">
      <ScrollToTop />

      <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-[#04060b]/75 backdrop-blur-md">
        <div className={`${wrap} h-16 flex items-center justify-between`}>
          <nav aria-label="Main" className="flex gap-5 md:gap-8 font-mono text-xs md:text-sm tracking-widest items-center">
            <NavLink to="/" end className={navClass}>[ Home ]</NavLink>
            <NavLink to="/projects" className={navClass}>[ Projects ]</NavLink>
          </nav>
          <a href={asset('resume.pdf')} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 font-mono text-xs md:text-sm tracking-widest text-neutral-400 hover:text-white transition-colors">
            Resume <ExternalLinkIcon size={13} className="opacity-80" />
          </a>
        </div>
      </header>

      <main className={`${wrap} flex-1 pt-6 md:pt-10 pb-16 md:pb-24`}>
        <Suspense fallback={<div className="h-64" aria-busy="true" />}>
          <Routes>
            <Route path="/" element={<HomeRoute />} />
            <Route path="/projects" element={<ProjectsRoute />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      <footer className="border-t border-white/[0.06]">
        <div className={`${wrap} py-8 flex justify-between items-center font-mono text-xs text-neutral-600`}>
          <div className="flex items-center gap-6">
            <a href="https://github.com/mofeomolade" target="_blank" rel="noreferrer" aria-label="GitHub profile" className={socialLink}>
              <GithubIcon size={20} />
            </a>
            <a href="https://linkedin.com/in/momolade" target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className={socialLink}>
              <span
                className="block w-5 h-5 bg-current"
                style={{ WebkitMask: `url(${asset('linkedin.png')}) center / contain no-repeat`, mask: `url(${asset('linkedin.png')}) center / contain no-repeat` }}
              />
            </a>
            <a href="mailto:omolade.mofe@gmail.com" aria-label="Email" className={socialLink}>
              <MailIcon size={20} />
            </a>
          </div>
          <span className="tracking-widest uppercase opacity-60 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" aria-hidden="true" /> Status: Online
          </span>
        </div>
      </footer>
    </div>
  );
}
