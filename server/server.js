const port = 5000;
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

app.get('/', (req, res) => {
	res.sendFile(__dirname + '../public/index.html');
});

// Websockets/Socket.io stuff
// Whenever a user connects, run this
io.on('connection', (socket) => {
	console.log('a user connected');

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
