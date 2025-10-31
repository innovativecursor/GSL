'use client'

import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { fetchDataPost } from '../../utils/fetchData'
import endpoints from '../../config/endpoints'

export const ContactData = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      await fetchDataPost(endpoints.contactSubmissions.create, form)
      setForm({ fullName: '', email: '', phone: '', message: '' })
      toast.success('Message sent successfully!')
    } catch (error) {
      console.error(error)
      toast.error('Failed to send message.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="relative">
      <Toaster position="top-right" />

      {isLoading && (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm z-[9999]">
          <div className="relative w-20 h-20">
            <div className="absolute inset-0 rounded-full border-4 border-t-transparent border-b-transparent border-[#B7CD00] animate-spin"></div>
            <div className="absolute inset-2 rounded-full border-4 border-t-transparent border-b-transparent border-[#fff9b0] animate-[spin_2s_linear_infinite_reverse]"></div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              required
              placeholder="Enter Your Name"
              className="w-full border text-black placeholder:text-xs border-gray-300 bg-[#FFFBE9] rounded-md px-3 py-3 outline-none"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Enter Your Email"
              className="w-full border text-black placeholder:text-xs border-gray-300 bg-[#FFFBE9] rounded-md px-3 py-3 outline-none"
            />
          </div>
        </div>

        <div>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            placeholder="Enter Your Phone No"
            className="w-full border text-black placeholder:text-xs border-gray-300 bg-[#FFFBE9] rounded-md px-3 py-3 outline-none"
          />
        </div>

        <div>
          <textarea
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
            placeholder="Enter Your Message"
            className="w-full text-black border placeholder:text-xs border-gray-300 bg-[#FFFBE9] rounded-md px-3 py-3 outline-none"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="bg-[#FCD33D] text-black font-semibold px-8 py-2.5 rounded-full text-xs transition hover:bg-black hover:text-white"
        >
          {isLoading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  )
}
