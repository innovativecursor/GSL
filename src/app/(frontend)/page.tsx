'use client'
import { Aboutus } from './components/home/Aboutus'
import { Company } from './components/home/Company'
import Contact from './components/home/Contact'
import Hero from './components/home/Hero'
import { Projects } from './components/home/Projects'
import { Services } from './components/home/Services'
import { Testimonial } from './components/home/Testimonial'

export default function HomePage() {
  return (
    <div className="bg-white">
      <Hero />
      <Company />
      <Aboutus />
      <Services />
      <Projects />
      <Testimonial />
      <Contact />
    </div>
  )
}
