import Image from 'next/image'
import quote from '../../assets/quote.svg'

export default function Quote() {
  return (
    <section className="w-full lg:h-fit py-16 relative mt-20">
      <div className="w-wsm mx-auto md:w-wmd md:mx-auto lg:w-wl lg:mx-auto grid place-items-center z-50">
        <Image
          src={quote}
          alt="quote"
          className="hidden lg:left-96 lg:top-[3.3rem] lg:absolute"
        />
        <Image
          src={quote}
          alt="quote"
          className="hidden lg:absolute lg:top-[6.3rem] lg:right-[26rem]"
        />
        <div className="flex flex-col items-end gap-0 z-50">
          {/* quote */}
          <div className="w-fit h-fit py-3 px-20 border border-gray grid place-items-center z-50">
            <h6 className="text-lg text-gray">
              code, craft, empower: web development journey.
            </h6>
          </div>
          <div className="w-fit h-fit py-3 px-4 border border-gray grid place-items-center z-50">
            <h6 className="text-lg text-gray">Sunkanmi</h6>
          </div>
        </div>
      </div>
      <div className="quote-mother">
        <div className="quote">
          <span></span>
        </div>
      </div>
    </section>
  )
}
