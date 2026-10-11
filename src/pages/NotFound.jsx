import { Link } from 'react-router-dom';
import { useDocumentTitle } from '../hooks';

export default function NotFound() {
  useDocumentTitle('Page not found');
  return (
    <div className="fade-up py-12">
      <p className="font-mono text-cyan-500 text-sm tracking-widest mb-3">404</p>
      <h2 className="text-2xl font-bold text-white mb-3">That page doesn't exist.</h2>
      <Link to="/projects" className="text-neutral-400 hover:text-cyan-400 transition-colors font-mono text-sm">
        &larr; Back to projects
      </Link>
    </div>
  );
}
