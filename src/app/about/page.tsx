import Title from '../components/Title'
import AboutMe from '../components/about/AboutMe'
import Skills from '../components/about/Skills'
import FunFact from '../components/about/FunFact'

export default function About() {
  return (
    <>
      <Title text="who am I?">about-me</Title>
      <AboutMe />
      <Skills />
      <FunFact />
    </>
  )
}
