import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="flex flex-col"></div>
      <Header/>
    </div>
  )
}

export default App
