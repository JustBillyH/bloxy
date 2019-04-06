const googleKey = "6LcpwSQUAAAAAPN5nICO6tHekrkrSIYvsl9jAPW4";

class CaptchaManager {
    
	constructor (self) {

		this.setup = self;

	}

	solveCaptcha (url) {
		if (!this.setup.authTab.captchaKey) throw new Error("Cannot solve captcha, no captcha api key set!");
		return require("./lib/handleCaptcha")(url, this.setup.authTab.captchaKey, googleKey);
	}

	static verifyCaptchaUser (captchaResponse, setup) {
		if (!captchaResponse) throw new Error("Cannot verify captcha response when no captcha response was supplied");
		return require("./lib/verifyCaptcha").verifyUser(captchaResponse, setup);
	}
    
	static verifyCaptchaLogin (captchaResponse, username, setup) {
		if (!captchaResponse) throw new Error("Cannot verify captcha response when no captcha response was supplied");
		return require("./lib/verifyCaptcha").verifyLogin(captchaResponse, username, setup);
	}

	static verifyCaptchaMessage (captchaResponse, setup) {
		if (!captchaResponse) throw new Error("Cannot verify captcha response when no captcha response was supplied");
		return require("./lib/verifyCaptcha/verifyMessage")(captchaResponse, setup);
	}

	static verifyCaptchaSignup (captchaResponse, setup) {
		if (!captchaResponse) throw new Error("Cannot verify captcha response when no captcha response was supplied");
		return require("./lib/verifyCaptcha/verifySignup")(captchaResponse, setup);
	}
}

module.exports = CaptchaManager;