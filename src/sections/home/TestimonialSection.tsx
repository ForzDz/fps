import { StaggerContainer, StaggerItem, ScrollReveal } from '../../components/ScrollReveal';
import styles from './TestimonialSection.module.css';
import { cn } from '../../lib/utils';

const testimonials = [
  {
    quote: "La précision et la régularité de leurs préformes PET ont fortement réduit nos arrêts de ligne. Leur engagement envers les standards d’hygiène internationaux se voit à chaque lot reçu.",
    name: "Ahmed Mansouri",
    role: "Directeur logistique, AquaStream",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKBHM9oHy6Dt4e6s2XSSQzNCGVcKn1Vx1S_Mm425tUmA5Ho89fc4Z-g2zs5NfC5d9_FUGR6vRJnAIhsEQGiM_cDNTLB0Y3-_dZ3ZLI-QOZI-9santy9W8Z_WANQ1X7HisS5WAo0Y_RCU8jDQOPkzngqoLtNSNL9eSSdzQrvFwC8DauepET5fAXa6BDkWzbJC-Z8bNbl4F2tPezY1CrEdybxJmk8FXxQlg5SCjHFdskRUM9cIu-1uOmXk2xX2yc1mTcyCST6HPI5CSK"
  },
  {
    quote: "Sarl Ferdjioua Plastique n’est pas seulement un fournisseur : c’est un partenaire stratégique. Leurs capacités d’injection sur mesure nous ont permis de lancer notre nouvelle gamme avec plusieurs semaines d’avance.",
    name: "Sarah Berkani",
    role: "Responsable opérations, Pharmaceutix",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYVC8SHAZxriRxD3abwcXWh3mcJH3wtgyQfRAua_op5oCj4wXbGCaY9R2UeGjEv4j7mgCTz_VtcymmjX9T4xzsu_MxwmukdaQwoE3UuuP-QiX1mpXG5GFBI1RJhYPXCjNVpQ44IXmRaJd8MxsPf10sS56xOj81_VOnNIsA4V4FKHX2jiM1hodA9uuaNi45QgtmrOQ6XWjeRaLqXKevGjIHFDTj5uoct9rKP9FS6iDaofCeoGYzn62MvKfnuIrWPg177pYWVoR6pUgz"
  }
];

const TestimonialSection = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        
        <ScrollReveal animation="slide-up">
          <div className={styles.header}>
            <p className={styles.subtitle}>Témoignages</p>
            <h2 className={styles.title}>La confiance des leaders industriels</h2>
          </div>
        </ScrollReveal>
        
        <StaggerContainer className={styles.grid} delayChildren={0.2} staggerChildren={0.15}>
          {testimonials.map((t, idx) => (
            <StaggerItem key={idx} animation="slide-up">
              <div className={cn(styles.card, 'glass')}>
                <span className={cn('material-symbols-outlined', styles.quoteIcon)}>format_quote</span>
                
                <div className={styles.stars}>
                  {[1, 2, 3, 4, 5].map(star => (
                     <span key={star} className={cn('material-symbols-outlined', styles.star)}>star</span>
                  ))}
                </div>
                
                <p className={styles.quoteText}>"{t.quote}"</p>
                
                <div className={styles.author}>
                  <div className={styles.avatar}>
                    <img
                      src={t.avatar}
                      alt={`Portrait de ${t.name}, ${t.role}`}
                      className={styles.avatarImg}
                      loading="lazy"
                      decoding="async"
                      width={48}
                      height={48}
                    />
                  </div>
                  <div>
                    <div className={styles.authorName}>{t.name}</div>
                    <div className={styles.authorRole}>{t.role}</div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
        
      </div>
    </section>
  );
};

export default TestimonialSection;
