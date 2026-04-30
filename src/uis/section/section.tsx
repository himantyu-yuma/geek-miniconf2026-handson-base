type Props = {
  children: React.ReactNode
  className?: string
}

export const Section = ({ children, className = '' }: Props) => {
  return <section className={`w-full ${className}`}>{children}</section>
}
