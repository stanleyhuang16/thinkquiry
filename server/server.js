const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server, {
	cors: {
		origin: 'http://localhost:3000',
		methods: ['GET', 'POST'],
	},
});

const port = 5000;
const roomsController = require('./controllers/roomsController');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
	// options for the connect method to parse the URI
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	// sets the name of the DB that our collections are part of
	dbName: 'thinkquiry',
});

mongoose.connection.once('open', () => console.log('Connected to MongoDB'));

app.post('/api/checkRoom', roomsController.checkRoom, (req, res) =>
	res.locals.room
		? res.status(200).json(res.locals.room)
		: res.json({ err: 'Room does not exist! Please try again.' })
);
app.post('/api/checkRoomAdmin', roomsController.checkRoomAdmin);
app.post(
	'/api/createRoom',
	roomsController.checkRoom,
	roomsController.createRoom
);

// Websockets/Socket.io stuff
io.on('connection', (socket) => {
	console.log('a user connected');

	socket.on('validInputs', ({ roomName, adminPassword, personName }) => {
		console.log("validInputs' roomName: ", roomName);
		console.log("validInputs' adminPassword: ", adminPassword);
		console.log("validInputs' personName: ", personName);

		socket.join(`${roomName}`);
		io.to(roomName).emit('joinRoom', { roomName, adminPassword, personName });
	});

	socket.on('disconnect', () => console.log('a user disconnected'));
});

// 404 handler
app.use((req, res) => res.status(404).json({ err: 'Page not found!' }));

server.listen(port, () =>
	console.log(`Thinkquiry listening at http://localhost:${port}`)
);
