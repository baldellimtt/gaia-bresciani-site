import dynamic from 'next/dynamic';
import Hero from '@/components/Hero';

const ServicesBentoGrid = dynamic(() => import('@/components/ServicesBentoGrid'));
const TestimonialsSection = dynamic(() => import('@/components/TestimonialsSection'));
const MethodologySteps = dynamic(() => import('@/components/MethodologySteps'));
const QuoteSection = dynamic(() => import('@/components/QuoteSection'));
const InsightsGrid = dynamic(() => import('@/components/InsightsGrid'));
const LocationCards = dynamic(() => import('@/components/LocationCards'));
const CtaSection = dynamic(() => import('@/components/CtaSection'));

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesBentoGrid />
      <TestimonialsSection />
      <MethodologySteps />
      <QuoteSection />
      <InsightsGrid />
      <LocationCards />
      <CtaSection />
    </>
  );
}
