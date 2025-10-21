import React from 'react'
import { Heading } from '../ui/Heading'
import { Line } from '../ui/Line'

const services = [
  {
    id: '01',
    title: 'Architectural & Construction Services',
    description:
      'We design and build spaces that combine functionality, sustainability, and modern aesthetics.',
  },
  {
    id: '02',
    title: 'Structural Steel Works & Fabrication',
    description:
      'We provide engineering-grade structural steel solutions for large-scale projects.',
  },
  {
    id: '03',
    title: 'Signage Works & Advertising Structures',
    description:
      'We specialize in designing and constructing durable and safe advertising structures.',
  },
  {
    id: '04',
    title: 'Specialized Projects',
    description: 'We cater to diverse client needs, ensuring top-quality execution.',
  },
]

export const Services: React.FC = () => {
  return (
    <section className="bg-[#FFFAE2] lg:mt-28 md:mt-20 mt-12">
      <div className=" ">
        <div className="flex justify-center md:pt-14 pt-9 items-center flex-col">
          <Heading text="Our Services" />
          <div className="flex justify-center items-center md:justify-start md:items-start">
            <Line />
          </div>
        </div>
        <p className="md:text-sm text-[10px] tracking-wide md:mt-5 mt-4 text-center text-black">
          We provide comprehensive construction services tailored to the unique <br /> needs of the
          Philippine{' '}
        </p>

        <div className="flex justify-center items-center md:mt-14 mt-8">
          <div className="grid sm:grid-cols-2 md:gap-8 gap-5 lg:max-w-5xl mx-4 sm:mx-5 md:mb-20 mb-14  md:mx-[4vw] lg:mx-0 ">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white md:border-t-4 border-t-2 cursor-pointer border border-gray-200 border-t-[#FCD33D] rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 md:p-6 p-4 text-left"
              >
                <h1 className="md:text-4xl text-3xl font-bold text-[#FCD33D] md:mb-3 mb-2">
                  {service.id}
                </h1>
                <h1 className="md:text-lg font-bold text-black mb-2">{service.title}</h1>
                <p className="text-black text-[11px] md:text-sm mb-2">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
