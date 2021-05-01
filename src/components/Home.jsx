import { useState } from 'react';
import styled from 'styled-components';

const Home = () => {
	const [room, setRoom] = useState('');
	const [name, setName] = useState('');

	const socket = io('http://localhost:5000');

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log('in handleSubmit: ', room, name);

		// do MongoDB stuff here..

		if ('room is valid') {
			socket.emit('validRoom', { room, name });
		}
	};

	return (
		<div>
			Here's the app
			<div>
				<h1>Logo</h1>
				<h1>thinkquiry.io</h1>
			</div>
			<div>
				<h1>Thinkquiry!</h1>
				<h1>Join Room!</h1>
				<form onSubmit={handleSubmit}>
					<input placeholder="Room" onChange={(e) => setRoom(e.target.value)} />
					<input placeholder="Name" onChange={(e) => setName(e.target.value)} />
					<button type="submit" onClick={handleSubmit}>
						Enter!
					</button>
				</form>
			</div>
			<div>
				<h1>Join Existing Room As Admin</h1>
				<input placeholder="Room"></input>
				<input placeholder="NAME TOO?"></input>
				<input placeholder="password"></input>
				<button>Enter</button>
			</div>
			<div>
				<h1>Create a New Room</h1>
				<input placeholder="Room Name"></input>
				<input placeholder="Create Password"></input>
				<button>Enter</button>
				<div></div>
			</div>
		</div>
	);
};

export default Home;
