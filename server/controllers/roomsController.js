const Room = require('../models/model');

const roomsController = {};

roomsController.createRoom = (req, res) => {
	const { roomName, adminPassword } = req.body;

	Room.create({ roomName, adminPassword })
		.then((room) =>
			room
				? res.status(200).json(room)
				: res.status(500).json({ err: 'Failed to create room!' })
		)
		.catch((err) => res.status(500).json(err));
};

roomsController.checkRoom = (req, res) => {
	const { roomName } = req.body;

	Room.findOne({ roomName })
		.exec()
		.then((room) =>
			room
				? res.status(200).json(room)
				: res.status(404).json({ err: 'No room found by that name!' })
		)
		.catch((err) => res.status(500).json(err));
};

roomsController.checkRoomAdmin = (req, res) => {
	const { roomName, adminPassword } = req.body;

	Room.findOne({ roomName })
		.exec()
		.then((room) => {
			// check if user input matches admin password
			if (adminPassword === room?.adminPassword) {
				res.status(200).json(room);
			} else {
				res.status(404).json({ err: 'No room found by that name!' });
			}
		})
		.catch((err) => res.status(500).json(err));
};

module.exports = roomsController;
