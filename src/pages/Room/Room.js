import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import {
  TeacherQuestionSection,
  StudentResponsesSection,
  StudentQuestionSection,
} from '../../components';

const dummyAnswers = [
  { participant: 'Paul', answer: 'A' },
  {
    participant: 'Christy',
    answer:
      'This is an extremely long answer. This is an extremely long answer. This is an extremely long answer.',
  },
  { participant: 'Nhan', answer: 'C' },
  { participant: 'Nhan2', answer: 'D' },
  { participant: 'Nhan3', answer: 'D' },
  { participant: 'Paul', answer: 'A' },
];

function Room({ socket }) {
  console.log('socket', socket);
  const [admin, setAdmin] = useState(true);
  const [adminPassword, setAdminPassword] = useState(false);

  // socket.on('joinRoom', ({ roomName, adminPassword, personName }) => {
  //   if (adminPassword) setAdminPassword(true);
  // });

  const { roomName } = useParams();
  const [studentAnswers, setStudentAnswers] = useState({});
  const [studentQuestionData, setStudentQuestionData] = useState({
    currentQuestion: 'Waiting for next question...',
    questionType: 'multiple choice',
    multipleChoiceText: ['Choice A', 'Choice B', 'Choice C', 'Choice D'],
    currentStudentName: 'Test Student Name',
  });

  /*
  Websocket stuff here to listen for question data and set it. 
    //use setStudentQuestionData


  Websocket stuff here to listen for student responses and set it.
    //use setStudentAnswers. {participant, answer}
  */

  return (
    <>
      {admin ? (
        <>
          <TeacherQuestionSection roomName={roomName} />
          <StudentResponsesSection studentResponses={dummyAnswers} />
        </>
      ) : (
        <>
          <StudentQuestionSection
            roomName={roomName}
            studentQuestionData={studentQuestionData}
          />
        </>
      )}
    </>
  );
}
export default Room;
