
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Briefcase, FolderCheck, Award, HeartHandshake } from 'lucide-react';
import styles from './StatsSection.module.css';
import { AnimatedCounter } from '../../components/AnimatedCounter';

const statsData = [
  {
    id: 1,
    icon: <Briefcase className={styles.icon} />,
    value: 20,
    suffix: '+',
    label: "Années d'expérience"
  },
  {
    id: 2,
    icon: <FolderCheck className={styles.icon} />,
    value: 500,
    suffix: '+',
    label: "Projets réalisés"
  },
  {
    id: 3,
    icon: <Award className={styles.icon} />,
    value: 100,
    suffix: '%',
    label: "Qualité certifiée ISO"
  },
  {
    id: 4,
    icon: <HeartHandshake className={styles.icon} />,
    value: 98,
    suffix: '%',
    label: "Clients satisfaits"
  }
];

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const StatsSection = () => {
  return (
    <section className={styles.section}>
      <div className="container relative z-10">

        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>L&apos;excellence en ingénierie, prouvée par nos résultats</h2>
          <div className={styles.titleUnderline}></div>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {statsData.map((stat) => (
            <motion.div key={stat.id} className={styles.card} variants={cardVariant}>
              <div className={styles.iconWrapper}>
                {stat.icon}
              </div>
              <div className={styles.statContent}>
                <p className={styles.statValue}>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={2.5} />
                </p>
                <p className={styles.statLabel}>{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Background Ambience */}
      <div className={styles.ambientGlow}></div>
    </section>
  );
};

export default StatsSection;
