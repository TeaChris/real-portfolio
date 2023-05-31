import Image from 'next/image'
import email from '../../assets/Email.svg'
import telegram from '../../assets/Telegram.svg'

import { BsWhatsapp } from 'react-icons/bs'

export default function Contact() {
  return (
    <section className="w-full h-80 lg:h-[30rem] py-10 mt-14">
      <div className="w-wsm mx-auto md:w-wmd md:mx-auto lg:w-wlg lg:mx-auto flex flex-col items-start gap-8">
        <div className="flex items-center gap-4">
          <h4 className="text-2xl lg:text-4xl">
            <span className="text-primary">#</span>contacts
          </h4>
          <div className="w-52 h-px bg-primary"></div>
        </div>

        {/* bottom  */}
        <div className="w-full h-fit flex flex-col items-start justify-between lg:flex lg:flex-row lg:items-start lg:justify-between">
          <div className="w-full lg:w-[45%] h-fit py-2">
            <span className="text-gray text-sm first-letter:capitalize">
              I’m interested in gigs and jobs opportunities. However, if you
              have other request or question, don’t hesitate to contact me
            </span>
          </div>

          <div className="w-fit h-fit px-4 py-3 border border-gray flex items-center gap-5 lg:flex lg:flex-col lg:items-start lg:gap-5">
            <a
              href="mailto: olasunkanmiboluwatife110@gmail.com"
              className="flex items-center gap-2 bg-transparent capitalize text-gray text-xs"
              target="_blank"
            >
              <Image src={email} alt="email" className="w-[0.90rem]" />
              email
            </a>

            <a
              href="https://t.me/olasunkanbolu"
              className="flex items-center gap-2 bg-transparent capitalize text-xs text-gray"
              target="_blank"
            >
              <Image src={telegram} alt="email" className="w-[0.90rem]" />
              telegram
            </a>

            <a
              href="https://wa.me/+2348146913991"
              className="flex items-center gap-2 bg-transparent capitalize text-xs text-gray"
              target="_blank"
            >
              <BsWhatsapp />
              whatsapp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
