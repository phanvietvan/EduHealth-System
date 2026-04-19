const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');

// Lấy hồ sơ (ví dụ: /api/profile/123)
router.get('/:id', profileController.getProfile);

// Cập nhật hồ sơ
router.put('/:id', profileController.updateProfile);

module.exports = router;
