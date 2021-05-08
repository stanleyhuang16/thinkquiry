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
  const [adminPassword, setAdminPassword] = useState(false);

  const { roomName } = useParams();
  const [studentResponses, setStudentResponses] = useState([]);

  const [studentName, setStudentName] = useState('Anonymous');
  const [studentQuestionData, setStudentQuestionData] = useState({
    currentQuestion: 'Waiting for next question...',
    questionType: 'multiple choice',
    multipleChoiceText: ['Choice A', 'Choice B', 'Choice C', 'Choice D'],
  });

  /* Websockets
   */

  socket.on(
    'joinRoom',
    ({ roomName, adminPassword, studentNameFromServer }) => {
      if (adminPassword) setAdminPassword(true);
      if (studentNameFromServer) {
        setStudentName(studentNameFromServer);
      }
    }
  );

  //Websocket stuff here to listen for question data and set it.
  //use setStudentQuestionData

  socket.on(
    'questionSentToAll',
    ({ roomName, question, questionType, mcChoices }) => {
      setStudentQuestionData({
        currentQuestion: question,
        questionType,
        multipleChoiceText: mcChoices,
      });
    }
  );

  /*
  Websocket stuff here to listen for student responses and set it.
    //use setStudentAnswers. {participant, answer}
  */

  socket.on(
    'answerSentToAll',
    ({
      roomName,
      question,
      mcChoices,
      mcAnswerStats,
      studentAnswer,
      studentNameFromServer,
    }) => {
      //studentAnswer is just a single object with {participant, answer}

      const newStudentResponses = [...studentResponses];
      newStudentResponses.push({
        participant: studentNameFromServer,
        studentAnswer,
      });
      setStudentResponses(newStudentResponses);
    }
  );

  return (
    <>
      {adminPassword ? (
        <>
          <TeacherQuestionSection
            roomName={roomName}
            socket={socket}
            setStudentResponses={setStudentResponses}
          />
          <StudentResponsesSection
            roomName={roomName}
            studentResponses={studentResponses}
          />
        </>
      ) : (
        <>
          <StudentQuestionSection
            roomName={roomName}
            studentQuestionData={studentQuestionData}
            studentName={studentName}
            socket={socket}
          />
        </>
      )}
    </>
  );
}
export default Room;
