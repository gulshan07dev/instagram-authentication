const express = require('express');
const { signup, login, logout } = require('../controllers/userController.js');
const { signupDataValidate, loginDataValidate, jwtAuth } = require('../middlewares/middlewares.js');

const router = express.Router();

router.post('/signup', signupDataValidate, signup);
router.post('/login', loginDataValidate, login);
router.get('/logout', jwtAuth, logout);
router.get('/check-auth', jwtAuth);

module.exports = router;