import { useHistory } from 'react-router-dom';
import { io } from 'socket.io-client';

import HomeForm from './HomeForm.jsx';
import { AppContainer } from './Container.style';

// save socket and put in app
const Home = ({ setSocket }) => {
	const history = useHistory();

	const handleSubmitJoinRoom = (e, inputValue) => {
		e.preventDefault();

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
						socket.emit('joinRoom', { roomName, personName });
						history.push(`/${roomName}`);
					}
				})
				.catch((err) => console.error(err));
		};
		checkRoom(inputValue.input1, inputValue.input2);
	};

	const handleSubmitJoinAdmin = (e, inputValue) => {
		e.preventDefault();

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
				.then(({ roomName }) => {
					if (!roomName)
						return alert('Invalid room name/password. Please try again.');

					socket.emit('joinRoom', { roomName });
					history.push(`/${roomName}`);
				})
				.catch((err) => console.error(err));
		};
		checkRoomAdmin(inputValue.input1, inputValue.input2);
	};

	const handleSubmitCreateRoom = (e, inputValue) => {
		e.preventDefault();

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
						socket.emit('joinRoom', { roomName, adminPassword });
						history.push(`/${roomName}`);
					}
				})
				.catch((err) => console.error(err));
		};
		createRoom(inputValue.input1, inputValue.input2);
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
					input1="RoomName"
					input2="ParticipantName"
					placeholder1="Room"
					placeholder2="Your Name"
				/>
				<p>Join Room as Admin</p>
				<HomeForm
					submitForm={handleSubmitJoinAdmin}
					input1="RoomName"
					input2="AdminPassword"
					placeholder1="Room"
					placeholder2="Admin Password"
				/>
				<p>Create Room</p>
				<HomeForm
					submitForm={handleSubmitCreateRoom}
					input1="RoomName"
					input2="createAdminPw"
					placeholder1="Create Room"
					placeholder2="Create Password"
				/>
			</div>
		</AppContainer>
	);
};

export default Home;
