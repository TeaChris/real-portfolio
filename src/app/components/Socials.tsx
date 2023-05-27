import Image from 'next/image'
import Link from 'next/link'

import { socialLinks, SocialLinks } from '../../../data'

export default function Socials() {
  return (
    <div className="hidden lg:flex lg:flex-col lg:items-center lg:gap-1 lg:top-0 lg:left-12 lg:fixed">
      {/* line */}
      <div className="w-0.5 h-40 rounded-sm bg-gray"></div>
      <div className="">
        <ul className="flex flex-col items-center gap-2">
          {socialLinks.map((socials: SocialLinks) => {
            const { id, image, title, url } = socials
            return (
              <li key={id} className="w-8 h-8">
                <Link href={url} target="_blank" className="w-8 h-8">
                  <Image
                    src={image}
                    alt={title}
                    className="w-8 h-8 md:cursor-pointer lg:cursor-pointer"
                  />
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
