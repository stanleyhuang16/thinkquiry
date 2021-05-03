import { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

import HomeForm from './HomeForm.jsx';
import { AppContainer } from './Container.style';
import { Button, ButtonLabel } from './Button.style';
import { Redirect } from 'react-router';

// save socket and put in app
const Home = ({ setSocket }) => {
  const [joinRoom, setJoinRoom] = useState('');
  const [name, setName] = useState('');
  const [joinAdmin, setJoinAdmin] = useState('');
  const [usePw, setUsePw] = useState('');
  const [createRoom, setCreateRoom] = useState('');
  const [createAdminPw, setCreateAdminPw] = useState('');

  const handleSubmitJoinRoom = (e) => {
    e.preventDefault();

    // Create the socket connection between 3000 and 5000
    const socket = io('http://localhost:5000');
    // Keep the reference to socket connection for use in other components
    setSocket(socket);

    console.log('joinRoom: ', joinRoom);
    console.log('name:', name);

    // do mongoDB stuff..
    // verify if room already exists
    // .then(data => {
    //   if (!data) return 'Failed to add to database'

    //   return ':)'
    // })

    socket.emit('joinRoom', joinRoom);
  };

  const handleSubmitJoinAdmin = (e) => {
    e.preventDefault();

    // Create the socket connection between 3000 and 5000
    const socket = io('http://localhost:5000');
    // Keep the reference to socket connection for use in other components
    setSocket(socket);

    console.log('joinAdmin: ', joinAdmin);
    console.log('usePw:', usePw);

    // do mongoDB stuff..
    // verify if room already exists
    // .then(data => {
    //   if (!data) return 'Failed to add to database'

    //   return ':)'
    // })

    socket.emit('joinAdmin', joinAdmin);
  };

  const handleSubmitCreateRoom = (e) => {
    e.preventDefault();

    // Create the socket connection between 3000 and 5000
    const socket = io('http://localhost:5000');
    // Keep the reference to socket connection for use in other components
    setSocket(socket);

    console.log('createRoom: ', createRoom);
    console.log('createAdminPw:', createAdminPw);

    // do mongoDB stuff..
    // verify if room already exists
    // .then(data => {
    //   if (!data) return 'Failed to add to database'

    //   return ':)'
    // })

    socket.emit('createdRoom', createRoom);
  };

  //* RENAME/DELETE THIS AFTER
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   console.log('in handleSubmit: ', room, name);

  //   // do MongoDB stuff here..

  //   if ('room is valid') {
  //     socket.emit('validRoom', { room, name });
  //   }
  // };

  return (
    <AppContainer>
      <div>
        <h3>Logo</h3>
        <h3>thinkquiry.io</h3>
      </div>
      {/* <div>
        <h3>Thinkquiry!</h3>
        <h3>Join a Room!</h3>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Room Name'
            onChange={(e) => setJoinRoom(e.target.value)}
          />
          <input
            type='text'
            placeholder='Your Name'
            onChange={(e) => setName(e.target.value)}
          />
          <Button backgroundColor='lightblue' onClick={handleSubmit}>
            <ButtonLabel>Enter</ButtonLabel>
          </Button>
        </form>
      </div>
      <div>
        <h3>Join Existing Room As Admin</h3>
        <form>
          <input type='text' placeholder='Room Name' />
          <input type='text' placeholder='Password' />
          <Button backgroundColor='lightblue'>Enter</Button>
        </form>
      </div>
      <div>
        <h3>Create a New Room</h3>
        <form onSubmit={handleSubmitCreateRoom}>
          <input
            placeholder='Room Name'
            onChange={(e) => setCreateRoom(e.target.value)}
          />
          <input
            placeholder='Create Password'
            onChange={(e) => setCreateAdminPw(e.target.value)}
          />
          <Button type='submit' backgroundColor='blue'>
            Create Room
          </Button> */}
      <div>
        <p>TESTING HOMEFORM COMPONENT BELOW</p>
        <HomeForm
          submitForm={handleSubmitJoinRoom}
          input1='RoomName'
          input2='ParticipantName'
          id='joinRoom'
          placeholder1='Room'
          placeholder2='Your Name'
        />

        <HomeForm
          submitForm={handleSubmitJoinAdmin}
          input1='RoomName'
          input2='AdminPassword'
          id='joinAdmin'
          placeholder1='Room'
          placeholder2='Admin Password'
        />

        <HomeForm
          submitForm={handleSubmitCreateRoom}
          input1='RoomName'
          input2='createAdminPw'
          id='createRoom'
          placeholder1='Create Room'
          placeholder2='Create Password'
        />
      </div>
      {/* // make 1 form of 2 inputs and one button, pass down props and define here in each form the placeholders and ...values?? */}
      {/* </form> */}
      {/* </div> */}
    </AppContainer>
  );
};

export default Home;
