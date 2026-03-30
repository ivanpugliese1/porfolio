export interface Project {
  name: string
  description: string
  tags: string[]
  github?: string
  preview?: string
  featured?: boolean,
  image?: string
}

export interface Experience {
  role: string
  company: string
  from: string
  to: string
  location: string
  description: string
  tags?: string[]
  link?: string
}