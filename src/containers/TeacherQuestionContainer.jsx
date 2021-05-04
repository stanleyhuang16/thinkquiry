import { useState, useEffect } from 'react';
import styled from "styled-components";
import { useHistory } from 'react-router-dom';

function TeacherQuestionContainer(props) {
  const [questionType, setQuestionType] = useState('');
  const [multipleChoiceQuestion, setMultipleChoiceQuestion] = useState('');
  const [shortQuestion, setShortQuestion] = useState('');
  const history = useHistory(); // use to redirect after request to server?

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

  function handleChangeShort(e) {
    e.preventDefault();
    // setShortQuestion(e.target.value);
  }

  function handleSubmitShort(e) {
    e.preventDefault();
    // something with emit here, send back to server so it can send to other websockets
    // history push to another component?
  }

  function handleChangeMultiple(e) {
    e.preventDefault();
    // setMultipleChoiceQuestion(e.target.value);
  }

  function handleSubmitMultiple(e) {
    e.preventDefault();
    // something with emit here, send back to server so it can send to other websockets
    // history push to another component?
  }

  return (
    <>
      Teacher Question Container
      {props.roomData.questionType === "multiple" ? (
        <EnterQuestionMultiple>
          <h4>Teacher Enter Multiple Choice</h4>
          <form onSubmit={handleSubmitMultiple}>
            <label>
              Enter Question
              <input type='text' name='question' onChange={handleChangeMultiple}>
              </input>
            </label>
            <label>
              Enter Choice A
              <input type='text' name='choiceA' onChange={handleChangeMultiple}>
              </input>
            </label>
            <label>
              Enter Choice B
              <input type='text' name='choiceB' onChange={handleChangeMultiple}>
              </input>
            </label>
            <label>
              Enter Choice C
              <input type='text' name='choiceC' onChange={handleChangeMultiple}>
              </input>
            </label>
            <label>
              Enter Choice D
              <input type='text' name='choiceD' onChange={handleChangeMultiple}>
              </input>
            </label>
            <input type='submit' value='Submit Multiple Choice'/>
          </form>
        </EnterQuestionMultiple>
      ) : (
        <EnterQuestionShort>
          <h4>Teacher Enter Short</h4>
          <form onSubmit={handleSubmitShort}>
            <label>
              Enter Question
              <input type='text' name='shortQuestion' onChange={handleChangeShort}></input>
            </label>
            <input type='submit' value='Submit Short Answer'/>
          </form>
        </EnterQuestionShort>
      )}
    </>
  );
}

export default TeacherQuestionContainer;
