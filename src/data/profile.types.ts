export type Contact = {
  phone: string
  email: string
  linkedin: string
  github: string
}

export type PersonalInfo = {
  name: string
  pronouns: string
  headline: string
  location: string
  contact: Contact
  about: string
}

export type Skills = {
  languages: string[]
  frontend: string[]
  backend: string[]
  databases: string[]
  devops: string[]
  cloud: string[]
  core_cs: string[]
}

export type ExperienceItem = {
  role: string
  company: string
  duration: string
  location: string
  description: string[]
}

export type ProjectItem = {
  name: string
  type: string
  techStack: string[]
  description: string[]
}

export type EducationItem = {
  institution: string
  degree: string
  duration: string
  gpa: string
}

export type AchievementItem = {
  title: string
  organization: string
  duration: string
  description: string[]
}

export type Profile = {
  personalInfo: PersonalInfo
  skills: Skills
  experience: ExperienceItem[]
  projects: ProjectItem[]
  education: EducationItem[]
  achievements: AchievementItem[]
  certifications: string[]
}
