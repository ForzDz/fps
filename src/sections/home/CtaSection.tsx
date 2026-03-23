import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';
import styles from './CtaSection.module.css';
import { cn } from '../../lib/utils';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const CtaSection = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <motion.div 
          className={styles.card}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={containerVariants}
        >
          {/* Animated Background Orbs */}
          <div className={styles.bgGlow1} />
          <div className={styles.bgGlow2} />
          
          {/* Thematic Background Image */}
          <div className={styles.bgWrapper}>
            <img 
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80" 
              alt="Ingénieur en environnement industriel — illustration pour prise de contact Ferdjioua Plastique"
              className={styles.bgImage}
              loading="lazy"
            />
            <div className={styles.bgOverlay} />
          </div>
          
          <div className={styles.content}>
            <motion.h2 variants={itemVariants} className={styles.title}>
              Prêt à lancer votre prochain <span className={styles.highlight}>projet industriel ?</span>
            </motion.h2>
            
            <motion.p variants={itemVariants} className={styles.desc}>
              Obtenez un devis personnalisé et une consultation technique experte pour vos besoins en fabrication plastique et logistique.
            </motion.p>
            
            <motion.div variants={itemVariants} className={styles.actions}>
              <Link to="/contact" className={cn('btn', styles.primaryBtn)}>
                Demander un devis
                <ArrowRight className={styles.btnIcon} />
              </Link>
              <Link to="/services" className={cn('btn', styles.secondaryBtn)}>
                <FileText className={styles.btnIconLeft} />
                Voir les spécifications
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
