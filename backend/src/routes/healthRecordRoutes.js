const express = require('express');
const router = express.Router();
const healthRecordController = require('../controllers/healthRecordController');

// Routes cho /api/health-records
router.get('/:userId', healthRecordController.getHealthRecord);
router.post('/:userId/vitals', healthRecordController.addVitals);
router.put('/:userId/conditions', healthRecordController.updateConditions);
router.post('/:userId/consultations', healthRecordController.addConsultation);

module.exports = router;
