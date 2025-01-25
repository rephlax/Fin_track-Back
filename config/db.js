const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB");
        
        mongoose.connection.on('error', (err) => {
            console.log("MongoDB connection error", err);
        });
    } catch (err) {
        console.log("MongoDB connection error", err);
        process.exit(1);
    }
};

module.exports = connectDB;