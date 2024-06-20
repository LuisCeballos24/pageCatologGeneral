import React from 'react';


const ProductDescription = () => {
    return (
        <div className="p-8">
            <div>
                <h2 className="text-2xl font-bold mb-4">Product Description</h2>
                <p className="text-gray-700 mb-6">
                    When it's colder than the far side of the moon and spitting rain too, you've still got to look good. From water-repellent leather to a rugged outsole, the Lunar Force 1 adapts AF-1 style, so you can keep your flame burning when the weather hits. Metal lace hardware and extended tongue bring mountain boot toughness, while the star-studded toe design gives your look the edge.
                </p>
                <h3 className="text-xl font-bold mb-4">Benefits</h3>
                <ul className="list-disc list-inside text-gray-700 mb-6">
                    <li className="flex items-start mb-2"><i className="fas fa-check text-blue-600 mr-2 mt-1"></i>Durable leather is easily cleanable so you can keep your look fresh.</li>
                    <li className="flex items-start mb-2"><i className="fas fa-check text-blue-600 mr-2 mt-1"></i>Water-repellent finish and internal membrane help keep your feet dry.</li>
                    <li className="flex items-start mb-2"><i className="fas fa-check text-blue-600 mr-2 mt-1"></i>Toe piece with star pattern adds durability.</li>
                    <li className="flex
 items-start mb-2"><i className="fas fa-check text-blue-600 mr-2 mt-1"></i>Synthetic insulation helps keep you warm.</li>
                    <li className="flex items-start mb-2"><i className="fas fa-check text-blue-600 mr-2 mt-1"></i>Originally designed for performance hoops, the Air unit delivers lightweight cushioning.</li>
                    <li className="flex items-start mb-2"><i className="fas fa-check text-blue-600 mr-2 mt-1"></i>Plush tongue wraps over the ankle to help keep out the moisture and cold.</li>
                    <li className="flex items-start mb-2"><i className="fas fa-check text-blue-600 mr-2 mt-1"></i>Rubber outsole with aggressive traction pattern adds durable grip.</li>
                    <li className="flex items-start mb-2"><i className="fas fa-check text-blue-600 mr-2 mt-1"></i>Durable leather is easily cleanable so you can keep your look fresh.</li>
                </ul>
                <h3 className="text-xl font-bold mb-4">Product Details</h3>
                <ul className="list-disc list-inside text-gray-700 mb-6">
                    <li className="flex items-start mb-2"><i className="fas fa-times text-blue-600 mr-2 mt-1"></i>Not intended for use as Personal Protective Equipment (PPE)</li>
                    <li className="flex items-start mb-2"><i className="fas fa-check text-blue-600 mr-2 mt-1"></i>Water-repellent finish and internal membrane help keep your feet dry.</li>
                </ul>
                <h3 className="text-xl font-bold mb-4">More Details</h3>
                <ul className="list-disc list-inside text-gray-700 mb-6">
                    <li className="flex items-start mb-2"><i className="fas fa-check text-blue-600 mr-2 mt-1"></i>Lunarlon midsole delivers ultra-plush responsiveness</li>
                    <li className="flex items-start mb-2"><i className="fas fa-check text-blue-600 mr-2 mt-1"></i>Encapsulated Air-Sole heel unit for lightweight cushioning</li>
                    <li className="flex items-start mb-2"><i className="fas fa-check text-blue-600 mr-2 mt-1"></i>Colour Shown: Ale Brown/Black/Goldtone/Ale Brown</li>
                    <li className="flex items-start mb-2"><i className="fas fa-check text-blue-600 mr-2 mt-1"></i>Style: 805899-202</li>
                </ul>
            </div>
            <div>
                <h2 className="text-2xl font-bold mb-4">Similar Items You Might Also Like</h2>
                <div className="flex space-x-4 overflow-x-auto">
                    {Array(6).fill().map((_, index) => (
                        <div key={index} className="border rounded-lg p-4 w-60">
                            <img src="https://placehold.co/150x150" alt={`Product image ${index + 1}`} className="w-full h-40 object-cover mb-4" />
                            <h3 className="text-lg font-bold mb-2">TDX Sinkers</h3>
                            <p className="text-gray-700 mb-2">₹675.00</p>
                            <p className="text-gray-500 mb-2">5 types of shoes available</p>
                            <div className="flex items-center mb-2">
                                <span className="text-yellow-500"><i className="fas fa-star"></i></span>
                                <span className="text-yellow-500"><i className="fas fa-star"></i></span>
                                <span className="text-yellow-500"><i className="fas fa-star"></i></span>
                                <span className="text-yellow-500"><i className="fas fa-star"></i></span>
                                <span className="text-yellow-500"><i className="fas fa-star"></i></span>
                                <span className="text-gray-500 ml-2">(121)</span>
                            </div>
                            <button className="text-gray-500 hover:bg-gray-100" style={{ padding: '0.25rem' }}>
                                <i className="far fa-heart"></i>
                            </button>                       
                         </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductDescription;
