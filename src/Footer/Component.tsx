import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'
import { MapPin, Phone, Mail, Facebook, Linkedin, Instagram, Twitter } from 'lucide-react'
import type { Footer } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'
import { FooterHeading } from './FooterHeading'
import type { Header } from '@/payload-types'

export async function Footer() {
  const headerData: Header = await getCachedGlobal('header', 1)()
  const navItems = headerData?.navItems || []

  return (
    <footer className=" bg-[#B7CD00] cursor-pointer  ">
      <div className="responsive-mx md:pt-14 pt-8 md:gap-8 gap-5 flex items-start flex-col md:flex-row md:justify-between">
        <div className="flex md:flex-row flex-col justify-between md:w-[60%] w-full items-start ">
          <div className="md:w-[30%] w-full flex flex-col md:items-start items-center">
            <Link href="/">
              <Logo loading="eager" priority="high" className="invert dark:invert-0" />
            </Link>
            <p className="text-light text-xs  tracking-wider md:mt-6 mt-3">
              Building with Excellence, Designing with Vision.
            </p>
            <div className="flex  items-center md:mt-5 mt-3 gap-4">
              <div className="md:w-8 md:h-8 w-6 h-6 rounded-full bg-white text-light flex justify-center items-center">
                <Facebook className="md:w-4 md:h-4 w-3 h-3" />
              </div>
              <div className="md:w-8 md:h-8 w-6 h-6 rounded-full bg-white text-light flex justify-center items-center">
                <Instagram className="md:w-4 md:h-4 w-3 h-3" />
              </div>
              <div className="md:w-8 md:h-8 w-6 h-6 rounded-full bg-white text-light flex justify-center items-center">
                <Linkedin className="md:w-4 md:h-4 w-3 h-3" />
              </div>
              <div className="md:w-8 md:h-8 w-6 h-6 rounded-full bg-white text-light flex justify-center items-center">
                <Twitter className="md:w-4 md:h-4 w-3 h-3" />
              </div>
            </div>
          </div>
          <div className="flex md:w-[55%] w-full md:mt-0 mt-7 justify-between items-start">
            <div>
              <FooterHeading text="Our Services" className="mb-5" />
              <div className="flex flex-col items-start text-light   tracking-wide gap-4">
                <p className="text-xs   ">Architectural Design</p>
                <p className="text-xs ">Construction Management</p>
                <p className="text-xs ">Consultancy Services</p>
                <p className="text-xs ">Structural Design</p>
              </div>
            </div>
            <div>
              <FooterHeading text="Quick Links" className="mb-5" />
              <div className="flex flex-col items-start text-black tracking-wide gap-4">
                {navItems.map(({ link }, i) => {
                  return (
                    <div
                      key={i}
                      className="flex flex-col items-start  text-xs   tracking-wide gap-4"
                    >
                      <CMSLink {...link} />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="flex md:w-[23%] w-full flex-col justify-end items-start tracking-wide">
          <FooterHeading text="Contact Info" className="mb-5" />
          <div className="flex flex-col items-start text-light gap-4">
            <div className="flex items-start gap-2">
              <MapPin className="w-5 h-5 font-light" />
              <p className="text-xs ">
                Lot 4, Blk.3, Edgewood Place 1, Brgy. Inarawan, Antipolo City, Rizal 1870
              </p>
            </div>
            <div className="flex items-start gap-2">
              <Phone className="w-3 h-3 font-light" />
              <p className="text-xs ">09776071925</p>
            </div>
            <div className="flex items-start gap-2">
              <Phone className="w-3 h-3 font-light" />
              <p className="text-xs ">09951722668</p>
            </div>
            <div className="flex items-start gap-2">
              <Mail className="w-3 h-3 font-light" />
              <p className="text-xs ">gslcdc.1725@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:mt-12 mt-5 ">
        <div className="bg-[#1E1E1E]/20 w-full h-[1px]"></div>
        <div className="responsive-mx md:my-6 my-3 flex md:gap-0 gap-1 md:flex-row flex-col items-center justify-between ">
          <p className="md:text-xs text-[9px] md:text-start text-center text-light">
            Copyright © 2025 GSL Construction, Design and Consultancy. All Rights Reserved.
          </p>
          <div className="md:text-xs text-[9px] gap-1 flex items-center text-light">
            Designed by
            <img alt="Payload Logo" src="/companylogo.png" className="w-4 h-4" />
            Innovative Cursor
          </div>
        </div>
      </div>
    </footer>
  )
}
