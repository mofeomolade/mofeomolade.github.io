import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ArrowLeftIcon, ArrowRightIcon, CloseIcon } from './icons';
import { asset } from '../utils';

export const url = (src) => encodeURI(asset(src));

// Diagrams drawn for white paper get a light backing so transparent PNGs stay readable
const backing = (item) => (item.type === 'light' ? 'bg-neutral-200' : 'bg-[#080c14]');

export function Lightbox({ items, index, onIndex, onClose }) {
  const item = items[index];
  const step = useCallback((d) => onIndex((index + d + items.length) % items.length), [index, items.length, onIndex]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowLeft') step(-1);
      else if (e.key === 'ArrowRight') step(1);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose, step]);

  const navBtn = 'absolute top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/60 border border-white/15 text-white hover:border-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer';

  // Rendered into <body> so it always covers the viewport. Inside the page, an ancestor
  // with an entrance animation (.fade-up / .reveal) becomes the containing block for
  // position: fixed and the overlay stretches to the full page height instead.
  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 fade-in" role="dialog" aria-modal="true" aria-label="Photo gallery">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm cursor-pointer" onClick={onClose} />
      <button onClick={onClose} aria-label="Close gallery" className="absolute top-4 right-4 z-20 p-2 text-neutral-300 hover:text-white cursor-pointer bg-transparent border-none">
        <CloseIcon size={24} />
      </button>
      {items.length > 1 && (
        <>
          <button onClick={() => step(-1)} aria-label="Previous photo" className={`${navBtn} left-3 md:left-6`}><ArrowLeftIcon size={20} /></button>
          <button onClick={() => step(1)} aria-label="Next photo" className={`${navBtn} right-3 md:right-6`}><ArrowRightIcon size={20} /></button>
        </>
      )}
      <figure className="relative z-10 m-0 w-fit max-w-[min(64rem,100%)]">
        <img
          src={url(item.src)}
          alt={item.alt}
          decoding="async"
          className={`block max-h-[78vh] w-auto max-w-full object-contain rounded-lg border border-white/10 ${item.type === 'light' ? 'bg-neutral-200' : ''}`}
        />
        <figcaption className="mt-3 flex items-center justify-between gap-4 font-mono text-xs md:text-sm text-neutral-300">
          <span>{item.caption || item.alt}</span>
          <span className="text-neutral-500">{index + 1} / {items.length}</span>
        </figcaption>
      </figure>
    </div>,
    document.body
  );
}

const tile =
  'group relative block overflow-hidden rounded-xl border border-white/10 cursor-pointer p-0 transition-colors hover:border-cyan-500/50';

/* Home-page photo grid: one large image, three tiles, and "+N" over the last tile for the rest. */
export default function Gallery({ items }) {
  const [open, setOpen] = useState(null);
  const shown = items.slice(0, 4);
  const extra = items.length - shown.length;
  if (!shown.length) return null;

  return (
    <>
      <div className="grid grid-cols-6 gap-3" role="group" aria-label="Photo gallery">
        {shown.map((item, i) => {
          const big = i === 0;
          const more = i === shown.length - 1 && extra > 0;
          return (
            <button
              key={item.src}
              onClick={() => setOpen(i)}
              aria-label={`View photo: ${item.caption || item.alt}`}
              className={`${tile} ${backing(item)} ${big ? 'col-span-6 aspect-[16/10]' : 'col-span-2 aspect-square'} reveal`}
              style={{ '--i': i + 1 }}
            >
              <img
                src={url(item.src)}
                alt={item.alt}
                loading={big ? 'eager' : 'lazy'}
                decoding="async"
                fetchPriority={big ? 'high' : 'auto'}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={item.pos ? { objectPosition: item.pos } : undefined}
              />
              <span
                className={`absolute inset-x-0 bottom-0 px-3 pb-2.5 pt-8 text-left font-mono text-[11px] tracking-wide text-white bg-gradient-to-t from-black/80 to-transparent transition-opacity ${big ? '' : 'opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100'}`}
              >
                {item.caption || item.alt}
              </span>
              {more && (
                <span className="absolute inset-0 flex items-center justify-center bg-black/60 font-mono text-lg font-bold text-cyan-300">
                  +{extra}
                </span>
              )}
            </button>
          );
        })}
      </div>
      {open !== null && <Lightbox items={items} index={open} onIndex={setOpen} onClose={() => setOpen(null)} />}
    </>
  );
}
