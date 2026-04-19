const mongoose = require('mongoose');
const User = require('../models/User');

// --- HỒ SƠ (PROFILE) CONTROLLERS ---

// 1. Lấy thông tin hồ sơ theo ID hoặc Mã học sinh
exports.getProfile = async (req, res) => {
  try {
    const { id } = req.params;
    let user;

    // Kiểm tra xem id có phải là ObjectId hợp văn không
    if (mongoose.Types.ObjectId.isValid(id)) {
      user = await User.findById(id).select('-password');
    } else {
      // Nếu không phải ObjectId, thử tìm theo studentCode
      user = await User.findOne({ 'studentInfo.studentCode': id }).select('-password');
    }

    if (!user) {
      return res.status(404).json({ message: `Không tìm thấy người dùng với ID hoặc Mã: ${id}` });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Lỗi máy chủ: ' + error.message });
  }
};

// 2. Cập nhật thông tin cơ bản & các trường hồ sơ
exports.updateProfile = async (req, res) => {
  try {
    // Cho phép upload các trường: avatar, studentInfo, parentInfo, gender, address, v.v..
    const {
      name,
      avatar,
      studentInfo,
      parentInfo,
      dateOfBirth,
      gender,
      address
    } = req.body;

    const user = await User.findById(req.params.id);
    
    if (!user) {
      return res.status(404).json({ message: 'Không tìm thấy hồ sơ để cập nhật' });
    }

    // Cập nhật thông tin (chỉ những trường có truyền lên mới cập nhật)
    if (name) user.name = name;
    if (avatar) user.avatar = avatar;
    if (studentInfo) user.studentInfo = { ...user.studentInfo, ...studentInfo };
    if (parentInfo) user.parentInfo = { ...user.parentInfo, ...parentInfo };
    if (dateOfBirth) user.dateOfBirth = dateOfBirth;
    if (gender) user.gender = gender;
    if (address) user.address = address;

    const updatedUser = await user.save();
    
    // Xoá password trước khi trả về
    const result = updatedUser.toObject();
    delete result.password;

    res.json({ message: 'Cập nhật thông tin thành công', profile: result });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
