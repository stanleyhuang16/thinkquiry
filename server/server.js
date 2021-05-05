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

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/index.html');
});

console.log('MONGO_URI:', process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI, {
	// options for the connect method to parse the URI
	useNewUrlParser: true,
	useUnifiedTopology: true,
	// sets the name of the DB that our collections are part of
	dbName: 'thinkquiry',
});

mongoose.connection.once('open', () => console.log('Connected to MongoDB'));

app.get('/api/:roomName', roomsController.checkRoom);
app.post('/api/:roomName', roomsController.createRoom);

// Websockets/Socket.io stuff
// Whenever a user connects, run this
io.on('connection', (socket) => {
	console.log('a user connected');

	socket.on('joinRoom', ({ roomName, adminPassword }) => {
		console.log("joinRoom's roomName: ", roomName);
		console.log("joinRoom's adminPassword: ", adminPassword);

		socket.emit('hi', { test: 'ing' });
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
