const mongoose = require('mongoose');

const vaccinationSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  
  vaccineName: { type: String, required: true },
  diseaseTarget: { type: String }, // e.g., HPV, Uốn ván, Lao
  scheduledDate: { type: Date },
  actualDate: { type: Date },
  
  status: { 
    type: String, 
    enum: ['Chưa tiêm', 'Đã tiêm', 'Hoãn tiêm'], 
    default: 'Chưa tiêm' 
  },
  
  // Quyền quyết định đồng ý tiêm từ Phụ huynh
  parentConsent: {
    isConsented: { type: Boolean, default: false },
    consentedBy: { type: String }, // Tên phụ huynh xác nhận
    consentedAt: { type: Date }
  },
  
  administeredBy: { type: String }, // Tên người tiêm/Cơ sở y tế
  notes: { type: String }
}, {
  timestamps: true
});

module.exports = mongoose.model('Vaccination', vaccinationSchema);
