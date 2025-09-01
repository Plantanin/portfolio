export default function Footer(){
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-slate-400">
        © {new Date().getFullYear()} Sacha Pontens — Tous droits réservés
      </div>
    </footer>
  )
} 