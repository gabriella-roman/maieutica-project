import React, { useState, useEffect } from 'react';
import styles from './Carousel.module.css';

interface CarouselProps {
  images: { id: number; src: string; alt: string }[];
}

export function Carousel({ images }: CarouselProps) {
  const visibleImages = 6; // Número de imagens visíveis por vez
  const totalImages = images.length;

  // Clonando imagens para implementar o loop infinito
  const extendedImages = [
    ...images.slice(-visibleImages), // Clona as últimas imagens
    ...images,
    ...images.slice(0, visibleImages), // Clona as primeiras imagens
  ];

  const [currentIndex, setCurrentIndex] = useState(visibleImages); // Começa no meio

  // Ajusta o índice ao atingir os clones (reset visual)
  useEffect(() => {
    if (currentIndex === 0) {
      setTimeout(() => {
        setCurrentIndex(totalImages);
      }, 500);
    } else if (currentIndex === extendedImages.length - visibleImages) {
      setTimeout(() => {
        setCurrentIndex(visibleImages);
      }, 500);
    }
  }, [currentIndex, extendedImages.length, totalImages]);

  // Configura o carrossel automático
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 3000); // Avança a cada 3 segundos

    return () => clearInterval(interval); // Limpa o temporizador ao desmontar
  }, []);

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselWrapper}>
        <div
          className={styles.carouselInner}
          style={{
            transform: `translateX(-${(currentIndex * 100) / visibleImages}%)`,
            transition: `transform 0.5s ease-in-out`,
          }}
        >
          {extendedImages.map((image, index) => (
            <div key={index} className={styles.carouselItem}>
              <img src={image.src} alt={image.alt} className={styles.image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
