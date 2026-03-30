import { useState, type ReactNode } from 'react'
import { ThemeContext, type Theme } from './ThemeContext'

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem('theme') as Theme | null
    console.log('tema al iniciar:', stored)
    const initial = stored ?? 'dark'
    document.documentElement.classList.toggle('dark', initial === 'dark')
    return initial
  })

  function toggleTheme() {
    setTheme((prev) => {
      const next: Theme = prev === 'dark' ? 'light' : 'dark'
      document.documentElement.classList.toggle('dark', next === 'dark')
      localStorage.setItem('theme', next)
      console.log('tema guardado:', next)
      console.log('localStorage después:', localStorage.getItem('theme'))
      return next
    })
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}