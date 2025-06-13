function auth(req, res, next) {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).send('Access denied. No credentials sent.');
    }
    req.user = 'mockedUser';
    req.isAdmin = authHeader.includes('admin');
    next();
}

export default auth;