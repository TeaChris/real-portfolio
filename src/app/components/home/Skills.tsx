import Image from 'next/image'
import dotts from '../../assets/dotts.png'
import rect from '../../assets/rect.png'
import rec from '../../assets/rec.png'
import pattern from '../../assets/pattern.png'

export default function Skills() {
  return (
    <section className="w-full h-fit py-3 lg:h-[30rem]">
      <div className="w-wsm mx-auto h-full py-4 md:w-wmd md:mx-auto lg:w-wlg lg:mx-auto flex flex-col items-start gap-8">
        <div className="flex items-center gap-4">
          <h4 className="text-2xl lg:text-4xl">
            <span className="text-primary">#</span>skills
          </h4>
          <div className="w-52 h-px bg-primary"></div>
        </div>

        {/* bottom */}
        <div className="w-full h-fit flex items-center justify-between py-3">
          {/*  */}
          <div className="hidden lg:block lg:w-[45%] lg:h-96 lg:relative">
            <Image src={dotts} alt="" className="" />
            <Image src={rec} alt="" className="w-20 right-8 top-2 absolute" />
            <Image src={pattern} alt="" className="bottom-0 left-2 absolute" />
            <Image src={dotts} alt="" className="bottom-20 left-48 absolute" />
            <Image src={rect} alt="" className="bottom-12 right-8 absolute" />
          </div>

          {/* right */}
          <div className="w-full h-fit flex flex-col items-center gap-4  md:w-full md:flex md:flex-row lg:w-[45%] lg:flex lg:flex-row lg:items-start lg:gap-4">
            <div className="w-36 h-fit py-2 border border-gray ">
              <div className="w-full h-fit px-2">
                <h6 className="capitalize">languages</h6>
              </div>
              <div className="w-full h-fit mt-2 border-t px-2">
                <span className="text-xs capitalize text-gray">
                  typescript javascript
                </span>
              </div>
            </div>

            {/* middle */}
            <div className="md:flex md:flex-col md:items-center md:gap-3">
              <div className="w-36 h-fit py-2 border border-gray">
                <div className="w-full h-fit px-2">
                  <h6 className="capitalize">database</h6>
                </div>
                <div className="w-full h-fit mt-2 border-t px-2">
                  <span className="text-xs capitalize text-gray">
                    mongodb firebase superbase prisma
                  </span>
                </div>
              </div>

              {/* second */}
              <div className="w-36 h-fit py-2 border border-gray">
                <div className="w-full h-fit px-2">
                  <h6 className="text-white capitalize">others</h6>
                </div>
                <div className="w-full h-fit mt-2 border-t-gray px-2">
                  <span className="text-xs capitalize text-gray">
                    HTML css scss tailwind styled-component strapi css-in-js
                    bootstrap mui
                  </span>
                </div>
              </div>
            </div>

            {/* third */}
            <div className="md:flex md:flex-col md:items-center md:gap-3">
              <div className="w-36 h-fit py-2 border border-gray">
                <div className="w-full h-fit px-2">
                  <h6 className="capitalize">tools</h6>
                </div>
                <div className="w-full h-fit mt-2 border-t px-2">
                  <span className="text-xs capitalize text-gray">
                    vs-code figma sanity strapi google-font font-awesome
                    material-ui next-auth redux-tool-kit zutsand git github api
                  </span>
                </div>
              </div>

              <div className="w-36 h-fit py-2 border border-gray">
                <div className="w-full h-fit px-2">
                  <h6 className="text-white capitalize">frameworks</h6>
                </div>
                <div className="w-full h-fit mt-2 border-t-gray px-2">
                  <span className="text-xs capitalize text-gray">
                    react nextjs vue react-native
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
