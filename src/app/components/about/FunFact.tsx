import Image from 'next/image'

import pattern from '../../assets/pattern.png'
import dots from '../../assets/Dots.png'

export default function FunFact() {
  return (
    <section className="w-full h-[30rem]">
      <div className="w-wsm h-fit md:w-wmd md:mx-auto lg:w-wlg lg:mx-auto flex flex-col items-start gap-8">
        <h2 className="text-lg lg:text-4xl text-gray">
          <span className="text-primary">#</span>my-fun-facts
        </h2>
        <div className="w-full h-fit py-3 flex items-center gap-[10%]">
          <div className="w-[55%] h-fit grid grid-cols-1 items-center gap-4 lg:grid lg:grid-cols-2 lg:items-center lg:gap-4">
            <div className="w-fit h-fit py-2 px-3 border border-gray">
              <h6 className="text-gray text-sm">
                I like<span className="text-primary"> winter </span>more than
                <span className="text-primary"> summer</span>
              </h6>
            </div>
            <div className="w-fit h-fit py-2 px-3 border border-gray grid place-items-center">
              <h6 className="text-gray text-sm">
                I like<span className="text-primary"> winter </span>more than
                <span className="text-primary"> summer</span>
              </h6>
            </div>
            <div className="w-fit h-fit py-2 px-3 border border-gray grid place-items-center">
              <h6 className="text-gray text-sm">
                I like<span className="text-primary"> winter </span>more than
                <span className="text-primary"> summer</span>
              </h6>
            </div>
            <div className="w-fit h-fit py-2 px-3 border border-gray grid place-items-center">
              <h6 className="text-gray text-sm">
                I like<span className="text-primary"> winter </span>more than
                <span className="text-primary"> summer</span>
              </h6>
            </div>
            <div className="w-fit h-fit py-2 px-3 border border-gray grid place-items-center">
              <h6 className="text-gray text-sm">
                I like<span className="text-primary"> winter </span>more than
                <span className="text-primary"> summer</span>
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
