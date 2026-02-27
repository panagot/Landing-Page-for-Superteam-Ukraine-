import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { MissionSection } from '@/components/MissionSection';
import { WhatWeDoSection } from '@/components/WhatWeDoSection';
import { MetricsSection } from '@/components/MetricsSection';
import { EventsSection } from '@/components/EventsSection';
import { TeamSection } from '@/components/TeamSection';
import { GetInvolvedSection } from '@/components/GetInvolvedSection';
import { PartnersSection } from '@/components/PartnersSection';
import { FAQSection } from '@/components/FAQSection';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <MissionSection />
        <WhatWeDoSection />
        <MetricsSection />
        <EventsSection />
        <TeamSection />
        <PartnersSection />
        <GetInvolvedSection />
        <FAQSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
