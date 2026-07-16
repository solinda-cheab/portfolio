export interface Project {
  id: string
  name: string
  tagline: string
  description: string
  stack: string[]
  features?: string[]
  liveUrl?: string
  githubUrl?: string
  image?: string
  featured?: boolean
}

export interface SkillGroup {
  category: string
  skills: string[]
}

export interface ExperienceItem {
  role: string
  org: string
  period?: string
  points: string[]
}

export interface Achievement {
  icon: string
  title: string
  org?: string
}

export interface Certificate {
  name: string
  issuer: string
}

export interface EducationItem {
  school: string
  degree: string
  period: string
}

export interface SocialLink {
  label: string
  url: string
  icon: 'github' | 'linkedin' | 'mail' | 'telegram'
}
