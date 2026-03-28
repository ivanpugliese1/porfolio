import { FiMapPin } from 'react-icons/fi'
import { experience } from '../../data/experience'

export default function Experience() {
  return (
    <section id="experiencia" className="py-16 border-t border-white/5">

      <h2 className="text-3xl font-black tracking-tighter text-white text-center mb-2">
        Experiencia
      </h2>
      <p className="text-slate-500 text-sm text-center mb-10">
        Mi trayectoria profesional
      </p>

      <div className="relative flex flex-col items-center gap-0">

        {/* Línea central */}
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white/5 -translate-x-1/2" />

        {experience.map((item) => (
          <div key={item.role} className="relative w-full flex flex-col items-center mb-8">

            {/* Dot sobre la línea */}
            <div className="relative z-10 w-3 h-3 rounded-full bg-blue-400 shadow-[0_0_8px_#60a5fa] mb-4" />

            {/* Card */}
            <div className="w-[90%] sm:w-[60%] bg-[#111] border border-white/5 rounded-xl p-5 hover:border-white/10 transition-colors">

              {/* Rol */}
              <h3 className="text-[22px] font-bold text-white tracking-tight mb-1">
                {item.role}
              </h3>

              {/* Empresa */}
              <p className="text-[18px] text-blue-400 mb-3">
                {item.company}
              </p>


              {/* Header — fecha + ubicación */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] text-slate-600 uppercase tracking-widest">
                  {item.from} — {item.to}
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-slate-600">
                  <FiMapPin size={14} />
                  {item.location}
                </span>
              </div>

              {/* Descripción */}
              <p className="text-[15px] text-slate-500 leading-relaxed">
                {item.description}
              </p>

              {/* Tags */}
              {item.tags && item.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[12px] px-2.5 py-0.5 rounded-full bg-blue-950/20 border border-blue-800/30 text-blue-400"
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