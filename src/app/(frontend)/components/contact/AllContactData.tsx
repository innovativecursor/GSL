'use client'
import Image from 'next/image'
import { TopBanner } from '../ui/TopBananer'
import { ContactData } from './ContactData'
import { MapPin, Phone, Mail } from 'lucide-react'

export const AllContactData = () => {
  return (
    <div className="bg-white pb-20">
      <div className="md:mt-20 mt-16 overflow-hidden">
        <TopBanner src="/contact1.png" alt="about us" />
        <TopBanner src="/contact2.png" alt="about us" />
      </div>

      <div
        className="bg-[#FCD33D] text-black md:flex justify-between items-center md:px-16 px-6 py-10 md:rounded-2xl mx-0 
      sm:mx-5 md:mx-[4vw] lg:mx-[10vw] md:mt-[-70px] relative z-10 shadow-lg"
      >
        <div className="flex flex-row justify-between items-start mb-8 md:mb-0">
          <div className="flex items-center">
            <div className="flex flex-col items-start ">
              <span className="">
                <Phone className="md:w-7 md:h-7 w-5 h-5" />
              </span>
              <h4 className="font-semibold mt-2 md:text-lg">Phone</h4>
              <div className="md:w-32 w-16 h-[1px] mt-1 bg-black"></div>
              <p className="mt-3 text-xs font-semibold md:text-base">+63 90909090</p>
            </div>
          </div>
          <div className="flex md:hidden flex-col items-start mb-8 md:mb-0">
            <div className="flex flex-col items-start ">
              <span className="">
                <Mail className="md:w-7 md:h-7 w-5 h-5" />
              </span>
              <h4 className="font-semibold mt-2 md:text-lg">Mail</h4>
              <div className="md:w-32 w-16 h-[1px] mt-1 bg-black"></div>
            </div>
            <p className="mt-3 text-xs font-semibold md:text-base">gslcdc.17256@gmail.com</p>
          </div>
        </div>

        <div className="md:flex hidden flex-col items-start mb-8 md:mb-0">
          <div className="flex flex-col items-start ">
            <span className="">
              <Mail className="w-7 h-7" />
            </span>
            <h4 className="font-semibold mt-2 md:text-lg">Mail</h4>
            <div className="w-32 h-[1px] mt-1 bg-black"></div>
          </div>
          <p className="mt-3 text-xs font-semibold md:text-base">gslcdc.17256@gmail.com</p>
        </div>

        <div className="flex flex-col items-start mb-8 md:mb-0">
          <div className="flex flex-col items-start ">
            <span className="">
              <MapPin className="md:w-7 md:h-7 w-5 h-5" />
            </span>
            <h4 className="font-semibold mt-2 md:text-lg">Location</h4>
            <div className="md:w-32 w-16 h-[1px] mt-1 bg-black"></div>
          </div>
          <p className="mt-3 text-xs font-semibold md:text-base">
            {' '}
            Lot 4, Blk 3, Edgewood Place 1, Brgy. Inarawan, <br />
            Antipolo City, Rizal 1870
          </p>
        </div>
      </div>

      <div className="md:mt-20 mt-12 mx-4 sm:mx-5 md:mx-[4vw] lg:mx-[10vw]  grid md:grid-cols-2 md:gap-16 gap-10">
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
