const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const roomSchema = new Schema(
	{
		roomName: { type: String, required: true },
		adminPassword: { type: String, required: true },
	},
	{ timestamps: true }
);

const Room = mongoose.model('room', roomSchema);

module.exports = Room;
