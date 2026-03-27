import { Link } from 'react-router-dom';
import { ScrollReveal } from '../../components/ScrollReveal';
import styles from './ServicesHeroSection.module.css';
import { cn } from '../../lib/utils';
import img5 from '../../assets/img5.jpeg';

const ServicesHeroSection = () => {
  return (
    <section className={styles.section}>
      <div 
        className={styles.bg}
        style={{ backgroundImage: `linear-gradient(rgba(16, 28, 34, 0.75), rgba(16, 28, 34, 0.85)), url(${img5})` }}
      />

      <div className={styles.container}>
        <ScrollReveal animation="slide-up">
          <span className={styles.badge}>Excellence industrielle</span>
          
          <h1 className={styles.title}>
            Nos compétences
          </h1>
          
          <p className={styles.desc}>
            Solutions d’ingénierie de précision et de fabrication plastique de haute qualité, conçues pour répondre aux standards internationaux les plus exigeants.
          </p>
          
          <div className={styles.actions}>
            <a href="#process" className={cn('btn', styles.primaryBtn)}>
              Voir notre processus
            </a>
            <Link to="/contact" className={cn('btn', styles.secondaryBtn)}>
              Nous contacter
            </Link>
          </div>
        </ScrollReveal>
      </div>
      
      <div className={styles.bgBlur}></div>
    </section>
  );
};

export default ServicesHeroSection;
