import { lazy, Suspense } from 'react';
import { Seo } from '../components/Seo';
import HeroSection from '../sections/home/HeroSection';

// Lazy-load below-the-fold sections
const StatsSection = lazy(() => import('../sections/home/StatsSection'));
const ServicesSection = lazy(() => import('../sections/home/ServicesSection'));
const WhyUsSection = lazy(() => import('../sections/home/WhyUsSection'));
const TestimonialSection = lazy(() => import('../sections/home/TestimonialSection'));
const CtaSection = lazy(() => import('../sections/home/CtaSection'));

const Home = () => {
  return (
    <div>
      <Seo
        path="/"
        title="Ferdjioua Plastique | Fabrication plastique et services — Ferdjioua, Mila"
        description="Ferdjioua Plastique : préformes PET, emballage industriel et injection plastique sur mesure à Ferdjioua, Mila, Algérie. Qualité certifiée depuis 1998."
        keywords="Ferdjioua Plastique, fabrication plastique Algérie, préformes PET, injection plastique Mila, emballage industriel, Sarl Ferdjioua, Ferdjioua Mila, plastique industrielle"
      />
      <HeroSection />
      <Suspense fallback={null}>
        <StatsSection />
        <ServicesSection />
        <WhyUsSection />
        <TestimonialSection />
        <CtaSection />
      </Suspense>
    </div>
  );
};

export default Home;
