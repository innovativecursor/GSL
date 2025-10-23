export interface HeroData {
  heading: string
  subheading: string
  backgroundImage: { url: string }
}

export interface TestimonialData {
  id: number
  name: string
  role: string
  feedback: string
  rating: number
  image: {
    id: string
    url: string
    filename: string
    mimeType: string
  }
  createdAt: string
  updatedAt: string
}

export interface ProjectData {
  id: number
  title: string
  description: string
  category: string
  location: string
  image: {
    id: string
    url: string
    filename: string
    mimeType: string
  }
  createdAt: string
  updatedAt: string
}

export interface SocialLinksData {
  facebook?: string
  twitter?: string
  instagram?: string
  linkedin?: string
  youtube?: string
}
