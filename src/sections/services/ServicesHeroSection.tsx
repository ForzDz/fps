import { Link } from 'react-router-dom';
import { ScrollReveal } from '../../components/ScrollReveal';
import styles from './ServicesHeroSection.module.css';
import { cn } from '../../lib/utils';

const ServicesHeroSection = () => {
  return (
    <section className={styles.section}>
      {/* Thematic Background Image */}
      <div className={styles.bgImageWrapper}>
        <img 
          src="https://images.unsplash.com/photo-1565439390118-b2279ea0949d?auto=format&fit=crop&q=80&w=1920" 
          alt="Ingénierie et services de fabrication plastique — Ferdjioua Plastique, Ferdjioua, Mila"
          className={styles.bgImage}
        />
      </div>

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
