export default function Contact(){
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl sm:text-3xl font-bold">Contact</h2>
      <p className="mt-4 text-slate-300">Intéressé par une collaboration ? Parlons-en.</p>
      <div className="mt-6 flex gap-4">
        <a href="mailto:sacha12pontens@outlook.fr" className="rounded-md bg-sky-500 hover:bg-sky-400 text-white px-4 py-2 font-medium transition">Écrire un e-mail</a>
        <a href="https://github.com/Plantanin" target="_blank" rel="noreferrer" className="rounded-md border border-white/20 hover:bg-white/10 text-white px-4 py-2 font-medium transition">GitHub</a>
        <a href="https://www.linkedin.com/in/sacha-pontens-423422227/" target="_blank" rel="noreferrer" className="rounded-md border border-white/10 hover:bg-white/10 text-white px-4 py-2 font-medium transition">LinkedIn</a>
      </div>
    </section>
  )
} 