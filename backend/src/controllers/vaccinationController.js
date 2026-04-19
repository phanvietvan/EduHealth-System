const mongoose = require('mongoose');
const Vaccination = require('../models/Vaccination');
const User = require('../models/User');

// Helper to map ID or StudentCode to ObjectId
const findUserObjectId = async (idOrCode) => {
  if (mongoose.Types.ObjectId.isValid(idOrCode)) return idOrCode;
  const user = await User.findOne({ 'studentInfo.studentCode': idOrCode });
  return user ? user._id : null;
};

// 1. Lấy danh sách lịch tiêm (sắp tới + lịch sử) của 1 người dùng
exports.getVaccinations = async (req, res) => {
  try {
    const targetUserId = await findUserObjectId(req.params.userId);
    if (!targetUserId) return res.status(404).json({ message: 'Không tìm thấy người dùng' });

    const records = await Vaccination.find({ userId: targetUserId }).sort({ scheduledDate: 1 });
    res.json(records);
  } catch (error) {
    res.status(500).json({ message: 'Lỗi máy chủ: ' + error.message });
  }
};

// 2. Thêm lịch tiêm mới
exports.addVaccination = async (req, res) => {
  try {
    const targetUserId = await findUserObjectId(req.params.userId);
    if (!targetUserId) return res.status(404).json({ message: 'Không tìm thấy người dùng' });

    const newVax = new Vaccination({
      ...req.body,
      userId: targetUserId
    });
    await newVax.save();
    res.status(201).json(newVax);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// 3. Phụ huynh đánh dấu đồng ý tiêm
exports.giveConsent = async (req, res) => {
  try {
    const { consentedBy } = req.body;
    const vax = await Vaccination.findById(req.params.id);
    
    if (!vax) return res.status(404).json({ message: 'Không tìm thấy lịch tiêm' });
    
    vax.parentConsent.isConsented = true;
    vax.parentConsent.consentedBy = consentedBy;
    vax.parentConsent.consentedAt = new Date();
    
    await vax.save();
    res.json(vax);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// 4. Cập nhật trạng thái sau khi đã tiêm xong
exports.updateStatus = async (req, res) => {
  try {
    const { status, administeredBy } = req.body;
    const vax = await Vaccination.findById(req.params.id);
    
    if (!vax) return res.status(404).json({ message: 'Không tìm thấy lịch tiêm' });
    
    vax.status = status;
    if (status === 'Đã tiêm') {
      vax.actualDate = new Date();
      if (administeredBy) vax.administeredBy = administeredBy;
    }
    
    await vax.save();
    res.json(vax);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
