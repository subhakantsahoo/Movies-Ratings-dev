const mongoose = require('mongoose');

async function myTask() {
    mongoose.set('strictQuery', false);
    const MONGO_URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}/${process.env.MONGO_DB}`;
    const mongoUri = MONGO_URI;

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