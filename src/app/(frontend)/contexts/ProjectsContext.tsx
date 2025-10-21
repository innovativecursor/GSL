'use client'
import { createContext, useContext, useState, ReactNode } from 'react'
import { ProjectData } from '../types/globals'
import { fetchDataGet } from '../utils/fetchData'
import endpoints from '../config/endpoints'

interface ProjectsContextType {
  projects: ProjectData[]
  fetchProjects: () => Promise<void>
}

const ProjectsContext = createContext<ProjectsContextType>({
  projects: [],
  fetchProjects: async () => {},
})

export const useProjects = () => useContext(ProjectsContext)

export const ProjectsProvider = ({ children }: { children: ReactNode }) => {
  const [projects, setProjects] = useState<ProjectData[]>([])

  const fetchProjects = async () => {
    try {
      const data = (await fetchDataGet(endpoints.projects.getAll)) as PaginatedResponse<ProjectData>
      setProjects(Array.isArray(data?.docs) ? data?.docs : [])
    } catch (error) {
      console.error('Failed to fetch projects:', error)
    }
  }

  return (
    <ProjectsContext.Provider value={{ projects, fetchProjects }}>
      {children}
    </ProjectsContext.Provider>
  )
}
