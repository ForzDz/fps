import { StaggerContainer, StaggerItem } from '../../components/ScrollReveal';
import styles from './WhyUsSection.module.css';
import { cn } from '../../lib/utils';
import img4 from '../../assets/img4.jpeg';
import sarlImg from '../../assets/sarl.jpeg';

const listItems = [
  "Lignes de production à grande vitesse",
  "Protocoles d’hygiène de niveau médical",
  "Développement de moules sur mesure",
  "Support technique 24/7"
];

const WhyUsSection = () => {
  return (
    <section className={styles.section} id="about">
      <div className={cn('container', styles.grid)}>
        
        <StaggerContainer className={styles.imagesGrid} delayChildren={0.2} staggerChildren={0.2}>
          <div className={styles.imageCol}>
            <StaggerItem animation="slide-up">
              <div className={styles.imgWrapper}>
                <img 
                  className={styles.img} 
                  loading="lazy"
                  decoding="async"
                  width={600}
                  height={400}
                  src={img4} 
                  alt="Contrôle qualité" 
                />
              </div>
            </StaggerItem>
            <StaggerItem animation="slide-up">
              <div className={cn(styles.card, styles.cardPrimary, 'glass')}>
                <span className={cn('material-symbols-outlined', styles.cardIcon)}>verified</span>
                <p className={styles.cardTitle}>Certifié</p>
                <p className={styles.cardDesc}>Norme ISO 9001:2015</p>
              </div>
            </StaggerItem>
          </div>
          
          <div className={styles.imageCol}>
            <StaggerItem animation="slide-up">
              <div className={cn(styles.card, 'glass')}>
                <span className={cn('material-symbols-outlined', styles.cardIcon)}>eco</span>
                <p className={styles.cardTitle}>Durabilité</p>
                <p className={styles.cardDesc}>Recyclable materials focus</p>
              </div>
            </StaggerItem>
            <StaggerItem animation="slide-up">
              <div className={styles.imgWrapper}>
                <img 
                  className={styles.img} 
                  loading="lazy"
                  decoding="async"
                  width={600}
                  height={400}
                  src={sarlImg} 
                  alt="Installations et standards d’hygiène pour la fabrication plastique — Ferdjioua Plastique"
                />
              </div>
            </StaggerItem>
          </div>
        </StaggerContainer>

        <StaggerContainer className={styles.content} delayChildren={0.3} staggerChildren={0.1}>
          <StaggerItem animation="slide-up">
            <h2 className={styles.subtitle}>Pourquoi Ferdjioua Plastique</h2>
          </StaggerItem>
          <StaggerItem animation="slide-up">
            <h3 className={styles.title}>La référence en hygiène et durabilité</h3>
          </StaggerItem>
          <StaggerItem animation="slide-up">
            <p className={styles.desc}>
              Notre site de production applique des protocoles d’hygiène stricts, garantissant que chaque composant fabriqué est sûr pour l’alimentaire, les boissons et le stockage médical.
            </p>
          </StaggerItem>
          <div className={styles.list}>
            {listItems.map((item, idx) => (
              <StaggerItem key={idx} animation="slide-up">
                <div className={styles.listItem}>
                  <span className={styles.listIconWrapper}>
                    <span className={cn('material-symbols-outlined', styles.listIcon)}>check</span>
                  </span>
                  {item}
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
        
      </div>
    </section>
  );
};

export default WhyUsSection;
