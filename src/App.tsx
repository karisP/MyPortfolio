import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Navbar from "./Navbar";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/projects" render={() => <Projects />} />
        <Route exact path="/about" render={() => <Contact />} />
        <Route exact path="/skills" render={() => <Skills />} />
      </Switch>
    </div>
  );
};

export default App;
