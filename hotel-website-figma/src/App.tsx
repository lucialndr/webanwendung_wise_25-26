import { Hero } from './components/Hero';
import { WhyUs } from './components/WhyUs';
import { Benefits } from './components/Benefits';
import { Positions } from './components/Positions';
import { Culture } from './components/Culture';
import { ApplicationCTA } from './components/ApplicationCTA';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <WhyUs />
      <Benefits />
      <Positions />
      <Culture />
      <ApplicationCTA />
      <Footer />
      <ScrollToTop />
    </div>
  );
}