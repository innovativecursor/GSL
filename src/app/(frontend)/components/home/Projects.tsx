import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Heading } from '../ui/Heading'
import { Line } from '../ui/Line'
import { Button } from '../ui/Button'
import { useProjects } from '../../contexts/ProjectsContext'
import { motion, AnimatePresence } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as any } },
  exit: { opacity: 0, y: 20, transition: { duration: 0.4, ease: [0.42, 0, 1, 1] as any } },
}

export const Projects: React.FC = () => {
  const { projects, fetchProjects } = useProjects()
  const [activeFilter, setActiveFilter] = useState('All Projects')

  useEffect(() => {
    fetchProjects()
  }, [])

  const filteredProjects =
    activeFilter === 'All Projects'
      ? projects
      : projects.filter((p) => p?.category === activeFilter)

  return (
    <motion.section
      id="projects"
      className="bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      {filteredProjects.length > 0 && (
        <>
          <motion.div className="flex justify-center md:pt-16 pt-9 items-center flex-col">
            <Heading text="Our Projects" />
            <div className="flex justify-center items-center md:justify-start md:items-start">
              <Line />
            </div>
          </motion.div>

          <motion.div className="text-center mt-4 md:mt-5">
            <p className="md:text-sm md:block hidden tracking-wide text-black">
              Explore some of our featured works that highlight our expertise in construction,
              design, <br />
              and consultancy.
            </p>
            <p className="text-[10px] md:hidden block tracking-wide text-black">
              Explore some of our featured works that highlight our expertise in construction,
              design, and consultancy.
            </p>
          </motion.div>

          <motion.div className="flex justify-center flex-wrap gap-3 md:mt-12 mt-7 mb-10">
            {['All Projects', 'Residential', 'Commercial'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 md:py-2 py-1 rounded-full md:text-xs text-[10px] font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-[#FCD33D] text-black font-bold'
                    : 'bg-gray-100 text-black font-normal'
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>

          <div className="flex justify-center items-center">
            <div className="mx-4 sm:mx-5 md:mx-[4vw] lg:mx-0 lg:max-w-5xl">
              <AnimatePresence>
                <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProjects.map((project) => (
                    <motion.div
                      key={project.id}
                      variants={fadeInUp}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      whileHover={{ scale: 1.03 }}
                      layout
                      className="bg-gray-50 cursor-pointer rounded-xl shadow-md transition-shadow duration-300 overflow-hidden"
                    >
                      <div className="relative h-56 w-96">
                        <Image
                          src={project.image?.url || '/placeholder.png'}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                        <p className="absolute top-3 font-inter-400 text-[8px] left-3 bg-black/70 text-white text-xs font-medium px-2 py-0.5 rounded-full">
                          {project?.category}
                        </p>
                        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
                          <h1 className="text-white font-bold text-sm">{project?.title}</h1>
                          <p className="text-gray-100 opacity-80 text-xs mt-1">
                            {project?.location}
                          </p>
                        </div>
                      </div>
                      <div className="p-4 text-left mb-3">
                        <h1 className="font-bold text-gray-900 text-base">{project?.title}</h1>
                        <p className="text-black opacity-80 text-xs mt-1">{project?.location}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {filteredProjects.length > 0 && (
            <motion.div
              className="md:mt-14 mt-10 flex justify-center items-center md:mb-20 mb-12"
              variants={fadeInUp}
            >
              <Button type="submit" text="View All Projects" />
            </motion.div>
          )}
        </>
      )}
    </motion.section>
  )
}
