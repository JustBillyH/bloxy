module.exports = async function (identifier, _type) {
	_type = _type || typeof(identifier);
	if (_type != null) _type = _type == "number" ? "number": (_type=="username" ? "string" : _type == "string" ? "string" : typeof(identifier));
	_type = _type.toLowerCase();

	if (_type !== "number") {
		identifier = await this.getIdByUsername(identifier);
	}

	return this.getUserProfile(identifier);
};