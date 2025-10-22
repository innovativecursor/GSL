import React from 'react'
import { Heading } from '../ui/Heading'
import { Line } from '../ui/Line'
import { motion } from 'framer-motion'

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

const fadeUp = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

const containerVariant = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.25 },
  },
}

const leftCard = {
  hidden: { opacity: 0, x: -80, rotate: -5, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    scale: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

const rightCard = {
  hidden: { opacity: 0, x: 80, rotate: 5, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    scale: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

export const Services: React.FC = () => {
  return (
    <motion.section
      className="bg-[#FFFAE2] lg:mt-28 md:mt-20 mt-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      <motion.div variants={containerVariant}>
        <motion.div
          variants={fadeUp}
          className="flex justify-center md:pt-14 pt-9 items-center flex-col"
        >
          <Heading text="Our Services" />
          <div className="flex justify-center items-center md:justify-start md:items-start">
            <Line />
          </div>
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="md:text-sm text-[10px] tracking-wide md:mt-5 mt-4 text-center text-black"
        >
          We provide comprehensive construction services tailored to the unique <br /> needs of the
          Philippine{' '}
        </motion.p>

        <div className="flex justify-center items-center md:mt-14 mt-8">
          <motion.div
            variants={containerVariant}
            className="grid sm:grid-cols-2 md:gap-8 gap-5 lg:max-w-5xl mx-4 sm:mx-5 md:mb-20 mb-14 md:mx-[4vw] lg:mx-0"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={index % 2 === 0 ? leftCard : rightCard}
                whileHover={{
                  scale: 1.05,
                  rotate: 1,
                  y: -5,
                  boxShadow: '0px 15px 25px rgba(0,0,0,0.15)',
                  transition: { type: 'spring', stiffness: 200, damping: 10 },
                }}
                whileTap={{ scale: 0.97 }}
                className="bg-white md:border-t-4 border-t-2 cursor-pointer border border-gray-200 border-t-[#FCD33D] rounded-xl shadow-sm md:p-6 p-4 text-left"
              >
                <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="md:text-4xl text-3xl font-bold text-[#FCD33D] md:mb-3 mb-2"
                >
                  {service.id}
                </motion.h1>
                <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 * index }}
                  className="md:text-lg font-bold text-black mb-2"
                >
                  {service.title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index }}
                  className="text-black text-[11px] md:text-sm mb-2"
                >
                  {service.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  )
}
