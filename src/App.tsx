import { lazy, Suspense } from 'react'
import { Flex, Container } from '@chakra-ui/react'
import Title from './components/title'
import './App.css'
import TitleBar from './components/titlebar'
import Home from './sections/home'
import Projects from './sections/projects'
import WorkExperiences from './sections/workExperiences'
import Education from './sections/education'
import ContactCard from './components/contactCard'
import Footer from './components/footer'
// Loaded separately so the particle library and skill icons don't delay the first paint
const Skills = lazy(() => import('./sections/skills'))
const ParticleContainer = lazy(() => import('./components/particle-container'))

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Suspense fallback={null}>
        <ParticleContainer
              width={"100%"}
              height={"45vh"} />
      </Suspense>
      <Flex id="Page" justify="center">
        <Container centerContent minW="80%" maxW="2xl">
          <TitleBar />
          <Home />
          <Title text="Projects" elementId="ProjectsTitle">
            <Projects />
          </Title>
          <Title text="Skills" elementId="SkillsTitle">
            <Suspense fallback={null}>
              <Skills />
            </Suspense>
          </Title>
          <Title text="Work Experience" elementId="WorkExperienceTitle">
            <WorkExperiences />
          </Title>
          <Title text="Higher Education" elementId="EducationTitle">
            <Education />
          </Title>
          <Title text="Contact Me" elementId="ContactTitle">
            <ContactCard />
          </Title>
        </Container>
      </Flex>
      <Footer />
    </>
  )
}

export default App
