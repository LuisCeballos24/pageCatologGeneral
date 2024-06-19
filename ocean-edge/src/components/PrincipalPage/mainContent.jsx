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
          src={product.images && product.images.length > 0 ? product.images[currentImage] : 'placeholder.jpg'}
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
  const [productsData, setProductsData] = useState({
    smartphones: [],
    categories: [],
    electronics: [],
    essentials: [],
  });

  useEffect(() => {
    fetch('productos.json') // Ruta relativa desde la carpeta public
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
          {productsData.smartphones && productsData.smartphones.map((product, index) => (
            <ProductCard key={index} product={product} category="smartphones" />
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-400">
          Shop From <span className="text-blue-600">Top Categories</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {productsData.categories && productsData.categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={category.image}
                alt={category.name}
                className="w-24 h-24 object-cover rounded-full"
              />
              <p className="mt-2 text-gray-800">{category.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-400">
          Top <span className="text-blue-600">Electronics Brands</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {productsData.electronics && productsData.electronics.map((product, index) => (
            <ProductCard key={index} product={product} category="electronics" />
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-400">
          Daily <span className="text-blue-600">Essentials</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {productsData.essentials && productsData.essentials.map((product, index) => (
            <ProductCard key={index} product={product} category="essentials" />
          ))}
        </div>
      </section>
    </main>
  );
};

export default MainContent;
