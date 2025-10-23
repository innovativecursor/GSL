'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setHeaderTheme(null)
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
  }, [headerTheme])

  return (
    <header className="w-full bg-primary fixed top-0 z-[999]">
      <div className="md:py-5 py-3 flex justify-between responsive-mx">
        <Link href="/">
          <Logo loading="eager" priority="high" className="invert dark:invert-0" />
        </Link>

        <div className="hidden md:flex items-center gap-10">
          <HeaderNav />
        </div>
        <div className="hidden md:flex items-center gap-10">
          <Button
            size="lg"
            className="bg-transparent text-black border border-black rounded-full xl:w-52 xl:h-14 md:w-44 h-12 font-medium text-base hover:bg-black hover:text-white transition-all"
          >
            <a href="tel:+09776071925">Call Now</a>
          </Button>
        </div>

        <button
          className="md:hidden text-black"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            <motion.div
              className="fixed top-0 left-0 bottom-0 w-3/4 max-w-xs bg-[#B7CD00] z-20 flex flex-col items-center justify-center gap-8 shadow-xl"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 80, damping: 15 }}
            >
              <HeaderNav setMenuOpen={setMenuOpen} />
              <Button
                size="lg"
                className="bg-transparent text-black border border-black rounded-full w-40 h-12 font-medium text-base hover:bg-black hover:text-white transition-all"
              >
                <a href="tel:+09776071925">Call Now</a>
              </Button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
