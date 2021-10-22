require('dotenv').config()
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4005;
const cors = require('cors');
const initDB = require('./db');

const { registerRoutes } = require('./utils/index');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
registerRoutes(app);
initDB();

app.listen(PORT, () => {
	console.log('Server is running on Port:', PORT);
});