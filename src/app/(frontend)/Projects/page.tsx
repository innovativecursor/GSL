import { Metadata } from 'next'
import { AllProjects } from '../components/Projects/AllProjects'

export const metadata: Metadata = {
  title: 'Projects | GSL Construction, Design & Consultancy',
  description:
    'Explore GSL CDC’s portfolio of residential, commercial, institutional, and structural projects. Each design and construction reflects our commitment to innovation, quality, and sustainable engineering.',
}

export default function Projects() {
  return (
    <>
      <AllProjects />
    </>
  )
}
