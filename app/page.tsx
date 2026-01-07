import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import SocialProof from '@/components/sections/SocialProof';
import Features from '@/components/sections/Features';
import { PricingSection } from '@/components/sections/PricingSection';
import { CTASection } from '@/components/sections/CTASection';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="bg-slate-950">
      <Navbar />
      <HeroSection />
      <div className="py-16 md:py-24">
        <SocialProof />
      </div>
      <div className="py-16 md:py-24">
        <Features />
      </div>
      <div className="py-16 md:py-24">
        <PricingSection />
      </div>
      <div className="py-16 md:py-24">
        <CTASection />
      </div>
      <Footer />
    </main>
  );
}
