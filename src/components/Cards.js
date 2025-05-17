import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Card from './Card';
import styles from './Card.module.css';

const Cards = ({ games }) => {
  const containerRef = useRef(null);

  // Animation variants for staggered children
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 12,
      },
    },
  };

  if (!games || games.length === 0) {
    return (
      <div className={styles.noGames}>
        <p>No games found. Try a different search term.</p>
      </div>
    );
  }


  return (
    <div className={styles.cardsContainer} ref={containerRef}>
      <AnimatePresence>
        <motion.div
          className={styles.cardsGrid}
          variants={container}
          initial="hidden"
          animate="show"
          key="cards-grid"
        >
          {games.map((game) => (
            <motion.div
              key={game.uri}
              className={styles.cardWrapper}
              variants={item}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            >
              <Link
                to={`/games/${game.uri}`}
                style={{ textDecoration: 'none' }}
                aria-label={`View ${game.name}`}
              >
                <Card card={game} />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Cards;
