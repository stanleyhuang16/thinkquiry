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

  const [roomData, setRoomData] = useState({
    currentQuestion: 'What up dude?',
    studentAnswer: '',
    questionType: 'short',
    multipleChoiceText: [],
    multipleChoiceCount: [],
    shortAnswerText: [],
    studentNames: [],
    currentStudentName: '',
    admin: true,
  });

  // const admin = false; //need to hook this admin boolean up to authentication;

  // socket.on('createdRoom', (roomName) => {
  //   console.log('createdRooms roomName: ', roomName);
  // });

  return (
    <>
      <RoomName>Room Name: {roomName}</RoomName>
      {roomData.admin ? <TeacherQuestionContainer roomData = { roomData }/> : 
        <StudentAnswerContainer roomData = { roomData } />}
      <StudentResponsesContainer />
    </>
  );
}

export default Room;
