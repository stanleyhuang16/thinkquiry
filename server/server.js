const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const path = require('path');

const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

const PORT = process.env.PORT || 5000;
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

//in production, serve the build folder
app.use(express.static(path.join(__dirname, '../build')));

// Websockets/Socket.io stuff
io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('validInputs', ({ roomName, adminPassword, studentName }) => {
    socket.join(`${roomName}`);

    const clientId = socket.id;

    if (adminPassword) {
      io.to(clientId).emit('joinRoom', {
        roomName,
        adminPassword,
      });
    } else {
      io.to(clientId).emit('joinRoom', {
        roomName,
        studentName,
      });
    }
  });

  socket.on(
    'questionSubmitted',
    ({ roomName, question, questionType, mcChoices }) => {
      io.to(roomName).emit('questionSentToAll', {
        roomName,
        question,
        questionType,
        mcChoices,
      });
    }
  );

  socket.on(
    'answerSubmitted',
    ({ roomName, question, mcChoices, mcAnswerStats, studentAnswer }) => {
      io.to(roomName).emit('answerSentToAll', {
        roomName,
        question,
        mcChoices,
        mcAnswerStats,
        studentAnswer,
      });
    }
  );

  socket.on('disconnect', () => console.log('a user disconnected'));
});

// 404 handler
app.use((req, res) => res.status(404).json({ err: 'Page not found!' }));

server.listen(PORT, () =>
  console.log(`Thinkquiry listening at http://localhost:${PORT}`)
);
