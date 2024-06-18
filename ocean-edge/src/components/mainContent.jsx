import React, { useState, useEffect } from 'react';

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
      <div className="bg-blue-900 text-white rounded-lg p-8 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-4xl font-bold">SMART WEARABLE.</h2>
          <p className="text-xl">UP to 80% OFF</p>
        </div>
        <img src="https://placehold.co/150x150" alt="Smartwatch" className="w-32 h-32 mx-auto md:mx-0" />
      </div>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Grab the best deal on <span className="text-blue-600">Smartphones</span></h2>
        <div className="flex flex-wrap justify-center gap-4">
          {productsData.smartphones.map((product, index) => (
            <div key={index} className="bg-white shadow rounded-lg p-4 w-full sm:w-64">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
              <div className="mt-4">
                <h3 className="text-lg font-bold">{product.name}</h3>
                <p className="text-gray-600">{product.price} <span className="line-through">{product.originalPrice}</span></p>
                <p className="text-green-600">Save - {product.savings}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Shop From <span className="text-blue-600">Top Categories</span></h2>
        <div className="flex flex-wrap justify-center gap-4">
          {productsData.categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={category.image} alt={category.name} className="w-24 h-24 object-cover rounded-full" />
              <p className="mt-2 text-gray-600">{category.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Top <span className="text-blue-600">Electronics Brands</span></h2>
        <div className="flex flex-wrap justify-center gap-4">
          {productsData.electronics.map((product, index) => (
            <div key={index} className="bg-white shadow rounded-lg p-4 w-full sm:w-64">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
              <div className="mt-4">
                <h3 className="text-lg font-bold">{product.name}</h3>
                <p className="text-gray-600">{product.discount}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Daily <span className="text-blue-600">Essentials</span></h2>
        <div className="flex flex-wrap justify-center gap-4">
          {productsData.essentials.map((product, index) => (
            <div key={index} className="bg-white shadow rounded-lg p-4 w-full sm:w-64">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
              <div className="mt-4">
                <h3 className="text-lg font-bold">{product.name}</h3>
                <p className="text-gray-600">{product.discount}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default MainContent;
