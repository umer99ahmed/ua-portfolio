import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import { Route, Switch } from "react-router-dom"
import Home from "./pages/home"
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/projects">
          <Header />
        </Route>
        <Route path="/coop">
          <Header />

          hello
        </Route>
        <Route path="/contact">
          <Header />

          4165182332
        </Route>
      </Switch>
    </div >
  );
}

export default App;
