const mongoose = require("mongoose");

const endUserSchema = new mongoose.Schema({
	endUserName: {
		type: String,
		required: [true, "User Name is required"],
	},
	phone: {
		type: String,
		required: [true, "User phone number required"],
	},
	email: {
		type: String,
		required: [true, "Email is required"],
		trim: true,
		lowercase: true,
		unique: [true, "Email already exists"],
	},
	description: {
		type: String,
		required: [true, "description can't be blank"],
	},
});

module.exports = mongoose.model("Enduser", endUserSchema, "Endusers");
