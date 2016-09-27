// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

	'facebookAuth' : {
		'clientID' 		: '1560663210917790', // your App ID
		'clientSecret' 	: '49edb40415ac258c19de42e391d24e21', // your App Secret
		'callbackURL' 	: 'https://vanvlymenlist.herokuapp.com/auth/facebook/callback'
	},

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