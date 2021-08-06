const cors = require('cors');
const helmet = require('helmet');
const sanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');

exports.protecc = function (app, mongo = 1) {
	app.use(cors());
	app.use(helmet());
	app.use(xss());
	app.use(hpp());
	if (mongo === 1) app.use(sanitize());
};

exports.limit = function (app, seconds, max) {
	app.use(
		rateLimit({
			windowMs: 1000 * seconds,
			max: max,
		})
	);
};
