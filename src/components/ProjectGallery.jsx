import { useState } from 'react';
import { Lightbox, url } from './Gallery';

/*
 * Project-page gallery: one cover photo that fills whatever box it is given, plus a small
 * "+N" chip in the corner (the second photo under the same dark tint as the main-page gallery) that opens the viewer on the next
 * photo. The parent supplies the height on desktop (see ProjectDetail); on mobile it is 16:10.
 * Item `pos` sets the crop focus; `fit: 'contain'` shows a whole image without cropping.
 */
export default function ProjectGallery({ items }) {
  const [open, setOpen] = useState(null);
  if (!items.length) return null;

  const cover = items[0];
  const extra = items.length - 1;

  return (
    <div className="relative w-full aspect-[16/10] lg:aspect-auto lg:absolute lg:inset-0" role="group" aria-label="Project photos">
      <button
        type="button"
        onClick={() => setOpen(0)}
        aria-haspopup="dialog"
        aria-label={`Open photo: ${cover.caption || cover.alt}`}
        className={`group absolute inset-0 overflow-hidden rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-colors cursor-pointer p-0 ${cover.type === 'light' ? 'bg-neutral-200' : 'bg-[#080c14]'}`}
      >
        <img
          src={url(cover.src)}
          alt={cover.alt}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className={`absolute inset-0 w-full h-full ${cover.fit === 'contain' ? 'object-contain' : 'object-cover'} transition-transform duration-500 group-hover:scale-[1.02]`}
          style={cover.pos ? { objectPosition: cover.pos } : undefined}
        />
        <span className="absolute inset-x-0 bottom-0 px-4 pb-3 pt-10 text-left font-mono text-[11px] md:text-xs tracking-wide text-white bg-gradient-to-t from-black/80 to-transparent">
          <span className={extra > 0 ? 'block max-w-[calc(100%-7rem)]' : 'block'}>{cover.caption || cover.alt}</span>
        </span>
      </button>

      {extra > 0 && (
        <button
          type="button"
          onClick={() => setOpen(1)}
          aria-haspopup="dialog"
          aria-label={`View ${extra} more ${extra === 1 ? 'photo' : 'photos'}`}
          className="group absolute bottom-3 right-3 z-10 w-20 h-20 sm:w-24 sm:h-24 overflow-hidden rounded-xl border border-white/25 hover:border-cyan-400 transition-colors cursor-pointer p-0 bg-[#080c14] shadow-lg shadow-black/50"
        >
          <img
            src={url(items[1].src)}
            alt=""
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <span className="absolute inset-0 flex items-center justify-center bg-black/60 font-mono text-xl font-bold text-cyan-300 group-hover:text-cyan-200 transition-colors">
            +{extra}
          </span>
        </button>
      )}

      {open !== null && <Lightbox items={items} index={open} onIndex={setOpen} onClose={() => setOpen(null)} />}
    </div>
  );
}
