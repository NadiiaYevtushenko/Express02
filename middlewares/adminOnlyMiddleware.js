function adminOnly(req, res, next) {
    if (!req.isAdmin) {
        return res.status(403).send('Access denied. Admins only.');
    }
    next();
}

export default adminOnly;