import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';
import { Seo } from '../components/Seo';
import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={styles.page}>
      <Seo
        path="/404"
        title="Page introuvable | Ferdjioua Plastique"
        description="La page que vous recherchez n'existe pas ou a été déplacée. Retournez à l'accueil de Ferdjioua Plastique."
        keywords="404, page introuvable, Ferdjioua Plastique, erreur"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className={styles.errorCode} aria-hidden="true">
          404
        </div>

        <h1 className={styles.title}>Page introuvable</h1>

        <div className={styles.divider} aria-hidden="true" />

        <p className={styles.subtitle}>
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          Vérifiez l'adresse ou retournez à l'accueil.
        </p>

        <Link to="/" className={styles.homeBtn} aria-label="Retourner à la page d'accueil">
          <Home size={18} aria-hidden="true" />
          Retour à l'accueil
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
