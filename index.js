const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { MONGO_PORT, DB_NAME } = require("./config/config");
const connectDB = async () => {
	try {
		const connection = await mongoose.connect( `mongodb://127.0.0.1:${MONGO_PORT}/${DB_NAME}` );
		if (connection) console.log("connected to mongodb");
	} catch (error) {
		console.log(`connection failed!!! Error is: ${error}`);
	}
};

connectDB();

app.get("/", (req, res) => {
	console.log("hi");
	res.send("Hello ddd World123");
});

PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
