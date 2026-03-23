import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Briefcase, CheckCircle2, Factory, ShieldCheck } from 'lucide-react';
import styles from './TeamSection.module.css';

const expertiseItems = [
  {
    icon: Briefcase,
    text: "20+ ans d'expérience"
  },
  {
    icon: CheckCircle2,
    text: "500+ projets réalisés"
  },
  {
    icon: ShieldCheck,
    text: "Normes ISO respectées"
  },
  {
    icon: Factory,
    text: "Technologie de pointe"
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

const TeamSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.backgroundBlur} />
      <div className="container">
        <div className={styles.grid}>
          {/* Left Column: Text & Items */}
          <motion.div 
            className={styles.textContent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className={styles.title}>
              Une expertise industrielle reconnue
            </motion.h2>
            <motion.p variants={itemVariants} className={styles.subtitle}>
              Une équipe d’ingénieurs et de techniciens spécialisés dans la transformation du plastique et les solutions d’emballage haute précision.
            </motion.p>

            <motion.div variants={containerVariants} className={styles.list}>
              {expertiseItems.map((item, index) => (
                <motion.div key={index} variants={itemVariants} className={styles.listItem}>
                  <div className={styles.iconWrapper}>
                    <item.icon className={styles.icon} />
                  </div>
                  <span className={styles.listText}>{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div 
            className={styles.imageColumn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={imageVariants}
          >
            <div className={styles.imageWrapper}>
              <img 
                src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&q=80" 
                alt="Équipe et expertise industrielle en transformation plastique — Ferdjioua Plastique, Algérie"
                className={styles.image}
              />
              <div className={styles.imageOverlay} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
