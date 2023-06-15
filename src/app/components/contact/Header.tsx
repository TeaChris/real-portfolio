import Image from 'next/image'

import twitter from '../../assets/Twitter.svg'
import telegram from '../../assets/Telegram.svg'
import linkedin from '../../assets/Linkedin.svg'
import email from '../../assets/Email.svg'

import { BsWhatsapp, BsTelegram } from 'react-icons/bs'

export default function Header() {
  return (
    <header className="w-full h-fit py-8">
      <div className="w-wsm mx-auto md:wmd md:mx-auto lg:w-wlg lg:mx-auto">
        <div className="w-full h-fit lg:flex lg:flex-row lg:items-start lg:gap-[8%]">
          <div className="w-full lg:w-[45%] h-fit py-3">
            <p className="text-gray text-sm lg:text-lg">
              I’m interested in freelance opportunities. However, if you have
              other request or question, don’t hesitate to contact me
            </p>
          </div>

          {/*  */}
          <div className="hidden lg:flex items-start gap-8 w-[45%] h-fit ">
            <div className="w-36 h-fit py-3 px-2 grid place-items-center border border-gray">
              <div className="w-full h-fit flex flex-col items-start gap-1">
                <h6 className="text-white text-sm">Chat me here</h6>
                <div>
                  <a
                    href=""
                    className="w-fit h-fit p-2 flex items-center gap-2"
                  >
                    <BsWhatsapp style={{ fontSize: '0.875rem' }} />{' '}
                    <span className="text-sm text-gray">Whatsapp</span>
                  </a>
                </div>
                <div>
                  <a
                    href=""
                    className="w-fit h-fit p-2 flex items-center gap-2"
                  >
                    <Image src={telegram} alt="" className="w-4 h-4" />
                    <span className="text-sm text-gray">telegram</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-36 h-fit py-3 px-2 grid place-items-center border border-gray">
              <div className="w-full h-fit flex flex-col items-start gap-1">
                <h6 className="text-white text-sm">Follow my updates here</h6>
                <div>
                  <a
                    href=""
                    className="w-fit h-fit p-2 flex items-center gap-2"
                  >
                    <Image src={twitter} alt="" className="w-4 h-4" />
                    <span className="text-sm text-gray">twitter</span>
                  </a>
                </div>
                <div>
                  <a
                    href=""
                    className="w-fit h-fit p-2 flex items-center gap-2"
                  >
                    <Image src={linkedin} alt="" className="w-4 h-4" />
                    <span className="text-sm text-gray">linkedin</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-36 h-fit py-3 px-2 grid place-items-center border border-gray">
              <div className="w-full h-fit flex flex-col items-start gap-1">
                <h6 className="text-white text-sm">Send me a mail here</h6>
                <div>
                  <a
                    href=""
                    className="w-fit h-fit p-2 flex items-center gap-2"
                  >
                    <Image src={email} alt="" className="w-4 h-4" />
                    <span className="text-sm text-gray">email</span>
                  </a>
                </div>
                <div>
                  <a
                    href=""
                    className="w-fit h-fit p-2 flex items-center gap-2"
                  >
                    <Image src={email} alt="" className="w-4 h-4" />
                    <span className="text-sm text-gray">outlook</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
