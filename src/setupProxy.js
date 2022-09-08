const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
	app.use(
		createProxyMiddleware('/site', {
			target: 'https://www.koreaexim.go.kr',
			changeOrigin: true
		})
	);

	app.use(
		createProxyMiddleware('/api', {
			target: 'http://localhost:3010/',
			changeOrigin: true
		})
	);
};