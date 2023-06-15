import { ReactNode } from 'react'

type TitleProps = {
  text?: string
  children?: ReactNode
}

const Title: React.FC<TitleProps> = ({ text, children }) => {
  return (
    <div className="w-full h-32 mt-20 lg:mt-36">
      <div className="w-wsm mx-auto md:wmd md:mx-auto lg:wlg lg:mx-auto h-fit flex flex-col items-start gap-4 lg:pl-12">
        <h2 className="text-2xl lg:text-4xl">
          <span className="text-primary">./</span>
          {children}
        </h2>
        <span className="text-sm text-gray">{text}</span>
      </div>
    </div>
  )
}

export default Title
