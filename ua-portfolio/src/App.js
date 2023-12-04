import React from 'react';
import './App.css';
import Header from "./components/Header"
import { Route, Switch } from "react-router-dom"
import Home from "./pages/home"
import Projects from "./pages/projects"
import Coop from "./pages/experience"
import Contact from "./pages/contact"
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    secondary: {
      main: '#000000'
    }
  }
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/experience">
          <Header sel={1} />
          <Coop />
        </Route>
        <Route path="/projects">
          <Header sel={2} />
          <Projects />
        </Route>
      </Switch>
    </div >
    </MuiThemeProvider>
  );
}

export default App;
