export default function Hero(){
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sky-500/10 via-transparent to-transparent" />
      <div className="mx-auto max-w-6xl px-4 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
              Bonjour, je suis <span className="text-sky-400">Sacha Pontens !</span>
            </h1>
            <p className="mt-4 max-w-2xl text-slate-300">
              Développeur web et web-mobile, j'entame un changement de trajectoire professionnelle pour devenir expert en mécatronique et en IA.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="#projects" className="rounded-md bg-sky-500 hover:bg-sky-400 text-white px-4 py-2 font-medium transition">Voir mes projets</a>
              <a href="#contact" className="rounded-md border border-white/20 hover:bg-white/10 text-white px-4 py-2 font-medium transition">Me contacter</a>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-400/20 to-purple-500/20 rounded-full blur-3xl" />
              <img 
                src="/images/portrait-sacha.jpg" 
                alt="Portrait de Sacha" 
                className="relative w-80 h-80 rounded-full object-cover border-4 border-white/10 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 