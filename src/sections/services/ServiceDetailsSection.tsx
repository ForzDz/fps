import { ScrollReveal } from '../../components/ScrollReveal';
import styles from './ServiceDetailsSection.module.css';
import { cn } from '../../lib/utils';
import img1 from '../../assets/img1.jpeg';
import img3 from '../../assets/img3.jpeg';
import sarlImg from '../../assets/sarl.jpeg';
import kkkImg from '../../assets/kkk.jpeg';

const ServiceDetailsSection = () => {
  return (
    <>
      <section className={styles.sectionAlt}>
        <div className="container">
          <div className={styles.grid}>
            <ScrollReveal animation="slide-right" width="100%">
              <div className={styles.content}>
                <div className={styles.iconWrapper}>
                  <span className={cn("material-symbols-outlined", styles.icon)}>opacity</span>
                </div>
                <h2 className={styles.title}>Fabrication de préformes PET</h2>
                <p className={styles.desc}>
                  Nous sommes spécialisés dans la production de préformes PET de haute qualité, conçues pour une transparence et une résistance maximales. Notre processus respecte des protocoles stricts de sécurité et d’hygiène, garantissant des lots adaptés aux applications alimentaires et boissons.
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    <span className={cn("material-symbols-outlined", styles.listIcon)}>check_circle</span>
                    Standards qualité certifiés ISO
                  </li>
                  <li className={styles.listItem}>
                    <span className={cn("material-symbols-outlined", styles.listIcon)}>check_circle</span>
                    Protocoles de tests rigoureux
                  </li>
                  <li className={styles.listItem}>
                    <span className={cn("material-symbols-outlined", styles.listIcon)}>check_circle</span>
                    Injection de précision à haute cadence
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="slide-left" width="100%">
              <div className={styles.imagesGrid}>
                <div
                  className={styles.imgPanel}
                  role="img"
                  aria-label="Préformes PET et injection plastique en production — Ferdjioua Plastique, Ferdjioua, Mila"
                  style={{ backgroundImage: `url(${img1})` }}
                />
                <div
                  className={cn(styles.imgPanel, styles.imgPanelOffset)}
                  role="img"
                  aria-label="Lignes de production plastique haute précision — Ferdjioua Plastique"
                  style={{ backgroundImage: `url(${img3})` }}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.grid}>
            <ScrollReveal animation="slide-right" width="100%" className={styles.order2}>
              <div
                className={styles.imgSingle}
                role="img"
                aria-label="Solutions d’emballage plastique industriel — Ferdjioua Plastique, Algérie"
                style={{ backgroundImage: `url(${sarlImg})` }}
              />
            </ScrollReveal>

            <ScrollReveal animation="slide-left" width="100%" className={cn(styles.content, styles.order1)}>
              <div className={styles.iconWrapper}>
                <span className={cn("material-symbols-outlined", styles.icon)}>inventory_2</span>
              </div>
              <h2 className={styles.title}>Solutions d’emballage plastique</h2>
              <p className={styles.desc}>
                Nos solutions d’emballage, durables et personnalisables, protègent vos produits tout en valorisant votre marque. Des contenants industriels aux bouteilles prêtes pour la distribution, nous proposons des designs adaptés à vos exigences de volume et de résistance.
              </p>

              <div className={styles.featuresGrid}>
                <div className={styles.featureBox}>
                  <p className={styles.featureTitle}>Durabilité</p>
                  <p className={styles.featureDesc}>Conçu pour résister aux chocs et à l’empilage.</p>
                </div>
                <div className={styles.featureBox}>
                  <p className={styles.featureTitle}>Personnalisation</p>
                  <p className={styles.featureDesc}>Moules et coloris sur mesure pour votre identité de marque.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className="container">
          <ScrollReveal animation="fade" width="100%">
              <div className={styles.banner}>
              <div
                className={styles.bannerBg}
                role="img"
                aria-label="Usine de production plastique haute technologie — Ferdjioua Plastique, Ferdjioua, Mila"
                style={{
                  backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 60%), url(${kkkImg})`
                }}
              />
              <div className={styles.bannerContent}>
                <div className={styles.bannerBadge}>
                  <span className="material-symbols-outlined text-primary">sensors</span>
                  <span className={styles.bannerBadgeText}>Fabrication intelligente</span>
                </div>
                <h2 className={styles.bannerTitle}>Usine de production haute technologie</h2>
                <p className={styles.bannerDesc}>
                  Notre site, à la pointe, est équipé de lignes de production entièrement automatisées. Grâce au monitoring en temps réel et au tri qualité automatisé, nous maintenons des standards “zéro défaut” même en grande série.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailsSection;
