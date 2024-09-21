import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-green-500'>
      <Navbar/>
      </div>
      {/* <Hero/> */}
      <Footer/>
    </>
  )
}

export default App
