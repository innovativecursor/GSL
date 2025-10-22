import Image from 'next/image'
import React from 'react'
import { Check } from 'lucide-react'
import { Line } from '../ui/Line'
import { Heading } from '../ui/Heading'
import { motion } from 'framer-motion'

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
}

const fadeInUp = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
}

const imageVariant = {
  hidden: { opacity: 0, scale: 0.9, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 1, ease: 'easeOut' },
  },
}

const badgeVariant = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: 0.5, duration: 0.6, ease: 'easeOut' },
  },
}

export const Aboutus = () => {
  return (
    <motion.section
      className="flex justify-center items-center bg-white lg:mt-20 md:mt-10 mt-3"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      <motion.div
        variants={container}
        className="lg:max-w-5xl mx-4 sm:mx-5 md:mx-[4vw] lg:mx-0 grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
      >
        <motion.div variants={imageVariant} className="relative">
          <div className="relative w-full h-72 sm:h-96 lg:h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <motion.div
              className="w-full h-full"
              initial={{ scale: 1 }}
              whileInView={{ scale: 1.05 }}
              transition={{ duration: 5, ease: 'easeOut', repeat: Infinity, repeatType: 'reverse' }}
            >
              <Image
                src="/aboutus.png"
                alt="Construction work"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>

          <motion.div
            variants={badgeVariant}
            className="absolute md:-bottom-10 -bottom-6 md:right-[-5%] right-0 bg-[#d6de23] text-gray-800 md:rounded-xl rounded-md shadow-xl md:p-5 p-3 text-center"
          >
            <p className="md:text-3xl font-bold leading-none">12+</p>
            <p className="md:text-xs text-[7px] font-medium mt-1">Years of Excellence</p>
          </motion.div>
        </motion.div>

        <motion.div variants={container}>
          <motion.div variants={fadeInUp}>
            <Heading text="About GSL CDC" />
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex justify-center items-center md:justify-start md:items-start"
          >
            <Line />
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="text-black md:mt-5 mt-3 md:text-sm text-xs text-justify md:text-start font-inter-400 tracking-wide leading-relaxed"
          >
            At GSL Construction Design and Consultancy, we transform ideas into reality. With years
            of experience in design, construction, and project management, we are committed to
            delivering innovative, efficient, and sustainable solutions tailored to our clients’
            needs.
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-black md:mt-3 mt-2 md:text-sm text-xs text-justify md:text-start font-inter-400 tracking-wide leading-relaxed"
          >
            With years of combined experience, our company ensures every project is handled with
            precision, creativity, and integrity.
          </motion.p>

          <motion.h2 variants={fadeInUp} className="text-black md:mt-8 mt-5">
            Highlight Points
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="md:text-sm text-xs space-y-1 mt-2 tracking-wide"
          >
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
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
