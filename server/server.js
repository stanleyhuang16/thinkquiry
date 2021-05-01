const express = require('express');
const app = express();
const cors = require('cors');

const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server, {
	cors: {
		origin: 'http://localhost:3000',
		methods: ['GET', 'POST'],
	},
});

const port = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/index.html');
});

// Websockets/Socket.io stuff
// Whenever a user connects, run this
io.on('connection', (socket) => {
	console.log('a user connected');

	socket.on('validRoom', ({ room, name }) => {
		console.log('in validRoom!');

		console.log("validRoom's room: ", room);
		console.log("validRoom's name: ", name);

		socket.emit('joinRoom', 'lala');
	});

	// Whenever a user disconnects, run this
	socket.on('disconnect', () => {
		console.log('a user disconnected');
	});
});

// 404 handler
app.use((req, res) => res.status(404).json({ err: 'Page not found!' }));

server.listen(port, () => {
	console.log(`Thinkquiry listening at http://localhost:${port}`);
});
