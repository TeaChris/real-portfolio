'use client'

import Button from '../Button'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { TbArrowWaveRightDown } from 'react-icons/tb'
import { AiFillGithub } from 'react-icons/ai'

import { project, Project } from './../../../../data'

import Image from 'next/image'

export default function HomeProject() {
  return (
    <section className="w-full h-fit py-10 mt-14">
      <div className="w-wsm mx-auto h-fit py-10 flex flex-col items-center gap-5 md:w-wmd md:mx-auto md:h-fit lg:w-wlg lg:mx-auto lg:h-fit lg:py-10 lg:flex lg:flex-col lg:item-start lg:gap-12">
        <div className="w-full hit-fit flex items-center justify-between lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center gap-4">
            <h4 className="text-2xl lg:text-4xl">
              <span className="text-primary">#</span>project
            </h4>
            <div className="lg:w-96 lg:h-px lg:bg-primary"></div>
          </div>
          <div className="w-32 h-8 relative">
            <Button text="">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              view all <HiOutlineArrowNarrowRight />
            </Button>
          </div>
        </div>

        {/* project */}
        <div className="w-full h-fit grid grid-cols-1 place-items-center gap-5 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:grid lg:grid-cols-3 lg:items-center lg:gap-4 px-3 py-3">
          {project.map((pro: Project) => {
            const { id, image, title, tech, desc, liveLink, github } = pro
            return (
              <div
                key={id}
                className=" md:w-64 w-80 h-fit pb-2 flex flex-col items-start justify-between border border-gray"
              >
                <Image src={image} alt={title} className="" />
                <div className="border border-y border-y-gray h-fit w-full p-2">
                  <span className="text-sm text-gray">{tech}</span>
                </div>
                <div className="p-2 flex flex-col items-start gap-2">
                  <h5 className="text-white text-lg capitalize">{title}</h5>
                  <span className="text-xs text-gray capitalize mt-2">
                    {desc}
                  </span>
                </div>
                <div className="w-full flex gap-8 items-center px-2 mt-3">
                  <button className="w-fit h-fit px-2 py-3 border border-primary flex items-center gap-2 text-sm text-gray hover:bg-primary hover:text-white transition duration-300">
                    live <TbArrowWaveRightDown />
                  </button>
                  <button className="w-fit h-fit px-2 py-3 border border-primary flex items-center gap-2 text-sm text-gray hover:bg-primary hover:text-white transition duration-300">
                    github <AiFillGithub />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
