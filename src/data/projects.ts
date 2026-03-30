import type { Project } from '../types'

export const projects: Project[] = [
  {
    name: 'One Home Inmobiliaria',
    description:
      'Sitio inmobiliario real. Desarrollo asistido con Claude Code, aplicando buenas prácticas a través de agents.md, utilizando la IA de manera profesional y como parte del flujo de trabajo.',
    tags: ['JavaScript', 'Claude Code'],
    github: 'https://github.com/onehome-real-state',
    preview: 'https://ivanpugliese1.github.io/onehome-real-state/',
    image: './onehome-inmobiliaria.png'
  },
  {
    name: 'Pugliese & Finanzas',
    description:
      'Aplicación web orientada a herramientas financieras en Argentina, construida íntegramente con JavaScript vanilla con el objetivo de fortalecer fundamentos sólidos, sin frameworks.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Vite'],
    github: 'https://github.com/ivanpugliese1/pugliese-finance-tools',
    preview: 'https://ivanpugliese1.github.io/pugliese-finance-tools/',
    image: './pugliese-finances.png'
  }
]