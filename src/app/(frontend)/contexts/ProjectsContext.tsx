'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { ProjectData } from '../types/globals'
import { fetchDataGet } from '../utils/fetchData'
import endpoints from '../config/endpoints'

interface PaginatedResponse<T> {
  docs: T[]
  page?: number
  totalPages?: number
  hasNextPage?: boolean
  hasPrevPage?: boolean
  limit?: number
  totalDocs?: number
}

interface PaginationState {
  page: number
  totalPages: number
  limit: number
  totalDocs: number
  hasNextPage: boolean
  hasPrevPage: boolean
}

interface ProjectsContextType {
  projects: ProjectData[]
  fetchProjects: (page?: number, limit?: number) => Promise<void>
  filteredProjects: ProjectData[]
  activeFilter: string
  setActiveFilter: (filter: string) => void
  pagination: PaginationState
}

const ProjectsContext = createContext<ProjectsContextType>({
  projects: [],
  fetchProjects: async () => {},
  filteredProjects: [],
  activeFilter: 'All Projects',
  setActiveFilter: () => {},
  pagination: {
    page: 1,
    totalPages: 1,
    limit: 10,
    totalDocs: 0,
    hasNextPage: false,
    hasPrevPage: false,
  },
})

export const useProjects = () => useContext(ProjectsContext)

export const ProjectsProvider = ({ children }: { children: ReactNode }) => {
  const [projects, setProjects] = useState<ProjectData[]>([])
  const [activeFilter, setActiveFilter] = useState('All Projects')
  const [pagination, setPagination] = useState<PaginationState>({
    page: 1,
    totalPages: 1,
    limit: 10,
    totalDocs: 0,
    hasNextPage: false,
    hasPrevPage: false,
  })

  const fetchProjects = async (page = 1, limit = 10) => {
    try {
      const url = `${endpoints.projects.getAll}?page=${page}&limit=${limit}`
      const data = (await fetchDataGet(url)) as PaginatedResponse<ProjectData>

      setProjects(Array.isArray(data?.docs) ? data.docs : [])

      setPagination({
        page: data?.page ?? page,
        totalPages: data?.totalPages ?? 1,
        limit: data?.limit ?? limit,
        totalDocs: data?.totalDocs ?? (Array.isArray(data?.docs) ? data.docs.length : 0),
        hasNextPage: !!data?.hasNextPage,
        hasPrevPage: !!data?.hasPrevPage,
      })
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
      value={{
        projects,
        fetchProjects,
        filteredProjects,
        setActiveFilter,
        activeFilter,
        pagination,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  )
}
