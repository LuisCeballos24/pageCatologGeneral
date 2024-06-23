import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-panama-blue text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="mb-8 md:mb-0">
                        <h3 className="text-xl font-bold">MegaMart</h3>
                        <p className="mt-2">Contact Us</p>
                        <p className="mt-2"><i className="fab fa-whatsapp"></i> WhatsApp +1 202-918-2132</p>
                        <p className="mt-2"><i className="fas fa-phone"></i> Call Us +1 202-918-2132</p>
                        <p className="mt-2">Download App</p>
                        <div className="flex space-x-2 mt-2">
                            <img src="https://placehold.co/100x40" alt="App Store" />
                            <img src="https://placehold.co/100x40" alt="Google Play" />
                        </div>
                    </div>
                    <div className="mb-8 md:mb-0">
                        <h3 className="text-xl font-bold">Most Popular Categories</h3>
                        <ul className="mt-2 space-y-2">
                            <li>Staples</li>
                            <li>Beverages</li>
                            <li>Personal Care</li>
                            <li>Home Care</li>
                            <li>Baby Care</li>
                            <li>Vegetables & Fruits</li>
                            <li>Snacks & Foods</li>
                            <li>Dairy & Bakery</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">Customer Services</h3>
                        <ul className="mt-2 space-y-2">
                            <li>About Us</li>
                            <li>Terms & Conditions</li>
                            <li>FAQ</li>
                            <li>Privacy Policy</li>
                            <li>E-waste Policy</li>
                            <li>Cancellation & Return Policy</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <p>© 2022 All rights reserved. Reliance Retail Ltd.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
