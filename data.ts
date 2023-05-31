import img1 from './src/app/assets/Github.svg'
import img2 from './src/app/assets/Twitter.svg'
import img3 from './src/app/assets/Linkedin.svg'

import project1 from './src/app/assets/project1.png'
import project2 from './src/app/assets/project2.png'
import project3 from './src/app/assets/project3.png'

export interface NavLink {
  id: number
  title: string
  url: string
}

export const navLinks: NavLink[] = [
  { id: 1, title: 'about-me', url: '/about' },
  { id: 2, title: 'works', url: '/work' },
  { id: 3, title: 'resume', url: '/resume' },
  { id: 4, title: 'contact', url: '/contact' },
  { id: 5, title: 'blog', url: '/blog' },
]

// social links
export interface SocialLinks {
  id: number
  title: string
  image: string
  url: string
}

export const socialLinks: SocialLinks[] = [
  { id: 1, image: img1, title: 'github', url: 'https://github.com/TeaChris' },
  { id: 2, image: img2, title: 'twitter', url: 'https://github.com/TeaChris' },
  { id: 3, image: img3, title: 'linkden', url: 'https://github.com/TeaChris' },
]

export interface Project {
  id: number
  title: string
  image: any
  tech: string
  desc: string
  liveLink: string
  github: string
}

export const project: Project[] = [
  {
    id: 1,
    image: project1,
    title: 'task manager',
    tech: 'Next.js Redux-tool-kit Tailwind Prisma MongoDB',
    desc: 'A fullstack app that enables you to create, edit, manage and delete tasks in an organized manner',
    liveLink: 'managebar.vercel.app',
    github: 'https://github.com/TeaChris/manage',
  },
  {
    id: 2,
    image: project2,
    title: 'ber shop',
    tech: 'Next.js Redux-tool-kit Tailwind Prisma MongoDB api',
    desc: 'a fullstack app that enables you to shop whatever product you care for',
    liveLink: 'bershop.vercel.app',
    github: 'https://github.com/TeaChris/bershop',
  },
  {
    id: 3,
    image: project3,
    title: 'ber airbnb',
    tech: 'Next.js Redux-tool-kit Tailwind Prisma MongoDB api',
    desc: 'an airbnb clone',
    liveLink: 'berairbnb.vercel.app',
    github: 'https://github.com/TeaChris/berairbnb',
  },
]
