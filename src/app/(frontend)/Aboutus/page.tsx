import Image from 'next/image'
import { Heading } from '../components/ui/Heading'
import { Line } from '../components/ui/Line'
import { TopBanner } from '../components/ui/TopBananer'

export default function Aboutus() {
  return (
    <div className="md:mt-20 mt-16 overflow-hidden bg-white md:pb-20 pb-12">
      <TopBanner src="/about.png" alt="about us" />

      <div className="flex justify-center items-center">
        <div
          className="lg:max-w-6xl  mx-4 sm:mx-5 md:mx-[4vw] lg:mx-0 grid grid-cols-1 md:grid-cols-2 gap-10 items-center md:mt-20 mt-7 justify-center
      "
        >
          <div>
            <div>
              <Heading text="Our Story" />
            </div>

            <div className="flex justify-center items-center md:justify-start md:items-start">
              <Line />
            </div>

            <p className="text-black mt-5 md:text-sm text-xs text-justify md:text-start font-inter-400 tracking-wide leading-relaxed">
              At GSL Construction Design and Consultancy, we transform ideas into reality. With
              years of experience in design, construction, and project management, we are committed
              to delivering innovative, efficient, and sustainable solutions tailored to our
              clients’ needs.
            </p>

            <p className="text-black md:mt-4 mt-2 md:text-sm text-xs text-justify md:text-start font-inter-400 tracking-wide leading-relaxed">
              We specialize in residential, commercial, institutional, and structural projects,
              providing end-to-end solutions that ensure safety, efficiency, and client
              satisfaction. From designing modern family homes to constructing durable billboard
              structures, our expertise covers a wide range of architectural and engineering
              requirements.
            </p>
          </div>

          <div className="relative">
            <div className="relative w-full h-72 lg:h-[300px] rounded-2xl overflow-hidden shadow-lg">
              <div className="w-full h-full">
                <Image
                  src="/aboutus.png"
                  alt="Construction work"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="lg:max-w-6xl sm:w-full text-black bg-[#FFF9E2] mx-0 py-10 md:gap-0 gap-8 sm:mx-5 md:mx-[4vw] lg:mx-0 grid grid-cols-1 md:grid-cols-2 items-center md:mt-20 sm:mt-12 mt-7 justify-center">
          <div className=" md:border-r border-black ">
            <div className="flex  md:px-9 px-4  flex-col items-start gap-3">
              <Image src="/icon1.png" alt="aboutus" width={40} height={40} />

              <div>
                <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
                <p className="md:text-sm text-xs leading-relaxed text-black md:mr-16 justify-center tracking-wide ">
                  To deliver innovative, sustainable, and cost-effective construction and design
                  solutions while upholding the highest standards of professionalism, safety, and
                  client trust.
                </p>
              </div>
            </div>
          </div>

          <div className=" ">
            <div className="flex flex-col  md:px-8 px-4  items-start gap-3">
              <Image src="/icon2.png" alt="aboutus" width={40} height={40} />
              <div>
                <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
                <p className="md:text-sm text-xs leading-relaxed text-black  justify-center tracking-wide">
                  To be recognized as a leading construction and consultancy firm in the
                  Philippines, known for excellence, integrity, and engineering innovation that
                  improve communities and empower businesses.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:px-4 md:py-16 py-10 lg:max-w-6xl  mx-4 sm:mx-5 md:mx-[4vw] lg:mx-0">
          <h2 className="md:text-2xl text-xl font-bold text-black md:mb-4 mb-3">What We Do</h2>
          <p className="md:text-sm text-xs text-justify tracking-wide text-gray-700 md:mb-9 mb-6">
            At GSL Construction, Design & Consultancy (GSL CDC), we deliver end-to-end solutions in
            design, construction, and consultancy. Our team of licensed architects and
            ASEP-certified engineers ensures that every project is handled with precision,
            innovation, and professionalism.
          </p>

          <div className="grid md:grid-cols-2 md:gap-10 gap-7">
            <div>
              <h3 className="font-semibold mb-2 md:text-base text-sm text-gray-900">
                1. Architectural & Construction Services
              </h3>
              <ul className="list-disc list-inside md:text-sm text-xs space-y-1 md:space-y-0 text-gray-700 ml-4">
                <li>Design & Build</li>
                <li>Renovation & Maintenance</li>
                <li>Project Management</li>
                <li>Consultancy</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2 md:text-base text-sm text-gray-900">
                2. Structural Steel & Signage Works
              </h3>
              <ul className="list-disc list-inside  md:text-sm text-xs space-y-1 md:space-y-0 text-gray-700 ml-4">
                <li>Design and Construction of Structural Steel Billboard Frames</li>
                <li>Structural Brackets & Holders for LED Advertising and Large Signages</li>
                <li>Structural Plans for Monopole and 2-Pole Structures</li>
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-semibold mb-2 md:text-base text-sm text-gray-900">
              3. Specialized Projects
            </h3>
            <ul className="list-disc list-inside  md:text-sm text-xs space-y-1 md:space-y-0 text-gray-700 ml-4">
              <li>Residential Homes (modern, sustainable designs)</li>
              <li>Commercial Buildings (retail, office, hospitality)</li>
              <li>Institutional Facilities (schools, healthcare centers)</li>
            </ul>
          </div>
        </div>

        <div className=" mx-0 mt-6 sm:mx-5 sm:w-full md:mx-[4vw] lg:mx-0 lg:max-w-6xl">
          <div className="md:px-12 px-4 md:py-9 rounded-lg py-10 tracking-wide leading-loose bg-[#FFF9E2] ">
            <div className="">
              <h2 className="text-2xl text-black font-bold mb-5">Why Choose GSL CDC?</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-sm mb-1 text-gray-900">
                    Trusted Local Expertise
                  </h4>
                  <p className="text-xs text-gray-700 mb-4">
                    Deep understanding of Laguna’s construction needs.
                  </p>

                  <h4 className="font-semibold text-sm mb-1 text-gray-900">
                    Client-Centered Approach
                  </h4>
                  <p className="text-xs text-gray-700">
                    Quality-driven and client-focused service.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-sm mb-1 text-gray-900">Skilled Workforce</h4>
                  <p className="text-xs text-gray-700 mb-4">
                    Wide expertise across residential, commercial, institutional, and structural
                    projects.
                  </p>

                  <h4 className="font-semibold text-sm mb-1 text-gray-900">
                    Commitment to Quality
                  </h4>
                  <p className="text-xs text-gray-700">
                    Proven track record in structural steel and large-scale billboard construction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
