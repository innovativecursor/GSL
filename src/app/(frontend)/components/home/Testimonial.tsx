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

export const Testimonial: React.FC = () => {
  const { testimonials, fetchTestimonials } = useTestimonial()

  useEffect(() => {
    fetchTestimonials()
  }, [])

  if (!testimonials || !Array.isArray(testimonials) || testimonials.length === 0) {
    return <p className="text-center text-red-400 py-10">Loading testimonials...</p>
  }

  return (
    <section className="bg-[#FFFAE2] md:py-16 py-10">
      <div className="flex justify-center items-center flex-col">
        <Heading text="What Our Clients Say" />
        <div className="flex justify-center items-center md:justify-start md:items-start">
          <Line />
        </div>
      </div>

      <p className="md:text-sm md:block hidden tracking-wide md:mt-5 mt-4 text-center text-black">
        Don't just take our word for it. Here's what our satisfied clients across the Philippines
        have to <br />
        say about our construction services.
      </p>
      <p className="text-[10px] md:hidden block tracking-wide md:mt-5 mt-4 text-center text-black">
        Don't just take our word for it. Here's what our satisfied clients across the Philippines
        have to say about our construction services.
      </p>

      <div className="flex justify-center items-center mt-8">
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
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-white rounded-lg cursor-pointer border-2 border-gray-100 shadow-md hover:shadow-lg sm:h-56 h-64 transition-shadow duration-300 p-5 text-left flex flex-col justify-between">
                  <div>
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={15}
                          className={`${
                            i < item?.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>

                    <p className="text-gray-700 text-xs md:text-xs tracking-wider leading-loose mb-2">
                      “{item?.feedback}”
                    </p>
                  </div>

                  <div className="flex items-center gap-3 mt-auto">
                    <div className="relative w-10 h-10 border-2 border-[#FCD33D] rounded-full overflow-hidden">
                      <Image
                        src={`${BASE_URL}${(item.image as AppImage)?.url || ''}`}
                        alt={(item.image as AppImage)?.alt || item.name}
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
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="flex mt-9 flex-col items-center gap-5">
        <p className="text-gray-700 tracking-wide text-xs md:text-sm">
          Ready to start your construction project with us?
        </p>
        <Button text="Request a Consultation" />
      </div>
    </section>
  )
}
