const baseURLLive = 'http://localhost:3000/api'
const baseURLDev = 'http://localhost:3000/api'

const isLive = false
const baseUrl = isLive ? baseURLLive : baseURLDev

const endpoints = {
  hero: {
    getAll: `${baseUrl}/globals/hero`,
  },
  testimonials: {
    getAll: `${baseUrl}/testimonials`,
  },
  projects: {
    getAll: `${baseUrl}/projects`,
  },
}

export default endpoints
