'use client'
import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useProjects } from '../../contexts/ProjectsContext'
import { usePathname } from 'next/navigation'
import ProjectModal from './ProjectModal'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: 20, transition: { duration: 0.4 } },
}

export const ProjectData = ({ currentPage }: { currentPage: number }) => {
  const { filteredProjects } = useProjects()
  const pathname = usePathname()
  const [selectedProject, setSelectedProject] = useState<any | null>(null)

  const handleOpenModal = (project: any) => setSelectedProject(project)
  const handleCloseModal = () => setSelectedProject(null)

  const projectsToShow = pathname === '/' ? filteredProjects.slice(0, 6) : filteredProjects

  return (
    <>
      <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsToShow.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => handleOpenModal(project)}
          />
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedProject && <ProjectModal project={selectedProject} onClose={handleCloseModal} />}
      </AnimatePresence>
    </>
  )
}

const ProjectCard = ({ project, onClick }: any) => {
  const firstImage = project?.images?.[0]?.image?.url || '/placeholder.png'

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      exit="exit"
      whileHover={{ scale: 1.03 }}
      layout
      onClick={onClick}
      className="bg-gray-50 cursor-pointer rounded-xl shadow-md transition-shadow duration-300 overflow-hidden"
    >
      <div className="relative h-56 w-full">
        <Image
          src={firstImage}
          alt={project?.title || 'Project Image'}
          fill
          className="object-fill"
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
}
