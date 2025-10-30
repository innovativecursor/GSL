import Image from 'next/image'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useProjects } from '../../contexts/ProjectsContext'
import { usePathname } from 'next/navigation'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as any } },
  exit: { opacity: 0, y: 20, transition: { duration: 0.4, ease: [0.42, 0, 1, 1] as any } },
}

export const ProjectData = ({ currentPage }: { currentPage: number }) => {
  const { fetchProjects, filteredProjects } = useProjects()
  const pathname = usePathname()
  const [projectsPerPage] = useState(5)

  useEffect(() => {
    fetchProjects()
  }, [])

  if (pathname === '/') {
    return (
      <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.slice(0, 6).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    )
  }

  const startIndex = (currentPage - 1) * projectsPerPage
  const currentProjects = filteredProjects.slice(startIndex, startIndex + projectsPerPage)

  return (
    <AnimatePresence>
      <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </AnimatePresence>
  )
}

const ProjectCard = ({ project }: any) => (
  <motion.div
    variants={fadeInUp}
    initial="hidden"
    animate="visible"
    exit="exit"
    whileHover={{ scale: 1.03 }}
    layout
    className="bg-gray-50 cursor-pointer rounded-xl shadow-md transition-shadow duration-300 overflow-hidden"
  >
    <div className="relative h-56 w-full">
      <Image
        src={project.image?.url || '/placeholder.png'}
        alt={project.title}
        fill
        className="object-cover"
      />
      <p className="absolute top-3 left-3 bg-black/70 text-white text-xs font-medium px-2 py-0.5 rounded-full">
        {project?.category}
      </p>
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
        <h1 className="text-white font-bold text-sm">{project?.title}</h1>
        <p className="text-gray-100 opacity-80 text-xs mt-1">{project?.location}</p>
      </div>
    </div>
    <div className="p-4 text-left mb-3">
      <h1 className="font-bold text-gray-900 text-base">{project?.title}</h1>
      <p className="text-black opacity-80 text-xs mt-1">{project?.location}</p>
    </div>
  </motion.div>
)
