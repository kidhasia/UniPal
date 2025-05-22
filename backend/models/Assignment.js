const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  type: { type: String, enum: ['assignment', 'exam'], required: true },
  course: { type: String, required: true },
  dueDate: { type: Date, required: true },
  grade: { type: Number },
  weight: { type: Number }, // Percentage weight for GPA calculation
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Assignment', assignmentSchema);