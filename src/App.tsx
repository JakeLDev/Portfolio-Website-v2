import { Flex, Container } from '@chakra-ui/react'
import Title from './components/title'
import './App.css'
import TitleBar from './components/titlebar'
import Home from './sections/home'
import Projects from './sections/projects'
import WorkExperiences from './sections/workExperiences'
import Education from './sections/education'
import Skills from './sections/skills'
import ContactCard from './components/contactCard'
import Footer from './components/footer'
import ParticleContainer from './components/particle-container'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <ParticleContainer
            width={"100vw"}
            height={"45vh"} />
      <Flex id="Page" justify="center">
        <Container centerContent minW="80%" maxW="2xl">
          <TitleBar />
          <Home />
          <Title text="Projects" elementId="ProjectsTitle">
            <Projects />
          </Title>
          <Title text="Skills" elementId="SkillsTitle">
            <Skills />
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
