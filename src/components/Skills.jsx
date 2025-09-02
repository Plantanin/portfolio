const techSkills = [
  { name: 'Java', level: 'intermédiaire' },
  { name: 'Python', level: 'débutant' },
  { name: 'PHP', level: 'Intermédiaire' },
  { name: 'SQL', level: 'Avancé' },
  { name: 'Android', level: 'Intermédiaire' },
  { name: 'typescript', level: 'Intermédiaire' },
]

const softSkills = [
  { name: 'Gestion de projets agiles (Scrum/Kanban)' },
  { name: 'Anglais courant (C1)' },
  { name: 'Certification Voltaire' },
]

function Badge({ children }){
  return <span className="text-xs rounded-full bg-slate-800/80 border border-white/10 px-2 py-0.5">{children}</span>
}

export default function Skills(){
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl sm:text-3xl font-bold">Compétences</h2>

      <div className="mt-8 grid lg:grid-cols-2 gap-6">
        <article className="rounded-xl border border-white/10 bg-white/5 p-5">
          <h3 className="text-lg font-semibold">Tech</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {techSkills.map((s) => (
              <Badge key={s.name}>{s.name} — {s.level}</Badge>
            ))}
          </div>
        </article>
        <article className="rounded-xl border border-white/10 bg-white/5 p-5">
          <h3 className="text-lg font-semibold">Soft skills</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {softSkills.map((s) => (
              <Badge key={s.name}>{s.name}</Badge>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
} 