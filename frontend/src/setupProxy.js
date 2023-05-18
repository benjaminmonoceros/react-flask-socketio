const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    // Proxy rule for API requests
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://127.0.0.1:5001',
            changeOrigin: true,
        })
    );

    app.use(
        '/socket.io', 
        createProxyMiddleware({
            target: 'http://127.0.0.1:5001',
            ws: false,
            changeOrigin: true
        })
    );
};