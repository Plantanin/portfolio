export default function Header(){
  return (
    <header className="sticky top-0 z-40 backdrop-blur border-b border-white/10 bg-slate-900/60">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <a href="#hero" className="text-lg font-bold tracking-tight">Portfolio de Sacha</a>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-300">
          <a href="#about" className="hover:text-white transition">À propos</a>
          <a href="#projects" className="hover:text-white transition">Projets</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
          <a href="/CV_Sacha_Pontens.pdf" download className="rounded-md bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 transition">Télécharger mon CV</a>
        </nav>
      </div>
    </header>
  )
} 