const interests = [
  { emoji: '💻', label: 'Desarrollo web' },
  { emoji: '🔐', label: 'Ciberseguridad' },
  { emoji: '🎵', label: 'Música' },
  { emoji: '☕', label: 'Café' },
]

export default function About() {
  return (
    <section id="sobre-mi" className="py-16 flex flex-col justify-center items-center border-t border-white/5">

      <h2 className="text-3xl font-black tracking-tighter text-white mb-1">
        Sobre mí
      </h2>
      <p className="text-slate-500 text-sm mb-8">
        Un poco de contexto
      </p>

      <div className="flex flex-col md:flex-row gap-8 items-center">

        {/* Texto izquierda */}
        <div className="flex-1 space-y-4 order-last md:order-first">
          <h3></h3>
          <p className="text-slate-400 text-[15px] leading-relaxed">
            Soy Ivan Pugliese, desarrollador autodidacta en transición desde el mundo
            comercial hacia el software. Empecé construyendo herramientas para el
            negocio familiar y me enganché.
          </p>
          <p className="text-slate-400 text-[15px] leading-relaxed">
            Actualmente estudiando{' '}
            <strong className="text-slate-200 font-medium">
              Análisis de Sistemas en Da Vinci
            </strong>{' '}
            y construyendo proyectos reales como portfolio. Vengo del mundo B2B —
            Mercado Pago, seguros — lo que me da una perspectiva muy orientada
            al impacto real.
          </p>
          <p className="text-slate-400 text-[15px] leading-relaxed">
            A largo plazo me interesa{' '}
            <strong className="text-slate-200 font-medium">
              la ciberseguridad y el desarrollo seguro de aplicaciones
            </strong>
            .
          </p>

          {/* Intereses */}
          <div className="flex flex-wrap gap-2 pt-2">
            {interests.map(({ emoji, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-full bg-[#111] border border-white/5 text-slate-400 hover:border-white/10 transition-colors"
              >
                <span>{emoji}</span>
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Foto derecha */}
        <div className="flex justify-center md:justify-end order-first md:order-last flex-shrink-0">
          <div className="relative w-[250px]">

            {/* Fondo decorativo */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-950/40 to-transparent blur-xl scale-95" />

            {/* Imagen */}
            <img
              src="/about.jpg"
              alt="Ivan Pugliese"
              className="relative z-10 w-full aspect-[3/4] object-cover rounded-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>

      </div>

    </section>
  )
}