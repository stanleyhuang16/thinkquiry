import React, { useState } from 'react';
import { Button, ButtonLabel } from './Button.style';

function HomeForm(props) {
  const [inputValue, setInputValue] = useState({
    input1: '',
    input2: '',
  });

  function handleChange(event) {
    setInputValue({ ...inputValue, [event.target.name]: event.target.value }); 
  }

  return (
    <form
      onSubmit={(e) => {
        props.submitForm(e, inputValue);
      }}
    >
      <input
        name='input1'
        type='text'
        value={inputValue.input1}
        onChange={handleChange}
        placeholder={props.placeholder1}
      />
      <input
        name='input2'
        type='text'
        value={inputValue.input2}
        onChange={handleChange}
        placeholder={props.placeholder2}
      />
      <Button backgroundColor='lightblue'>Enter</Button>
    </form>
  );
}

export default HomeForm;
