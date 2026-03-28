import {
  SiJavascript, SiTypescript, SiReact, SiNodedotjs,
  SiPostgresql, SiTailwindcss, SiVite,
  SiExpress, SiHtml5, SiCss
} from 'react-icons/si'
import { TbBrain } from 'react-icons/tb'
import type { IconType } from 'react-icons'

interface TagStyle {
  icon: IconType
  color: string
  bg: string
  border: string
}

export const tagStyles: Record<string, TagStyle> = {
  'JavaScript': { icon: SiJavascript, color: '#f7df1e', bg: 'bg-yellow-950/20', border: 'border-yellow-800/30' },
  'TypeScript': { icon: SiTypescript, color: '#3178c6', bg: 'bg-blue-950/20', border: 'border-blue-800/30' },
  'React': { icon: SiReact, color: '#61dafb', bg: 'bg-cyan-950/20', border: 'border-cyan-800/30' },
  'Node.js': { icon: SiNodedotjs, color: '#4ade80', bg: 'bg-green-950/20', border: 'border-green-800/30' },
  'PostgreSQL': { icon: SiPostgresql, color: '#60a5fa', bg: 'bg-blue-950/20', border: 'border-blue-800/30' },
  'Tailwind': { icon: SiTailwindcss, color: '#38bdf8', bg: 'bg-sky-950/20', border: 'border-sky-800/30' },
  'Vite': { icon: SiVite, color: '#a855f7', bg: 'bg-purple-950/20', border: 'border-purple-800/30' },
  'Express': { icon: SiExpress, color: '#ffffff', bg: 'bg-slate-900/40', border: 'border-slate-700/30' },
  'HTML': { icon: SiHtml5, color: '#e34f26', bg: 'bg-orange-950/20', border: 'border-orange-800/30' },
  'CSS': { icon: SiCss, color: '#1572b6', bg: 'bg-blue-950/20', border: 'border-blue-800/30' },
  'Claude Code': { icon: TbBrain, color: '#cc9b7a', bg: 'bg-orange-950/20', border: 'border-orange-800/30' },
}