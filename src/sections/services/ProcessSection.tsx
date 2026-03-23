import { ScrollReveal } from '../../components/ScrollReveal';
import styles from './ProcessSection.module.css';
import { cn } from '../../lib/utils';
import { ProcessTimelineMobile } from '../../components/ProcessTimelineMobile';

const steps = [
  {
    num: 1,
    title: "Consultation",
    desc: "Nous analysons vos besoins et définissons les spécifications, volumes et matières.",
    primary: true
  },
  {
    num: 2,
    title: "Production",
    desc: "Les procédés d’injection et de soufflage démarrent dans notre usine.",
    primary: false
  },
  {
    num: 3,
    title: "Contrôle qualité",
    desc: "Chaque pièce est inspectée (automatique et manuel) pour garantir un résultat sans défaut.",
    primary: false
  },
  {
    num: 4,
    title: "Livraison",
    desc: "Conditionnement sécurisé et support logistique pour des livraisons à temps.",
    primary: false
  }
];

const ProcessSection = () => {
  return (
    <section className={styles.section} id="process">
      <div className="container">
        <ScrollReveal animation="slide-up">
          <div className={styles.header}>
            <h2 className={styles.title}>Notre processus</h2>
            <p className={styles.desc}>Comment nous concrétisons vos besoins en emballage et pièces plastiques.</p>
          </div>
        </ScrollReveal>
        
        <div className={styles.desktopWrapper}>
          <div className={styles.grid}>
            {steps.map((step, idx) => (
              <ScrollReveal key={step.num} animation="slide-up" delay={0.15 * idx}>
                <div className={styles.step}>
                  <div className={cn(styles.number, step.primary ? styles.numberPrimary : styles.numberSecondary)}>
                    {step.num}
                  </div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <div className={styles.mobileWrapper}>
          <ProcessTimelineMobile />
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
