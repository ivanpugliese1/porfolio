import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { projects } from '../../data/projects.ts'
import Tag from '../ui/tagStyles.tsx'

export default function Projects() {

  return (
    <section id="proyectos" className="py-16 border-t border-white/5">
      <h2 className="text-3xl font-black tracking-tighter text-slate-800 dark:text-white text-center mb-2">
        Proyectos
      </h2>
      <p className="text-slate-600 dark:text-slate-400 text-base text-center mb-10">
        Una selección de lo que construi en mi camino FullStack.
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        {projects.map((project) => (
          <div key={project.name} className="bg-slate-50 dark:bg-[#111] border border-slate-200 dark:border-white/5 shadow-sm dark:shadow-none rounded-xl overflow-hidden hover:border-slate-300 dark:hover:border-white/10 transition-colors flex flex-col w-full sm:w-[calc(33.333%-11px)]">
            <div className="w-full h-36 bg-gradient-to-br from-blue-100 dark:from-blue-950/20 to-slate-50 dark:to-[#0a0a0a] flex items-center justify-center border-b border-slate-200 dark:border-white/5">
              <span className="text-slate-300 dark:text-slate-700 text-xs tracking-widest uppercase">
                screenshot
              </span>
            </div>
            <div className="p-5 flex flex-col flex-1 gap-2">
              <h3 className="text-[21px] font-bold text-slate-800 dark:text-white tracking-tight">
                {project.name}
              </h3>

              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <Tag key={tag} name={tag} />
                ))}
              </div>

              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex-1">
                {project.description}
              </p>

              <div>
                <div className="flex gap-1.5 flex-shrink-0">
                  {project.github && (
                    <a href={project.github} target="_blank" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-700/30 text-slate-600 dark:text-slate-400 text-xs">
                      <FiGithub size={14} />
                      Repositorio
                    </a>
                  )}
                  {project.preview && (
                    <a href={project.preview} target="_blank" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-700/30 text-slate-600 dark:text-slate-400 text-xs">
                      <FiExternalLink size={14} />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}