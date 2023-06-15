import Image from 'next/image'
import email from '../../assets/Email.svg'
import twitter from '../../assets/Twitter.svg'
import github from '../../assets/Github.svg'
import linkedin from '../../assets/Linkedin.svg'
import telegram from '../../assets/Telegram.svg'
import figma from '../../assets/Figma.svg'
import dribble from '../../assets/Dribble.svg'
import discord from '../../assets/Discord.svg'

export default function Media() {
  return (
    <section className="w-full h-fit lg:h-80 py-8 mt-20">
      <div className="w-wsm mx-auto md:w-wmd md:mx-auto lg:w-wlg lg:mx-auto">
        <div className="w-full h-fit flex flex-col items-start gap-8">
          <h3 className="text-lg lg:text-4xl">
            <span className="text-primary">#</span>all-media
          </h3>

          {/* media */}
          <div className="w-[30%] grid grid-cols-4 items-center gap-4">
            <Image src={linkedin} alt="linkedin" className="" />
            <Image src={twitter} alt="twitter" className="" />
            <Image src={github} alt="github" className="" />
            <Image src={figma} alt="figma" className="" />
            <Image src={dribble} alt="dribble" className="" />
            <Image src={email} alt="email" className="" />
            <Image src={telegram} alt="telegram" className="" />
            <Image src={discord} alt="discord" className="" />
          </div>
        </div>
      </div>
    </section>
  )
}
