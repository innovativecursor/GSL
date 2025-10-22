import { useEffect } from 'react'
import Image from 'next/image'
import { useHero } from '../../contexts/HeroContext'
import { BASE_URL } from '../../config/baseUrl'

export default function Hero() {
  const { hero, fetchHero } = useHero()

  useEffect(() => {
    fetchHero()
  }, [])

  if (!hero) return null

  const imageUrl = `${BASE_URL}${(hero.backgroundImage as AppImage)?.url || ''}`

  return (
    <section className="md:mt-24 mt-16 text-center relative flex justify-center items-center">
      <Image
        src={imageUrl}
        alt={(hero.backgroundImage as AppImage)?.alt || 'Hero Image'}
        width={(hero.backgroundImage as AppImage)?.width || 1920}
        height={(hero.backgroundImage as AppImage)?.height || 765}
        className=" shadow-lg max-w-full w-full h-auto"
      />

      <div className="absolute inset-0 flex flex-col items-start justify-center text-white bg-black/40 rounded-lg">
        <div className="mx-4 sm:mx-5 md:mx-[4vw] lg:mx-[6vw]">
          <h2 className="lg:text-6xl md:text-4xl text-xs tracking-wide  text-start md:mb-1">
            {hero?.heading}
          </h2>
          <h2 className="lg:text-6xl md:text-4xl text-xs  tracking-wide text-start md:mb-2">
            {hero?.subheading}
          </h2>

          <p className="text-start md:block hidden md:mt-6 mt-2 opacity-80 tracking-wide lg:text-base md:text-sm sm:text-xs text-[4px] max-w-2xl">
            GSL Construction, Design and Consultancy is staffed by licensed Architects and ASEP
            professionals, delivering innovative, reliable, and sustainable building solutions.
          </p>

          <div className="flex gap-3 md:mt-6 mt-3 items-center">
            <button className="bg-[#e6bd32] border border-[#e6bd32] text-black md:px-10 md:py-3 px-3 py-1 md:text-xs text-[6px] rounded-full font-medium transition">
              Start Your Project
            </button>
            <button className="bg-transparent border border-[#e6bd32] text-white md:px-10 md:py-3 px-3 py-1 md:text-xs text-[6px] rounded-full font-medium transition">
              View Our Services
            </button>
          </div>

          <div className="flex flex-wrap md:flex-nowrap gap-4 md:gap-8 lg:mt-10 md:mt-5 mt-3 md:px-6 md:py-4 rounded-lg items-center justify-start">
            <div className="flex items-center md:gap-3 gap-1">
              <div className="lg:w-12 lg:h-12 md:w-9 md:h-9 h-4 w-4 rounded-full md:border-2 border border-[#e6bd32] flex items-center justify-center bg-white text-black font-bold md:text-sm text-[6px]">
                12+
              </div>
              <div className="text-start">
                <p className="md:text-xs text-[5px] opacity-80">Years of</p>
                <p className="font-semibold md:text-sm text-[5px] md:mt-1 text-white">Experience</p>
              </div>
            </div>

            <div className="flex items-center md:gap-3 gap-1">
              <div className="lg:w-12 lg:h-12 md:w-9 md:h-9 h-4 w-4 rounded-full md:border-2 border border-[#e6bd32] flex items-center justify-center bg-white text-black font-bold md:text-sm text-[6px]">
                200+
              </div>
              <div className="text-start">
                <p className="md:text-xs text-[5px] opacity-80">Projects</p>
                <p className="font-semibold md:text-sm text-[5px] md:mt-1 text-white">Completed</p>
              </div>
            </div>
            <div className="flex items-center md:gap-3 gap-1">
              <div className="lg:w-12 lg:h-12 md:w-9 md:h-9 h-4 w-4 rounded-full md:border-2 border border-[#e6bd32] flex items-center justify-center bg-white text-black font-bold md:text-sm text-[6px]">
                100%
              </div>
              <div className="text-start">
                <p className="md:text-xs text-[5px] opacity-80">Client</p>
                <p className="font-semibold md:text-sm text-[5px] md:mt-1 text-white">
                  Satisfaction
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
