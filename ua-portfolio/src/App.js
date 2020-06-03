import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import { Route, Switch } from "react-router-dom"
import Home from "./pages/home"
import Projects from "./pages/projects"
import Coop from "./pages/coop"
import Contact from "./pages/contact"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/projects">
          <Header sel={1} />
          <Projects />
        </Route>
        <Route path="/coop">
          <Header sel={2} />
          <Coop />
        </Route>

        <Route path="/contact">
          <Header sel={3} />
          <Contact />
        </Route>
      </Switch>
    </div >
  );
}

export default App;
