import Carousel from './Carousel.jsx'
import { useState } from 'react'

const vaultDescriptions = [
  {
    title: "Coffre-fort fermé",
    text: "Vue extérieure du coffre-fort électronique avec écran LCD affichant 'Entrez le code', clavier à 4 boutons (A, B, C, D) et poignée de sécurité. Les LED rouges et bleues indiquent l'état du système."
  },
  {
    title: "Composants internes",
    text: "Vue détaillée de l'intérieur du coffre-fort révélant les circuits électroniques, la batterie, les cartes de contrôle et le réseau de câbles multicolores. Les LED rouges et bleues sont visibles sur les cartes de circuit."
  },
  {
    title: "Assemblage en cours",
    text: "Établi de travail avec le projet en cours d'assemblage. On distingue le module RFID-RC522, le servomoteur Hitec HS-85MG, et les différents composants électroniques en cours de connexion."
  },
  {
    title: "Système complet",
    text: "Coffre-fort électronique finalisé avec tous les composants intégrés. Le système combine RFID, clavier numérique, écran LCD et mécanisme de verrouillage motorisé pour une sécurité optimale."
  }
]

const projects = [
  { title: 'Coffre-fort électronique', description: 'Bootcamp Introduction à l\'électronique', tags: ['RFID', 'LED', 'Fusion 360', 'Keypad', 'C++'], images: ['/images/vault-1.jpg','/images/vault-2.jpg','/images/vault-3.jpg','/images/vault-4.jpg'], descriptions: vaultDescriptions },
  { title: 'Formation RGPD', description: 'Projet de Formation Humaine - Groupe AEN', tags: ['RGPD', 'Formation'], image: '/images/rgpd-formation.jpg', zoomDescription: "Formation de sensibilisation sur le RGPD (Règlement Général sur la Protection des Données) dispensée aux étudiants en Droit de l'Université Toulouse Capitole. Projet de Formation Humaine du Groupe AEN en partenariat avec le Campus de Montauban." },
  { title: 'Projet C', description: 'Dashboard interactif', tags: ['React', 'Charts'], wip: true },
]

export default function Projects(){
  const [zoomImage, setZoomImage] = useState(null)
  const [zoomDescription, setZoomDescription] = useState(null)

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl sm:text-3xl font-bold">Projets</h2>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <article key={p.title} className={`rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition relative ${p.wip ? 'overflow-visible' : ''}`}>
            {p.wip && (
              <div style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '140%',
                height: '30px',
                background: 'linear-gradient(135deg, #f97316 0%, #ef4444 100%)',
                transform: 'rotate(-45deg)',
                transformOrigin: 'top left',
                borderRadius: '6px',
                zIndex: 1
              }}>
                <div style={{
                  position: 'absolute',
                  top: '10px',
                  left: '10px',
                  background: 'linear-gradient(135deg, #f97316, #ef4444)',
                  color: 'white',
                  fontSize: '0.75rem',
                  fontWeight: 'bold',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '6px',
                  zIndex: 10,
                  boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
                  transform: 'rotate(45deg)',
                  transformOrigin: 'center'
                }}>
                  WORK IN PROGRESS
                </div>
              </div>
            )}
            {p.images ? (
              <div className="mb-4">
                <Carousel images={p.images} alt={p.title} descriptions={p.descriptions} />
              </div>
            ) : p.image ? (
              <div className="mb-4">
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-48 object-cover rounded-lg border border-white/10 cursor-zoom-in" 
                  onClick={() => {
                    setZoomImage(p.image)
                    setZoomDescription(p.zoomDescription)
                  }}
                />
              </div>
            ) : null}
            <h3 className="text-lg font-semibold relative z-10">{p.title}</h3>
            <p className="mt-2 text-sm text-slate-300 relative z-10">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-2 relative z-10">
              {p.tags.map((t) => (
                <span key={t} className="text-xs rounded-full bg-slate-800/80 border border-white/10 px-2 py-0.5">{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>

      {zoomImage && (
        <div className="fixed inset-0 z-50 bg-black/90 p-4" onClick={() => setZoomImage(null)}>
          <div className="relative mx-auto flex h-full max-w-7xl flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="flex-1 flex items-center justify-center gap-8">
              {zoomDescription && (
                <div className="hidden lg:block w-80 text-white">
                  <h3 className="text-xl font-semibold mb-3">Formation RGPD au Campus</h3>
                  <p className="text-slate-300 leading-relaxed">{zoomDescription}</p>
                </div>
              )}
              <img src={zoomImage} alt="zoom" className="max-h-[80vh] max-w-[60vw] object-contain" />
            </div>
            <button type="button" aria-label="Fermer" className="absolute top-0 right-0 m-4 rounded bg-white/10 hover:bg-white/20 px-3 py-1.5" onClick={() => setZoomImage(null)}>
              Fermer
            </button>
          </div>
        </div>
      )}
    </section>
  )
} 