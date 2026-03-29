
import { Briefcase, FolderGit2, User, Mail } from 'lucide-react'
import { useState, useEffect } from 'react'

const links = [
  { label: 'Experiencia', href: '#experiencia', icon: Briefcase },
  { label: 'Proyectos', href: '#proyectos', icon: FolderGit2 },
  { label: 'Sobre mí', href: '#sobre-mi', icon: User },
  { label: 'Contacto', href: '#contacto', icon: Mail },
]

export default function BottomNav() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const scrollHandler = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id)
      })
    },
      { threshold: 0.6 }
    )
    links.forEach((link) => {
      const element = document.getElementById(link.href.replace('#', ''))
      if (element) scrollHandler.observe(element)
    })
    return () => scrollHandler.disconnect()
  }, [])

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-20 border-t border-slate-200 dark:border-white/5 bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-md">
      <ul className="flex justify-around items-center h-16 max-w-[700px] mx-auto px-2">
        {links.map(({ label, href, icon: Icon }) => {
          const id = href.replace('#', '')
          const isActive = active === id
          return (
            <li key={label}>
              <a
                href={href}
                onClick={() => setActive(id)}
                className="flex flex-col items-center gap-1 px-4 py-1 group"
              >
                <Icon
                  size={18}
                  className={isActive ? 'text-blue-500 dark:text-blue-400' : 'text-slate-800 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors'}
                />
                <span className={`text-sm transition-colors ${isActive ? 'text-blue-500 dark:text-blue-400' : 'text-slate-800 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-300'}`}>
                  {label}
                </span>
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}