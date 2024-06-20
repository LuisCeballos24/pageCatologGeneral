import React from 'react';

const ProductReview = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md mt-10">
            <div>
                <h2 className="text-xl font-bold mb-4">Customers Feedback</h2>
                <div className="bg-gray-100 p-6 rounded-md mb-6">
                    <div className="flex items-center mb-4">
                        <div className="text-4xl font-bold text-black">4.8</div>
                        <div className="ml-4">
                            <div className="text-yellow-500">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <div className="text-gray-500">Product Rating</div>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center mb-2">
                            <div className="w-1/5 text-gray-500">5 <i className="fas fa-star text-yellow-500"></i></div>
                            <div className="w-3/5 bg-gray-300 rounded-full h-2.5 mr-2">
                                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                            </div>
                            <div className="w-1/5 text-gray-500">70%</div>
                        </div>
                        <div className="flex items-center mb-2">
                            <div className="w-1/5 text-gray-500">4 <i className="fas fa-star text-yellow-500"></i></div>
                            <div className="w-3/5 bg-gray-300 rounded-full h-2.5 mr-2">
                                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '15%' }}></div>
                            </div>
                            <div className="w-1/5 text-gray-500">15%</div>
                        </div>
                        <div className="flex items-center mb-2">
                            <div className="w-1/5 text-gray-500">3 <i className="fas fa-star text-yellow-500"></i></div>
                            <div className="w-3/5 bg-gray-300 rounded-full h-2.5 mr-2">
                                <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '10%' }}></div>
                            </div>
                            <div className="w-1/5 text-gray-500">10%</div>
                        </div>
                        <div className="flex items-center mb-2">
                            <div className="w-1/5 text-gray-500">2 <i className="fas fa-star text-yellow-500"></i></div>
                            <div className="w-3/5 bg-gray-300 rounded-full h-2.5 mr-2">
                                <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '3%' }}></div>
                            </div>
                            <div className="w-1/5 text-gray-500">3%</div>
                        </div>
                        <div className="flex items-center mb-2">
                            <div className="w-1/5 text-gray-500">1 <i className="fas fa-star text-yellow-500"></i></div>
                            <div className="w-3/5 bg-gray-300 rounded-full h-2.5 mr-2">
                                <div className="bg-red-500 h-2.5 rounded-full" style={{ width: '2%' }}></div>
                            </div>
                            <div className="w-1/5 text-gray-500">2%</div>
                        </div>
                    </div>
                </div>
                <h2 className="text-xl font-bold mb-4">Reviews</h2>
                <div className="mb-6">
                    <div className="flex items-start mb-4">
                        <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mr-4">A.T</div>
                        <div>
                            <div className="flex items-center mb-1">
                                <div className="font-bold text-gray-500">Nicolas Cage</div>
                                <div className="text-gray-500 ml-2">3 days ago</div>
                            </div>
                            <div className="text-yellow-500 mb-2">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <div className="font-bold mb-1">Greate Product</div>
                            <div className="text-gray-700 mb-2">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</div>
                            <div className="flex text-gray-500">
                                <button className="mr-4">Like</button>
                                <button>Replay</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-start mb-4">
                        <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mr-4">A.T</div>
                        <div>
                            <div className="flex items-center mb-1">
                                <div className="font-bold text-gray-500">Sr.Robert Downey</div>
                                <div className="text-gray-500 ml-2">3 days ago</div>
                            </div>
                            <div className="text-yellow-500 mb-2">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <div className="font-bold mb-1">The best product in Market</div>
                            <div className="text-gray-700 mb-2">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</div>

                            <div className="flex text-gray-500">
                                <button className="mr-4">Like</button>
                                <button>Replay</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center mb-6">
                    <button className="text-blue-600">View All Reviews</button>
                </div>
                <h2 className="text-xl font-bold mb-4">Write a Review</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">What is it like to Product?</label>
                    <div className="text-yellow-500 mb-4">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <label className="block text-gray-700 mb-2">Review Title</label>
                    <input type="text" className="w-full p-2 border border-gray-300 rounded-md mb-4 bg-white placeholder-gray-500 text-black" placeholder="Great Products" />
                    <label className="block text-gray-700 mb-2">Review Content</label>
                    <textarea className="w-full p-2 border border-gray-300 rounded-md mb-4 bg-white placeholder-gray-500 text-black" rows="4" placeholder="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."></textarea>                    <div className="text-center">
                        <button className="bg-blue-600 text-white py-2 px-4 rounded-md">Submit Review</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductReview;
