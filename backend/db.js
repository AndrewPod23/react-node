const mongoose = require('mongoose');

const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true, 
	useCreateIndex: true,
	useFindAndModify: true
};

const initDB = () => {
	mongoose.Promise = global.Promise;
	mongoose.connect(process.env.DB_URI, options)
		.then(
			() => { console.log('Database is connected') },
			err => { console.log('Can not connect to the database' + err) }
		);
};

mongoose.connection.on('disconnected', () => {
	throw new Error('Database disconnected');
});

module.exports = initDB;