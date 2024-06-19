import React from 'react';

const Header = () => {
    return (
        <header className="bg-white shadow w-full">
            <div className="container mx-auto px-4 py-2 flex flex-col md:flex-row justify-between items-center">
                <div className="text-sm text-gray-600 mb-2 md:mb-0">Welcome to worldwide Megamart!</div>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="hidden md:block">Deliver to 432651</div>
                    <div className="hidden md:block">Track your order</div>
                    <div className="hidden md:block">All Offers</div>
                    <div className="md:hidden">Menu</div>
                </div>
            </div>
        </header>
    );
}

export default Header;
