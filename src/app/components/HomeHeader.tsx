'use client'

import Link from 'next/link'
import Button from './Button'

import Image from 'next/image'
import person from '../assets/person.png'
import dots from '../assets/Dots.png'

export default function HomeHeader() {
  return (
    <header className="w-full h-[40rem] relative mt-20">
      <div className="w-wsm mx-auto h-full grid grid-cols-1 gap-8 items-center md:w-wmd md:mx-auto md:h-full md:grid md:grid-cols-2 md:items-center md:gap-12 lg:w-wlg lg:mx-auto lg:h-full">
        {/* left  */}
        <div className="w-full h-fit flex flex-col items-start gap-8">
          <h2 className="w-full text-4xl">
            Sunkanmi is a <span className="text-primary">mobile</span> and{' '}
            <span className="text-primary">web app</span>{' '}
            <span className="text-primary">frontend developer.</span>
          </h2>
          <div className="w-full h-fit flex flex-col items-start relative">
            <p className="text-sm text-gray">
              He crafts responsive websites where technologies meet creativity.
            </p>
            <Button text="">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <Link href="/contact">contact me!!</Link>
            </Button>
          </div>
        </div>

        {/* right */}
        <div className="flex flex-col items-start gap-0">
          <Image src={person} alt="" className="z-50" />
          <div className="lg:w-[25rem] h-fit px-2 py-1 flex items-center gap-2 right-[14.6rem] bottom-[6rem] absolute border border-gray">
            <div className="w-4 h-4 bg-primary"></div>
            <span className="text-sm text-gray">
              currently working on my{' '}
              <span className="font-bold text-primary">portfolio</span>
            </span>
          </div>
          <Image
            src={dots}
            alt="dots"
            className="lg:right-[14.4rem] lg:bottom-[9.5rem] absolute z-50"
          />
        </div>
        {/* 1 */}
        <div className="mother">
          <div className="box">
            <span></span>
          </div>
        </div>
        {/* 2 */}
        <div className="box-mother">
          <div className="square">
            <span></span>
          </div>
        </div>
        {/* 3 */}
        <div className="circle-mother">
          <div className="circle">
            <span></span>
          </div>
        </div>
        {/* 4 */}
        <div className="tri-mother">
          <div className="tri">
            <span></span>
          </div>
        </div>
      </div>
    </header>
  )
}
