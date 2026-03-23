import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Linkedin } from 'lucide-react';
import styles from './Footer.module.css';
import logoImg from '../assets/logo2.png';

const NAV_LINKS = [
  { label: 'Accueil', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'À propos', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} aria-label="Pied de page">
      {/* ── Top divider accent ──────────────────────────────── */}
      <div className={styles.accent} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>

        {/* ── Brand ────────────────────────────────────────── */}
        <Link to="/" className={styles.brand} aria-label="Ferdjioua Plastique — Accueil">
          <img
            src={logoImg}
            alt="Logo Ferdjioua Plastique — fabrication plastique et services, Ferdjioua, Mila, Algérie"
            className={styles.logo}
            loading="lazy"
            decoding="async"
            width={48}
            height={48}
          />
          <span className={styles.brandName}>
            Ferdjioua <span className={styles.brandAccent}>Plastique</span>
          </span>
        </Link>

        {/* ── Nav links ─────────────────────────────────────── */}
        <nav className={styles.nav} aria-label="Navigation du pied de page">
          {NAV_LINKS.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              className={styles.navLink}
              aria-label={label}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* ── Contact strip ─────────────────────────────────── */}
        <div className={styles.contact}>
          <a
            href="tel:+21341452738"
            className={styles.contactItem}
            aria-label="Appelez-nous au +213 41 45 27 38"
          >
            <Phone size={16} aria-hidden="true" />
            <span>+213 41 45 27 38</span>
          </a>
          <a
            href="mailto:contact@ferdjiouaplast.dz"
            className={styles.contactItem}
            aria-label="Envoyez-nous un e-mail"
          >
            <Mail size={16} aria-hidden="true" />
            <span>contact@fps-dz.com</span>
          </a>
          <span className={styles.contactItem} aria-label="Notre localisation">
            <MapPin size={16} aria-hidden="true" />
            <span>Ferdjioua, Mila — Algérie</span>
          </span>
        </div>

        {/* ── Social icons ──────────────────────────────────── */}
        <div className={styles.socials} aria-label="Réseaux sociaux">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialBtn}
            aria-label="Nous suivre sur LinkedIn"
          >
            <Linkedin size={20} aria-hidden="true" />
          </a>
        </div>

      </div>

      {/* ── Copyright bar ─────────────────────────────────────── */}
      <div className={styles.bar}>
        <div className={`container ${styles.barInner}`}>
          <span aria-label="Copyright">
            © {year} Sarl Ferdjioua Plastique et Services. Tous droits réservés.
          </span>
          <div className={styles.legalLinks}>
            <span className={styles.legalLink}>Politique de confidentialité</span>
            <span className={styles.legalLink}>Conditions d’utilisation</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
