import Image from 'next/image'

import pattern from '../../assets/pattern.png'
import dots from '../../assets/Dots.png'

export default function FunFact() {
  return (
    <section className="w-full h-[30rem] mt-20 lg:mt-0">
      <div className="w-wsm mx-auto h-fit md:w-wmd md:mx-auto lg:w-wlg lg:mx-auto flex flex-col items-start gap-4 md:gap-8">
        <h2 className="text-lg lg:text-4xl text-gray">
          <span className="text-primary">#</span>my-fun-facts
        </h2>
        <div className="w-full h-fit py-3 flex items-center gap-[10%]">
          <div className="w-full lg:w-[55%] h-fit grid grid-cols-1 items-center gap-4 lg:grid lg:grid-cols-2 lg:items-center lg:gap-4">
            <div className="w-full lg:w-fit h-fit py-2 px-3 border border-gray">
              <h6 className="text-gray text-sm">
                I code for a minimum of
                <span className="text-primary"> 7 hours </span>per
                <span className="text-primary"> day</span>
              </h6>
            </div>
            <div className="w-full lg:w-fit h-fit py-2 px-3 border border-gray grid place-items-center">
              <h6 className="text-gray text-sm">
                When I am not coding
                <span className="text-primary">
                  {' '}
                  I am probably looking for what to develope{' '}
                </span>
                <span className="text-primary"> next</span>
              </h6>
            </div>
            <div className="w-full lg:w-fit h-fit py-2 px-3 border border-gray grid place-items-center">
              <h6 className="text-gray text-sm">
                Fixing a lot of<span className="text-primary"> bugs </span>has
                helped my coding journey
                <span className="text-primary">the most</span>
              </h6>
            </div>
            <div className="w-full lg:w-fit h-fit py-2 px-3 border border-gray grid place-items-center">
              <h6 className="text-gray text-sm">
                I love<span className="text-primary"> functional </span>and
                <span className="text-primary"> logical</span> more
              </h6>
            </div>
            
          </div>

          {/* right */}
          <div className="hidden lg:block lg:w-[35%] lg:h-80 lg:relative">
            <Image
              src={pattern}
              alt="pattern"
              className="bottom-12 right-8 absolute"
            />
            <Image src={dots} alt="dots" className="top-8 left-8 absolute" />
          </div>
        </div>
      </div>
    </section>
  )
}
