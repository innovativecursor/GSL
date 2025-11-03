import React, { useEffect } from 'react'
import Image from 'next/image'
import { Star } from 'lucide-react'
import { Button } from '../ui/Button'
import { Heading } from '../ui/Heading'
import { Line } from '../ui/Line'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { useTestimonial } from '../../contexts/TestimonialsContext'
import { BASE_URL } from '../../config/baseUrl'
import { motion } from 'framer-motion'
import Link from 'next/link'

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
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as any },
  },
}

export const Testimonial: React.FC = () => {
  const { testimonials, fetchTestimonials } = useTestimonial()

  useEffect(() => {
    fetchTestimonials()
  }, [])

  if (!testimonials || !Array.isArray(testimonials) || testimonials.length === 0) {
    return <></>
  }

  return (
    <motion.section
      className="bg-[#FFFAE2] md:py-16 py-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      <motion.div className="flex justify-center items-center flex-col" variants={container}>
        <motion.div variants={fadeInUp}>
          <Heading text="What Our Clients Say" />
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="flex justify-center items-center md:justify-start md:items-start"
        >
          <Line />
        </motion.div>
      </motion.div>

      <motion.div variants={container} className="text-center mt-4 md:mt-5">
        <motion.p
          variants={fadeInUp}
          className="md:text-sm md:block hidden tracking-wide text-black"
        >
          Don&apos;t just take our word for it. Here&apos;s what our satisfied clients across the
          Philippines have to <br />
          say about our construction services.
        </motion.p>
        <motion.p
          variants={fadeInUp}
          className="text-[10px] md:hidden block tracking-wide text-black"
        >
          Don&apos;t just take our word for it. Here&apos;s what our satisfied clients across the
          Philippines have to say about our construction services.
        </motion.p>
      </motion.div>

      <motion.div variants={container} className="flex justify-center items-center mt-8">
        <div className="w-full lg:max-w-5xl px-0 sm:px-6 mx-0">
          <Swiper
            spaceBetween={10}
            breakpoints={{
              0: { slidesPerView: 1.2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-10"
          >
            {testimonials.map((item) => {
              const feedbackWords = item?.feedback?.split(' ') || []
              const truncatedFeedback =
                feedbackWords.length > 40
                  ? feedbackWords.slice(0, 40).join(' ') + '...'
                  : item?.feedback

              return (
                <SwiperSlide key={item.id}>
                  <motion.div
                    variants={fadeInUp}
                    className="bg-white rounded-lg cursor-pointer border-2 border-gray-100 shadow-md hover:shadow-lg sm:h-56 h-72 transition-shadow duration-300 p-5 text-left flex flex-col justify-between"
                    whileHover={{ scale: 1.03 }}
                  >
                    <div>
                      <div className="flex mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={15}
                            className={`${i < item?.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                      <p className="text-gray-700 text-xs md:text-xs tracking-wider leading-loose mb-2">
                        {truncatedFeedback}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 mt-auto">
                      <div className="relative w-10 h-10 border-2 border-[#FCD33D] rounded-full overflow-hidden">
                        {/* <Image
                          src={`${BASE_URL}${(item.image as AppImage)?.url || ''}`}
                          alt={(item.image as AppImage)?.alt || item.name}
                          fill
                          className="object-cover"
                        /> */}
                        <Image
                          src={(item?.image as AppImage)?.url || '/placeholder.png'}
                          alt={(item?.image as AppImage)?.alt || item?.name || 'Client image'}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h1 className="font-semibold text-gray-900 text-xs md:text-sm">
                          {item?.name}
                        </h1>
                        <p className="text-gray-500 text-[10px] md:text-xs">{item?.role}</p>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </motion.div>

      <motion.div variants={container} className="flex mt-9 flex-col items-center gap-5">
        <motion.p variants={fadeInUp} className="text-gray-700 tracking-wide text-xs md:text-sm">
          Ready to start your construction project with us?
        </motion.p>
        <Link href="/Contactus">
          <motion.div variants={fadeInUp} whileHover={{ scale: 1.05 }}>
            <Button text="Request a Consultation" />
          </motion.div>
        </Link>
      </motion.div>
    </motion.section>
  )
}
