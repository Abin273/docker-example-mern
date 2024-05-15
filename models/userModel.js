const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			require: [true, "user must have a name"],
			unique: true
		},
		password: {
			type: String,
			min: 4,
			require: [true, "User must have a password"],
		},
	},
	{
		timestamps: true,
	}
);

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
