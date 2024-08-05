import { useState } from 'react'
import Title from './components/title'
import './App.css'
import TitleBar from './components/titlebar'
import Home from './sections/home'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex justify-center">
        <div className="min-w-[50%] max-w-4xl justify-self-center">
          <TitleBar />
            {/* <h1 className="text-3xl font-bold underline">
            Hello world!
          </h1> */}

          <Home />
          <div className="h-dvh"></div>

          <Title text="About me" elementId="AboutMeTitle"/>
          <div className="h-dvh"></div>
          <Title text="Projects" elementId="ProjectsTitle"/>
          <div className="h-dvh"></div>
          <Title text="Work Experience" elementId="WorkExperienceTitle"/>
          <div className="h-dvh"></div>
        </div>
      </div>
    </>
  )
}

export default App
