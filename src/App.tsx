import * as React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Bio from './pages/Bio/Bio';
import Contact from './pages/Contact/Contact';
import Skills from './pages/Skills/Skills';
import Navbar from './Navbar';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' render={() => <Home />}/>
        <Route exact path='/projects' render={() => <Projects />} />
        <Route exact path='/bio' render={() => <Bio />} />
        <Route exact path='/contact' render={() => <Contact />} />
        <Route exact path='/skills' render={() => <Skills />} />
      </Switch>
    </div>
  );
}

export default App;
