import HomeHeader from './components/home/HomeHeader'
import HomeProject from './components/home/HomeProject'
import Quote from './components/home/Quote'
import Skills from './components/home/Skills'
import About from './components/home/About'
import Contact from './components/home/Contact'

export default function Home() {
  return (
    <>
      <HomeHeader />
      <Quote />
      <HomeProject />
      <Skills />
      <About />
      <Contact />
    </>
  )
}
