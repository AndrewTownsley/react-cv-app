import React, { useState} from 'react';

const Skills = () => {
  const [textInput, setTextInput] = useState('');

const userInputHandler = (e) => {
  setTextInput(e.target.value);
}

  return(
    <div>
      <h3>Enter Your Skills</h3>
      <input type="text" onChange={userInputHandler} />
      <p>{textInput}</p>
    </div>
  )
}

export default Skills;