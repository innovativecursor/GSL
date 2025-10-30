'use client'

import Image from "next/image"

type TopBannerProps = {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
}

export function TopBanner({
  src,
  alt,
  width = 1200,
  height = 800,
  className = "",
}: TopBannerProps) {
  return (
    <div className="w-full">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`shadow-lg max-w-full w-full h-auto ${className}`}
      />
    </div>
  )
}
