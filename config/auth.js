// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

	// https://developers.facebook.com
	'facebookAuth' : {
		'clientID' 		: 'process.env.FBclientID', // your App ID
		'clientSecret' 	: 'process.env.FBclientSecret', // your App Secret
        'callbackURL' 	: 'process.env.FBcallbackURLheroku'
        // 'localhostcallbackURL' 	: 'http://localhost:8080/auth/facebook/callback'
	},
	
	// https://apps.twitter.com/ (Twitter developer)
	'twitterAuth' : {
		'consumerKey' 		: 'YeezZW2NraM46NDncerqc7vG9',
		'consumerSecret' 	: 'epr45QNq0cW2dVLbYkoFeZ9v65zmCydusHeoyYpDF9j1Ktzf1d',
		'callbackURL' 		: 'https://web-developer-bootstrap-ironheartbj18.c9users.io/auth/twitter/callback'
	},

	'googleAuth' : {
		'clientID' 		: 'your-secret-clientID-here',
		'clientSecret' 	: 'your-client-secret-here',
		'callbackURL' 	: 'http://localhost:8080/auth/google/callback'
	}

};