import { tagStyles } from '../../data/tags'

export default function Tag({ name }: { name: string }) {
  const style = tagStyles[name]

  if (!style) {
    return (
      <span className="inline-flex items-center gap-1.5 text-[11px] px-2.5 py-0.5 rounded-full bg-slate-900/40 border border-slate-700/30 text-slate-400">
        {name}
      </span>
    )
  }

  const { icon: Icon, color, bg, border } = style

  return (
    <span
      className={`inline-flex items-center gap-1.5 text-[11px] px-2.5 py-0.5 rounded-full ${bg} ${border} border`}
      style={{ color }}
    >
      <Icon size={14} />
      {name}
    </span>
  )
}