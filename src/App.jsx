import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/BlogsContainer/BlogsContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App container">
    <Header/>
    <hr />
    <Blogs/>
    </div>
  )
}

export default App
