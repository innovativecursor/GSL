'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { HeroData } from '../types/globals'
import { fetchDataGet } from '../utils/fetchData'
import endpoints from '../config/endpoints'

interface HeroContextType {
  hero: HeroData | null
  fetchHero: () => Promise<void>
}

const HeroContext = createContext<HeroContextType>({
  hero: null,
  fetchHero: async () => {},
})

export const useHero = () => useContext(HeroContext)

export const HeroProvider = ({ children }: { children: ReactNode }) => {
  const [hero, setHero] = useState<HeroData | null>(null)

  const fetchHero = async () => {
    try {
      const data = await fetchDataGet<HeroData>(endpoints.hero.getAll)
      setHero(data)
    } catch (error) {
      console.error('Failed to fetch Hero:', error)
    }
  }

  return <HeroContext.Provider value={{ hero, fetchHero }}>{children}</HeroContext.Provider>
}
