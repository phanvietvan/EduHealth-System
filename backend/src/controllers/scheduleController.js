const mongoose = require('mongoose');
const User = require('../models/User');
const Reminder = require('../models/Reminder');
const Vaccination = require('../models/Vaccination');
const HealthRecord = require('../models/HealthRecord');

// Helper to map ID or StudentCode to ObjectId
const findUserObjectId = async (idOrCode) => {
  if (mongoose.Types.ObjectId.isValid(idOrCode)) return idOrCode;
  const user = await User.findOne({ 'studentInfo.studentCode': idOrCode });
  return user ? user._id : null;
};

// 1. Lấy toàn bộ lịch trình chung (Khám + Tiêm + Nhắc nhở)
exports.getFullSchedule = async (req, res) => {
  try {
    const targetUserId = await findUserObjectId(req.params.userId);
    if (!targetUserId) return res.status(404).json({ message: 'Không tìm thấy người dùng' });

    const reminders = await Reminder.find({ userId: targetUserId }).sort({ dueDate: 1 });
    const vaccinations = await Vaccination.find({ userId: targetUserId, status: 'Chưa tiêm' }).sort({ scheduledDate: 1 });
    
    res.json({
      reminders,
      upcomingVaccinations: vaccinations
    });
  } catch (error) {
    res.status(500).json({ message: 'Lỗi máy chủ: ' + error.message });
  }
};

// 2. Thêm một nhắc lịch mới
exports.addReminder = async (req, res) => {
  try {
    const targetUserId = await findUserObjectId(req.params.userId);
    if (!targetUserId) return res.status(404).json({ message: 'Không tìm thấy người dùng' });

    const reminder = new Reminder({
      ...req.body,
      userId: targetUserId
    });
    
    await reminder.save();
    res.status(201).json(reminder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// 3. Mark as read
exports.markReminderRead = async (req, res) => {
  try {
    const reminder = await Reminder.findById(req.params.id);
    if (!reminder) return res.status(404).json({ message: 'Không tìm thấy nhắc nhở' });
    
    reminder.isRead = true;
    await reminder.save();
    
    res.json(reminder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
