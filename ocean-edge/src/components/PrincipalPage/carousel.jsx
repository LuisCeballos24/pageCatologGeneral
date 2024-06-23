import React, { useState, useEffect } from 'react';

const Carousel = () => {
    const [slides, setSlides] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        fetch('carousel.json') // Ruta relativa desde la carpeta public
            .then(response => response.json())
            .then(data => setSlides(data))
            .catch(error => console.error('Error al cargar los datos:', error));
    }, []);

    useEffect(() => {
        if (slides.length > 0) {
            const interval = setInterval(() => {
                setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
            }, 3000); // Cambia la diapositiva cada 3 segundos

            return () => clearInterval(interval);
        }
    }, [slides]);

    const handleNext = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const handlePrev = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    if (slides.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className="relative bg-panama-blue text-white rounded-lg p-8 flex flex-col md:flex-row items-center justify-between z-10">
            <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-700 p-2 rounded-full z-20"
            >
                &#9664;
            </button>
            <div className="text-center md:text-left mb-4 md:mb-0">
                <h2 className="text-4xl font-bold">{slides[currentSlide].title}</h2>
                <p className="text-xl">{slides[currentSlide].description}</p>
            </div>
            <img
                src={slides[currentSlide].imageUrl}
                alt="Carousel Image"
                className="w-32 h-32 mx-auto md:mx-0"
            />
            <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-700 p-2 rounded-full z-20"
            >
                &#9654;
            </button>
        </div>
    );
}

export default Carousel;
