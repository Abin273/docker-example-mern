const mongoose = require("mongoose");

const dressSchema = new mongoose.Schema(
	{
		brand: {
			type: String,
			require: [true, "Dress must have a name"],
		},
		price: {
			type: Number,
			min: 0,
			require: [true, "Dress must have a price"],
		},
		size: {
			type: String,
			required: true,
			enum: ["XS", "S", "M", "L", "XL"], // Assuming predefined sizes
		},
		color: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const dressModel = mongoose.model("Dress", dressSchema);

module.exports = dressModel;
