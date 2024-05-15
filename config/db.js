const mongoose = require("mongoose");
const { MONGO_PORT, MONGO_IP, MONGO_USER, MONGO_PASSWORD } = require("../config/config");

const connectDB = async () => {
	try {
		const connection = await mongoose.connect(
			`mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`
            // 'mongodb://mongodb:27017/my-db'
		);
		if (connection) console.log("connected to mongodb");
	} catch (error) {
		console.log(`connection failed!!! Error is: ${error}`);
	}
};

module.exports = { connectDB };
