import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/Header'
import {ModalProvider} from "./components/ModalContext.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ModalProvider>
      <div className="flex flex-col"></div>
      <Header/>
      </ModalProvider>
    </div>
  )
}

export default App
