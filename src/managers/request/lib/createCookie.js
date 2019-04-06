const toughCookie = require("tough-cookie");



module.exports = function (key, value, domain, hostOnly, httpOnly) {

	return new toughCookie.Cookie({
		key: key,
		value: value,
		domain: domain,
		hostOnly: hostOnly,
		httpOnly: httpOnly
	});
};