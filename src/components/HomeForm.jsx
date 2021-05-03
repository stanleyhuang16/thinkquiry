import React, { useState } from 'react';
import { Button, ButtonLabel } from './Button.style';

function HomeForm(props) {
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');

  function handleChange1(event) {
    setInputValue1(event.target.value);
    if (props.onChange) props.onChange(inputValue1);
    console.log('in handlechange1, inputValue1: ', inputValue1);
  }
  function handleChange2(event) {
    setInputValue2(event.target.value);
    if (props.onChange) props.onChange(inputValue2);
    console.log('in handlechange2, inputValue2: ', inputValue2);
  }
  // function handleChange(event) {
  //   if (event.target.name === inputValue1) {
  //     setInputValue1(event.target.value);
  //     if (props.onChange) props.onChange(inputValue1);
  //     console.log('in handlechange1, inputValue1: ', inputValue1);
  //   }
  //   if (event.target.name === 'inputValue2') {
  //     setInputValue2(event.target.value);
  //     if (props.onChange) props.onChange(inputValue2);
  //     console.log('in handlechange2, inputValue2: ', inputValue2);
  //   }
  // }

  return (
    <form onSubmit={props.submitForm}>
      <input
        type='text'
        value={inputValue1}
        onChange={handleChange1}
        placeholder={props.placeholder1}
      />
      <input
        type='text'
        value={inputValue2}
        onChange={handleChange2}
        placeholder={props.placeholder2}
      />
      <Button backgroundColor='lightblue'>Enter</Button>
    </form>
  );
}

export default HomeForm;
