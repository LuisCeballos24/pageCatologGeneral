import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductCard = ({ productsData }) => {
    const { category, id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch('/productos.json'); // Ruta relativa desde la carpeta public
                const data = await response.json();

                // Buscar el producto en todas las categorías
                let foundProduct = null;
                    const product = data[category].find(product => product.id === id);
                    if (product) {
                        foundProduct = product;
                    }

                // Setear el producto encontrado
                if (foundProduct) {
                    setProduct(foundProduct);
                } else {
                    console.error('Producto no encontrado');
                }
            } catch (error) {
                console.error('Error al cargar los datos:', error);
            }
        };

        fetchProduct();
    }, [category, id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="bg-white min-h-screen">
            <main className="p-6 flex space-x-6">
                <div className="w-1/2">
                    <img src={product.image} alt="Main product" className="w-full rounded-lg" />
                    <div className="flex space-x-4 mt-4">
                        <button className="p-2 border rounded-full"><i className="fas fa-chevron-left"></i></button>
                        <img src={product.image} alt="Main product" className="w-24 h-24 rounded-lg border-2 border-blue-500"/>
                       
                        <button className="p-2 border rounded-full"><i className="fas fa-chevron-right"></i></button>
                    </div>
                </div>
                <div className="w-1/2">
                    <div className="text-sm text-gray-500 space-x-2">
                        <a href="#" className="hover:underline">Home</a>
                        <span>/</span>
                        <a href="#" className="hover:underline">Product</a>
                        <span>/</span>
                        <span className="text-gray-700">{product.name}</span>
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 mt-4">{product.name}</h1>
                    <p className="text-gray-600 mt-2">{product.description}</p>
                    <div className="text-2xl font-bold text-blue-600 mt-4">${product.price}</div>
                    <div className="mt-4">
                        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500">Add to Cart</button>
                    </div>
                    <div className="mt-6">
                        <h2 className="text-xl font-semibold text-gray-800">Product Details</h2>
                        <ul className="mt-2 space-y-2">
                            {product.details.map((detail, index) => (
                                <li key={index} className="text-gray-600">{detail}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ProductCard;
