import HomeHeader from './components/home/HomeHeader'
import HomeProject from './components/home/HomeProject'
import Quote from './components/home/Quote'
import Skills from './components/home/Skills'
import About from './components/home/About'
import Contact from './components/home/Contact'
import Footer from './components/footer'

export default function Home() {
  return (
    <div>
      <HomeHeader />
      <Quote />
      <HomeProject />
      <Skills />
      <About />
      <Contact />
    </div>
  )
}
