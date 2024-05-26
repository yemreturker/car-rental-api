const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connectionString = process.env.MONGO_URI;
        if (!connectionString) {
            throw new Error('[!] MONGO_URI is not defined!');
        }

        await mongoose.connect(connectionString, {});
        console.log('[+] MongoDB connected!');
    } catch (err) {
        console.error('[!] MongoDB connection error:', err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
