import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Title from './sections/title'
import './App.css'
import TitleBar from './components/titlebar'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <div> */}
        <TitleBar />
          <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
        <div className="h-dvh"></div>

      {/* </div> */}
      <Title />
    </>
  )
}

export default App
