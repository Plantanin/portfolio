import { useState, useEffect, useCallback } from 'react'

export default function Carousel({ images = [], alt = 'aperçu', descriptions = [] }){
  const [index, setIndex] = useState(0)
  const [zoom, setZoom] = useState(false)

  const prev = useCallback(() => setIndex((i) => (i - 1 + images.length) % images.length), [images.length])
  const next = useCallback(() => setIndex((i) => (i + 1) % images.length), [images.length])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'Escape') setZoom(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [prev, next])

  if (!images.length) return null

  return (
    <div className="relative select-none">
      <div className="aspect-video overflow-hidden rounded-lg border border-white/10 bg-black/20">
        <img
          src={images[index]}
          alt={alt}
          className="h-full w-full object-cover cursor-zoom-in"
          onClick={() => setZoom(true)}
          loading="lazy"
        />
      </div>
      <button type="button" aria-label="Précédent" onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 hover:bg-black/60 text-white px-3 py-2">
        ‹
      </button>
      <button type="button" aria-label="Suivant" onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 hover:bg-black/60 text-white px-3 py-2">
        ›
      </button>
      <div className="mt-2 flex gap-2 overflow-x-auto">
        {images.map((src, i) => (
          <button key={src + i} onClick={() => setIndex(i)} className={`h-10 w-16 shrink-0 overflow-hidden rounded border ${i === index ? 'border-sky-400' : 'border-white/10'}`}>
            <img src={src} alt="miniature" className="h-full w-full object-cover" loading="lazy" />
          </button>
        ))}
      </div>

      {zoom && (
        <div className="fixed inset-0 z-50 bg-black/90 p-4" onClick={() => setZoom(false)}>
          <div className="relative mx-auto flex h-full max-w-7xl flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="flex-1 flex items-center justify-center gap-8">
              {descriptions[index] && (
                <div className="hidden lg:block w-80 text-white">
                  <h3 className="text-xl font-semibold mb-3">{descriptions[index].title}</h3>
                  <p className="text-slate-300 leading-relaxed">{descriptions[index].text}</p>
                </div>
              )}
              <img src={images[index]} alt={alt} className="max-h-[80vh] max-w-[60vw] object-contain" />
            </div>
            <div className="mt-4 flex items-center justify-center gap-3">
              <button type="button" aria-label="Précédent" onClick={prev} className="rounded-full bg-white/10 hover:bg-white/20 text-white px-3 py-2">‹</button>
              <div className="flex gap-2 overflow-x-auto">
                {images.map((src, i) => (
                  <button key={src + 'z' + i} onClick={() => setIndex(i)} className={`h-12 w-20 shrink-0 overflow-hidden rounded border ${i === index ? 'border-sky-400' : 'border-white/10'}`}>
                    <img src={src} alt="miniature zoom" className="h-full w-full object-cover" loading="lazy" />
                  </button>
                ))}
              </div>
              <button type="button" aria-label="Suivant" onClick={next} className="rounded-full bg-white/10 hover:bg-white/20 text-white px-3 py-2">›</button>
            </div>
            <button type="button" aria-label="Fermer" className="absolute top-0 right-0 m-4 rounded bg-white/10 hover:bg-white/20 px-3 py-1.5" onClick={() => setZoom(false)}>
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  )
} 