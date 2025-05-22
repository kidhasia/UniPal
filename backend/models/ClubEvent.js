const mongoose = require('mongoose');

const clubEventSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  clubName: { type: String, required: true },
  eventTitle: { type: String, required: true },
  eventDate: { type: Date, required: true },
  description: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('ClubEvent', clubEventSchema);