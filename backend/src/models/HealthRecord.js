const mongoose = require('mongoose');

const healthRecordSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  
  // 1. Chiều cao / Cân nặng (Lưu theo lịch sử đo)
  vitals: [{
    date: { type: Date, default: Date.now },
    height: { type: Number }, // cm
    weight: { type: Number }, // kg
    bloodPressure: { type: String } // e.g. 120/80
  }],
  
  // 2. Bệnh nền / Dị ứng
  conditions: {
    underlyingDiseases: [{ type: String }], // Bệnh nền
    allergies: [{ type: String }]           // Dị ứng
  },

  // 3 & 4 & 5. Lịch sử khám bệnh + Khám định kỳ + Ghi chú bác sĩ
  consultations: [{
    date: { type: Date, default: Date.now },
    type: { type: String, enum: ['Khám định kỳ', 'Hỏi bệnh', 'Cấp cứu', 'Khác'] },
    diagnosis: { type: String },
    treatment: { type: String },
    attendingDoctor: { type: String },
    doctorNote: { type: String } // Ghi chú từ bác sĩ
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('HealthRecord', healthRecordSchema);
