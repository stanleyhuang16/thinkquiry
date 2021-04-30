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

io.on('connection', (socket) => {
  console.log('a user connected');
});

// 404 handler
app.use((req, res) => res.status(404).json({ err: 'Page not found!' }));

server.listen(port, () => {
  console.log(`Thinkquiry listening at http://localhost:${port}`);
});
