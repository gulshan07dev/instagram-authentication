const userModel = require('../model/userModel.js');

// signup controller
exports.signup = async (req, res) => { 

    try {
        // Save user data to the database 
        const userInfo = userModel(req.body);
        const result = await userInfo.save();
    
        // Send success response
        res.status(200).json({
            message: 'User registered successfully.'
        });
    }
    catch(e) {
        return res.status(400).json({
            error: e.message
        })
    }
}

// Login controller
exports.login = async (req, res) => {
    const { username, password } = req.body;

    const user = await userModel.findOne({ username }).select('+email');

    // Send success response and cookie
    const token = user.generateAuthToken();
    res.cookie('token', token, {
        maxAge: 24 * 60 * 60 * 1000, // 24 hours
        httpOnly: true
    });

    res.status(200).json({
        success: true,
        message: 'Login successful' 
    });
}


// logout
exports.logout = async (req, res) => {
    try {
        await res.clearCookie('token');
        res.status(200).json({
            success: true,
            message: 'Logout successful'
        })
    }
    catch(e) {
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        })
    }
}