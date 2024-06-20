import React, { useState } from 'react';

const ProductList = () => {
    const [categories, setCategories] = useState([
        { id: 'kid', name: 'Kid', count: 18, checked: false },
        { id: 'man', name: 'Man', count: 12, checked: false },
        { id: 'woman', name: 'Woman', count: 23, checked: true },
        { id: 'casual', name: 'Casual', count: 67, checked: false },
        { id: 'sport', name: 'Sport', count: 34, checked: false },
        { id: 'rainbow', name: 'Rainbow', count: 12, checked: false }
    ]);

    const handleBrandCheckboxChange = (id) => {
        setCategories(categories.map(category => {
            if (category.id === id) {
                return { ...category, checked: !category.checked };
            }
            return category;
        }));
    };

    return (
        <div className="bg-white min-h-screen">
            <section className="bg-purple-100 py-12">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <h1 className="text-3xl font-bold text-gray-900">Grab Upto 50% Off On Selected Headphone</h1>
                        <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded">Buy Now</button>
                    </div>
                    <img src="https://placehold.co/200x200" alt="Woman with Headphones" className="w-full md:w-1/3" />
                </div>
            </section>
            <div className="container mx-auto px-4 flex flex-col md:flex-row py-8 bg-white">
                <aside className="w-full md:w-1/4 pr-0 md:pr-8">
                    <div className="mb-8">
                        <h2 className="text-xl font-bold mb-4 text-black">Filters</h2>
                        <button className="text-gray-900">Clear All</button>
                    </div>
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold mb-2">Category</h3>
                        <ul className="space-y-2">
                            {categories.map(brand => (
                                <li key={brand.id}>
                                    <input
                                        type="checkbox"
                                        id={brand.id}
                                        name={brand.name}
                                        value={brand.name}
                                        checked={brand.checked}
                                        onChange={() => handleBrandCheckboxChange(brand.id)}
                                    />
                                    <label htmlFor={brand.id} className="ml-2 text-black">
                                        {brand.name} ({brand.count})
                                    </label>
                                </li>
                            ))}
                        </ul>
                        <button className="text-blue-600 mt-2">Show more</button>
                    </div>
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold mb-2">Ratings</h3>
                        <ul className="space-y-2">
                            <li><input type="radio" id="4.5" name="rating" value="4.5" /><label htmlFor="4.5" className="ml-2 text-black">4.5 & up (1991)</label></li>
                            <li><input type="radio" id="4.0" name="rating" value="4.0" checked /><label htmlFor="4.0" className="ml-2 text-black">4.0 & up (200)</label></li>
                            <li><input type="radio" id="3.0" name="rating" value="3.0" /><label htmlFor="3.0" className="ml-2 text-black">3.0 & up (300)</label></li>
                            <li><input type="radio" id="2.0" name="rating" value="2.0" /><label htmlFor="2.0" className="ml-2 text-black">2.0 & up (500)</label></li>
                        </ul>
                    </div>
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold mb-2">Price</h3>
                        <input type="range" min="0" max="200" className="w-full" />
                        <div className="flex justify-between text-gray-900 mt-2">
                            <span>0</span>
                            <span>200</span>
                        </div>
                    </div>
                    <div className="mb-8 bg-white">
                        <h3 className="text-lg font-semibold mb-2 text-black">Size</h3>
                        <div className="flex space-x-2">
                            <input type="number" min="5" max="10" className="w-1/2 border rounded px-2 py-1 bg-white text-black" />
                            <input type="number" min="5" max="10" className="w-1/2 border rounded px-2 py-1 bg-white text-black" />
                        </div>
                    </div>
                </aside>
                <main className="w-full md:w-3/4">
                    <div className="flex justify-between items-center mb-4 text-black">
                        <div>Showing 12 Result from total 230</div>
                        <select className="border rounded px-2 py-1 bg-white">
                            <option>Popularity</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {Array(12).fill().map((_, index) => (
                            <div key={index} className="border rounded-lg p-4">
                                <div className="flex justify-between items-center mb-4">
                                    <img src="https://placehold.co/150x150" alt="TDX Sinkers" className="w-1/2" />
                                    <button className="text-gray-900"><i className="far fa-heart"></i></button>
                                </div>
                                <h3 className="text-lg font-semibold">TDX Sinkers</h3>
                                <p className="text-gray-900">5 types of shoes available</p>
                                <div className="flex items-center mb-2">
                                    <span className="text-yellow-500"><i className="fas fa-star"></i></span>
                                    <span className="text-yellow-500"><i className="fas fa-star"></i></span>
                                    <span className="text-yellow-500"><i className="fas fa-star"></i></span>
                                    <span className="text-yellow-500"><i className="fas fa-star"></i></span>
                                    <span className="text-yellow-500"><i className="fas fa-star-half-alt"></i></span>
                                    <span className="text-gray-900 ml-2">(121)</span>
                                </div>
                                <div className="text-lg font-bold mb-4">₹ 675.00</div>
                                <div className="flex space-x-2">
                                    <button className="px-4 py-2 bg-blue-600 text-white rounded">Add To Cart</button>
                                    <button className="px-4 py-2 border rounded bg-gray-700 text-white">Add Shortlist</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center mt-8">
                        <button className="px-4 py-2 border rounded bg-red-900">Previews</button>
                        <button className="px-4 py-2 border rounded bg-blue-600 text-white">1</button>
                        <button className="px-4 py-2 border rounded bg-gray-700">2</button>
                        <button className="px-4 py-2 border rounded bg-gray-700">3</button>
                        <button className="px-4 py-2 border rounded bg-gray-700">4</button>
                        <button className="px-4 py-2 border rounded bg-green-900">Next</button>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ProductList;
