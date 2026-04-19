const mongoose = require('mongoose');

const clinicLogSchema = new mongoose.Schema({
  patientName: { type: String, required: true },
  patientInitials: { type: String }, // e.g. NH, TL, PV
  reason: { type: String, required: true },
  time: { type: String, required: true }, // e.g. 10:15 AM
  status: { type: String, enum: ['Đã xử lý', 'Đang chờ', 'Hoàn thành'], required: true },
  staffOrLocation: { type: String, required: true } // e.g. BS. Minh, Phòng 204
}, { timestamps: true });

module.exports = mongoose.model('ClinicLog', clinicLogSchema);
