import React from 'react';

const Navigation = () => {
    return (
        <nav className="bg-white shadow">
            <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center space-x-4">
                    <div className="text-2xl font-bold text-blue-600">MegaMart</div>
                    <div className="relative">
                        <input type="text" className="border rounded-full py-2 px-4 w-64 md:w-96" placeholder="Search essentials, groceries and more..." />
                        <i className="fas fa-search absolute right-4 top-3 text-gray-500"></i>
                    </div>
                </div>
                <div className="flex items-center space-x-4 mt-4 md:mt-0">
                    <div className="text-sm text-gray-600 hidden md:block">Sign Up/Sign In</div>
                    <div className="text-sm text-gray-600 hidden md:block">Cart</div>
                    <div className="text-sm text-gray-600 md:hidden">Menu</div>
                </div>
            </div>
            <div className="container mx-auto px-4 py-2 flex space-x-4 overflow-x-auto">
                <div className="text-sm text-gray-600">Groceries</div>
                <div className="text-sm text-gray-600">Premium Fruits</div>
                <div className="text-sm text-gray-600">Home & Kitchen</div>
                <div className="text-sm text-gray-600">Fashion</div>
                <div className="text-sm text-gray-600">Electronics</div>
                <div className="text-sm text-gray-600">Beauty</div>
                <div className="text-sm text-gray-600">Home Improvement</div>
                <div className="text-sm text-gray-600">Sports, Toys & Luggage</div>
            </div>
        </nav>
    );
}

export default Navigation;
