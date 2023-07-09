const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name: {
        required: [true, 'name must be required'],
        minLength: [3, 'name must be at least 3 char'],
        maxLength: [15, 'name must be less than 15 char'],
        type: String
    },
    username: {
        required: [true, 'username must be required'],
        minLength: [3, 'username must be at least 3 char'],
        maxLength: [15, 'username must be less than 15 char'],
        type: String,
        unique: [true, 'username must be unique']
    },
    email: {
        type: String,
        required: true,
        unique: [true, 'user already exist with the email']
    },
    password: {
        type: String,
        required: [true, 'password must be required']
    },
    bio: {
        type: String,
        required: [true, 'bio must be required']
    }
})

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    this.password = await bcrypt.hash(this.password, 10);
    return next();
});

userSchema.methods = {
    generateAuthToken() {
        return JWT.sign(
            { id: this._id, email: this.email, username: this.username, bio: this.bio },
            process.env.SECRET,
            { expiresIn: '24h' }
        );
    }
};


module.exports = mongoose.model("User", userSchema);