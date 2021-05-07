const Room = require('../models/model');

const roomsController = {};

roomsController.checkRoom = (req, res, next) => {
	const { roomName } = req.body;

	Room.findOne({ roomName })
		.exec()
		.then((room) => {
			if (room) res.locals.room = room;
			return next();
		})
		.catch((err) => res.status(500).json(err));
};

roomsController.checkRoomAdmin = (req, res) => {
	const { roomName, adminPassword } = req.body;

	Room.findOne({ roomName })
		.exec()
		.then((room) =>
			adminPassword === room?.adminPassword
				? res.status(200).json(room)
				: res.json({ err: 'Invalid room name/password! Please try again.' })
		)
		.catch((err) => res.status(500).json(err));
};

roomsController.createRoom = (req, res) => {
	if (res.locals.room)
		return res.json({ err: 'Room already exists! Please try again.' });

	const { roomName, adminPassword } = req.body;

	Room.create({ roomName, adminPassword })
		.then((room) =>
			room
				? res.status(200).json(room)
				: res.json({ err: 'Unable to create room! Please try again.' })
		)
		.catch((err) => res.status(500).json(err));
};

module.exports = roomsController;
