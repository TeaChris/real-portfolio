import Image from 'next/image'
import olas from '../assets/olas.png'
import twitter from '../assets/Twitter.svg'
import link from '../assets/Linkedin.svg'
import git from '../assets/Github.svg'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full h-48 border-t border-gray pt-5">
      <div className="sm:w-wsm sm:mx-auto md:w-wmd md:mx-auto w-wlg mx-auto h-full py-4 flex flex-col items-center justify-between">
        <div className="w-full h-fit p-2 flex flex-col items-start gap-4 lg:flex lg:flex-row lg:items-center lg:justify-between">
          <div className="w-full lg:w-fit h-fit flex flex-col items-start gap-4">
            <Image src={olas} alt="logo" className="w-28" />
            <span className="text-sm text-gray first-letter:capitalize">
              mobile app and full-stack web developer
            </span>
          </div>

          {/* media */}
          <div className="w-fit h-fit flex items-center gap-4 lg:flex lg:flex-col lg:items-center lg:gap-4">
            <h6 className="text-sm capitalize">media</h6>
            <div className="w-full flex items-center gap-3">
              <a href="">
                <Image src={twitter} alt="" className="" />
              </a>
              <a href="">
                <Image src={link} alt="" className="" />
              </a>
              <a href="">
                <Image src={git} alt="" className="" />
              </a>
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="w-fit h-fit">
          <span className="text-sm text-gray">{`© Copyright ${currentYear}. Made by Sunkanmi`}</span>
        </div>
      </div>
    </footer>
  )
}
