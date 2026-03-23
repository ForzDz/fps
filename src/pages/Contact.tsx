import { lazy, Suspense } from 'react';
import { Seo } from '../components/Seo';
import ContactHeroSection from '../sections/contact/ContactHeroSection';

// Lazy-load the form section (contains heavy iframe)
const ContactFormSection = lazy(() => import('../sections/contact/ContactFormSection'));

const Contact = () => {
  return (
    <div>
      <Seo
        path="/contact"
        title="Contact | Ferdjioua Plastique — Devis et informations"
        description="Contactez Ferdjioua Plastique à Ferdjioua, Mila : devis, préformes PET, emballage et injection. Téléphone +213 31 00 00 00, email contact@ferdjiouaplast.dz."
        keywords="contact Ferdjioua Plastique, devis fabrication plastique, Ferdjioua Mila Algérie, email contact@ferdjiouaplast.dz"
      />
      <ContactHeroSection />
      <Suspense fallback={null}>
        <ContactFormSection />
      </Suspense>
    </div>
  );
};
export default Contact;
