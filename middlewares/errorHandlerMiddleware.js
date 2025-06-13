function errorHandler(err, req, res, next) {
    console.error('❌ Server Error:', err.stack || err.message);
    res.status(500).json({ message: 'Internal Server Error', error: err.message || 'Unknown error' });
}

export default errorHandler;