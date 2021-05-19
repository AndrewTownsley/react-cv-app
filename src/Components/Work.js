import React, { useState} from 'react';

const Work = () => {
  const [textInput, setTextInput] = useState('');

const userInputHandler = (e) => {
  setTextInput(e.target.value);
}

  return(
    <div>
      <h3>Enter Your Work Experience</h3>
      <input type="text" onChange={userInputHandler} />
      <p>{textInput}</p>
    </div>
  )
}

export default Work;