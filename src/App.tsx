import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/Header'
import {ModalProvider} from "./components/ModalContext.jsx";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from "./views/Dashboard.jsx"


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ModalProvider>
        <Router>
        
      <div className="flex flex-col"></div>
      <Header/>
      <Switch>
          <Route exact path="/">
            <Dashboard/>
          </Route>
          <Route exact path="*">
            <h1>404 Page</h1>
            {/* <Home /> */}
          </Route>
        </Switch>
      </Router>
      </ModalProvider>
    </div>
  )
}

export default App
