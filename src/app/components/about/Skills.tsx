export default function Skills() {
  return (
    <section className="w-full h-fit py-4 lg:h-[30rem]">
      <div className="w-wsm mx-auto md:w-wmd md:mx-auto lg:w-wlg lg:mx-auto flex flex-col items-start gap-8">
        <h2 className="text-2xl lg:text-4xl text-white">
          <span className="text-primary">#</span>skills
        </h2>
        <div className="w-full h-fit grid grid-cols-1 items-start gap-4 md:w-full md:grid md:grid-cols-2 md:place-items-center md:gap-5 lg:w-full lg:grid lg:grid-cols-5 lg:place-items-start lg:gap-4">
          <div className="w-60 lg:w-36 h-fit py-2 border border-gray ">
            <div className="w-full h-fit px-2">
              <h6 className="capitalize">languages</h6>
            </div>
            <div className="w-full h-fit mt-2 border-t px-2">
              <span className="text-xs capitalize text-gray">
                typescript javascript python
              </span>
            </div>
          </div>

          <div className="w-72 lg:w-36 h-fit py-2 border border-gray">
            <div className="w-full h-fit px-2">
              <h6 className="text-white capitalize">frameworks</h6>
            </div>
            <div className="w-full h-fit mt-2 border-t px-2">
              <span className="text-xs capitalize text-gray">
                react nextjs vue react-native
              </span>
            </div>
          </div>

          <div className="w-80 lg:w-36 h-fit py-2 border border-gray">
            <div className="w-full h-fit px-2">
              <h6 className="capitalize">database</h6>
            </div>
            <div className="w-full h-fit mt-2 border-t px-2">
              <span className="text-xs capitalize text-gray">
                mongodb firebase superbase prisma
              </span>
            </div>
          </div>

          <div className="w-full lg:w-44 h-fit py-2 border border-gray">
            <div className="w-full h-fit px-2">
              <h6 className="text-white capitalize">others</h6>
            </div>
            <div className="w-full h-fit mt-2 border-t px-2">
              <span className="text-xs capitalize text-gray">
                HTML css scss tailwind styled-component strapi css-in-js
                bootstrap mui
              </span>
            </div>
          </div>

          <div className="w-full lg:w-52 h-fit py-2 border border-gray">
            <div className="w-full h-fit px-2">
              <h6 className="capitalize">tools</h6>
            </div>
            <div className="w-full h-fit mt-2 border-t px-2">
              <span className="text-xs capitalize text-gray">
                vs-code figma sanity strapi google-font font-awesome material-ui
                next-auth redux-tool-kit zutsand git github api
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
