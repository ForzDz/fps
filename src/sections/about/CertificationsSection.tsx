import styles from './CertificationsSection.module.css';
import { cn } from '../../lib/utils';

const certs = [
  { icon: 'workspace_premium', label: 'ISO 9001:2015' },
  { icon: 'eco', label: 'ISO 14001' },
  { icon: 'health_and_safety', label: 'Certifié HACCP' },
  { icon: 'fact_check', label: 'Normes CE' },
];

const CertificationsSection = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <p className={styles.title}>Certifications & conformité internationale</p>
        </div>
        <div className={styles.flex}>
          {certs.map((cert, i) => (
            <div key={i} className={styles.cert}>
              <span className={cn("material-symbols-outlined", styles.icon)}>{cert.icon}</span>
              <span className={styles.label}>{cert.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
