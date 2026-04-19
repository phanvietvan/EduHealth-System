const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./src/models/User');
const HealthRecord = require('./src/models/HealthRecord');

dotenv.config();

const seedDemoData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // 1. Clean up existing demo user
    await User.deleteMany({ 'studentInfo.studentCode': 'HS2024001' });

    // 2. Create the Student
    const student = new User({
      name: 'Nguyễn Văn A',
      email: 'student@eduhealth.com',
      password: 'password123',
      role: 'student',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9oW7M-yLmsR6sBJbLQMGvDnME_E_h8Hl5JOXwbBw3-nlYNSGPL9c1wMJTTifqXgBW2qfonbGVVSRtu5iPGTfCvB15qayK85QLV3Ef15H3YUC9QsSxalGdMLm__ZfdVp-aLW3dbeCwRmqyZWEzEHndYxgRxpoTfD2qFWk5adxq6NXwqvQuy0wZLKdv29OLYKXUbRo_wwB0bpm19w6dJ0zQELx3gOrcdo4HPnxGpvm_dpRrw-tdjl4JMmYhFKV8oHZPogwFc5yOfkk9',
      studentInfo: {
        studentCode: 'HS2024001',
        className: '12A1'
      },
      parentInfo: {
        parentName: 'Nguyễn Văn B',
        phoneNumber: '0901234567',
        relationship: 'Cha'
      }
    });

    const savedStudent = await student.save();
    console.log('Student created: ', savedStudent.studentInfo.studentCode);

    // 3. Create initial Health Record
    await HealthRecord.deleteMany({ userId: savedStudent._id });
    const healthRecord = new HealthRecord({
      userId: savedStudent._id,
      vitals: [
        { height: 170, weight: 60, heartRate: 75, temperature: 36.5, date: new Date('2024-01-10') },
        { height: 172, weight: 62, heartRate: 72, temperature: 36.7, date: new Date() }
      ],
      conditions: {
        underlyingDiseases: ['Không có'],
        allergies: ['Hải sản', 'Bụi phấn']
      },
      consultations: [
        {
          date: new Date('2024-02-15'),
          type: 'Khám định kỳ',
          diagnosis: 'Sức khỏe bình thường, mắt hơi cận nhẹ.',
          treatment: 'Vệ sinh mắt thường xuyên, hạn chế dùng điện thoại.',
          attendingDoctor: 'BS. Trần Bạch Mã'
        }
      ]
    });

    await healthRecord.save();
    console.log('Health Record created for student');

    process.exit();
  } catch (error) {
    console.error('Error seeding demo data:', error);
    process.exit(1);
  }
};

seedDemoData();
