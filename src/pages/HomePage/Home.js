import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { io } from 'socket.io-client';
import { InfoSection, RoomNavSection } from '../../components';
import { homeObjOne } from './Data';

const Home = ({ setSocket }) => {
  const history = useHistory();

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

    // Create the socket connection between 3000 and 5000
    const socket = io('http://localhost:5000');
    // Keep the reference to socket connection for use in other components
    setSocket(socket);

    // Check if inputted room exists in database
    const checkRoom = (roomName, personName) => {
      if (!roomName) return alert('Please input a valid room name.');
      if (roomName.includes('/'))
        return alert('Room names cannot include "/". Please try again.');
      if (!personName) personName = 'Anonymous';

      fetch('/api/checkRoom', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ roomName }),
      })
        .then((res) => res.json())
        .then(({ roomName, err }) => {
          if (err) return alert(err);

          if (roomName) {
            socket.emit('validInputs', { roomName, personName });
            history.push(`/${roomName}`);
          }
        })
        .catch((err) => console.error(err));
    };
    checkRoom(inputState.joinStudentRoomName, inputState.joinStudentName);
  };

  const handleJoinAsAdmin = () => {
    console.log(inputState.joinAdminRoomName, inputState.joinAdminPassword);

    // Create the socket connection between 3000 and 5000
    const socket = io('http://localhost:5000');
    // Keep the reference to socket connection for use in other components
    setSocket(socket);

    // verify room and admin password in database
    const checkRoomAdmin = (roomName, adminPassword) => {
      if (!roomName) return alert('Please input a valid room name.');
      if (roomName.includes('/'))
        return alert('Room names cannot include "/". Please try again.');
      if (!adminPassword) return alert('Please input a valid admin password.');

      fetch('/api/checkRoomAdmin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ roomName, adminPassword }),
      })
        .then((res) => res.json())
        .then(({ roomName, adminPassword }) => {
          if (!roomName)
            return alert('Invalid room name/password. Please try again.');

          socket.emit('validInputs', { roomName, adminPassword });
          history.push(`/${roomName}`);
        })
        .catch((err) => console.error(err));
    };
    checkRoomAdmin(inputState.joinAdminRoomName, inputState.joinAdminPassword);
  };

  const handleCreateRoom = () => {
    console.log(inputState.createRoomName, inputState.createPassword);

    // Create the socket connection between 3000 and 5000
    const socket = io('http://localhost:5000');
    // Keep the reference to socket connection for use in other components
    setSocket(socket);

    // Create new active room and store in database
    const createRoom = (roomName, adminPassword) => {
      if (!roomName) return alert('Please input a valid room name.');
      if (roomName.includes('/'))
        return alert('Room names cannot include "/". Please try again.');
      if (!adminPassword) return alert('Please input a valid admin password.');

      fetch('/api/createRoom', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ roomName, adminPassword }),
      })
        .then((res) => res.json())
        .then(({ roomName, err }) => {
          if (err) return alert(err);

          if (roomName) {
            socket.emit('validInputs', { roomName, adminPassword });
            history.push(`/${roomName}`);
          }
        })
        .catch((err) => console.error(err));
    };
    createRoom(inputState.createRoomName, inputState.createPassword);
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
