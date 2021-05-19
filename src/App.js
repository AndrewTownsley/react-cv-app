import React from "react";
import "./App.css";
//Components
import Contact from './Components/Contact';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Work from './Components/Work';

function App() {

  return(
    <div>
      <Contact />
      <Education />
      <Skills />
      <Work />
    </div>
  )
}

export default App;