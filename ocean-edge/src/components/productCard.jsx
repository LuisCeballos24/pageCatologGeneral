import React from 'react';

const ProductCard = ({ title, image, price, originalPrice, savings }) => {
    return (
        <div className="bg-white shadow rounded-lg p-4 w-64">
            <img src={image} alt={title} className="w-full h-40 object-cover" />
            <div className="mt-4">
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="text-gray-600">{price} <span className="line-through">{originalPrice}</span></p>
                <p className="text-green-600">Save - {savings}</p>
            </div>
        </div>
    );
};

export default ProductCard;
