import React from 'react';

const ProductCarShopping = () => {
            return (
                <div className="flex justify-center items-start p-8">
                    <div className="w-2/3 bg-white p-6 rounded-lg shadow-md">
                        <div className="flex items-center mb-4">
                            <i className="fas fa-arrow-left mr-2"></i>
                            <h1 className="text-xl font-semibold">Shopping Continue</h1>
                        </div>
                        <hr className="mb-4"/>
                        <h2 className="text-lg font-semibold">Shopping cart</h2>
                        <p className="text-gray-500 mb-4">You have 3 item in your cart</p>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm">
                                <img src="https://placehold.co/60x60" alt="Italy Pizza" className="w-16 h-16 rounded-lg"/>
                                <div className="flex-1 ml-4">
                                    <h3 className="text-lg font-semibold">Italy Pizza</h3>
                                    <p className="text-gray-500">Extra cheese and toping</p>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-lg">1</span>
                                    <i className="fas fa-chevron-up mx-2"></i>
                                    <i className="fas fa-chevron-down mx-2"></i>
                                </div>
                                <span className="text-lg font-semibold">$681</span>
                                <i className="fas fa-trash-alt text-gray-500 ml-4"></i>
                            </div>
                            <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm">
                                <img src="https://placehold.co/60x60" alt="Combo Plate" className="w-16 h-16 rounded-lg"/>
                                <div className="flex-1 ml-4">
                                    <h3 className="text-lg font-semibold">Combo Plate</h3>
                                    <p className="text-gray-500">Extra cheese and toping</p>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-lg">1</span>
                                    <i className="fas fa-chevron-up mx-2"></i>
                                    <i className="fas fa-chevron-down mx-2"></i>
                                </div>
                                <span className="text-lg font-semibold">$681</span>
                                <i className="fas fa-trash-alt text-gray-500 ml-4"></i>
                            </div>
                            <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm">
                                <img src="https://placehold.co/60x60" alt="Spanish Rice" className="w-16 h-16 rounded-lg"/>
                                <div className="flex-1 ml-4">
                                    <h3 className="text-lg font-semibold">Spanish Rice</h3>
                                    <p className="text-gray-500">Extra garlic</p>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-lg">1</span>
                                    <i className="fas fa-chevron-up mx-2"></i>
                                    <i className="fas fa-chevron-down mx-2"></i>
                                </div>
                                <span className="text-lg font-semibold">$681</span>
                                <i className="fas fa-trash-alt text-gray-500 ml-4"></i>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/3 bg-blue-900 p-6 rounded-lg shadow-md ml-8">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-white text-lg font-semibold">Card Details</h2>
                            <img src="https://placehold.co/40x40" alt="User profile" className="w-10 h-10 rounded-full"/>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-white mb-2">Card type</h3>
                            <div className="flex space-x-2">
                                <img src="https://placehold.co/60x40" alt="MasterCard" className="w-16 h-10"/>
                                <img src="https://placehold.co/60x40" alt="Visa" className="w-16 h-10"/>
                                <img src="https://placehold.co/60x40" alt="RuPay" className="w-16 h-10"/>
                                <button className="bg-gray-200 text-gray-700 w-16 h-10 rounded-lg">See all</button>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="text-white block mb-2">Name on card</label>
                            <input type="text" className="w-full p-2 rounded-lg bg-white text-black" placeholder="Name"/>
                        </div>
                        <div className="mb-4">
                            <label className="text-white block mb-2">Card Number</label>
                            <input type="text" className="w-full p-2 rounded-lg bg-white text-black" placeholder="1111 2222 3333 4444"/>
                        </div>
                        <div className="flex space-x-4 mb-4">
                            <div className="flex-1">
                                <label className="text-white block mb-2">Expiration date</label>
                                <input type="text" className="w-full p-2 rounded-lg bg-white text-black" placeholder="mm/yy"/>
                            </div>
                            <div className="flex-1">
                                <label className="text-white block mb-2">CVV</label>
                                <input type="text" className="w-full p-2 rounded-lg bg-white text-black" placeholder="123"/>
                            </div>
                        </div>
                        <div className="text-white mb-4">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>$1,668</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Shipping</span>
                                <span>$4</span>
                            </div>
                            <div className="flex justify-between font-semibold">
                                <span>Total (Tax incl.)</span>
                                <span>$1,672</span>
                            </div>
                        </div>
                        <button className="w-full bg-green-500 text-white p-3 rounded-lg flex justify-between items-center">
                            <span>$1,672</span>
                            <span>Checkout <i className="fas fa-arrow-right ml-2"></i></span>
                        </button>
                    </div>
                </div>
            );
        };

export default ProductCarShopping;