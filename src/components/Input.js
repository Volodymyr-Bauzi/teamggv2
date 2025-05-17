import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import styles from './Input.module.css';

const Input = ({ onInputChange, placeholder = 'Search games...', className = '' }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState('');
  const inputRef = useRef(null);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    if (onInputChange) {
      onInputChange(e);
    }
  };

  const handleClear = () => {
    setValue('');
    if (onInputChange) {
      const event = { target: { value: '' } };
      onInputChange(event);
    }
    inputRef.current.focus();
  };

  return (
    <div className={`${styles.inputContainer} ${className}`}>
      <div className={styles.inputWrapper}>
        <div className={styles.icon}>
          <MagnifyingGlassIcon />
        </div>
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 150)}
          placeholder={placeholder}
          className={styles.input}
          maxLength="50"
          aria-label="Search games"
        />
        <AnimatePresence>
          {value && (
            <motion.button
              type="button"
              onClick={handleClear}
              className={styles.clearButton}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Clear search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </motion.button>
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {isFocused && (
          <motion.div
            className={styles.focusIndicator}
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ width: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Input;
