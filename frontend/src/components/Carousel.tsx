import React, { useState, useEffect } from 'react';
import './Carousel.css';

interface CarouselProps {
  images: string[];
  objectFit?: 'contain';
}

const Carousel: React.FC<CarouselProps> = ({ images, objectFit }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carousel-container">
      {images.map((image, index) => (
        <img
          loading='lazy'
          key={index}
          src={images[0]}
          className={`carousel-image ${index === currentImage ? 'active' : ''}`}
          style={{ objectFit: objectFit}}
        />
      ))}
    </div>
  );
};

export default Carousel;
