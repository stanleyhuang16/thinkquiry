import { useState, useEffect } from 'react';
import styled from "styled-components";
import { io } from "socket.io-client";

import ToggleSwitch from '../components/ToggleSwitch';

  // should move these styled components to a separate file
  const EnterQuestionShort = styled.div`
    border: solid blue;
  `;

  const EnterQuestionMultiple = styled.div`
    border: solid yellow;
  `;

  const SubmitButton = styled.button`
    color: violet;
  `;

  const NewQuestionButton = styled.button`
  color: violet;
`;

function TeacherQuestionContainer(props) {
  // console.log(props);
  const {
    question, setQuestion,
    questionType, setQuestionType,
    mcChoices, setMCChoices,
    mcAnswers, setMCAnswers,
    shortAnswers, setShortAnswers,
    roomType, setRoomType,
    submitQuestion
  } = props;
  // const [questionType, setQuestionType] = useState('short answer');
  // const [multipleA, setMultipleA] = useState('Choice A');
  // const [multipleB, setMultipleB] = useState('Choice B');
  // const [multipleC, setMultipleC] = useState('Choice C');
  // const [multipleD, setMultipleD] = useState('Choice D');
  // const [question, setQuestion] = useState('Insert Question Text Here');

  const [editingQuestion, setEditingQuestion] = useState(true);

  function handleChangeQuestion(e) {
    setQuestion(e.target.value);
  }

  // function handleChangeMultiple(setMultiple, e) {
  //   setMultiple(e.target.value)
  // }

  function handleChangeMultiple (choice, e) {
    if (choice === 'A') {
      const newState = {...mcChoices};
      newState['A'] = e.target.value;
      setMCChoices(newState);
    }
    if (choice === 'B') {
      const newState = {...mcChoices};
      newState['B'] = e.target.value;
      setMCChoices(newState);
    }
    if (choice === 'C') {
      const newState = {...mcChoices};
      newState['C'] = e.target.value;
      setMCChoices(newState);
    }
    if (choice === 'D') {
      const newState = {...mcChoices};
      newState['D'] = e.target.value;
      setMCChoices(newState);
    }
  }

  function handleSubmitQuestion(e) {
    e.preventDefault();
    setEditingQuestion(false);
    submitQuestion();
  }

  function handleToggleChange(e) {
    // e.preventDefault();
    // console.log('handled toggle change');
    if (questionType === 'short answer') {
      setQuestionType('multiple choice');
    } else if (questionType === 'multiple choice') {
      setQuestionType('short answer');
    }
    // console.log('state is currently :', questionType);
  }

  return (
    <>
      Teacher Question Container
      <div>Short Answer<ToggleSwitch handleToggleChange={handleToggleChange}/>Multiple Choice</div>
      Question type: {questionType}
      {questionType === "multiple choice" ? (
        <EnterQuestionMultiple>
          <h4>Teacher Enter Multiple Choice</h4>
          <form onSubmit={handleSubmitQuestion}>
          <label>
              Enter Question
              <input type='text' name='multipleChoiceQuestion' value={question} onChange={handleChangeQuestion}></input>
            </label>
            <label>
              Enter Choice A
              <input type='text' name='A' value={mcChoices['A']} onChange={(e) => handleChangeMultiple('A', e)}>
              </input>
            </label>
            <label>
              Enter Choice B
              <input type='text' name='B' value={mcChoices['B']} onChange={(e) => handleChangeMultiple('B', e)}>
              </input>
            </label>
            <label>
              Enter Choice C
              <input type='text' name='C' value={mcChoices['C']} onChange={(e) => handleChangeMultiple('C', e)}>
              </input>
            </label>
            <label>
              Enter Choice D
              <input type='text' name='D' value={mcChoices['D']} onChange={(e) => handleChangeMultiple('D', e)}>
              </input>
            </label>
            <input type='submit' value='Submit Multiple Choice'/>
          </form>
        </EnterQuestionMultiple>
      ) : (
        <EnterQuestionShort>
          <h4>Teacher Enter Short Answer Question Here</h4>
          <form onSubmit={handleSubmitQuestion}>
            <label>
              Enter Question
              <input type='text' name='shortQuestion' value={question} onChange={handleChangeQuestion}></input>
            </label>
            <input type='submit' value='Submit Short Question'/>
          </form>
        </EnterQuestionShort>
      )}
      {!editingQuestion && <NewQuestionButton>
        Ask Another Question
      </NewQuestionButton>}
    </>
  );
}

export default TeacherQuestionContainer;
