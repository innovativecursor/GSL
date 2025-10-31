import React from 'react'
import { Metadata } from 'next'

import { ServiceData } from '../components/service/ServiceData'

export const metadata: Metadata = {
  title: 'Construction, Design & Consultancy Services | GSL CDC Philippines',
  description:
    'GSL CDC offers professional architectural design, project management, structural steel fabrication, and signage construction services. Delivering quality and sustainable engineering solutions across the Philippines.',
}

export default function Services() {
  return (
    <>
      <ServiceData />
    </>
  )
}
