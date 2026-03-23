import styles from './ContactHeroSection.module.css';
import { motion } from 'framer-motion';
import { StaggerContainer, StaggerItem } from '../../components/ScrollReveal';
import MagneticButton from '../../components/MagneticButton';

const ContactHeroSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.bg}>
        <div className={styles.gradient}></div>
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYNuosLlEye3hTbskVR94z-kaxBWm3hJ4xvn1-Jcmvz_LslooKRjca0frmVRHkyj0IkVIvKylocNwtoOA0GdCV3iqrk2nuv5PWGrbswdoPsW9EYx8iuY_wKHHasOBtaPH_JCELw3ydmpS72FEt6FNfO1vHKN7sm-JJsYU3p9qH8vxRu5eSkjisO9Pjr481R0s2_0jr49UFCLkzteUmXv6NcJ_YVdzfi1_3jl94BetiESzOdwuPHJwK9Tb5hD-lvC8xyzmnnuuoVT1U" 
          alt="Contact Ferdjioua Plastique — installation industrielle et fabrication plastique, Ferdjioua, Mila"
          className={styles.image} 
        />
      </div>
      
      <div className="container relative z-20">
        <StaggerContainer className={styles.grid} staggerChildren={0.12} delayChildren={0.06}>
          <div className={styles.content}>
            <StaggerItem>
              <h1 className={styles.title}>
                Contactez-nous{' '}
                <span className={styles.highlight}>
                  aujourd'hui.
                  <motion.span
                    aria-hidden="true"
                    className={styles.underline}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  />
                </span>
              </h1>
            </StaggerItem>

            <StaggerItem>
              <p className={styles.desc}>
                Nous sommes à votre écoute pour concrétiser vos projets industriels. De l'ingénierie préliminaire à la production à grande échelle, débutons notre collaboration.
              </p>
            </StaggerItem>

            <StaggerItem>
              <div className={styles.actions}>
                <MagneticButton
                  className={styles.ctaBtn}
                  ariaLabel="Demander un devis"
                  onClick={() => {
                    const el = document.getElementById('contact-form');
                    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                >
                  <span>Demander un devis</span>
                  <span className="material-symbols-outlined">arrow_forward</span>
                </MagneticButton>
              </div>
            </StaggerItem>
          </div>

          <StaggerItem className={styles.visualWrap} animation="slide-left">
            <div className={styles.visual} aria-hidden="true">
              <svg className={styles.graph} viewBox="0 0 520 520" role="presentation">
                <defs>
                  <radialGradient id="gGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="rgba(0,229,255,0.55)" />
                    <stop offset="65%" stopColor="rgba(0,229,255,0.14)" />
                    <stop offset="100%" stopColor="rgba(0,229,255,0)" />
                  </radialGradient>
                  <filter id="fBlur" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="6" />
                  </filter>
                </defs>

                <circle cx="260" cy="260" r="230" fill="url(#gGlow)" filter="url(#fBlur)" opacity="0.9" />

                <g className={styles.lines} stroke="rgba(0,229,255,0.30)" strokeWidth="1.2">
                  <path d="M110 210 L220 150 L330 190 L410 290" />
                  <path d="M145 335 L235 305 L310 360 L385 250" />
                  <path d="M190 120 L260 210 L340 120" />
                  <path d="M170 260 L260 260 L350 260" />
                </g>

                <g className={styles.nodes}>
                  <circle cx="110" cy="210" r="6" />
                  <circle cx="220" cy="150" r="5" />
                  <circle cx="330" cy="190" r="6" />
                  <circle cx="410" cy="290" r="7" />
                  <circle cx="145" cy="335" r="7" />
                  <circle cx="235" cy="305" r="5" />
                  <circle cx="310" cy="360" r="6" />
                  <circle cx="385" cy="250" r="5" />
                  <circle cx="260" cy="260" r="9" className={styles.nodeCore} />
                </g>
              </svg>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ContactHeroSection;
