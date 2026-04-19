const mongoose = require('mongoose');

const reminderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: { type: String },
  type: { type: String, enum: ['Khám bệnh', 'Tiêm chủng', 'Uống thuốc', 'Khác'] },
  dueDate: { type: Date, required: true },
  remindAt: { type: Date }, // Có thể nhắc trước 1-2 ngày
  isRead: { type: Boolean, default: false }
}, {
  timestamps: true
});

module.exports = mongoose.model('Reminder', reminderSchema);
