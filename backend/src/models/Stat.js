const mongoose = require('mongoose');

const statSchema = new mongoose.Schema({
  avgTemperature: { type: String, default: '36.7°C' },
  patientFlowCount: { type: Number, default: 124 },
  patientFlowTrend: { type: String, default: '+12% so với hôm qua' },
  vaccinationRate: { type: String, default: '88%' },
  emergencyCases: { type: Number, default: 2 }
}, { timestamps: true });

module.exports = mongoose.model('Stat', statSchema);
