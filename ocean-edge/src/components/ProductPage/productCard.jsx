import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductReview from "./productReview";
import ProductDescription from "./productDescription";
import '@fortawesome/fontawesome-free/css/all.min.css';

const ProductCard = () => {
    const { category, id } = useParams();
    const [product, setProduct] = useState(null);
    const [activeTab, setActiveTab] = useState("description");
    const [count, setCount] = useState(0);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch('/productos.json');
                const data = await response.json();

                const foundProduct = data[category]?.find(product => product.id === id);
                setProduct(foundProduct);
            } catch (error) {
                console.error('Error al cargar los datos:', error);
            }
        };

        fetchProduct();
    }, [category, id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div className="bg-white min-h-screen">
            <main className="p-6 flex flex-col space-y-6 w-full">
                <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
                    <div className="w-full md:w-1/2">
                        <img src={product.image} alt="Main product" className="w-full rounded-lg" />
                        <div className="flex space-x-4 mt-4 justify-center">
                            <button className="p-2 border rounded-full"><i className="fas fa-chevron-left"></i></button>
                            <img src={product.image} alt="Product thumbnail" className="w-24 h-24 rounded-lg border-2 border-blue-500" />
                            <button className="p-2 border rounded-full"><i className="fas fa-chevron-right"></i></button>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="text-sm text-gray-500 space-x-2">
                            <a href="#" className="hover:underline">Home</a>
                            <span>/</span>
                            <a href="#" className="hover:underline">Product</a>
                            <span>/</span>
                            <span className="text-gray-700">{product.name}</span>
                        </div>
                        <h1 className="text-3xl font-bold text-gray-900 mt-4">{product.name}</h1>
                        <div className="flex items-center space-x-4 mt-4">
                            <span className="text-3xl font-bold text-blue-900">${product.price}</span>
                            {product.originalPrice && (
                                <span className="text-gray-400 line-through">${product.originalPrice}</span>
                            )}
                            <div className="flex items-center space-x-1">
                                <span className="text-yellow-500"><i className="fas fa-star"></i></span>
                                <span className="text-gray-600">4.8</span>
                                <span className="text-gray-400">(67 Reviews)</span>
                            </div>
                            </div>
                        <div className="mt-6">
                            <h2 className="text-lg font-semibold">Choose a Color</h2>
                            <div className="flex space-x-4 mt-2">
                                <button className="w-10 h-10 rounded-full border-2 border-blue-500 bg-beige"></button>
                                <button className="w-10 h-10 rounded-full bg-green-300"></button>
                                <button className="w-10 h-10 rounded-full bg-purple-300"></button>
                                <button className="w-10 h-10 rounded-full bg-pink-300"></button>
                                <button className="w-10 h-10 rounded-full bg-beige"></button>
                            </div>
                        </div>
                        <div className="mt-6">
                            <h2 className="text-lg font-semibold">Choose a Size</h2>
                            <div className="flex flex-wrap space-x-4 mt-2">
                                <button className="px-4 py-2 mb-2 border rounded-full bg-gray-800 text-white hover:bg-gray-700">Small</button>
                                <button className="px-4 py-2 mb-2 border rounded-full bg-gray-800 text-white hover:bg-gray-700">Medium</button>
                                <button className="px-4 py-2 mb-2 border rounded-full bg-gray-800 text-white hover:bg-gray-700">Large</button>
                                <button className="px-4 py-2 mb-2 border rounded-full bg-gray-800 text-white hover:bg-gray-700">Extra Large</button>
                                <button className="px-4 py-2 mb-2 border rounded-full bg-gray-800 text-white hover:bg-gray-700">XXL</button>
                            </div>
                        </div>
                        <div className="mt-6 flex items-center space-x-4">
                            <button
                                className="px-4 py-2 border rounded-full text-white bg-blue-900"
                                onClick={handleDecrement}
                            >
                                -
                            </button>
                            <span className="text-lg text-black">{count}</span>
                            <button
                                className="px-4 py-2 border rounded-full text-white bg-blue-900"
                                onClick={handleIncrement}
                            >
                                +
                            </button>
                            <button className="px-6 py-2 bg-blue-900 text-white rounded-full flex items-center space-x-2">
                                <i className="fas fa-shopping-cart"></i>
                                <span>Add To Cart</span>
                            </button>
                        </div>
                        <div className="mt-6 space-y-4">
                            <div className="flex items-center space-x-4">
                                <i className="fas fa-truck text-red-500"></i>
                                <div>
                                    <h3 className="font-semibold">Free Delivery</h3>
                                    <p className="text-gray-500">Enter your Postal code for Delivery Availability</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <i className="fas fa-undo text-red-500"></i>
                                <div>
                                    <h3 className="font-semibold">Return Delivery</h3>
                                    <p className="text-gray-500">Free 30 days Delivery Return. <a href="#" className="text-blue-500">Details</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6">
                            <button
                                onClick={() => setActiveTab("description")}
                                className={`px-4 py-2 ${activeTab === "description" ? "bg-blue-900 text-white" : "bg-gray-200 text-gray-700"}`}
                            >
                                Description
                            </button>
                            <button
                                onClick={() => setActiveTab("review")}
                                className={`px-4 py-2 ${activeTab === "review" ? "bg-blue-900 text-white" : "bg-gray-200 text-gray-700"}`}
                            >
                                Review
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    {activeTab === "description" && <ProductDescription />}
                    {activeTab === "review" && <ProductReview />}
                </div>
            </main>
        </div>
    );
};

export default ProductCard;
