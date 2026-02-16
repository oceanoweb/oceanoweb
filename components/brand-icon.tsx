"use client"

type BrandIconData = {
  title: string
  path: string
  hex: string
}

type BrandIconProps = {
  icon: BrandIconData
  className?: string
  title?: string
}

export function BrandIcon({ icon, className, title }: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label={title ?? icon.title}
      className={className}
      fill="currentColor"
    >
      <path d={icon.path} />
    </svg>
  )
}
