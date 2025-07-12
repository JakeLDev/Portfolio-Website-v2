import { useState } from 'react'
import { Box, Flex, Container } from '@chakra-ui/react'
import Title from './components/title'
import './App.css'
import TitleBar from './components/titlebar'
import Home from './sections/home'
import AboutMe from './sections/aboutMe'
import Projects from './sections/projects'
import WorkExperiences from './sections/workExperiences'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Flex id="Page" justify="center">
        <Container centerContent minW="70%" maxW="4xl">
          <TitleBar />
            {/* <h1 className="text-3xl font-bold underline">
            Hello world!
          </h1> */}

          <Home />
          <Box h="100vh"></Box>

          <Title text="About me" elementId="AboutMeTitle"/>
          <AboutMe />
          <Box h="100vh"></Box>
          <Title text="Projects" elementId="ProjectsTitle"/>
          <Projects />
          <Box h="100vh"></Box>
          <Title text="Work Experience" elementId="WorkExperienceTitle"/>
          <WorkExperiences />
          <Box h="100vh"></Box>
        </Container>
      </Flex>
    </>
  )
}

export default App
