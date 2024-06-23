import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/PrincipalPage/header';
import Carousel from './components/PrincipalPage/carousel';
import Footer from './components/PrincipalPage/footer';
import Navigation from './components/PrincipalPage/navigation';
import MainContent from './components/PrincipalPage/mainContent';
import ProductCard from './components/ProductPage/productCard';
import ProductList from './components/ProductPage/productList';
import ProductCarShopping from './components/ProductPage/productCarShopping';
import Login from './components/Login/login'
import './index.css';

function App() {
    const [language, setLanguage] = useState(navigator.language.split('-')[0]);

    return (
        <div className="bg-gray-100">
        <Header language={language} />
        <Navigation language={language} />
        <Carousel language={language} />
        <Routes>
            <Route path="/" element={<MainContent language={language} />} />
            <Route path="/:category/:id" element={<ProductCard />} />
            <Route path="/:category/:subcategories/:id" element={<ProductList />} />
            <Route path="/cart" element={<ProductCarShopping />} />
            <Route path="/signup" element={<Login />} />
        </Routes>
        <Footer language={language} />
    </div>
    );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <Router>
            <App />
        </Router>
    </React.StrictMode>
);
