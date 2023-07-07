const express = require('express');
const { signup, login } = require('../controllers/userController.js');
const { signupDataValidate, loginDataValidate } = require('../middlewares/middlewares.js');

const router = express.Router();

router.post('/signup', signupDataValidate, signup);
router.post('/login', loginDataValidate, login);

module.exports = router;