import Tag from '../ui/tagStyles.tsx'

export default function Footer() {
  return (
    <footer className="order-t border-white/5 py-8 mb-16 md:mb-0">
      <div className="max-w-[900px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">

        <p className="text-sm text-slate-600">
          © 2026 <span className="font-bold">Ivan Pugliese</span>. Casi todos los derechos reservados.
        </p>

        <div className="flex items-center gap-2">
          <span className="text-sm text-slate-600">Desarrollado con</span>
          <Tag name="React" />
          <Tag name="TypeScript" />
          <Tag name="Tailwind" />
        </div>

      </div >
    </footer >
  )
}