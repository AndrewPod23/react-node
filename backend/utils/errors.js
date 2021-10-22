const MAIL_EXISTS = 'Contact with this email already exists';
const CONTACT_NOT_FOUND = 'Contact not found';
const CONTACTS_NOT_FOUND = 'Contact not found. Try later';
const CONTACT_EXISTS = 'Contact with this {PATH} already exists';

const PASSWORD_NOT_CONFIRMED = 'Password missmatch. Confirm password'
const USER_EXISTS = 'User with this {PATH} already exists';
const LOGIN_MIN = 'Login should be more than 5 symbols';
const LOGIN_MAX = 'Login should be less than 30 symbols';
const PASSWORD_MIN = 'Password should be more than 8 symbols';
const PASSWORD_MAX = 'Password should be more than 45 symbols';
const INVALID_EMAIL = 'Invalid email';
const EMAIL_PATTERN = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const USER_NOT_FOUND = `User with this login doesn't exist`;
const INVALID_PASSWORD = 'Please provide a valid password';
const UNAUTH = 'Unauthorized user';

const VALIDATION_ERROR = 'ValidationError';

const isRequired = field => {
	return `${field} is required`;
};

const getMinLength = (field, symbols) => {
	return `${field} should be more than ${symbols} symbols`;
};

module.exports = {
	MAIL_EXISTS,
	CONTACT_NOT_FOUND,
	USER_EXISTS,
	PASSWORD_NOT_CONFIRMED,
	LOGIN_MIN,
	LOGIN_MAX,
	PASSWORD_MIN,
	PASSWORD_MAX,
	INVALID_EMAIL,
	isRequired,
	EMAIL_PATTERN,
	CONTACTS_NOT_FOUND,
	USER_NOT_FOUND,
	INVALID_PASSWORD,
	UNAUTH,
	CONTACT_EXISTS,
	getMinLength,
	VALIDATION_ERROR
};
