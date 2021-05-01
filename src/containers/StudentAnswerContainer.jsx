import { useState, useEffect } from 'react';
import styled from "styled-components";

function StudentAnswerContainer(props) {
  const [questionType, setQuestionType] = useState('');
  const [multipleChoiceAnswer, setMultipleChoiceAnswer] = useState('');
  const [shortAnswer, setShortAnswer] = useState('');

  // should move these styled components to a separate file
  const QuestionDisplay = styled.div`
    border: solid red;
  `;

  const ResponseDisplayShort = styled.div`
    border: solid blue;
  `;

  const ResponseDisplayMultiple = styled.div`
    border: solid yellow;
  `;

  const SubmitButton = styled.button`
    color: violet;
  `

  function handleChangeMultiple(e) {
    e.preventDefault();
    // setMultipleChoiceAnswer(e.target.value);
  }

  function handleSubmitMultiple(e) {
    e.preventDefault();
    // something with emit here, send back to server so it can send to other websockets
  }

  function handleChangeShort(e) {
    e.preventDefault();
    // setShortAnswer(e.target.value);
  }

  function handleSubmitShort(e) {
    e.preventDefault();
    // something with emit here, send back to server so it can send to other websockets
  }

  return (
    <div>
      Student Answer Container
      <QuestionDisplay>
        <h4>Current Question</h4>
        <h4>{props.roomData.currentQuestion}</h4>
      </QuestionDisplay>
      {props.roomData.questionType === "multiple" ? (
        <ResponseDisplayMultiple>
          <h4>Multiple Choice</h4>
          <form onSubmit={handleSubmitMultiple}>
            <label>
              <input type='radio' value='A' onChange={handleChangeMultiple}/>A
            </label>
            <label>
              <input type='radio' value='B' onChange={handleChangeMultiple}/>B
            </label>
            <label>
              <input type='radio' value='C' onChange={handleChangeMultiple}/>C
            </label>
            <label>
              <input type='radio' value='D' onChange={handleChangeMultiple}/>D
            </label>
            <input type='submit' value='Submit Multiple Choice Answer'/>
          </form>
        </ResponseDisplayMultiple>
      ) : (
        <ResponseDisplayShort>
          <h4>Short Answer</h4>
          <form onSubmit={handleSubmitShort}>
            <label>
              Enter Answer
              <input type='text' name='question' onChange={handleChangeShort}>
              </input>
            </label>
            <input type='submit' value='Submit Short Answer'/>
          </form>
        </ResponseDisplayShort>
      )}
      <SubmitButton>
        Submit
      </SubmitButton>
    </div>
  );
}

export default StudentAnswerContainer;
