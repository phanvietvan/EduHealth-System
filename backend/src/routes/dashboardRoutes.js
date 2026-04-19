const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');

// Combined Dashboard Data
router.get('/', dashboardController.getDashboardData);

// Stats API
router.get('/stats', dashboardController.getStats);
router.put('/stats', dashboardController.updateStats);

// Clinic Logs API
router.get('/logs', dashboardController.getClinicLogs);
router.post('/logs', dashboardController.createClinicLog);

// Screenings API
router.get('/screenings', dashboardController.getScreenings);
router.post('/screenings', dashboardController.createScreening);

module.exports = router;
