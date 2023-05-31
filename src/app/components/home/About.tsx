import Link from 'next/link'
import Image from 'next/image'

import { BsArrowRight } from 'react-icons/bs'

import person from '../../assets/about.png'
import dotts from '../../assets/dotts.png'

export default function About() {
  return (
    <section className="w-full h-fit py-12 lg:h-[40rem] mt-20">
      <div className="w-wsm mx-auto h-full flex flex-col items-start gap-8 md:w-wmd md:mx-auto lg:w-wlg lg:mx-auto lg:py-4 lg:flex lg:flex-row lg:items-center lg:justify-between">
        {/* top */}
        <div className="w-full lg:w-[45%] flex flex-col items-start gap-8">
          <div className="flex items-center gap-4">
            <h4 className=" text-2xl lg:text-4xl">
              <span className="text-primary">#</span>about-me
            </h4>
            <div className="w-20 lg:w-52 h-px bg-primary"></div>
          </div>

          <div className="w-full h-fit flex flex-col items-start gap-8">
            <h6 className="text-sm text-gray first-letter:capitalize">
              hello I`m Sunkanmi!
            </h6>
            <p className="text-sm text-gray">
              I’m a self-taught front-end developer based in Lagos, Nigeria. I
              can develop responsive & functional websites from scratch and
              raise them into modern user-friendly web experiences.
              <br />
              <br />
              Transforming my creativity and knowledge into a websites has been
              my passion for over 2 year. I have been helping various clients to
              establish their presence online. I always strive to learn about
              the newest technologies and frameworks.
            </p>
            <button className="w-fit h-fit px-3 py-3 border border-gray">
              <Link
                href="/contact"
                className=" flex items-center gap-2 text-gray text-xs capitalize"
              >
                read more <BsArrowRight />
              </Link>
            </button>
          </div>
        </div>

        {/* image */}
        <div className="w-full lg:w-[45%] h-fit relative">
          <Image src={person} alt="image" className="" />
          <Image src={dotts} alt="image" className="top-20 left-12 absolute" />
          <Image
            src={dotts}
            alt="image"
            className="bottom-12 right-12 absolute"
          />
        </div>
      </div>
    </section>
  )
}
