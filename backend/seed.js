const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./src/models/User');

dotenv.config();

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Create a dummy user
    const newUser = new User({
      name: 'Admin User',
      email: 'admin@eduhealth.com',
      password: 'password123',
      role: 'admin'
    });

    await newUser.save();
    console.log('Dummy user inserted, database "eduhealth" should now be created!');

    process.exit();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
