
import React from 'react';
import './App.css';
import Home from './components/Home/home';
import About from './components/About/about';
import Projects from './components/Proyects/proyects';
import Contact from './components/Contact/contact';

class App extends React.Component {
  render () {
  return (
    <div>
    <header ></header>
    <div  className="App">
    <a  id="top"><Home /></a> 
      <a  id="about"> <About /></a>
      <a  id="projects"> <Projects /></a>
      <a  id="contact"><Contact /></a>
    </div>
    </div>
    
  );
}
}

export default App;

 