import Navbar from './components/Navbar'
import Socials from './components/Socials'
import Footer from './components/footer'
import './globals.css'
import { Fira_Mono } from 'next/font/google'

const fira = Fira_Mono({
  weight: '400',
  display: 'swap',
  subsets: ['latin'],
})

export const metadata = {
  title:
    'OlasunkanBolu: Creating engaging websites with stunning designs and seamless functionality for optimal user experiences',
  description:
    'Welcome to my portfolio! I am a skilled and passionate web developer, dedicated to creating stunning and functional websites. With expertise in HTML, CSS, JavaScript, and modern frameworks, I bring your visions to life. Whether you need a responsive website, interactive web applications, or e-commerce solutions, I deliver tailored solutions that exceed expectations. Explore my portfolio to see my diverse range of projects and let`s collaborate to turn your ideas into reality',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`bg-background text-white overflow-x-hidden relative ${fira.className}`}
      >
        <Navbar />
        <Socials />
        {children}
        <Footer />
      </body>
    </html>
  )
}
