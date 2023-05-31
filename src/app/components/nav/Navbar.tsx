'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navLinks, NavLink, socialLinks, SocialLinks } from '../../../../data'
import { useState, useEffect } from 'react'

import { RiMenu3Fill } from 'react-icons/ri'
import logo from '../../assets/olas.png'
import MobileNav from './MobileNav'

export default function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  // open and close navigation
  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  // change properties on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const shouldLogoBeScrolled = scrollTop > 0
      setIsScrolled(shouldLogoBeScrolled)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav
      className={`w-full h-16 bg-background grid place-items-center z-10 top-0 left-0 fixed ${
        isScrolled ? 'shadow-black shadow-md' : ''
      }`}
    >
      <div className="w-wsm mx-auto h-full md:w-wmd md:mx-auto md:h-full lg:w-wlg lg:h-full lg:mx-auto flex items-center justify-between">
        {/* logo */}
        <div className="w-52 h-full">
          <Link href="/" className="w-full h-full">
            <Image
              src={logo}
              alt="olasunkanmi's logo"
              className="w-full h-14 object-contain"
            />
          </Link>
        </div>

        {/* links */}
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          <ul className="hidden lg:flex lg:items-center lg:gap-8">
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
        <button className="block lg:hidden" onClick={handleOpen}>
          <RiMenu3Fill style={{ fontSize: '1.5rem', color: '#abb2bf' }} />
        </button>
      </div>

      {/* mobile nav */}
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  )
}
