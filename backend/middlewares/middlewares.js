const userModel = require('../model/userModel.js');
const emailValidator = require('email-validator');
const bcrypt = require('bcrypt');

// Middleware to validate signup data
exports.signupDataValidate = async (req, res, next) => {
    const { name, username, email, password, bio } = req.body;

    // Check if any field is missing
    if (!name || !username || !email || !password || !bio) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    // Validate the email format
    if (!emailValidator.validate(email)) {
        return res.status(400).json({ error: 'Invalid email format.' });
    }

    // Check if the user has already signed up with the same email
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ error: 'User already signed up with the same email.' });
    }

    next();
};

// Middleware to validate login data
exports.loginDataValidate = async (req, res, next) => {
    const { username, password } = req.body;

    // Check if any field is missing
    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required.' });
    }

    // Find the user by username
    const user = await userModel.findOne({ username });

    // Check if the user exists and compare the password
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(400).json({ error: 'Incorrect username or password.' });
    }

    next();
};
