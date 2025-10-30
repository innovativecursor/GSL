import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Heading } from '../ui/Heading'
import { Line } from '../ui/Line'
import { Button } from '../ui/Button'
import { useProjects } from '../../contexts/ProjectsContext'
import { motion, AnimatePresence } from 'framer-motion'
import { ProjectsType } from '../Projects/ProjectsType'
import { ProjectData } from '../Projects/ProjectsData'
import Link from 'next/link'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as any } },
  exit: { opacity: 0, y: 20, transition: { duration: 0.4, ease: [0.42, 0, 1, 1] as any } },
}

export const Projects: React.FC = () => {
  const { fetchProjects, filteredProjects } = useProjects()

  useEffect(() => {
    fetchProjects()
  }, [])

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
          <div className="flex justify-center flex-wrap gap-3 md:mt-12 mt-7 mb-10">
            <ProjectsType />
          </div>

          <div className="flex justify-center items-center ">
            <div className="mx-4 sm:mx-5 md:mx-[4vw] w-full lg:mx-[15vw]">
              <ProjectData currentPage={1} />
            </div>
          </div>

          <Link href="/Projects">
            {filteredProjects.length > 0 && (
              <motion.div
                className="md:mt-14 mt-10 flex justify-center items-center md:mb-20 mb-12"
                variants={fadeInUp}
              >
                <Button type="submit" text="View All Projects" />
              </motion.div>
            )}
          </Link>
        </>
      )}
    </motion.section>
  )
}











