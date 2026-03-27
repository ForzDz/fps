import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import styles from './HeroSection.module.css';
import img3 from '../../assets/img3.jpeg';

// Rotating animated words
const ANIMATED_WORDS = ['Précision', 'Innovation', 'Excellence', 'Qualité.'];

const HeroSection = () => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % ANIMATED_WORDS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Stagger variants for container
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.1,
      } as const,
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.93, y: 24 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const, delay: 0.3 },
    },
  };

  return (
    <section className={styles.hero}>
      {/* Ambient background blobs */}
      <div className={styles.blobTopRight} />
      <div className={styles.blobBottomLeft} />
      <div className={styles.blobCenter} />

      {/* Noise texture overlay */}
      <div className={styles.noiseOverlay} />

      <div className={`container ${styles.grid}`}>
        {/* ───────────── LEFT: Text Content ───────────── */}
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className={styles.badge}>
            <span className={styles.pingWrapper}>
              <span className={styles.ping} />
              <span className={styles.pingDot} />
            </span>
            Standards qualité internationaux — Depuis 2019
          </motion.div>

          {/* Headline with animated word */}
          <motion.h1 variants={itemVariants} className={styles.title}>
            Plastique{' '}
            <br className={styles.br} />
            <span className={styles.wordSlider}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={ANIMATED_WORDS[wordIndex]}
                  className={styles.animatedWord}
                  initial={{ opacity: 0, y: 36 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -36 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] as const }}
                >
                  {ANIMATED_WORDS[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p variants={itemVariants} className={styles.description}>
            Sarl Ferdjioua Plastique fournit des préformes PET haute précision et des solutions
            d’emballage innovantes — conçues pour les leaders industriels.
          </motion.p>

          {/* Stats row */}
          <motion.div variants={itemVariants} className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statValue}>25+</span>
              <span className={styles.statLabel}>Années de précision</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statValue}>500+</span>
              <span className={styles.statLabel}>Clients internationaux</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statValue}>ISO</span>
              <span className={styles.statLabel}>Qualité certifiée</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className={styles.actions}>
            <Link to="/contact" className={styles.primaryBtn}>
              Demander un devis
              <ArrowRight size={18} className={styles.btnIcon} />
            </Link>
            <Link to="/contact" className={styles.secondaryBtn}>
              Nous contacter
              <ChevronRight size={16} className={styles.btnSecondaryIcon} />
            </Link>
          </motion.div>
        </motion.div>

        {/* ───────────── RIGHT: Image ───────────── */}
        <motion.div
          className={styles.imageWrapper}
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Glow blob behind image */}
          <div className={styles.imageGlow} />
          <div className={styles.imageGlow2} />

          <div className={styles.imageFrame}>
            {/* Floating tag */}
            <motion.div
              className={styles.floatingTag}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' as const }}
            >
              <span className={styles.floatingTagDot} />
              Fabrication haute précision
            </motion.div>

            <div className={styles.imageContainer}>
              <img
                src={img3}
                alt="Ligne de production et injection plastique — Ferdjioua Plastique, Ferdjioua, Mila, Algérie"
                className={styles.image}
                loading="eager"
                decoding="async"
                width={800}
                height={600}
                fetchPriority="high"
              />
              {/* Subtle inner overlay */}
              <div className={styles.imageOverlay} />
            </div>

            {/* Bottom floating badge */}
            <motion.div
              className={styles.floatingBadge}
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' as const, delay: 0.5 }}
            >
              <div className={styles.floatingBadgeIcon}>🏭</div>
              <div>
                <div className={styles.floatingBadgeTitle}>Ferdjioua Plastique</div>
                <div className={styles.floatingBadgeSub}>Ferdjioua, Algérie</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
