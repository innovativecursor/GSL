'use client'
import Image from 'next/image'
import { TopBanner } from '../ui/TopBananer'
import { ContactData } from './ContactData'
import { MapPin, Phone, Mail } from 'lucide-react'

export const AllContactData = () => {
  return (
    <div className="bg-white md:pb-20 pb-12">
      <div className="md:mt-20 mt-16 overflow-hidden">
        <TopBanner src="/contact1.png" alt="about us" />
        <TopBanner src="/contact2.png" alt="about us" />
      </div>

      <div className="bg-[#FCD33D] text-black md:flex justify-between items-center md:px-16 px-6 py-10 md:rounded-2xl rounded-xl mx-4 sm:mx-5 md:mx-[4vw] lg:mx-[10vw] md:mt-[-70px] mt-[-50px] relative z-10 shadow-lg">
        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
          <div className="flex flex-col items-center space-x-5">
            <span className="md:text-2xl">
              <Phone />
            </span>
            <h4 className="font-semibold md:text-lg border-b border-black">Phone</h4>
          </div>
          <p className="mt-3 text-xs font-bold md:text-base">+63 90909090</p>
        </div>

        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
          <div className="flex items-center space-x-5">
            <span className="md:text-2xl">
              <Mail />
            </span>
            <h4 className="font-semibold md:text-lg border-b">Mail</h4>
          </div>
          <p className="mt-3 text-xs font-bold md:text-base">gslcdc.17256@gmail.com</p>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center space-x-5">
            <span className="md:text-2xl">
              <MapPin />
            </span>
            <h4 className="font-semibold md:text-lg border-b">Location</h4>
          </div>
          <p className="mt-3 text-xs md:text-base text-center font-bold md:text-left">
            Lot 4, Blk 3, Edgewood Place 1, Brgy. Inarawan, <br />
            Antipolo City, Rizal 1870
          </p>
        </div>
      </div>

      <div className="mt-20 mx-4 sm:mx-5 md:mx-[4vw] lg:mx-[10vw]  grid md:grid-cols-2 md:gap-16 gap-10">
        <div>
          <h2 className="text-2xl text-black font-extrabold mb-6">Get in Touch</h2>
          <ContactData />
        </div>

        <div className="flex justify-center items-center">
          <div className="w-full mt-5 rounded-xl" style={{ height: '400px' }}>
            <iframe
              src="https://www.google.com/maps?q=Lot+4,+Blk.3,+Edgewood+Place+1,+Brgy.+Inarawan,+Antipolo+City,+Rizal+1870&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="md:rounded-xl rounded-md"
              referrerPolicy="no-referrer-when-downgrade"
              title="Edgewood Place 1, Antipolo City Location"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
