import { SiGithub } from 'react-icons/si'
import { FiMail } from 'react-icons/fi'
import { FaLinkedin } from 'react-icons/fa'

const links = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'ivanpugliesecontacto@gmail.com',
    href: 'mailto:ivanpugliesecontacto@gmail.com',
  },
  {
    icon: SiGithub,
    label: 'GitHub',
    value: '@ivanpugliese1',
    href: 'https://github.com/ivanpugliese1',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'Ivan Pugliese',
    href: 'https://linkedin.com/in/ivan-pugliese',
  },
]

export default function Contact() {
  return (
    <section id="contacto" className="py-16 w-full flex flex-col justify-center items-center border-t border-slate-300 dark:border-white/5">

      <h2 className="text-3xl font-black tracking-tighter text-slate-800 dark:text-white mb-1">
        Contacto
      </h2>
      <p className="text-slate-600 dark:text-slate-400 text-base mb-8">
        Podés encontrarme en:
      </p>

      <div className="flex flex-col md:flex-row gap-3">
        {links.map(({ icon: Icon, label, value, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            className="flex items-center gap-4 bg-slate-50 dark:bg-[#111] border border-slate-200 dark:border-white/5 rounded-xl px-5 py-4 hover:border-slate-300 dark:hover:border-white/15 hover:bg-slate-100 dark:hover:bg-[#161616] transition-all group"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800/30 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 dark:group-hover:bg-blue-950/40 transition-colors">
              <Icon size={18} className="text-blue-500 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-xs text-slate-600 dark:text-slate-400 uppercase tracking-widest mb-0.5">
                {label}
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-300 font-medium">
                {value}
              </p>
            </div>
            <span className="ml-auto text-slate-600 dark:text-slate-400 group-hover:text-slate-500 dark:group-hover:text-slate-400 transition-colors text-lg">
              →
            </span>
          </a>
        ))}

      </div>
    </section>

  )

}