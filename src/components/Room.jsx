import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import styled from 'styled-components';
import StudentAnswerContainer from '../containers/StudentAnswerContainer';
import TeacherQuestionContainer from '../containers/TeacherQuestionContainer';
import StudentResponsesContainer from '../containers/StudentResponsesContainer';

const RoomName = styled.h3`
  font-size: 3rem;
`;

function Room(socket) {
  // We can use the `useParams` hook here to access

  // the dynamic pieces of the URL.
  const { roomName } = useParams();

  const [question, setQuestion] = useState('this is the question');
  const [questionType, setQuestionType] = useState('multiple choice'); //multiple choice or short answer
  const [mcChoices, setMCChoices] = useState({
    'A': 'sample choice A',
    'B': 'sample choice B',
    'C': 'sample choice C',
    'D': 'sample choice D'
  });

  const [mcAnswer, setMCAnswer] = useState('');

  const [shortAnswer, setShortAnswer] = useState('');

  const [mcAnswerStats, setMCAnswerStats] = useState({
    'A': 0,
    'B': 0,
    'C': 0,
    'D': 0
  });

  const [shortAnswers, setShortAnswers] = useState(
    [
      {
        name: 'student 1',
        answer: 'sample short answer 1'
      },
      {
        name: 'student 2',
        answer: 'sample short answer 2'
      }
    ]
  );

  const [roomType, setRoomType] = useState('teacher') // teacher or student

  const submitQuestion = () => {
    // do websocket stuff here
  }

  const submitAnswer = () => {
    // do websocket stuff here
  }

  // socket.on('createdRoom', (roomName) => {
  //   console.log('createdRooms roomName: ', roomName);
  // });

  return (
    <>
      <RoomName>Room Name: {roomName}</RoomName>
      {roomType === 'teacher' ? 
      <TeacherQuestionContainer
        question = { question } setQuestion = { setQuestion }
        questionType = { questionType } setQuestionType = { setQuestionType } 
        mcChoices = { mcChoices } setMCChoices = { setMCChoices }
        mcAnswer = {mcAnswer} setMCAnswer = { setMCAnswer }
        shortAnswer = { shortAnswer } setShortAnswer = { setShortAnswer }
        mcAnswerStats = { mcAnswerStats } setMCAnswerStats = { setMCAnswerStats }
        shortAnswers = { shortAnswers } setShortAnswers = { setShortAnswers }
        roomType = {roomType} setRoomType = { setRoomType }
        submitQuestion = { submitQuestion }
      /> : 
      <StudentAnswerContainer
        question = { question } setQuestion = { setQuestion }
        questionType = { questionType } setQuestionType = { setQuestionType } 
        mcChoices = { mcChoices } setMCChoices = { setMCChoices }
        mcAnswer = {mcAnswer} setMCAnswer = { setMCAnswer }
        shortAnswer = { shortAnswer } setShortAnswer = { setShortAnswer }
        mcAnswerStats = { mcAnswerStats } setMCAnswerStats = { setMCAnswerStats }
        shortAnswers = { shortAnswers } setShortAnswers = { setShortAnswers }
        submitAnswer = { submitAnswer }
      />}
      <StudentResponsesContainer />
    </>
  );
}

export default Room;
