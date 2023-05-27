import { ReactNode, Dispatch, SetStateAction } from 'react'

import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

import { navLinks, NavLink, socialLinks, SocialLinks } from '../../../data'

import { motion } from 'framer-motion'
import { GrClose } from 'react-icons/gr'

type MobileNavProps = {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, setIsOpen }) => {
  const pathname = usePathname()

  // open and close navigation
  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  // close navigation on link click
  const handleClose = () => {
    setIsOpen(false)
  }

  // framer variant
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '100%' },
  }
  return (
    <motion.div
      className="w-52 h-fit py-12 px-5 flex flex-col items-start top-0 right-0 absolute bg-background shadow-sm shadow-black"
      animate={isOpen ? 'open' : 'closed'}
      variants={variants}
    >
      <button
        className="grid place-items-center bg-gray w-8 h-8 rounded-sm right-8 top-4 absolute"
        onClick={handleOpen}
      >
        <GrClose style={{ fontSize: '1.5rem' }} />
      </button>
      <div className="flex flex-col items-start gap-8">
        <ul className="flex flex-col items-start gap-8 pt-20">
          {navLinks.map((links: NavLink) => {
            const { id, title, url } = links
            const isActive = pathname.startsWith(url)
            return (
              <li key={id} className="flex items-center gap-1">
                <span className="text-primary">#</span>
                <Link
                  href={url}
                  className={`text-base text-gray hover:text-white duration-300 ease-in-out ${
                    isActive ? 'text-white' : ''
                  }`}
                  onClick={handleClose}
                >
                  {title}
                </Link>
              </li>
            )
          })}
        </ul>
        <select
          name=""
          id=""
          className="bg-background border-0 text-gray focus:outline-0"
        >
          <option value="" className="text-sm">
            en
          </option>
          <option value="" className="text-sm">
            ru
          </option>
          <option value="" className="text-sm">
            sa
          </option>
        </select>
      </div>
      <div className="pt-10">
        <ul className="flex items-center gap-2">
          {socialLinks.map((socials: SocialLinks) => {
            const { id, image, title, url } = socials
            return (
              <li key={id} className="w-8 h-8">
                <Link href={url} target="_blank" className="w-8 h-8">
                  <Image src={image} alt={title} className="w-8 h-8" />
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </motion.div>
  )
}

export default MobileNav
