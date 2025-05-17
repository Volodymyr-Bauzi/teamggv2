import { useState, useEffect } from 'react';
import styles from './Card.module.css';

const Card = ({ card }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  
  useEffect(() => {
    // Reset loading states when card changes
    setImageLoaded(false);
    setImageError(false);
    
    if (card.image) {
      console.log(`Loading image for ${card.name}:`, card.image);
      setCurrentImage(card.image);
    } else {
      console.log(`No image provided for ${card.name}`);
      setImageError(true);
    }
  }, [card]);

  // Fallback to a placeholder if image fails to load
  const imageSrc = imageError || !currentImage 
    ? 'https://via.placeholder.com/256x256/1e293b/94a3b8?text=GAME'
    : currentImage;

  // Extract the first tag from the tag string if it exists
  const firstTag = card.tag ? card.tag.split(' ')[0] : '';

  const handleImageLoad = () => {
    console.log(`Image loaded successfully: ${card.name}`);
    setImageLoaded(true);
  };

  const handleImageError = (e) => {
    console.error(`Error loading image for ${card.name}:`, e);
    setImageError(true);
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        {!imageLoaded && !imageError && (
          <div className={styles.imagePlaceholder}>
            <span className={styles.loadingText}>Loading {card.name}...</span>
          </div>
        )}
        <img 
          src={imageSrc} 
          alt={card.name}
          className={`${styles.cardImage} ${!imageLoaded || imageError ? styles.hidden : ''}`}
          loading="lazy"
          onLoad={handleImageLoad}
          onError={handleImageError}
          crossOrigin="anonymous"
        />
      </div>
      <div className={styles.cardOverlay}>
        <h3 className={styles.cardTitle}>{card.name}</h3>
        {firstTag && (
          <div className={styles.cardMeta}>
            <span className={styles.cardTag}>
              {firstTag.toUpperCase()}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
