import Link from 'next/link'
import Image from 'next/image'
import { BsArrowRight } from 'react-icons/bs'

import person from '../../assets/about.png'
import dotts from '../../assets/dotts.png'

export default function AboutMe() {
  return (
    <section className="w-full h-[27rem] lg:h-[40rem]">
      <div className="w-wsm mx-auto md:w-wmd md:mx-auto lg:w-wlg lg:mx-auto">
        <div className="w-full h-fit py-4 lg:flex lg:flex-row lg:items-center lg:justify-between">
          <div className="w-full lg:w-[45%] h-fit flex flex-col items-start gap-8">
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
          </div>

          {/* image */}
          <div className="hidden lg:block lg:w-[45%] lg:h-fit lg:relative">
            <Image src={person} alt="image" className="" />
            <Image
              src={dotts}
              alt="image"
              className="top-20 left-12 absolute"
            />
            <Image
              src={dotts}
              alt="image"
              className="bottom-12 right-12 absolute"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
