import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Header from './components/Header';
import { ModalProvider } from './components/ModalContext.jsx';
import Dashboard from './views/Dashboard.jsx';
import Group from './views/Group';
import Students from './views/Students';
import SingleStudent from './views/SIngleStudent';
import WebcamTest from './views/WebcamTest';
import ErrorPage from './views/404';
import QrCodeView from './views/QRCode';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <ModalProvider>
        <Router>

          <div className="flex flex-col" />
          <Header />
          <Switch>
            <Route
              exact
              path="/"
            >
              <Dashboard />
            </Route>
            <Route path="/group/:id">
              <Group />
            </Route>
            <Route path="/students/:id">
              <SingleStudent />
            </Route>
            <Route path="/students">
              <Students />
            </Route>
            <Route path="/webcam">
              <WebcamTest />
            </Route>
            <Route path="/qr/share">
              <QrCodeView />
            </Route>
            <Route
              exact
              path="*"
            >
              <ErrorPage />
            </Route>
          </Switch>
        </Router>
      </ModalProvider>
    </div>
  );
}

export default App;
