const express = require('express');
const router = express.Router();
const scheduleController = require('../controllers/scheduleController');

router.get('/user/:userId', scheduleController.getFullSchedule);
router.post('/user/:userId/reminders', scheduleController.addReminder);
router.patch('/reminders/:id/read', scheduleController.markReminderRead);

module.exports = router;
