import { useState } from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Contact() {
  const [status, setStatus] = useState('')

  return (
    <div id="contactus" className="">
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/contact.png')",
        }}
      >
        <div className=" w-full h-full">
          <div className="md:py-28 py-16 flex flex-col items-center justify-center text-white">
            <div className="flex flex-col items-center">
              <p className="font-bold text-4xl">Contact Us</p>
              <div className="w-28 h-[2px] mt-3 bg-[#FCD33D]"></div>
              <div className="font-light md:text-xs text-[9px] mt-5 text-center tracking-wide">
                <p>
                  Have a construction project in mind? Get in touch with our team to discuss how we
                  can bring
                </p>
                <p className="mt-1">your vision to life.</p>
              </div>
            </div>

            <div className="rounded-2xl w-full max-w-5xl grid md:grid-cols-2 gap-5 md:mt-12 mt-7">
              <form className="flex bg-white md:px-8 px-5 mx-3 md:pt-8 py-6 rounded-xl flex-col space-y-6 text-black">
                <h2 className="md:text-lg pt-5 md:pt-0 font-bold ">Send Us a Message</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-color mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Enter Your Name"
                      className="w-full border placeholder:text-xs border-gray-300 bg-[#FFFBE9] rounded-md px-3 py-2 focus:ring focus:ring-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-color mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Enter Your Email"
                      className="w-full border placeholder:text-xs border-gray-300 bg-[#FFFBE9] rounded-md px-3 py-2 focus:ring focus:ring-blue-500 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-color mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter Your Phone No"
                    className="w-full border placeholder:text-xs border-gray-300 bg-[#FFFBE9] rounded-md px-3 py-2 focus:ring focus:ring-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-color mb-2">Your Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="Enter Your Message"
                    className="w-full border placeholder:text-xs border-gray-300 bg-[#FFFBE9] rounded-md px-3 py-2 focus:ring focus:ring-blue-500 outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-[#FCD33D] text-black py-2.5 rounded-full text-xs md:text-sm transition-all duration-200 hover:bg-black hover:text-white"
                >
                  Send Message
                </button>

                {/* <p className="text-sm text-gray-600 mt-2">{status}</p> */}
              </form>

              <div className="text-white mx-4">
                <h2 className="text-2xl text-white font-semibold mb-4">Get in Touch</h2>
                <div className="flex flex-col md:items-start text-light gap-7">
                  <div className="flex items-start gap-2 text-white">
                    <MapPin className="w-7 h-7" />
                    <div>
                      <p className="text-xs font-medium mb-2">Main Office</p>
                      <p className="text-xs font-normal">
                        Unit B, Emerald Jade Green Building, 282 Epifanio de los Santos Ave,
                        Mandaluyong City, 1550 Metro Manila, Philippines
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start text-white gap-2">
                    <Phone className="w-4 h-4" />
                    <div>
                      <p className="text-xs font-medium mb-2">Phone Number</p>
                      <p className="text-xs">09776071925</p>
                    </div>
                  </div>
                  <div className="flex items-start text-white gap-2">
                    <Mail className="w-4 h-4" />
                    <div>
                      <p className="text-xs font-medium mb-2">Email Address</p>
                      <p className="text-xs">gslcdc.1725@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start text-white gap-2">
                    <Clock className="w-4 h-4" />
                    <div>
                      <p className="text-xs font-medium mb-2">Business Hours</p>
                      <p className="text-xs">Monday - Friday: 8:00 am - 5:00 pm</p>
                      <p className="text-xs">Saturday - Sunday & Holidays: Closed</p>
                    </div>
                  </div>
                </div>

                {/* <div className="w-full mt-5 rounded-xl" style={{ height: '200px' }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.093964269174!2d72.83607307498135!3d19.222215987047098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7d5b0b9d0f9%3A0x4f1a1c5f8dfd57e3!2sI%20C%20Colony%2C%20Borivali%20West%2C%20Mumbai%2C%20Maharashtra%20400103!5e0!3m2!1sen!2sin!4v1707054000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    className="md:rounded-xl rounded-md"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="I C Colony, Borivali West Location"
                  />
                </div> */}
                <div className="w-full mt-5 rounded-xl" style={{ height: '200px' }}>
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
        </div>
      </div>
    </div>
  )
}
