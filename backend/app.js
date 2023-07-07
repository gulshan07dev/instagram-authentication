require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dbToConnect = require('./config/dbConfig.js');
const userRoutes = require('./routes/userRoutes.js');

const app = express();

app.use(express.json());
app.use(cors({origin: [process.env.CLIENT_URL], credentials: true}));
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));

// database init
dbToConnect();

app.use('/', userRoutes);

module.exports = app;