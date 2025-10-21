import Marquee from 'react-fast-marquee'
import Image from 'next/image'
import logo1 from '../../../../../public/logo1.png'
import logo2 from '../../../../../public/logo2.png'
import logo3 from '../../../../../public/logo3.png'
import logo4 from '../../../../../public/logo4.png'
import logo5 from '../../../../../public/logo5.png'
import logo6 from '../../../../../public/logo6.png'
import logo7 from '../../../../../public/logo7.png'
import logo8 from '../../../../../public/logo8.png'
import logo9 from '../../../../../public/logo9.png'
import logo10 from '../../../../../public/logo10.png'
import logo11 from '../../../../../public/logo11.png'

import { Line } from '../ui/Line'
import { Heading } from '../ui/Heading'

export const Company = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11]

  return (
    <div className="md:py-16 py-9 bg-white">
      <div className="flex justify-center items-center flex-col">
        <Heading text="TRUSTED BY" />
        <div className="flex justify-center items-center md:justify-start md:items-start">
          <Line />
        </div>
      </div>
      <Marquee speed={200} gradient={false}>
        <div className="flex items-center md:gap-12 gap-5 justify-center lg:mt-20 mt-9">
          {logos.map((logo, i) => (
            <div key={i} className="flex justify-center items-center">
              <Image
                src={logo}
                alt={`company-logo-${i}`}
                className="object-contain md:w-28 md:h-16 w-20 h-12"
              />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  )
}
