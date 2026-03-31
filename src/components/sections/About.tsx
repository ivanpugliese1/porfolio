const interests = [
  { emoji: '💻', label: 'Desarrollo web' },
  { emoji: '🔐', label: 'Ciberseguridad' },
  { emoji: '🎵', label: 'Música' },
  { emoji: '⚽', label: 'Deportes' },
]

export default function About() {
  return (
    <section id="sobre-mi" className="py-16 max-w-[900px] flex flex-col justify-center items-center border-t border-slate-300 dark:border-white/5">

      <h2 className="text-3xl font-black tracking-tighter text-slate-800 dark:text-white mb-10">
        Sobre mí
      </h2>

      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1 space-y-4 order-last md:order-first">
          <h3 className="text-lg font-bold text-slate-800 dark:text-white">
            Desarrollador Fullstack en formación, aprendo haciendo.
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
            Vengo del mundo comercial: años trabajando codo a codo con clientes y equipos, traduciendo problemas reales en soluciones concretas. Hoy aplico esa experiencia al Desarrollo de Software.
          </p>
          <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
            A lo largo de mi desarrollo personal y profesional, logre mejorar mis habilidades blandas, tales como la comunicación, el trabajo en equipo, la empatía y la resolución de problemas, lo que me ha permitido adaptarme a diferentes entornos laborales y colaborar eficazmente con colegas y clientes.
          </p>
          <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
            Como dato de color, vengo de estudiar el Profesorado de Educación Física, esto en mis comienzos universitarios, me apasiona el deporte y la actividad física, y aunque no me dedique a eso, sigo practicándolo como hobby.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {interests.map(({ emoji, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-full bg-slate-100 dark:bg-[#111] border border-slate-200 dark:border-white/5 text-slate-500 dark:text-slate-400 hover:border-slate-300 dark:hover:border-white/10 transition-colors"
              >
                <span>{emoji}</span>
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-center md:justify-end order-first md:order-last flex-shrink-0">
          <div className="relative w-[300px] shadow-[0_20px_50px_rgba(96,165,250,0.5)]">

            <div className="absolute inset-0 rounded-2xl" />

            <img
              src="./perfil.jpg"
              alt="Ivan Pugliese"
              className="relative z-10 w-full aspect-[3/4] object-cover rounded-2xl border border-slate-200 dark:border-white/10"
            />
          </div>
        </div>
      </div>
    </section>
  )
}