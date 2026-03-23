import { lazy, Suspense } from 'react';
import { Seo } from '../components/Seo';
import AboutHeroSection from '../sections/about/AboutHeroSection';

// Lazy-load below-the-fold sections
const OurStorySection = lazy(() => import('../sections/about/OurStorySection'));
const ValuesSection = lazy(() => import('../sections/about/ValuesSection'));
const FacilitySection = lazy(() => import('../sections/about/FacilitySection'));
const TeamSection = lazy(() => import('../sections/about/TeamSection'));
const CertificationsSection = lazy(() => import('../sections/about/CertificationsSection'));
const CtaSection = lazy(() => import('../sections/home/CtaSection'));

const About = () => {
  return (
    <div>
      <Seo
        path="/about"
        title="À propos | Ferdjioua Plastique — Histoire, valeurs et équipe"
        description="Découvrez Ferdjioua Plastique : histoire industrielle, valeurs, installations à Ferdjioua (Mila) et engagement qualité depuis 1998."
        keywords="à propos Ferdjioua Plastique, entreprise plastique Algérie, valeurs industrielles, équipe fabrication plastique, Mila Ferdjioua"
      />
      <AboutHeroSection />
      <Suspense fallback={null}>
        <OurStorySection />
        <ValuesSection />
        <FacilitySection />
        <TeamSection />
        <CertificationsSection />
        <div className="py-24">
          {/* Reusing Home CTA block style */}
          <CtaSection />
        </div>
      </Suspense>
    </div>
  );
};

export default About;
