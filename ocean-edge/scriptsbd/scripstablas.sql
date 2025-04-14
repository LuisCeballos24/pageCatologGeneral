USE pagecatalog;

-- Tabla de categorías
CREATE TABLE Categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    image_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de usuarios
CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de productos
CREATE TABLE Products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    image VARCHAR(255),
    price DECIMAL(10, 2) NOT NULL,
    details TEXT,
    description TEXT,
    category_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES Categories(id) ON DELETE SET NULL
);

-- Tabla de reseñas
CREATE TABLE Reviews (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT,
    user_id INT,
    rating INT CHECK (rating >= 1 AND rating <= 5),
    comment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES Products(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE
);

-- Tabla de carrito de compras
CREATE TABLE Cart (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    product_id INT,
    quantity INT DEFAULT 1,
    added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES Products(id) ON DELETE CASCADE
);

-- Datos de ejemplo para Categorías
INSERT INTO Categories (name, image_url) VALUES
('Electronics', 'https://placehold.co/100x100'),
('Books', 'https://placehold.co/100x100'),
('Clothing', 'https://placehold.co/100x100'),
('Home & Kitchen', 'https://placehold.co/100x100');

-- Datos de ejemplo para Productos
INSERT INTO Products (name, image, price, details, description, category_id) VALUES
('Smartphone XYZ', 'path/to/image.jpg', 299.99, 'Details of Smartphone XYZ', 'Description of Smartphone XYZ', 1),
('Book ABC', 'path/to/image.jpg', 19.99, 'Details of Book ABC', 'Description of Book ABC', 2),
('T-Shirt DEF', 'path/to/image.jpg', 9.99, 'Details of T-Shirt DEF', 'Description of T-Shirt DEF', 3),
('Blender GHI', 'path/to/image.jpg', 49.99, 'Details of Blender GHI', 'Description of Blender GHI', 4);

-- Usuario de ejemplo
INSERT INTO Users (username, email, password) VALUES
('john_doe', 'john@example.com', 'hashed_password');
