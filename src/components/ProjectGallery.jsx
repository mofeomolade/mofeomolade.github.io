import { useState } from 'react';
import { MaximizeIcon } from './icons';
import { Lightbox } from './Gallery';
import { asset } from '../utils';

const url = (src) => encodeURI(asset(src));
// Diagrams drawn for white paper sit on light grey; photos and dark plots on black
const backing = { photo: 'bg-black', dark: 'bg-black', light: 'bg-neutral-200' };

const tag =
  'absolute top-3 left-3 max-w-[calc(100%-4.5rem)] truncate font-mono text-[11px] tracking-wider text-cyan-300 bg-black/75 border border-cyan-500/30 rounded px-2 py-1 backdrop-blur-sm';

export default function ProjectGallery({ items }) {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(null);
  const item = items[active];

  const select = (i) => {
    setOpen(i);
    setActive(i);
  };

  return (
    <section
      aria-label="Project gallery"
      className="w-full p-3 md:p-4 bg-[#080c14]/80 rounded-2xl border border-white/[0.07] flex flex-col gap-3"
    >
      <button
        type="button"
        onClick={() => setOpen(active)}
        aria-haspopup="dialog"
        aria-label={`Open ${item.caption} full size`}
        className={`group relative block w-full aspect-[16/10] rounded-xl overflow-hidden border border-white/10 hover:border-cyan-500/50 transition-colors cursor-pointer p-0 ${backing[item.type] || 'bg-black'}`}
      >
        <img
          key={item.src}
          src={url(item.src)}
          alt={item.alt}
          decoding="async"
          className={`absolute inset-0 w-full h-full object-contain fade-in ${item.type === 'light' ? 'p-2' : ''}`}
        />
        <span className={tag}>{item.caption}</span>
        <span className="absolute top-3 right-3 p-1.5 rounded bg-black/75 border border-white/10 text-neutral-300 group-hover:text-cyan-300 transition-colors" aria-hidden="true">
          <MaximizeIcon size={14} />
        </span>
      </button>

      {items.length > 1 && (
        <ul className="grid grid-cols-4 gap-2">
          {items.map((it, i) => (
            <li key={it.src}>
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show ${it.caption}`}
                aria-current={i === active}
                className={`relative block w-full aspect-[4/3] rounded-lg overflow-hidden border cursor-pointer p-0 transition-colors ${backing[it.type] || 'bg-black'} ${i === active ? 'border-cyan-400' : 'border-white/10 hover:border-cyan-500/50'}`}
              >
                <img
                  src={url(it.src)}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className={`absolute inset-0 w-full h-full ${it.type === 'photo' ? 'object-cover' : 'object-contain p-1'}`}
                />
                <span className="absolute inset-x-0 bottom-0 truncate px-1.5 py-1 font-mono text-[10px] text-neutral-100 bg-black/75">
                  {it.caption}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}

      {open !== null && <Lightbox items={items} index={open} onIndex={select} onClose={() => setOpen(null)} />}
    </section>
  );
}
