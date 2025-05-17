import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import styles from './Tag.module.css';

const Tag = forwardRef(({ 
  name, 
  icon, 
  isActive = false, 
  onClick, 
  className = '',
  ...props 
}, ref) => {
  return (
    <motion.button
      ref={ref}
      className={`${styles.tag} ${isActive ? styles.active : ''} ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      {...props}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      <span className={styles.name}>{name}</span>
    </motion.button>
  );
});

Tag.displayName = 'Tag';

export default Tag;
