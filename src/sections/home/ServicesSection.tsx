import { Link } from 'react-router-dom';
import { StaggerContainer, StaggerItem, ScrollReveal } from '../../components/ScrollReveal';
import styles from './ServicesSection.module.css';
import { cn } from '../../lib/utils';
import img1 from '../../assets/img1.jpeg';
import img2 from '../../assets/img2.jpeg';
import img3 from '../../assets/img3.jpeg';

const services = [
  {
    title: "Fabrication de préformes PET",
    desc: "Préformes haute précision disponibles en différents poids et formats pour les applications boissons et chimie.",
    img: img1,
    path: "/services"
  },
  {
    title: "Emballage industriel",
    desc: "Solutions d’emballage durables et hygiéniques, conçues pour répondre aux exigences de sécurité industrielle.",
    img: img2,
    path: "/services"
  },
  {
    title: "Injection plastique sur mesure",
    desc: "Pièces plastiques adaptées à vos spécifications techniques et conceptions CAO.",
    img: img3,
    path: "/services"
  }
];

const ServicesSection = () => {
  return (
    <section className={styles.section} id="services">
      <div className="container">
        <ScrollReveal animation="slide-up">
          <div className={styles.header}>
            <p className={styles.subtitle}>Notre expertise</p>
            <h2 className={styles.title}>Services de fabrication de précision</h2>
            <p className={styles.description}>
              Nous exploitons des technologies d’injection de pointe pour fournir des composants plastiques durables et de haute qualité, pour des secteurs variés.
            </p>
          </div>
        </ScrollReveal>
        
        <StaggerContainer className={styles.grid} delayChildren={0.2} staggerChildren={0.15}>
          {services.map((svc, idx) => (
            <StaggerItem key={idx} animation="slide-up">
              <div className={cn(styles.card, 'glass')}>
                <div className={styles.imgWrapper}>
                  <img
                    src={svc.img}
                    alt={`${svc.title} — Ferdjioua Plastique, fabrication plastique à Ferdjioua, Mila`}
                    className={styles.image}
                    loading="lazy"
                    width={600}
                    height={400}
                    decoding="async"
                  />
                </div>
                <div className={styles.cardContent}>
                  <h4 className={styles.cardTitle}>{svc.title}</h4>
                  <p className={styles.cardDesc}>{svc.desc}</p>
                  <Link to={svc.path} className={styles.cardLink}>
                    En savoir plus 
                    <span className={cn('material-symbols-outlined', styles.linkIcon)}>arrow_forward</span>
                  </Link>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
};

export default ServicesSection;
