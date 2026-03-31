import { useTheme } from '../../hooks/useTheme.ts'
import { Sun, Moon } from 'lucide-react'

export default function Header() {
  const { theme, toggleTheme } = useTheme()
  const links = [
    { label: 'Experiencia', href: '#experiencia' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Sobre mi', href: '#sobre-mi' },
    { label: 'Contacto', href: '#contacto' },
  ]

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 dark:border-white/5 backdrop-blur-md bg-white/80 dark:bg-[#0a0a0a]/80">
      <nav className="max-w-[700px] mx-auto px-6 h-14 w-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-lg font-bold text-slate-800 dark:text-white">Ivan Pugliese</span>
        </div>
        <ul className="hidden md:flex gap-6">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-md text-slate-800 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={toggleTheme}
          className="w-8 h-8 flex items-center justify-center rounded-full border border-slate-400 dark:border-white/20 text-slate-800 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white hover:border-slate-300 dark:hover:border-white/25 transition-colors cursor-pointer"
        >
          {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
        </button>
      </nav>
    </header>
  )
}