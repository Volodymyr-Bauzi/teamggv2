import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { SparklesIcon } from '@heroicons/react/24/solid';
import Header from './components/Header';
import BodyField from './components/BodyField';
import styles from './App.module.css';
import './styles/global.css';

const App = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Simulate loading time for the initial load
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.classList.add('loaded');
    }, 1200);

    return () => {
      clearTimeout(timer);
      document.body.classList.remove('loaded');
    };
  }, []);

  // Loading screen with animation
  if (isLoading) {
    return (
      <motion.div 
        className={styles.appLoading}
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <motion.div 
          className={styles.loadingContent}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div 
            className={styles.logo}
            animate={{ 
              rotate: [0, 10, -10, 10, 0],
              scale: [1, 1.1, 0.95, 1.05, 1]
            }}
            transition={{ 
              duration: 2, 
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'reverse'
            }}
          >
            <SparklesIcon className={styles.sparkleIcon} />
          </motion.div>
          <motion.h1 
            className={styles.loadingText}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Gaming Friends
          </motion.h1>
          <motion.div 
            className={styles.loadingBar}
            initial={{ width: 0 }}
            animate={{ width: '60%' }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeInOut' }}
          >
            <motion.div 
              className={styles.loadingProgress}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%']
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'linear'
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <div className={`${styles.app} ${isMounted ? styles.loaded : ''}`}>
      <Header />
      <main className={styles.mainContent}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={styles.pageContent}
          >
            <BodyField />
          </motion.div>
        </AnimatePresence>
      </main>
      <motion.footer 
        className={styles.footer}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className={styles.footerContent}>
          <p>© {new Date().getFullYear()} Gaming Friends. All rights reserved.</p>
          <div className={styles.footerLinks}>
            <a href="/privacy" className={styles.footerLink}>Privacy Policy</a>
            <span className={styles.divider}>•</span>
            <a href="/terms" className={styles.footerLink}>Terms of Service</a>
            <span className={styles.divider}>•</span>
            <a href="/contact" className={styles.footerLink}>Contact Us</a>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default App;
