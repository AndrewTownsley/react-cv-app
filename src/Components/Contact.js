import React, { useState} from 'react';

const Contact = () => {
  const [textInput, setTextInput] = useState('');

const userInputHandler = (e) => {
  setTextInput(e.target.value);
}

  return(
    <div>
      <h2>Basic Contact Information</h2>
      <h3>Enter Your Name</h3>
      <input value={textInput} type="text" onChange={userInputHandler} />
      <p>{textInput}</p>
      <button onClick={() => setTextInput('')}>Reset</button>
    </div>
  )
}

export default Contact;