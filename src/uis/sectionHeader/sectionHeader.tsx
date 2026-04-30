type Props = {
  title: string
  iconSrc?: string
}

export const SectionHeader = ({ title, iconSrc }: Props) => {
  return (
    <div className="flex items-center gap-2 text-sm font-medium text-[#8a7a6c] mb-3">
      {iconSrc && <img src={iconSrc} alt="" className="w-4 h-4" />}
      <span>{title}</span>
    </div>
  )
}
