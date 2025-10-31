'use client'
import { Aboutus } from './Aboutus'
import { Company } from './Company'
import Contact from './Contact'
import Hero from './Hero'
import { Projects } from './Projects'
import { Services } from './Services'
import { Testimonial } from './Testimonial'

export const HomeData = () => {
  return (
    <>
      <Hero />
      <Company />
      <Aboutus />
      <Services />
      <Projects />
      <Testimonial />
      <Contact />
    </>
  )
}
