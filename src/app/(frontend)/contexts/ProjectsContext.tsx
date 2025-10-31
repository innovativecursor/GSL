'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { ProjectData } from '../types/globals'
import { fetchDataGet } from '../utils/fetchData'
import endpoints from '../config/endpoints'

interface PaginatedResponse<T> {
  docs: T[]
}

interface ProjectsContextType {
  projects: ProjectData[]
  fetchProjects: () => Promise<void>
  filteredProjects: ProjectData[]
  activeFilter: string
  setActiveFilter: (filter: string) => void
}

const ProjectsContext = createContext<ProjectsContextType>({
  projects: [],
  fetchProjects: async () => {},
  filteredProjects: [],
  activeFilter: 'All Projects',
  setActiveFilter: () => {},
})

export const useProjects = () => useContext(ProjectsContext)

export const ProjectsProvider = ({ children }: { children: ReactNode }) => {
  const [projects, setProjects] = useState<ProjectData[]>([])
  const [activeFilter, setActiveFilter] = useState('All Projects')

  const fetchProjects = async () => {
    try {
      const data = (await fetchDataGet(endpoints.projects.getAll)) as PaginatedResponse<ProjectData>
      setProjects(Array.isArray(data?.docs) ? data.docs : [])
    } catch (error) {
      console.error('Failed to fetch projects:', error)
    }
  }

  const filteredProjects =
    activeFilter === 'All Projects'
      ? projects
      : projects.filter((p) => p?.category === activeFilter)

  return (
    <ProjectsContext.Provider
      value={{ projects, fetchProjects, filteredProjects, setActiveFilter, activeFilter }}
    >
      {children}
    </ProjectsContext.Provider>
  )
}
