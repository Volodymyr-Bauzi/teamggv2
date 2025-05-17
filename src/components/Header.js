import React, { useEffect, useState, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { GameControllerIcon, TrophyIcon, UserGroupIcon, ChatBubbleLeftRightIcon } from './Icons';
import styles from './Header.module.css';

const navItems = [
  { name: 'Games', path: '/games', icon: <GameControllerIcon /> },
  { name: 'Tournaments', path: '/tournaments', icon: <TrophyIcon /> },
  { name: 'Community', path: '/community', icon: <UserGroupIcon /> },
  { name: 'Chat', path: '/chat', icon: <ChatBubbleLeftRightIcon /> },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const headerRef = useRef(null);
  const lastScrollY = useRef(0);
  const [isVisible, setIsVisible] = useState(true);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrolled = currentScrollY > 20;
      
      // Show/hide header on scroll
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      // Update scrolled state for styling
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Animation variants
  const headerVariants = {
    hidden: { y: -100 },
    visible: { 
      y: 0,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 300
      }
    }
  };

  const navVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const navItemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20
      }
    }
  };

  return (
    <motion.header
      ref={headerRef}
      className={`${styles.header} ${scrolled ? styles.scrolled : ''} ${!isVisible ? styles.hidden : ''}`}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={headerVariants}
    >
      <div className={styles.container}>
        <motion.div 
          className={styles.logoContainer}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link to="/" className={styles.logo} aria-label="Home">
            <div className={styles.logoIcon}>
              <div className={styles.logoInner} />
            </div>
            <span className={styles.logoText}>
              <span className={styles.logoPrimary}>Gaming</span>
              <span className={styles.logoAccent}>Friends</span>
            </span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className={styles.nav}>
          <motion.ul 
            className={styles.navList}
            variants={navVariants}
            initial="hidden"
            animate="visible"
          >
            {navItems.map((item) => (
              <motion.li 
                key={item.path} 
                className={styles.navItem}
                variants={navItemVariants}
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) => 
                    `${styles.navLink} ${isActive ? styles.active : ''}`
                  }
                >
                  <span className={styles.navIconContainer}>
                    {item.icon}
                  </span>
                  <span className={styles.navText}>{item.name}</span>
                  <span className={styles.navUnderline} />
                </NavLink>
              </motion.li>
            ))}
          </motion.ul>
        </nav>

        <div className={styles.actions}>
          <motion.button 
            className={styles.authButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className={styles.authButtonText}>Sign In</span>
          </motion.button>
          
          <motion.button 
            className={`${styles.menuButton} ${isMenuOpen ? styles.menuOpen : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? (
              <XMarkIcon className={styles.menuIcon} />
            ) : (
              <Bars3Icon className={styles.menuIcon} />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <motion.div 
              className={styles.mobileNav}
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <nav>
                <ul className={styles.mobileNavList}>
                  {navItems.map((item, index) => (
                    <motion.li 
                      key={item.path}
                      className={styles.mobileNavItem}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ 
                        delay: 0.1 + (index * 0.05),
                        type: 'spring',
                        stiffness: 300,
                        damping: 20
                      }}
                    >
                      <NavLink
                        to={item.path}
                        className={({ isActive }) => 
                          `${styles.mobileNavLink} ${isActive ? styles.mobileNavLinkActive : ''}`
                        }
                      >
                        <span className={styles.mobileNavIcon}>
                          {item.icon}
                        </span>
                        <span>{item.name}</span>
                      </NavLink>
                    </motion.li>
                  ))}
                </ul>
              </nav>
              
              <div className={styles.mobileAuth}>
                <motion.button 
                  className={styles.mobileAuthButton}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Sign In
                </motion.button>
                <motion.button 
                  className={`${styles.mobileAuthButton} ${styles.mobileAuthButtonPrimary}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Sign Up
                </motion.button>
              </div>
              
              {/*To be added*/}
              {/* <div className={styles.socialLinks}>
                <a href="#" className={styles.socialLink} aria-label="Twitter">
                  <svg className={styles.socialIcon} viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className={styles.socialLink} aria-label="Discord">
                  <svg className={styles.socialIcon} viewBox="0 0 24 24">
                    <path d="M20.32 4.37a19.8 19.8 0 0 0-4.89-1.51.07.07 0 0 0-.08.03c-.21.39-.45.76-.71 1.1a18.27 18.27 0 0 0-5.48 0 12.64 12.64 0 0 0-.71-1.1.07.07 0 0 0-.08-.03A19.71 19.71 0 0 0 3.68 4.37a.07.07 0 0 0-.02.03C.5 9.05-.3 13.57.1 18.03a.07.07 0 0 0 .03.05 19.9 19.9 0 0 0 6.03 3.03.07.07 0 0 0 .08-.02 14.11 14.11 0 0 0 1.22-1.99.07.07 0 0 0-.04-.1 13.1 13.1 0 0 1-1.87-.9.07.07 0 0 1-.01-.12 9.34 9.34 0 0 0 .12-.11.07.07 0 0 1 .09 0 13.3 13.3 0 0 0 11.12 0 .07.07 0 0 1 .1 0l.12.11a.07.07 0 0 1 0 .12 13.1 13.1 0 0 1-1.87.9.07.07 0 0 0-.04.1 14.11 14.11 0 0 0 1.22 1.99.07.07 0 0 0 .08.02 19.98 19.98 0 0 0 6.03-3.03.07.07 0 0 0 .03-.05c.5-5.2-.8-9.7-3.6-13.6a.07.07 0 0 0-.03-.03zM8.02 15.33c-1.18 0-2.16-1.08-2.16-2.42 0-1.34.96-2.42 2.16-2.42 1.2 0 2.18 1.08 2.16 2.42 0 1.34-.96 2.42-2.16 2.42zm7.97 0c-1.18 0-2.16-1.08-2.16-2.42 0-1.34.96-2.42 2.16-2.42 1.2 0 2.18 1.08 2.16 2.42 0 1.34-.96 2.42-2.16 2.42z"/>
                  </svg>
                </a>
                <a href="#" className={styles.socialLink} aria-label="Instagram">
                  <svg className={styles.socialIcon} viewBox="0 0 24 24">
                    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.7 4.91 4.91.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.25-1.66 4.77-4.91 4.91-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.25-.15-4.76-1.66-4.91-4.91-.06-1.27-.07-1.64-.07-4.85s.01-3.58.07-4.85C2.38 3.93 3.89 2.4 7.14 2.25 8.41 2.19 8.79 2.17 12 2.17zm0-1.6c-3.24 0-3.64.01-4.92.07-4.04.19-5.86 2-6.04 6.04-.06 1.28-.07 1.67-.07 4.92s.01 3.63.07 4.92c.18 4.05 2 5.86 6.04 6.04 1.28.06 1.67.07 4.92.07s3.63-.01 4.92-.07c4.04-.18 5.85-1.99 6.04-6.04.06-1.28.07-1.67.07-4.92s-.01-3.64-.07-4.92c-.19-4.04-2-5.85-6.04-6.04C15.64.56 15.25.55 12 .55z"/>
                    <path d="M12 5.9a6.1 6.1 0 1 0 0 12.2 6.1 6.1 0 0 0 0-12.2zm0 10.07a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
                    <circle cx="18.37" cy="5.6" r="1.43"/>
                  </svg>
                </a>
              </div> */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
