import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Input from './Input';
import Tags from './Tags';
import Cards from './Cards';
import { getGames, getGamesWithIcons } from './games';
import styles from './BodyField.module.css';

// Loading spinner component
const LoadingSpinner = () => (
  <div className={styles.loadingSpinnerContainer}>
    <div className={styles.loadingSpinner}></div>
    <p>Loading games...</p>
  </div>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
};

function BodyField(props) {
  const [tagState, setTagState] = useState('Популярные');
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [games, setGames] = useState(getGames());
  const [filteredGames, setFilteredGames] = useState([]);
  const [filteredTags, setFilteredTags] = useState([]);

  useEffect(() => {
    const loadGames = async () => {
      try {
        setIsLoading(true);
        const gamesData = await getGamesWithIcons();
        setGames(gamesData);
        setFilteredGames(gamesData);
        setFilteredTags(gamesData.filter(game => game.tag.includes('Популярные')));
      } catch (error) {
        console.error('Error loading games:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadGames();
  }, []);

  useEffect(() => {
    if (inputValue) {
      const filtered = games.filter(game => 
        game.name.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredGames(filtered);
    } else {
      setFilteredGames(games);
    }
  }, [inputValue, games]);

  const onTagClick = (tag) => {
    setTagState(tag);
    const filtered = games.filter(game => game.tag.includes(tag));
    setFilteredTags(filtered);
  };

  if (isLoading) {
    return (
      <div className={styles.bodyField}>
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className={styles.bodyField}>
      <div className={styles.searchContainer}>
        <motion.div 
          className={styles.searchHeader}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={styles.searchTitle}>Find Your Gaming Team</h1>
          <p className={styles.searchSubtitle}>
            Connect with players who share your passion and skill level. 
            Whether you're looking for casual matches or competitive play, we've got you covered.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Input 
            onInputChange={(event) => setInputValue(event.target.value)} 
            placeholder="Search for games or players..."
          />
          <Tags onTagClick={onTagClick} activeTag={tagState} />
        </motion.div>
      </div>

      <AnimatePresence>
        <motion.div 
          className={styles.cardsContainer}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {inputValue ? (
            <Cards games={filteredGames} variants={itemVariants} />
          ) : (
            <Cards games={filteredTags} variants={itemVariants} />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default BodyField;
