export default function About(){
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold">À propos</h2>
          <p className="mt-4 max-w-3xl text-slate-300">
            Passionné par le design system, l'accessibilité et les performances web. J'aime transformer des idées en interfaces plaisantes et robustes, avec une attention particulière aux détails et à l'expérience utilisateur.
          </p>
        </div>
        <div className="lg:flex lg:justify-end">
          <div className="max-w-md">
            <h3 className="text-lg font-semibold mb-3">Points forts</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-sky-400 rounded-full"></span>
                Développement front-end moderne
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-sky-400 rounded-full"></span>
                Design responsive et accessible
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-sky-400 rounded-full"></span>
                Optimisation des performances
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
} 