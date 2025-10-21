// 'use client'
import React from 'react'
import type { Header as HeaderType } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import { usePathname } from 'next/navigation'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const pathname = usePathname()
  const navItems = data?.navItems || []

  return (
    <nav className="flex flex-col md:flex-row gap-5 md:gap-10 items-center text-black">
      {navItems.map(({ link }, i) => {
        const isActive = pathname === link?.url
        return (
          <div key={i} className="relative">
            <CMSLink
              {...link}
              appearance="link"
              className={`pb-1 font-medium ${isActive ? 'text-black' : 'text-black/70 hover:text-black'}`}
            />
            {isActive && (
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-black rounded" />
            )}
          </div>
        )
      })}
    </nav>
  )
}
