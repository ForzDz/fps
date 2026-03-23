import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './ProcessTimelineMobile.module.css';

const steps = [
  {
    num: 1,
    title: "Consultation",
    desc: "Analyse des besoins et définition des spécifications, volumes et matières.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=600",
  },
  {
    num: 2,
    title: "Production",
    desc: "Lancement des procédés d'injection et de soufflage industriels.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600",
  },
  {
    num: 3,
    title: "Contrôle qualité",
    desc: "Inspection automatique et manuelle pour garantir un résultat sans défaut.",
    image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80&w=600",
  },
  {
    num: 4,
    title: "Livraison",
    desc: "Distribution rapide, conditionnement sécurisé et support logistique.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600",
  }
];

export const ProcessTimelineMobile = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress within this container for the timeline line fill
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className={styles.container} ref={containerRef}>
      
      {/* Background Timeline Track */}
      <div className={styles.timelineTrack}></div>
      
      {/* Filled Animated Timeline Line */}
      <motion.div 
        className={styles.timelineFill} 
        style={{ scaleY, transformOrigin: 'top' }} 
      />

      <div className={styles.stepsWrapper}>
        {steps.map((step) => (
          <motion.div 
            key={step.num}
            className={styles.stepItem}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Number Indicator on Left */}
            <div className={styles.stepIndicator}>
              <div className={styles.stepNumber}>{step.num}</div>
            </div>

            {/* Content Card */}
            <div className={styles.card}>
              <div className={styles.imageContainer}>
                <img
                  src={step.image}
                  alt={`${step.title} — processus de fabrication Ferdjioua Plastique`}
                  loading="lazy"
                  decoding="async"
                  width={600}
                  height={400}
                  className={styles.image}
                />
                <div className={styles.imageOverlay} />
              </div>
              
              <div className={styles.textContent}>
                <h3 className={styles.title}>{step.title}</h3>
                <p className={styles.desc}>{step.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
