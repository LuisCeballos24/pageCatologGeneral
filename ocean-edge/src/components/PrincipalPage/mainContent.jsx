import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, category }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleMouseEnter = () => {
    if (product.images && product.images.length > 1) {
      let index = 0;
      setCurrentImage(index);
      const interval = setInterval(() => {
        index = (index + 1) % product.images.length;
        setCurrentImage(index);
      }, 2000);
      return () => clearInterval(interval);
    }
  };

  const handleMouseLeave = () => {
    setCurrentImage(0);
  };

  return (
    <Link to={`${category}/${product.id}`} style={{ textDecoration: 'none' }}>
      <div
        className="bg-white shadow rounded-lg p-4 w-full sm:w-64"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ cursor: 'pointer' }}
      >
        <img
          src={product.image ? product.image : 'placeholder.jpg'}
          alt={product.name}
          className="w-full h-40 object-cover"
        />
        <div className="mt-4">
          <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
          <p className="text-gray-800">
            {product.price} <span className="line-through">{product.originalPrice}</span>
          </p>
          <p className="text-green-600">Save - {product.savings}</p>
        </div>
      </div>
    </Link>
  );
};

const MainContent = () => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/products') // Aquí debes cambiar la URL por la correcta de tu API
      .then(response => response.json())
      .then(data => setProductsData(data))
      .catch(error => console.error('Error al cargar los datos:', error));
  }, []);

  return (
    <main className="container mx-auto px-4 py-8 w-full">
      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-400">
          Grab the best deal on <span className="text-blue-600">Smartphones</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {productsData.map((product, index) => (
            <ProductCard key={index} product={product} category="smartphones" />
          ))}
        </div>
      </section>
    </main>
  );
};

export default MainContent;
