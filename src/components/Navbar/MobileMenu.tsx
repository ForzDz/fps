import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './MobileMenu.module.css';

interface MobileMenuProps {
  links: Array<{ label: string; to: string }>;
  onClose: () => void;
}

const MobileMenu = ({ links, onClose }: MobileMenuProps) => {
  return (
    <motion.div
      className={styles.overlay}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
    >
      <div className={styles.inner}>
        <nav className={styles.nav}>
          {links.map((link, i) => (
            <motion.div
              key={link.to}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
            >
              <Link to={link.to} className={styles.link} onClick={onClose}>
                {link.label}
              </Link>
            </motion.div>
          ))}
        </nav>
        
        <motion.div 
          className={styles.footer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
        >
          <Link to="/contact" className={styles.cta} onClick={onClose}>
            Demander un devis
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MobileMenu;
