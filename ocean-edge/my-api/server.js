const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const db = require('./db');

app.use(express.json());

// Ruta para obtener todas las categorías
app.get('/categories', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM Categories');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Ruta para obtener todos los productos
app.get('/products', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM Products');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Ruta para obtener un producto por ID
app.get('/products/:id', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM Products WHERE id = ?', [req.params.id]);
        if (rows.length === 0) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.json(rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Ruta para crear un nuevo producto
app.post('/products', async (req, res) => {
    const { name, image, price, originalPrice, savings, details, description, category_id } = req.body;
    try {
        const [result] = await db.query('INSERT INTO Products (name, image, price, originalPrice, savings, details, description, category_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [name, image, price, originalPrice, savings, details, description, category_id]);
        res.json({ id: result.insertId, name, image, price, originalPrice, savings, details, description, category_id });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Ruta para actualizar un producto
app.put('/products/:id', async (req, res) => {
    const { name, image, price, originalPrice, savings, details, description, category_id } = req.body;
    try {
        const [result] = await db.query('UPDATE Products SET name = ?, image = ?, price = ?, originalPrice = ?, savings = ?, details = ?, description = ?, category_id = ? WHERE id = ?', [name, image, price, originalPrice, savings, details, description, category_id, req.params.id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.json({ id: req.params.id, name, image, price, originalPrice, savings, details, description, category_id });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Ruta para eliminar un producto
app.delete('/products/:id', async (req, res) => {
    try {
        const [result] = await db.query('DELETE FROM Products WHERE id = ?', [req.params.id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.json({ message: 'Product deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
