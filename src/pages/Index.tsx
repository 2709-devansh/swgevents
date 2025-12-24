import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import EventsSection from '@/components/EventsSection';
import AppPromoSection from '@/components/AppPromoSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <EventsSection />
      <AppPromoSection />
    </div>
  );
};

export default Index;
