// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

	// https://developers.facebook.com
	'facebookAuth' : {
		'clientID' 		: 'process.env.FBclientID', // your App ID
		'clientSecret' 	: 'process.env.FBclientSecret', // your App Secret
        'callbackURL' 	: 'process.env.FBcallbackURLheroku'
        // 'callbackURL' 	: 'process.env.FBcallbackLocalhost'
	},
	
	// https://apps.twitter.com/ (Twitter developer)
	'twitterAuth' : {
		'consumerKey' 		: 'your-secret-clientID-here',
		'consumerSecret' 	: 'your-client-secret-here',
		'callbackURL' 		: 'https://vanvlymenlist.herokuapp.com/auth/twitter/callback'
	},

	'googleAuth' : {
		'clientID' 		: 'your-secret-clientID-here',
		'clientSecret' 	: 'your-client-secret-here',
		'callbackURL' 	: 'http://localhost:8080/auth/google/callback'
	}

};