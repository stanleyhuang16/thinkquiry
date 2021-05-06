import { useState, useEffect } from 'react';
import styled from "styled-components";
import { io } from "socket.io-client";

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
`;

const AnswerBox = styled.div`
border: solid green;
`;

function StudentAnswerContainer(props) {
  const {
    question, setQuestion,
    questionType, setQuestionType,
    mcChoices, setMCChoices,
    mcAnswers, setMCAnswers,
    mcAnswer, setMCAnswer,
    shortAnswer, setShortAnswer,
    shortAnswers, setShortAnswers,
    roomType, setRoomType,
    submitAnswer
  } = props;
  // const [questionType, setQuestionType] = useState('short answer');
  // const [question, setQuestion] = useState('test question');
  // const [mCChoices, setMCChoices] = useState({
  //   'A': 'test choice A',
  //   'B': 'test choice B',
  //   'C': 'test choice C',
  //   'D': 'test choice D'
  // })
  // const [multipleChoiceAnswer, setMultipleChoiceAnswer] = useState('');
  // const [shortAnswer, setShortAnswer] = useState('');

  // socket io stuff
  // {
  //   questionType: 'multiple choice' or 'shortanswer',
  //   question: 'something',
  //   choiceA: 'choice a',
  //   choiceB: 'choice b',
  //   choiceC: 'choice c',
  //   choiceD: 'choice d',
  // }
  // we grab the questionType, set it to the state questionType, and renders conditionally
  // based on that

  // example
  // let objFromSocket = {
  //   questionType: 'multiple',
  //   question: 'what is 1 + 1',
  //   choiceA: '2',
  //   choiceB: '3',
  //   choiceC: '4',
  //   choiceD: '5'
  // }
  // // use useEffect to change the state of the questionType
  // useEffect(() => {
  //   setQuestionType(objFromSocket.questionType);
  //   setQuestion(objFromSocket.question);
  // });

  function handleChangeMultiple(e) {
    // setMultipleChoiceAnswer(e.target.value);
    setMCAnswer(e.target.value);
  }

  function handleChangeShort(e) {
    e.preventDefault();
    // setShortAnswers(e.target.value);
    setShortAnswer(e.target.value);
  }

  // const socket = io('http://localhost:3000/abc'); // what is the path? room params?

  function handleSubmitAnswer(e) {
    submitAnswer();
  }

  return (
    <>
      Student Answer Container
      <QuestionDisplay>
        <h4>Current Question</h4>
        <h4>{question}</h4>
      </QuestionDisplay>
      {questionType === "multiple choice" ? (
        <ResponseDisplayMultiple>
          <h4>Multiple Choice</h4>
          <form onSubmit={handleSubmitAnswer}>
            <AnswerBox>
            {mcChoices['A']}
            <label>
              <input type='radio' value='A' checked={mcAnswer === 'A'} onChange={handleChangeMultiple}/>A
            </label>
            </AnswerBox>
            <AnswerBox>
            {mcChoices['B']}
            <label>
              <input type='radio' value='B' checked={mcAnswer === 'B'} onChange={handleChangeMultiple}/>B
            </label>
            </AnswerBox>
            <AnswerBox>
            {mcChoices['C']}
            <label>
              <input type='radio' value='C' checked={mcAnswer === 'C'} onChange={handleChangeMultiple}/>C
            </label>
            </AnswerBox>
            <AnswerBox>
            {mcChoices['D']}
            <label>
              <input type='radio' value='D' checked={mcAnswer === 'D'} onChange={handleChangeMultiple}/>D
            </label>
            </AnswerBox>
            <input type='submit' value='Submit Multiple Choice Answer'/>
          </form>
        </ResponseDisplayMultiple>
      ) : (
        <ResponseDisplayShort>
          <h4>Short Answer</h4>
          <form onSubmit={handleSubmitAnswer}>
            <label>
              Enter Answer
              <input type='text' value={shortAnswer} onChange={handleChangeShort}>
              </input>
            </label>
            <input type='submit' value='Submit Short Answer'/>
          </form>
        </ResponseDisplayShort>
      )}
    </>
  );
}

export default StudentAnswerContainer;
