const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const roomSchema = new Schema(
	{
		roomName: { type: String, unique: true, required: true },
		adminPassword: { type: String, unique: true, required: true },
	},
	{ timestamps: true }
);

const Room = mongoose.model('room', roomSchema);

module.exports = Room;
