const mongoose = require('mongoose');

const screeningSchema = new mongoose.Schema({
  category: { type: String, required: true }, // e.g. Sức khỏe Tim mạch, Nha khoa
  dateString: { type: String, required: true }, // e.g. Ngày mai, Thứ 6, 24 Thg 5
  title: { type: String, required: true },
  description: { type: String },
  participantsCount: { type: Number, default: 0 } // +3...
}, { timestamps: true });

module.exports = mongoose.model('Screening', screeningSchema);
