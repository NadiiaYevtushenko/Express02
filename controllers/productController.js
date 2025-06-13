export const getAllProducts = (req, res) => {
    res.send('Список товарів');
};

export const getProductById = (req, res) => {
    res.send(`Деталі товару з ID: ${req.params.id}`);
};

export const createProduct = (req, res) => {
    res.status(201).send('Товар створено');
};

export const updateProduct = (req, res) => {
    res.send(`Товар з ID ${req.params.id} оновлено`);
};

export const deleteProduct = (req, res) => {
    res.send(`Товар з ID ${req.params.id} видалено`);
};