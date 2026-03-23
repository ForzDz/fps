import { ScrollReveal } from '../../components/ScrollReveal';
import styles from './ValuesSection.module.css';
import { cn } from '../../lib/utils';

const valuesData = [
  {
    icon: 'verified',
    title: 'Qualité supérieure',
    desc: 'Des standards sans compromis. Nous utilisons des protocoles de test avancés pour garantir durabilité et performance.'
  },
  {
    icon: 'clean_hands',
    title: 'Hygiène irréprochable',
    desc: 'Conformité stricte aux protocoles internationaux de sécurité alimentaire et d’hygiène pour toutes nos solutions.'
  },
  {
    icon: 'lightbulb',
    title: 'Innovation continue',
    desc: 'Investissement en R&D pour développer des matériaux écoresponsables et des méthodes de production plus intelligentes.'
  },
  {
    icon: 'handshake',
    title: 'Fiabilité',
    desc: 'Chaîne d’approvisionnement maîtrisée et support dédié. Quand nous nous engageons sur un délai, nous livrons.'
  }
];

const ValuesSection = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <ScrollReveal animation="slide-up">
          <div className={styles.header}>
            <h2 className={styles.title}>Les piliers de notre réussite</h2>
            <p className={styles.desc}>
              Nos valeurs guident chaque décision, du choix des matières premières jusqu’à la livraison des produits finis.
            </p>
          </div>
        </ScrollReveal>
        
        <div className={styles.grid}>
          {valuesData.map((value, index) => (
            <ScrollReveal key={index} animation="scale" delay={0.15 * index}>
              <div className={styles.card}>
                <div className={styles.iconWrapper}>
                  <span className={cn("material-symbols-outlined", styles.icon)}>{value.icon}</span>
                </div>
                <h3 className={styles.cardTitle}>{value.title}</h3>
                <p className={styles.cardDesc}>{value.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
