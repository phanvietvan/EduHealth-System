const mongoose = require('mongoose');
const HealthRecord = require('../models/HealthRecord');
const User = require('../models/User');

// Hỗ trợ tìm kiếm theo cả ObjectId và StudentCode
const findUserObjectId = async (idOrCode) => {
  if (mongoose.Types.ObjectId.isValid(idOrCode)) return idOrCode;
  const user = await User.findOne({ 'studentInfo.studentCode': idOrCode });
  return user ? user._id : null;
};

// Lấy hồ sơ sức khỏe bằng userId hoặc studentCode
exports.getHealthRecord = async (req, res) => {
  try {
    const targetUserId = await findUserObjectId(req.params.userId);
    if (!targetUserId) {
      return res.status(404).json({ message: 'Không tìm thấy người dùng phù hợp' });
    }

    let record = await HealthRecord.findOne({ userId: targetUserId }).populate('userId', 'name studentInfo');
    
    if (!record) {
      return res.status(404).json({ message: 'Không tìm thấy hồ sơ sức khỏe cho người dùng này' });
    }
    res.json(record);
  } catch (error) {
    res.status(500).json({ message: 'Lỗi máy chủ: ' + error.message });
  }
};

// Cập nhật sinh hiệu (Chiều cao, cân nặng)
exports.addVitals = async (req, res) => {
  try {
    const targetUserId = await findUserObjectId(req.params.userId);
    if (!targetUserId) return res.status(404).json({ message: 'Không tìm thấy người dùng' });

    const record = await HealthRecord.findOne({ userId: targetUserId });
    if (!record) return res.status(404).json({ message: 'Không tìm thấy hồ sơ' });

    record.vitals.push(req.body);
    await record.save();
    res.json(record);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Cập nhật bệnh nền / dị ứng
exports.updateConditions = async (req, res) => {
  try {
    const targetUserId = await findUserObjectId(req.params.userId);
    if (!targetUserId) return res.status(404).json({ message: 'Không tìm thấy người dùng' });

    const record = await HealthRecord.findOne({ userId: targetUserId });
    if (!record) return res.status(404).json({ message: 'Không tìm thấy hồ sơ' });

    if (req.body.underlyingDiseases) record.conditions.underlyingDiseases = req.body.underlyingDiseases;
    if (req.body.allergies) record.conditions.allergies = req.body.allergies;

    await record.save();
    res.json(record);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Thêm lịch sử / kết quả khám
exports.addConsultation = async (req, res) => {
  try {
    const targetUserId = await findUserObjectId(req.params.userId);
    if (!targetUserId) return res.status(404).json({ message: 'Không tìm thấy người dùng' });

    const record = await HealthRecord.findOne({ userId: targetUserId });
    if (!record) return res.status(404).json({ message: 'Không tìm thấy hồ sơ' });

    record.consultations.push(req.body);
    await record.save();
    res.json(record);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
