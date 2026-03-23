import { lazy, Suspense } from 'react';
import { Seo } from '../components/Seo';
import ServicesHeroSection from '../sections/services/ServicesHeroSection';

// Lazy-load below-the-fold sections
const ServiceDetailsSection = lazy(() => import('../sections/services/ServiceDetailsSection'));
const ProcessSection = lazy(() => import('../sections/services/ProcessSection'));
const CtaSection = lazy(() => import('../sections/home/CtaSection'));

const Services = () => {
  return (
    <div>
      <Seo
        path="/services"
        title="Services | Préformes PET, emballage et injection — Ferdjioua Plastique"
        description="Services Ferdjioua Plastique : fabrication de préformes PET, solutions d'emballage plastique, injection sur mesure et processus qualité à Ferdjioua, Mila."
        keywords="préformes PET Algérie, emballage plastique industriel, injection plastique sur mesure, services fabrication plastique, Ferdjioua Plastique Mila"
      />
      <ServicesHeroSection />
      <Suspense fallback={null}>
        <ServiceDetailsSection />
        <ProcessSection />
        <div className="py-24">
          <CtaSection />
        </div>
      </Suspense>
    </div>
  );
};
export default Services;
