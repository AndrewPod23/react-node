const routes = require('../routes')

const registerRoutes = app => {
	Object.keys(routes).forEach(registry => routes[registry](app))
};

module.exports = {
	registerRoutes
};