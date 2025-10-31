import { Metadata } from 'next'
import { About } from '../components/about/About'

export const metadata: Metadata = {
  title: 'Our Story | GSL Construction, Design & Consultancy',
  description:
    'At GSL CDC, we transform ideas into reality. With a passion for innovation and a commitment to client satisfaction, we deliver reliable design, construction, and consultancy solutions across the Philippines.',
}

export default function Aboutus() {
  return (
    <>
      <About />
    </>
  )
}
