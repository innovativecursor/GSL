import { Metadata } from 'next'
import { HomeData } from './components/home/HomeData'

export const metadata: Metadata = {
  title: 'GSL Construction & Design Consultancy | Turning Ideas into Reality',
  description:
    'At GSL CDC, we transform ideas into lasting structures. From architectural design and project management to structural steel works and billboard fabrication, we deliver innovative and sustainable solutions tailored to every client’s needs.',
}

export default function HomePage() {
  return (
    <div className="bg-white overflow-hidden">
      <HomeData />
    </div>
  )
}
