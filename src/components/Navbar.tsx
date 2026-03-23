import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import styles from './Navbar.module.css';
import HamburgerButton from './Navbar/HamburgerButton';
import MobileMenu from './Navbar/MobileMenu';
import logoImg from '../assets/logo2.png';

const NAV_LINKS = [
  { label: 'Accueil', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'À propos', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        {/* Brand/Logo */}
        <Link to="/" className={styles.logoWrapper}>
          <img
            src={logoImg}
            alt="Ferdjioua Plastique — accueil, fabrication plastique Ferdjioua, Mila"
            className={styles.logo}
            width={40}
            height={40}
          />
          <span className={styles.brandName}>
            Ferdjioua <span className={styles.brandAccent}>Plastique</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.nav}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`${styles.navLink} ${
                location.pathname === link.to ? styles.activeNavLink : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA & Mobile Toggle */}
        <div className={styles.actions}>
          <Link to="/contact" className={styles.quoteBtn}>
            Demander un devis
          </Link>
          


          <button 
            className={`${styles.hamburger} ${isMobileMenuOpen ? styles.open : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Ouvrir le menu"
          >
            <HamburgerButton />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu 
            links={NAV_LINKS} 
            onClose={() => setIsMobileMenuOpen(false)} 
          />
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
