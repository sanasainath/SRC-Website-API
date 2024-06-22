const mongoose = require('mongoose');

const mongoURI = process.env.CONN_STR;

const connect = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('MongoDB connected');
    } catch (err) {
        console.error('MongoDB connection error:', err);
    }
};

module.exports = { connect };
