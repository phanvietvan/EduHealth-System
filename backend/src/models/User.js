const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name']
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Please add a password']
  },
  role: {
    type: String,
    enum: ['user', 'admin', 'doctor', 'student', 'parent'],
    default: 'student'
  },
  // Ảnh đại diện
  avatar: {
    type: String,
    default: 'https://res.cloudinary.com/demo/image/upload/v1520836511/default_avatar.png'
  },
  // Thông tin học sinh
  studentInfo: {
    studentCode: { type: String },
    className: { type: String }
  },
  // Thông tin phụ huynh (áp dụng nếu role parent hoặc gán cho học sinh)
  parentInfo: {
    parentName: { type: String },
    phoneNumber: { type: String },
    relationship: { type: String }
  },
  // Thông tin cơ bản thêm
  dateOfBirth: { type: Date },
  gender: { type: String, enum: ['Nam', 'Nữ', 'Khác'] },
  address: { type: String }
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);
