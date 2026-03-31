import { FiMapPin } from 'react-icons/fi'
import { experience } from '../../data/experience'

export default function Experience() {
  return (
    <section id="experiencia" className="py-16 border-t border-slate-300 dark:border-white/5">

      <h2 className="text-3xl font-black tracking-tighter text-slate-800 dark:text-white text-center mb-2">
        Experiencia
      </h2>
      <p className="text-slate-600 dark:text-slate-400 text-base text-center mb-10">
        Mi trayectoria profesional
      </p>

      <div className="relative flex flex-col items-center gap-0">

        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-black/20 dark:bg-white/20 -translate-x-1/2" />

        {experience.map((item) => (
          <div key={item.role} className="relative w-full flex flex-col items-center mb-8">

            <div className="relative z-10 w-3 h-3 rounded-full bg-blue-400 shadow-[0_0_8px_#60a5fa] mb-4" />

            <div className="w-[90%] sm:w-[60%] bg-slate-50 dark:bg-[#111] border border-slate-200 dark:border-white/5 shadow-lg dark:shadow-none rounded-xl p-5 hover:border-slate-300 dark:hover:border-white/10 transition-colors">

              <h3 className="text-[21px] font-bold text-slate-800 dark:text-white tracking-tight mb-1">
                {item.role}
              </h3>

              <p className="text-[16px] font-bold text-blue-500 dark:text-blue-400 mb-2">
                {item.company}
              </p>

              <div className="flex flex-col md:flex-row gap-2 md:items-center md:justify-between mb-4">
                <span className="text-xs text-slate-600 dark:text-slate-400">
                  {item.from} — {item.to}
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-slate-600 dark:text-slate-400">
                  <FiMapPin size={14} />
                  {item.location}
                </span>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.description}
              </p>

              {item.tags && item.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[12px] px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800/30 text-blue-500 dark:text-blue-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}