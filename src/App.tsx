import { useState } from 'react'
import { Box, Flex, Container } from '@chakra-ui/react'
import Title from './components/title'
import './App.css'
import TitleBar from './components/titlebar'
import Home from './sections/home'
import AboutMe from './sections/aboutMe'
import Projects from './sections/projects'
import WorkExperiences from './sections/workExperiences'
import Education from './sections/education'
import Skills from './sections/skills'
import Footer from './components/footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Flex id="Page" justify="center">
        <Container centerContent minW="70%" maxW="4xl">
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
          <Title text="Education" elementId="EducationTitle">
            <Education />
          </Title>
        </Container>
      </Flex>
      <Footer />
    </>
  )
}

export default App
