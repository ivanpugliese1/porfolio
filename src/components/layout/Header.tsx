import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function Header() {
  const [dark, setDark] = useState(true)
  const links = [
    { label: 'Experiencia', href: '#experiencia' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Sobre mi', href: '#sobre-mi' },
    { label: 'Contacto', href: '#contacto' },
  ]

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  })

  return (
    <header className="sticky flex top-0 z-10 border-b border-white/5 backdrop-blur-md bg-[#0a0a0a]/80">
      <nav className="max-w-[700px] mx-auto px-6 h-14 w-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/avatar.jpg"
            alt="Ivan Pugliese"
            className="w-8 h-8 rounded-full object-cover border border-white/10"
          />
          <span className="text-sm font-medium text-white">Ivan Pugliese</span>
        </div>
        <ul className="hidden md:flex gap-6">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-xs text-slate-500 hover:text-white transition-colors uppercase tracking-widest"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setDark(!dark)}
          className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/10 text-slate-400 hover:text-white hover:border-white/25 transition-colors"
        >
          {dark ? <Sun size={14} /> : <Moon size={14} />}
        </button>
      </nav>
    </header>
  )
}