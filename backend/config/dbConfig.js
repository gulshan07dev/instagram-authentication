const mongoose = require('mongoose');

const dbToConnect = async () => {
    mongoose.connect(process.env.MONGO_URI)
    .then((conn) => {
        console.log(`db connected: ${conn.connection.host}`);
    })
    .catch((e) => {
        console.log(`thrown error in db connected: ${e.message}`);
    })
}

module.exports = dbToConnect;