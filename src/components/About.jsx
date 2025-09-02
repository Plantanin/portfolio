export default function About(){
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold">À propos</h2>
          <p className="mt-4 max-w-3xl text-slate-300">
          Je suis passionné par les nouvelles technologies et j’aime les explorer pour mieux comprendre leurs usages et leurs potentiels. J’aimerais participer, à mon échelle, à leur évolution et contribuer à transformer des idées en solutions concrètes.
          </p>
        </div>
        <div className="lg:flex lg:justify-end">
          <div className="max-w-md">
            <h3 className="text-lg font-semibold mb-3">Points forts</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-sky-400 rounded-full"></span>
                Développement full-stack moderne 
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-sky-400 rounded-full"></span>
                Gestion de projet agile
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-sky-400 rounded-full"></span>
                Determination sans faille
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
} 