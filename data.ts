import img1 from './src/app/assets/Github.svg'
import img2 from './src/app/assets/Twitter.svg'
import img3 from './src/app/assets/Linkedin.svg'

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
