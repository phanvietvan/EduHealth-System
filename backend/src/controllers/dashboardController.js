const ClinicLog = require('../models/ClinicLog');
const Screening = require('../models/Screening');
const Stat = require('../models/Stat');

// ---- CLINIC LOGS ----
exports.getClinicLogs = async (req, res) => {
  try {
    const logs = await ClinicLog.find().sort({ createdAt: -1 });
    res.json(logs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createClinicLog = async (req, res) => {
  try {
    const log = new ClinicLog(req.body);
    const savedLog = await log.save();
    res.status(201).json(savedLog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// ---- SCREENINGS ----
exports.getScreenings = async (req, res) => {
  try {
    const screenings = await Screening.find().sort({ createdAt: -1 });
    res.json(screenings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createScreening = async (req, res) => {
  try {
    const screening = new Screening(req.body);
    const savedScreening = await screening.save();
    res.status(201).json(savedScreening);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// ---- STATS ----
exports.getStats = async (req, res) => {
  try {
    let stat = await Stat.findOne();
    if (!stat) {
      // Create default stats if none exist
      stat = new Stat();
      await stat.save();
    }
    res.json(stat);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateStats = async (req, res) => {
  try {
    const stat = await Stat.findOneAndUpdate({}, req.body, { new: true, upsert: true });
    res.json(stat);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// ---- FULL DASHBOARD DATA (Combined) ----
exports.getDashboardData = async (req, res) => {
  try {
    const logs = await ClinicLog.find().sort({ createdAt: -1 });
    const screenings = await Screening.find().sort({ createdAt: -1 });
    let stat = await Stat.findOne();
    
    if (!stat) {
      stat = new Stat();
      await stat.save();
    }

    res.json({
      stats: stat,
      clinicLogs: logs,
      screenings: screenings
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
