import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Cards from './components/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className="text-3xl font-bold underline">
      Ayushi Semi-Precious Jewellery!
    </h1>
    <Cards/>
    </>
  )
}

export default App
