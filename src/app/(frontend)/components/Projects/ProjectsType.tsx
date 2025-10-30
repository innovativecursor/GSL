import { motion } from 'framer-motion'
import { useState } from 'react'
import { useProjects } from '../../contexts/ProjectsContext'
export const ProjectsType = () => {
  const { setActiveFilter, activeFilter } = useProjects()

  return (
    <>
      <motion.div className=" gap-4 inline-flex">
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
    </>
  )
}
