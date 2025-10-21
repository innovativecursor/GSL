import Image from 'next/image'
import React from 'react'
import { Check } from 'lucide-react'
import { Line } from '../ui/Line'
import { Heading } from '../ui/Heading'

export const Aboutus = () => {
  return (
    <section className="flex justify-center items-center bg-white lg:mt-20 md:mt-10 mt-3">
      <div className="lg:max-w-5xl mx-4 sm:mx-5  md:mx-[4vw] lg:mx-0 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="relative">
          <div className="relative w-full h-72 sm:h-96 lg:h-[400px] rounded-2xl overflow-hidden shadow-md">
            <Image
              src="/aboutus.png"
              alt="Construction work"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute md:-bottom-10 -bottom-6 md:right-[-5%] right-0  bg-[#d6de23] text-gray-800 md:rounded-xl rounded-md shadow-xl md:p-5 p-3 text-center">
            <p className="md:text-3xl font-bold leading-none">12+</p>
            <p className="md:text-xs text-[7px] font-medium mt-1">Years of Excellence</p>
          </div>
        </div>
        <div className="">
          <Heading text="About GSL CDC" />
          <div className="flex justify-center items-center md:justify-start md:items-start">
            <Line />
          </div>
          <p className="text-black md:mt-5 mt-3 md:text-sm text-xs text-justify md:text-start font-inter-400  tracking-wide  leading-relaxed">
            At GSL Construction Design and Consultancy, we transform ideas into reality. With years
            of experience in design, construction, and project management, we are committed to
            delivering innovative, efficient, and sustainable solutions tailored to our clients’
            needs.
          </p>
          <p className="text-black md:mt-3 mt-2 md:text-sm text-xs text-justify md:text-start font-inter-400  tracking-wide  leading-relaxed">
            With years of combined experience, our company ensures every project is handled with
            precision, creativity, and integrity.
          </p>
          <h2 className="text-black md:mt-8 mt-5">Highlight Points</h2>
          <div className="md:text-sm text-xs space-y-1 mt-2 tracking-wide">
            <div className="flex items-end text-black gap-1">
              <Check className="w-3 h-3" />
              Licensed Architects
            </div>
            <div className="flex items-end text-black gap-1">
              <Check className="w-3 h-3" />
              ASEP Certified Team
            </div>
            <div className="flex items-end text-black gap-1">
              <Check className="w-3 h-3" />
              End-to-End Construction & Design Solutions
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
