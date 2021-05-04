import { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

import HomeForm from './HomeForm.jsx';
import { AppContainer } from './Container.style';
import { Button, ButtonLabel } from './Button.style';
import { Redirect } from 'react-router';

// save socket and put in app
const Home = ({ setSocket }) => {

  const handleSubmitJoinRoom = (e, inputValue) => {
    e.preventDefault();

    // Create the socket connection between 3000 and 5000
    const socket = io('http://localhost:5000');
    // Keep the reference to socket connection for use in other components
    setSocket(socket);

    console.log('joinRoom: ', inputValue);
   

    // do mongoDB stuff..

    // socket.emit('joinRoom', joinRoom);
  };

  const handleSubmitJoinAdmin = (e, inputValue) => {
    e.preventDefault();

    // Create the socket connection between 3000 and 5000
    const socket = io('http://localhost:5000');
    // Keep the reference to socket connection for use in other components
    setSocket(socket);

    console.log('joinAdmin: ', inputValue);
 

    // do mongoDB stuff..

    // socket.emit('joinAdmin', joinAdmin);
  };

  const handleSubmitCreateRoom = (e, inputValue) => {
    e.preventDefault();

    // Create the socket connection between 3000 and 5000
    const socket = io('http://localhost:5000');
    // Keep the reference to socket connection for use in other components
    setSocket(socket);

    console.log('createRoom: ', inputValue);


    // do mongoDB stuff..

    // socket.emit('createdRoom', createRoom);
  };

  return (
    <AppContainer>
      <div>
        <h3>Logo</h3>
        <h3>thinkquiry.io</h3>
      </div>
      <div>
        <p>Join Room</p>
        <HomeForm
          submitForm={handleSubmitJoinRoom}
          input1='RoomName'
          input2='ParticipantName'

          placeholder1='Room'
          placeholder2='Your Name'
        />
        <p>Join Room as Admin</p>
        <HomeForm
          submitForm={handleSubmitJoinAdmin}
          input1='RoomName'
          input2='AdminPassword'
         
          placeholder1='Room'
          placeholder2='Admin Password'
        />
        <p>Create Room</p>
        <HomeForm
          submitForm={handleSubmitCreateRoom}
          input1='RoomName'
          input2='createAdminPw'
  
          placeholder1='Create Room'
          placeholder2='Create Password'
        />
      </div>
    </AppContainer>
  );


};

export default Home;
