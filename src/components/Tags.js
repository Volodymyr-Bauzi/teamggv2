import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Tags.module.css';

const tags = [
  { id: 'popular', name: 'Popular', icon: '🔥' },
  { id: 'competitive', name: 'Competitive', icon: '🏆' },
  { id: 'mobile', name: 'Mobile', icon: '📱' },
  { id: 'coop', name: 'Co-op', icon: '👥' },
  { id: 'online', name: 'Online', icon: '🌐' },
  { id: 'new', name: 'New Releases', icon: '✨' },
];

const Tags = ({ onTagClick, activeTag }) => {
  const [selectedTag, setSelectedTag] = useState(activeTag || 'popular');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const handleTagClick = (tagId, tagName) => {
    setSelectedTag(tagId);
    if (onTagClick) {
      onTagClick(tagName);
    }
  };

  return (
    <div className={styles.tagsContainer}>
      <div className={styles.tagsWrapper}>
        <AnimatePresence initial={false}>
          {tags.map((tag) => (
            <motion.button
              key={tag.id}
              className={`${styles.tag} ${selectedTag === tag.id ? styles.active : ''}`}
              onClick={() => handleTagClick(tag.id, tag.name)}
              initial={isMounted ? { opacity: 0, y: 10 } : false}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ 
                type: 'spring', 
                stiffness: 400, 
                damping: 17,
                opacity: { duration: 0.2 },
                y: { duration: 0.3 }
              }}
            >
              <span className={styles.tagIcon}>{tag.icon}</span>
              <span className={styles.tagName}>{tag.name}</span>
              {selectedTag === tag.id && (
                <motion.span 
                  className={styles.activeIndicator}
                  layoutId="activeTag"
                  initial={false}
                  transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 30
                  }}
                />
              )}
            </motion.button>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Tags;
