import React, { useState} from 'react';

const Education = () => {
  const [textInput, setTextInput] = useState('');

const userInputHandler = (e) => {
  setTextInput(e.target.value);
}

  return(
    <div>
      <h3>Enter Your Education History</h3>
      <input type="text" onChange={userInputHandler} />
      <p>{textInput}</p>
    </div>
  )
}

export default Education;