'use client'

import Image from 'next/image'
import Link from 'next/link'

import { TbArrowWaveRightDown } from 'react-icons/tb'
import { AiFillGithub } from 'react-icons/ai'

import { project, Project } from './../../../../data'

export default function CompleteApp() {
  return (
    <section className="w-full h-fit">
      <div className="w-wsm mx-auto h-fit md:w-wmd md:mx-auto md:h-fit lg:w-wlg lg:mx-auto lg:h-fit">
        <div className="w-full h-fit flex flex-col items-start gap-8">
          <h3 className="text-sm lg:text-3xl">
            <span className="text-primary">#</span>complete-app
          </h3>
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
      </div>
    </section>
  )
}
