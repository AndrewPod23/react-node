const getErrors = res => {
	const errors = {
		name: '',
		surname: '',
		mail: ''
	};

	Object.keys(res.errors).forEach(key => {
		if(res.errors[key]) errors[key] = res.errors[key].message
	});

	return errors;
};

module.exports = {
	getErrors
};
