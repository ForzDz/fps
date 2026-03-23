import styles from './FacilitySection.module.css';
import { cn } from '../../lib/utils';
import { Link } from 'react-router-dom';
import facilityImg from '../../assets/k.jpeg';

const FacilitySection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <img 
            src={facilityImg} 
            alt="Installations industrielles et usine de fabrication plastique — Ferdjioua Plastique, Ferdjioua, Mila"
            className={styles.image}
          />
          <div className={styles.overlay}>
            <div className={styles.content}>
              <h2 className={styles.title}>Installations de pointe</h2>
              <p className={styles.desc}>
                Notre usine de 5 000 m² est équipée des dernières technologies d’extrusion et d’injection, opérées par des techniciens hautement qualifiés.
              </p>
              <Link to="/contact" className={styles.btn}>
                Visite virtuelle
                <span className={cn("material-symbols-outlined", styles.btnIcon)}>arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitySection;
