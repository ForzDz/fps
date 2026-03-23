import { ScrollReveal } from '../../components/ScrollReveal';
import styles from './OurStorySection.module.css';
import storyImg from '../../assets/j.jpeg';

const OurStorySection = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <ScrollReveal animation="slide-right" width="100%">
            <div className={styles.content}>
              <div className={styles.badge}>Notre histoire</div>
              <h2 className={styles.title}>Un parcours d’innovation industrielle</h2>
              
              <div className={styles.textBlock}>
                <p>
                  Sarl Ferdjioua Plastique et Services est née d’une vision : transformer le marché local du plastique. Partie d’un atelier modeste en 1998, l’entreprise est devenue un acteur national des solutions plastiques haute performance, au service de secteurs allant de l’emballage alimentaire à l’industrie lourde.
                </p>
                <p>
                  Notre croissance s’appuie sur une conviction : la qualité n’est pas une destination, mais une exigence continue. En investissant dans les technologies européennes les plus récentes et en cultivant l’excellence technique, nous livrons des produits conformes aux standards les plus stricts.
                </p>
              </div>
              
              <div className={styles.statsGrid}>
                <div>
                  <p className={styles.statValue}>25+</p>
                  <p className={styles.statLabel}>Années d’expérience</p>
                </div>
                <div>
                  <p className={styles.statValue}>500+</p>
                  <p className={styles.statLabel}>Clients internationaux</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal animation="slide-left" width="100%">
            <div className={styles.imageWrapper}>
              <div className={styles.imageContainer}>
                <img 
                  src={storyImg} 
                  alt="Atelier et ligne de production plastique — histoire industrielle Ferdjioua Plastique"
                  className={styles.image} 
                />
              </div>
              <div className={styles.quoteCard}>
                <p className={styles.quoteText}>
                  "Nous ne fabriquons pas seulement du plastique : nous construisons la confiance avec chaque partenaire."
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
