import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import SocialProof from '@/components/sections/SocialProof';
import Features from '@/components/sections/Features';
import { PricingSection } from '@/components/sections/PricingSection';

export default function Home() {
  return (
    <main className="bg-slate-950">
      <Navbar />
      <HeroSection />
      <div className="py-12">
        <SocialProof />
      </div>
      <div className="py-12">
        <Features />
      </div>
      <div className="py-24">
        <PricingSection />
      </div>
    </main>
  );
}
