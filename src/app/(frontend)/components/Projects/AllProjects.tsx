'use client'

import { useEffect, useState } from 'react'
import { Pagination } from '../pagination/Pagination'
import { Heading } from '../ui/Heading'
import { Line } from '../ui/Line'
import { TopBanner } from '../ui/TopBananer'
import { ProjectData } from './ProjectsData'
import { ProjectsType } from './ProjectsType'
import { useProjects } from '../../contexts/ProjectsContext'

export const AllProjects = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const { filteredProjects, fetchProjects, pagination } = useProjects()

  useEffect(() => {
    fetchProjects(currentPage, 10)
  }, [currentPage])

  useEffect(() => {
    fetchProjects(1, 10)
  }, [])

  const totalPages = pagination.totalPages ?? 1

  return (
    <div className="md:mt-20 mt-16 overflow-hidden bg-white md:pb-20 pb-12">
      <TopBanner src="/projects.png" alt="about us" />

      {filteredProjects.length > 0 ? (
        <div className="mx-4 sm:mx-5 md:mx-[4vw] lg:mx-[10vw] md:mt-14 mt-7">
          <div>
            <Heading text="Featured Projects" />
            <div className="flex justify-center md:justify-start">
              <Line />
            </div>
          </div>

          <div className="md:mt-12 mt-8">
            <ProjectsType />
            <div className="mt-9">
              <ProjectData currentPage={currentPage} />
            </div>
          </div>

          <div className="mt-12">
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      ) : (
        <div className="text-black text-center my-60 font-bold md:text-lg text-sm tracking-wide opacity-50">
          Looks like there are no active projects right now.
        </div>
      )}
    </div>
  )
}
