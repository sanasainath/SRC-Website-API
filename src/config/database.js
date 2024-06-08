const mongoose = require('mongoose');

const mongoURI =process.env.mongoURI;
const connect = async () => {
    await mongoose.connect(mongoURI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));
};

module.exports = { connect };
