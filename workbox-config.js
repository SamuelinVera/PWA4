module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{png,jpg,css,html,js,json,md,gif,scss,hbs}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};