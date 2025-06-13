function validateProduct(req, res, next) {
    const { name, price } = req.body;

    if (!name || typeof name !== 'string' || name.trim().length === 0) {
        return res.status(400).json({ message: 'Product name is required and must be a non-empty string.' });
    }

    if (price === undefined || typeof price !== 'number' || price < 0) {
        return res.status(400).json({ message: 'Product price is required and must be a non-negative number.' });
    }

    next();
}

export default validateProduct;
