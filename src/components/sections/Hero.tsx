import { motion, type Variants } from 'framer-motion';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
}

export default function Hero() {
  return (
    <section className="py-20 flex flex-col items-center text-center">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0}
        className="flex items-center gap-4 mb-10"
      >

        <img
          src="./img-4-x-4.jpg"
          alt="Ivan Pugliese"
          className="w-20 md:w-25 h-auto rounded-full object-cover object-top border-2 border-green-400/30 shadow-[0_0_20px_rgba(96,165,250,0.2)] brightness-67"
        />

        <a href="https://linkedin.com/in/ivan-pugliese" target="_blank" className="inline-flex items-center gap-2 bg-green-800/10 border border-green-400 rounded-full px-5 py-2 text-sm font-medium text-green-500 dark:text-green-400 hover:border-green-600 transition-colors mt-10">
          <span className="w-2.5 h-2.5 rounded-full bg-green-500 dark:bg-green-400 shadow-[0_0_8px_#4ade80]" />
          Disponible para trabajar
        </a>

      </motion.div>

      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={1}
        className="text-[clamp(24px,6vw,72px)] font-black tracking-tighter leading-[1.05] mb-3 whitespace-nowrap"
      >
        <span className="text-slate-800 dark:text-white">Hola, soy </span>
        <span className="text-blue-400">Ivan Pugliese</span>

      </motion.h1>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={2}
        className="text-xl sm:text-2xl font-semibold text-slate-400 dark:text-slate-500 tracking-tight mb-6"
      >
        Analista de datos y Web Developer
      </motion.p>

      {/* Descripción */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={3}
        className="text-slate-600 dark:text-slate-400 text-base leading-relaxed max-w-lg mb-8"
      >
        Cada proyecto es una nueva forma de aprender, adaptándome al cambio y potenciando mi trabajo con las nuevas tecnologías.
      </motion.p>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={4}
        className="flex flex-wrapgap-3 gap-4 mb-8">

        <a href="./cv-ivanpugliese.pdf" download className="inline-flex items-center gap-2 bg-slate-800 dark:bg-white text-white dark:text-[#0a0a0a] px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-700 dark:hover:bg-slate-300 transition-colors">
          ↓ Descargar CV
        </a>

        <a href="#contacto" className="inline-flex items-center gap-2 bg-blue-500 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-400 dark:hover:bg-blue-400 transition-colors">
          ✉ Contáctame
        </a>
      </motion.div>

      {/* Redes sociales */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={5}
        className="flex items-center gap-4"
      >

        <a href="https://github.com/ivanpugliese1" target="_blank" className="text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors" aria-label="GitHub">
          <SiGithub size={22} />
        </a>
        <a href="https://linkedin.com/in/ivan-pugliese" target="_blank" className="text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors" aria-label="LinkedIn">
          <FaLinkedin size={22} />
        </a>
      </motion.div>
    </section>
  )

}