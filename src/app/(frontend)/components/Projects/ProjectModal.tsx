'use client'
import { useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { X, MapPin, ChevronRight, ChevronLeft } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

export default function ProjectModal({ project, onClose }: any) {
  const backdropRef = useRef<HTMLDivElement>(null)
  const firstImage = project?.images?.[0]?.image?.url || '/placeholder.png'
  const images = project?.images?.length ? project.images : [{ image: { url: firstImage } }]

  useEffect(() => {
    if (typeof window === 'undefined') return

    const originalTitle = document.title
    const originalDescriptionTag = document.querySelector('meta[name="description"]')
    const newDescription = project?.description?.slice(0, 150) || 'Project details and highlights.'

    document.title = `${project.title} | GSL Construction, Design & Consultancy`

    if (originalDescriptionTag) {
      originalDescriptionTag.setAttribute('content', newDescription)
    } else {
      const meta = document.createElement('meta')
      meta.name = 'description'
      meta.content = newDescription
      document.head.appendChild(meta)
    }

    return () => {
      document.title = originalTitle || 'GSL Construction, Design & Consultancy'
      if (originalDescriptionTag) {
        originalDescriptionTag.setAttribute(
          'content',
          'Explore our projects, designs, and construction excellence at GSL Construction.',
        )
      }
    }
  }, [project])

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === backdropRef.current) {
      onClose()
    }
  }

  return (
    <motion.div
      ref={backdropRef}
      onClick={handleBackdropClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 cursor-pointer bg-black/80 flex items-center justify-center p-4 z-[999]"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white max-w-2xl cursor-pointer w-full rounded-2xl overflow-hidden relative shadow-lg"
      >
        <div className="relative w-full md:h-72 h-44">
          <Swiper
            navigation={{
              nextEl: '.custom-next',
              prevEl: '.custom-prev',
            }}
            modules={[Navigation]}
            className="h-full w-full"
          >
            {images.map((img: any, i: number) => (
              <SwiperSlide key={i}>
                <Image
                  src={img?.image?.url || '/placeholder.png'}
                  alt={`${project.title} ${i + 1}`}
                  fill
                  className="object-fill"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="custom-prev absolute left-4 top-1/2 -translate-y-1/2 bg-primary text-black md:w-12 md:h-12 w-8 h-8 flex items-center justify-center rounded-full z-20">
            <ChevronLeft className="md:text-[20px] text-[10px]" />
          </button>

          <button className="custom-next absolute right-4 top-1/2 -translate-y-1/2 bg-primary text-black md:w-12 md:h-12 w-8 h-8 flex items-center justify-center rounded-full z-20 ">
            <ChevronRight className="md:text-[20px] text-[10px]" />
          </button>
        </div>

        <div className="md:p-6 p-4 bg-white tracking-wide max-h-[50vh] overflow-y-auto">
          <h2 className="md:text-xl font-bold text-black">{project.title}</h2>
          <p className="text-gray-700 text-sm md:mt-2 mt-1">
            Project Type: <span className="font-medium">{project.projectType}</span>
          </p>

          <div className="flex items-center text-sm text-gray-700 md:mt-2 mt-1">
            <MapPin size={14} className="mr-1" />
            {project.location}
          </div>

          <div className="md:mt-5 mt-4">
            <h3 className="text-md text-black text-sm font-semibold mb-1">Description</h3>
            <p className="text-gray-800 md:text-sm text-xs">{project.description}</p>
          </div>

          {project.keyHighlights?.length > 0 && (
            <div className="md:mt-5 mt-4">
              <h3 className="text-md text-black text-sm font-semibold mb-1">Key Highlights</h3>
              <ul className="list-disc list-inside text-gray-800 md:text-sm text-xs space-y-1">
                {project.keyHighlights.map((item: any, index: number) => (
                  <li key={index}>{item.point}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}
