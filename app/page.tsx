import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';

export default function Home() {
  return (
    <main className="bg-slate-950">
      <Navbar />
      <HeroSection />
    </main>
  );
}
