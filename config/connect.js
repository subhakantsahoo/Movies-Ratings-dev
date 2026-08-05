const mongoose = require('mongoose');

async function myTask() {
    mongoose.set('strictQuery', false);
    const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/mydatabase';

    let attempts = 0;

    const tryConnect = async () => {
        attempts += 1;
        try {
            await mongoose.connect(mongoUri);
            console.log('connected');
        } catch (err) {
            console.log(`Mongo connection attempt ${attempts} failed: ${err.message}`);
            if (attempts < 12) {
                setTimeout(tryConnect, 5000);
            } else {
                console.error('Mongo connection failed after retries');
            }
        }
    };

    await tryConnect();
}

exports.connectMongo = myTask;