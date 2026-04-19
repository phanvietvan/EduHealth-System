const mongoose = require('mongoose');
const dotenv = require('dotenv');
const ClinicLog = require('./src/models/ClinicLog');
const Screening = require('./src/models/Screening');
const Stat = require('./src/models/Stat');

dotenv.config();

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB for Seeding Dashboard Data');

    // Clear existing
    await ClinicLog.deleteMany({});
    await Screening.deleteMany({});
    await Stat.deleteMany({});

    // Seed Stat
    const stat = new Stat({
      avgTemperature: '36.7°C',
      patientFlowCount: 124,
      patientFlowTrend: '+12% so với hôm qua',
      vaccinationRate: '88%',
      emergencyCases: 2
    });
    await stat.save();

    // Seed Clinic Logs
    const logs = [
      {
        patientName: 'Nguyễn Huy Hoàng',
        patientInitials: 'NH',
        reason: 'Sơ cứu chấn thương thể thao',
        time: '10:15 AM',
        status: 'Đã xử lý',
        staffOrLocation: 'BS. Minh'
      },
      {
        patientName: 'Trần Lan Anh',
        patientInitials: 'TL',
        reason: 'Kiểm tra thị lực định kỳ',
        time: '09:45 AM',
        status: 'Đang chờ',
        staffOrLocation: 'Phòng 204'
      },
      {
        patientName: 'Phạm Văn Nam',
        patientInitials: 'PV',
        reason: 'Tư vấn tâm lý',
        time: '09:00 AM',
        status: 'Hoàn thành',
        staffOrLocation: 'Y tá Thompson'
      }
    ];
    await ClinicLog.insertMany(logs);

    // Seed Screenings
    const screenings = [
      {
        category: 'Sức khỏe Tim mạch',
        dateString: 'Ngày mai',
        title: 'Khám sức khỏe lớp 12A',
        description: '45 học sinh dự kiến. Cần chuẩn bị máy đo ECG và thiết bị đo huyết áp.',
        participantsCount: 3
      },
      {
        category: 'Nha khoa',
        dateString: 'Thứ 6, 24 Thg 5',
        title: 'Kiểm tra Răng miệng khối 6',
        description: 'Hợp tác với Nha khoa Quốc tế Sunshine.',
        participantsCount: 0
      }
    ];
    await Screening.insertMany(screenings);

    console.log('Seed completed successfully!');
    process.exit();
  } catch (err) {
    console.error('Seed false:', err);
    process.exit(1);
  }
};

seedData();
