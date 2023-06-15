import Footer from './components/Footer'
import Navbar from './components/nav/Navbar'
import Socials from './components/Socials'
import './globals.css'

import { Fira_Mono } from 'next/font/google'
import ToasterContext from './context/ToasterContext'

const fira = Fira_Mono({
  weight: '400',
  // display: 'swap',
  subsets: ['latin'],
})

export const metadata = {
  title:
    'OlasunkanBolu: Creating engaging websites with stunning designs and seamless functionality for optimal user experiences',
  description: 'frontend Developer & UX Engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${fira.className} bg-background text-white overflow-x-hidden relative`}
      >
        <ToasterContext />
        <Navbar />
        <Socials />
        {children}
        <Footer />
      </body>
    </html>
  )
}
