import { ScrollReveal } from '../../components/ScrollReveal';
import styles from './AboutHeroSection.module.css';
import heroBg from '../../assets/kkk.jpeg';

const AboutHeroSection = () => {
  return (
    <section className={styles.section}>
      <div 
        className={styles.bg}
        style={{ backgroundImage: `linear-gradient(rgba(16, 28, 34, 0.7), rgba(16, 28, 34, 0.7)), url(${heroBg})` }}
      />
      <ScrollReveal animation="slide-up" delay={0.2}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            L’excellence du plastique <br/>
            <span className={styles.highlight}>Depuis 2019</span>
          </h1>
          <p className={styles.desc}>
            Un héritage fondé sur l’ingénierie de précision, l’innovation durable et un engagement constant pour la qualité industrielle.
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default AboutHeroSection;
