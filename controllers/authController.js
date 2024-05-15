const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

const signUp = async (req, res) => {
	const SALT = 12;
	const { name, password } = req.body;

	try {
		const hashedPassword = await bcrypt.hash(password, SALT);
		const newUser = await User.create({
			name,
			password: hashedPassword,
		});
		res.status(201).json({
			status: "success",
			data: newUser,
		});
	} catch (error) {
		console.log(error);
		res.status(400).json({ status: "fail" });
	}
};

const login = async (req, res) => {
	const { name, password } = req.body;

	try {
		const user = await User.findOne({name});
        if(!user) return res.status(404).json({status: "fail", message: "user not found"});
        const isCorrect = await bcrypt.compare(password, user.password);
        console.log(isCorrect);
        if(isCorrect) {
			req.session.user = user
            res.status(200).json({status: "success"});
        }else{
            res.status(400).json({status: "fail", message: "invalid name or password"});
        }
            
	} catch (error) {
		console.log(error);
		res.status(400).json({ status: "fail" });
	}
};

module.exports = { signUp, login };
