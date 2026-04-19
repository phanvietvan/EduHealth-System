const express = require('express');
const router = express.Router();
const vaccinationController = require('../controllers/vaccinationController');

// Quản lý theo User
router.get('/user/:userId', vaccinationController.getVaccinations);
router.post('/user/:userId', vaccinationController.addVaccination);

// Thao tác trên từng record lịch tiêm (bằng ID record)
router.patch('/:id/consent', vaccinationController.giveConsent);
router.patch('/:id/status', vaccinationController.updateStatus);

module.exports = router;
