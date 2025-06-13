export const createUser = (req, res) => {
    const { username, password } = req.body;
    res.status(201).send(`Користувач ${username} створений`);
};

export const loginUser = (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === '1234') {
        return res.status(200).send({ message: 'Login successful', user: { username }, isAdmin: true });
    }
    res.status(401).send('Невірні облікові дані');
};

export const getProfile = (req, res) => {
    res.send({ username: req.user });
};

export const updateProfile = (req, res) => {
    res.send(`Профіль користувача ${req.user} оновлено`);
};