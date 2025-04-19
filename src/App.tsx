import { useState } from 'react'
import Title from './components/title'
import './App.css'
import TitleBar from './components/titlebar'
import Home from './sections/home'
import AboutMe from './sections/aboutMe'
import Projects from './sections/projects'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div id="Page" className="flex justify-center">
        <div className="min-w-[70%] max-w-4xl justify-self-center">
          <TitleBar />
            {/* <h1 className="text-3xl font-bold underline">
            Hello world!
          </h1> */}

          <Home />
          <div className="h-dvh"></div>

          <Title text="About me" elementId="AboutMeTitle"/>
          <AboutMe />
          <div className="h-dvh"></div>
          <Title text="Projects" elementId="ProjectsTitle"/>
          <Projects />
          <div className="h-dvh"></div>
          <Title text="Work Experience" elementId="WorkExperienceTitle"/>
          <div className="h-dvh"></div>
        </div>
      </div>
    </>
  )
}

export default App
