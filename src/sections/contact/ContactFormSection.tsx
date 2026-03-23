import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import styles from './ContactFormSection.module.css';
import { cn } from '@/lib/utils';
import { supabase } from '@/lib/supabaseClient';

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const ContactFormSection = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 1) Honeypot anti-spam (champ invisible : les bots le remplissent souvent)
    const fd = new FormData(e.currentTarget);
    const honeypotValue = (fd.get('website') ?? '').toString().trim();
    if (honeypotValue.length > 0) {
      // Rejet silencieux
      return;
    }

    // 2) Rate limit côté client : max 3 soumissions par 5 minutes
    try {
      const key = 'contact_form_submission_times';
      const windowMs = 5 * 60 * 1000;
      const maxSubmissions = 3;

      const raw = localStorage.getItem(key);
      const now = Date.now();

      const times = (raw ? JSON.parse(raw) : []) as number[];
      const recentTimes = Array.isArray(times)
        ? times.filter((t) => typeof t === 'number' && now - t < windowMs)
        : [];

      if (recentTimes.length >= maxSubmissions) {
        // Rejet silencieux
        return;
      }

      recentTimes.push(now);
      localStorage.setItem(key, JSON.stringify(recentTimes));
    } catch {
      // Si localStorage est indisponible, ne pas bloquer le formulaire
    }

    setStatus('loading');
    setSubmitError(null);

    const { error } = await supabase.from('contacts').insert({
      name: form.name,
      email: form.email,
      message: form.message,
    });

    if (error) {
      const detail = [error.message, error.hint].filter(Boolean).join(' — ');
      console.error('Supabase contacts insert:', error);
      setSubmitError(detail || 'Erreur inconnue');
      setStatus('error');
      return;
    }

    setForm({ name: '', email: '', message: '' });
    setStatus('success');
    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <section className={styles.section} id="contact-form">
      <div className="container relative z-10">
        <div className={styles.contentWrapper}>
        {/* Info Cards */}
        <motion.div 
          className={styles.cardsGrid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.a href="mailto:contact@ferdjiouaplast.dz" className={styles.card} variants={fadeIn}>
            <div className={styles.iconWrapper}>
              <Mail className={styles.icon} />
            </div>
            <p className={styles.cardTitle}>Email</p>
            <p className={styles.cardDesc}>contact@ferdjiouaplast.dz</p>
            <p className={styles.cardAction}>Nous écrire <span>&rarr;</span></p>
          </motion.a>

          <motion.a href="tel:+21331000000" className={styles.card} variants={fadeIn}>
            <div className={styles.iconWrapper}>
              <Phone className={styles.icon} />
            </div>
            <p className={styles.cardTitle}>Téléphone</p>
            <p className={styles.cardDesc}>+213 31 00 00 00</p>
            <p className={styles.cardAction}>Nous appeler <span>&rarr;</span></p>
          </motion.a>

          <motion.div className={styles.card} variants={fadeIn}>
            <div className={styles.iconWrapper}>
              <MapPin className={styles.icon} />
            </div>
            <p className={styles.cardTitle}>Localisation</p>
            <p className={styles.cardDesc}>Ferdjioua Plastique — Ferdjioua, Mila, Algérie</p>
            <p className={styles.cardAction}>Visitez-nous <span>&rarr;</span></p>
          </motion.div>
        </motion.div>

        {/* Main Grid: Form + Map */}
        <div className={styles.mainGrid}>
          
          {/* Contact Form */}
          <motion.div 
            className={styles.formWrapper}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.formHeader}>
              <h2>Envoyez-nous un Message</h2>
              <p>Remplissez le formulaire ci-dessous et notre équipe vous répondra dans les plus brefs délais.</p>
            </div>

            {status === 'success' ? (
              <motion.div 
                className={styles.successState}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className={styles.successIconWrap}>
                  <CheckCircle2 size={48} className={styles.successIcon} />
                </div>
                <h2>Message envoyé !</h2>
                <p>Merci de nous avoir contactés. Nous vous répondrons sous 24 à 48 heures.</p>
              </motion.div>
            ) : status === 'error' ? (
              <motion.div 
                className={styles.errorState}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <AlertCircle size={48} className={styles.errorIcon} />
                <h2>Une erreur est survenue</h2>
                <p>Veuillez réessayer ultérieurement ou nous contacter par téléphone.</p>
                {submitError ? (
                  <p className={styles.errorDetail} role="status">
                    {submitError}
                  </p>
                ) : null}
                <button
                  type="button"
                  onClick={() => {
                    setSubmitError(null);
                    setStatus('idle');
                  }}
                  className={styles.retryBtn}
                >
                  Réessayer
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                {/* Honeypot anti-spam (ne doit pas être visible) */}
                <input
                  type="text"
                  name="website"
                  autoComplete="off"
                  tabIndex={-1}
                  aria-hidden="true"
                  style={{ display: 'none' }}
                />
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>Nom complet</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    className={styles.input} 
                    placeholder="Jean Dupont" 
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    required 
                    disabled={status === 'loading'}
                  />
                  <div className={styles.inputFocusLine}></div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>Adresse e-mail</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    className={styles.input} 
                    placeholder="jean@entreprise.com" 
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    required 
                    disabled={status === 'loading'}
                  />
                  <div className={styles.inputFocusLine}></div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    className={styles.textarea} 
                    rows={4} 
                    placeholder="Décrivez votre projet ou vos besoins en détail..." 
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    required
                    disabled={status === 'loading'}
                  ></textarea>
                  <div className={styles.inputFocusLine}></div>
                </div>

                <button 
                  type="submit" 
                  className={cn(styles.submitBtn, status === 'loading' && styles.submitBtnLoading)}
                  disabled={status === 'loading'}
                >
                  <span className={styles.submitText}>
                    {status === 'loading' ? 'Envoi en cours...' : 'Envoyer le message'}
                  </span>
                  {status === 'loading' ? (
                    <Loader2 className={cn(styles.submitIcon, styles.spinner)} />
                  ) : (
                    <Send className={styles.submitIcon} size={18} />
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Map Embed */}
          <motion.div 
            className={styles.mapWrapper}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.mapInner}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3211.259772812019!2d5.932038099999999!3d36.40290979999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f3b364e5dc7d43%3A0xa1682e4b2e0896e2!2sSarl%20FPS!5e0!3m2!1sfr!2sdz!4v1774072481773!5m2!1sfr!2sdz" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className={styles.iframe}
                // On ne met volontairement PAS d’attribut `sandbox` : il casse le rendu/les interactions de l’embed Google Maps.
                title="Google Maps"
              ></iframe>
            </div>
            <div className={styles.mapOverlay}></div>
          </motion.div>

        </div>
        </div>
      </div>
      
      {/* Background ambient elements */}
      <div className={styles.bgGlow}></div>
      <div className={styles.bgGlow2}></div>
    </section>
  );
};

export default ContactFormSection;
