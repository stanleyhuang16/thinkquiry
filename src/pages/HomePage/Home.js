import React, { useState } from 'react';
import { InfoSection, RoomNavSection } from '../../components';
import { homeObjOne } from './Data';

const Home = () => {
  const [inputState, setInputState] = useState({
    joinStudentRoomName: '',
    joinStudentName: '',
    joinAdminRoomName: '',
    createRoomName: '',
    joinAdminPassword: '',
    createPassword: '',
  });

  const handleChange = (evt) => {
    console.log('here');
    const value = evt.target.value;
    setInputState({
      ...inputState,
      [evt.target.name]: value,
    });
  };

  const handleJoinAsStudent = () => {
    console.log(inputState.joinStudentRoomName, inputState.joinStudentName);
  };

  const handleJoinAsAdmin = () => {
    console.log(inputState.joinAdminRoomName, inputState.joinAdminPassword);
  };

  const handleCreateRoom = () => {
    console.log(inputState.createRoomName, inputState.createPassword);
  };

  const propsToRoomNavSection = {
    inputState,
    handleChange,
    handleJoinAsStudent,
    handleJoinAsAdmin,
    handleCreateRoom,
  };

  return (
    <>
      <InfoSection {...homeObjOne} />
      <RoomNavSection {...propsToRoomNavSection} />
    </>
  );
};

export default Home;
