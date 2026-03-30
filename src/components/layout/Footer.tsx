import Tag from '../ui/tagStyles.tsx'

export default function Footer() {
  return (
    <footer className="order-t border-t border-slate-200 dark:border-white/5 py-8 mb-16 md:mb-0">
      <div className="max-w-[900px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">

        <p className="text-sm text-slate-600 dark:text-slate-400">
          © 2026 <span className="font-bold">Ivan Pugliese</span>. Casi todos los derechos reservados.
        </p>

        <div className="flex flex-col mr-19 md:flex-row md:mr-0 align-center gap-4">
          <span className="text-sm text-slate-600 dark:text-slate-400">Desarrollado con</span>
          <div className="flex align-center gap-2">
            <Tag name="React" />
            <Tag name="TypeScript" />
            <Tag name="Tailwind" />
          </div>
        </div>

      </div >
    </footer >
  )
}