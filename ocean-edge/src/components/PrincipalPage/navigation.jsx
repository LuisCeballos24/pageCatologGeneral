import React, { useState, useEffect, useRef } from 'react';

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
            {menuVisible && activeCategory && (
                <div
                    className="absolute bg-white shadow-lg rounded-lg p-4 z-40"
                    style={menuPosition}
                    ref={menuRef}
                >
                    {categories
                        .find(category => category.name === activeCategory)
                        .subcategories.map(sub => (
                            <button key={sub} className="block w-full py-1 px-2 hover:bg-gray-200 rounded-md text-gray-800 text-left" onClick={() => alert('Redireccionar a la página del producto aquí')}>{sub}</button>
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