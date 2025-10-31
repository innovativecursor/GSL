import { Metadata } from 'next'
import { AllContactData } from '../components/contact/AllContactData'

export const metadata: Metadata = {
  title: 'Contact Us | GSL Construction, Design & Consultancy',
  description:
    'Get in touch with GSL CDC to discuss your design, construction, or consultancy needs. Our team is ready to provide innovative, reliable, and cost-effective solutions for your next project.',
}

export default function Contactus() {
  return (
    <>
      <AllContactData />
    </>
  )
}
