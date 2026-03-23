import { useState, useEffect } from 'react';
import styles from './CookieBanner.module.css';

const COOKIE_CONSENT_KEY = 'fp_cookie_consent';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check localStorage to see if user already made a choice
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      setIsVisible(true);
    } else {
      // If previously accepted, run analytics
      if (consent === 'accepted') {
        loadAnalytics();
      }
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    setIsVisible(false);
    loadAnalytics();
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'declined');
    setIsVisible(false);
    // Ensure no trackers are loaded
    (window as any).disableAnalytics = true;
  };

  const loadAnalytics = () => {
    if ((window as any).disableAnalytics) return;
    
    // Example: Initialize Google Analytics or other trackers here
    (window as any).analyticsLoaded = true;
    console.log('Analytics loaded'); // For demonstration purposes
    
    // In a real scenario, you'd inject the <script> tags dynamically here
    // const script = document.createElement('script');
    // script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXX';
    // document.head.appendChild(script);
  };

  if (!isVisible) return null;

  return (
    <div className={styles.banner} role="dialog" aria-live="polite" aria-label="Avertissement concernant les cookies">
      <div className={styles.content}>
        <div className={styles.title}>Respect de votre vie privée</div>
        <p className={styles.text}>
          Nous utilisons des cookies strictement nécessaires pour le fonctionnement du site, 
          ainsi que des cookies d'analyse pour améliorer votre expérience. Vous pouvez 
          choisir d'accepter ou de refuser ces derniers.
        </p>
      </div>
      <div className={styles.actions}>
        <button onClick={handleDecline} className={`${styles.btn} ${styles.btnDecline}`}>
          Refuser
        </button>
        <button onClick={handleAccept} className={`${styles.btn} ${styles.btnAccept}`}>
          Accepter
        </button>
      </div>
    </div>
  );
}
