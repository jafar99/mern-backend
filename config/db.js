const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/mernapp'); // Adjust hostname based on your setup
        console.log('MongoDB connected');
    } catch (err) {
        console.error('MongoDB connection failed', err);
        process.exit(1);
    }
};

module.exports = connectDB;
