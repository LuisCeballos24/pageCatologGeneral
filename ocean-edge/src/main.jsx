import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/PrincipalPage/header';
import Carousel from './components/PrincipalPage/carousel';
import Footer from './components/PrincipalPage/footer';
import Navigation from './components/PrincipalPage/navigation';
import MainContent from './components/PrincipalPage/mainContent';
import ProductCard from './components/ProductPage/productCard';
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
