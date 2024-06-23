import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaShoppingCart, FaBars } from 'react-icons/fa';

const Navigation = () => {
    const [categories, setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState(null);
    const [menuPosition, setMenuPosition] = useState({});
    const [menuVisible, setMenuVisible] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        fetch('categories.json')
            .then(response => response.json())
            .then(data => setCategories(data))
            .catch(error => console.error('Error al cargar los datos:', error));

        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setActiveCategory(null);
                setMenuVisible(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleMouseEnter = (category, rect) => {
        setActiveCategory(category);
        setMenuPosition({
            position: 'absolute',
            top: `${rect.bottom - rect.height / 2}px`,
            left: `${rect.left}px`,
            minWidth: `${rect.width}px`,
            zIndex: 70
        });
        setMenuVisible(true);
    };

    const handleClick = (category, rect) => {
        if (activeCategory === category) {
            setActiveCategory(null);
            setMenuVisible(false);
        } else {
            setActiveCategory(category);
            setMenuPosition({
                position: 'absolute',
                top: `${rect.bottom - rect.height / 2}px`,
                left: `${rect.left}px`,
                minWidth: `${rect.width}px`,
                zIndex: 70
            });
            setMenuVisible(true);
        }
    };

    return (
        <nav className="bg-white shadow relative z-50">
            <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center space-x-4">
                    <div className="text-2xl font-bold text-blue-600">
                        <a href="/">MegaMart</a>
                    </div>
                    <div className="relative">
                        <input type="text" className="border rounded-full py-2 px-4 w-64 md:w-96" placeholder="Search essentials, groceries and more..." />
                        <i className="fas fa-search absolute right-4 top-3 text-gray-500"></i>
                    </div>
                </div>
                <div className="flex items-center space-x-4 mt-4 md:mt-0">
                    <div className="flex space-x-4">
                        <Link to="/signup" className="flex items-center text-gray-600 hover:text-gray-800 hidden md:flex">
                            <FaUser className="mr-2" />
                            <span className="text-sm">Sign Up/Sign In</span>
                        </Link>
                        <Link to="/cart" className="flex items-center text-gray-600 hover:text-gray-800 hidden md:flex">
                            <FaShoppingCart className="mr-2" />
                            <span className="text-sm">Cart</span>
                        </Link>
                        <div className="flex items-center text-gray-600 hover:text-gray-800 md:hidden">
                            <FaBars className="mr-2" />
                            <span className="text-sm">Menu</span>
                        </div>
                    </div>
                </div>
            </div>
            {menuVisible && activeCategory && (
                <div
                    className="absolute bg-white shadow-lg rounded-lg p-4 z-40"
                    style={menuPosition}
                    ref={menuRef}
                >
                    {categories
                        .find(category => category.name === activeCategory)
                        .subcategories.map(sub => (
                            <Link key={sub.id} to={`/${encodeURIComponent(activeCategory)}/${encodeURIComponent(sub.name)}/${encodeURIComponent(sub.id)}`} className="block w-full py-1 px-2 hover:bg-gray-200 rounded-md text-gray-800 text-left">{sub.name}</Link>
                        ))}
                </div>
            )}
            <div className="container mx-auto px-4 py-2 flex space-x-4 overflow-x-auto min-h-full">
                {categories.map((category) => (
                    <div
                        key={category.name}
                        className="relative group text-sm text-gray-600 cursor-pointer"
                        onMouseEnter={(e) => handleMouseEnter(category.name, e.target.getBoundingClientRect())}
                        onClick={(e) => handleClick(category.name, e.target.getBoundingClientRect())}
                    >
                        {category.name}
                    </div>
                ))}
            </div>
        </nav>
    );
}

export default Navigation;
