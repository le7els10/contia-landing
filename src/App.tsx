import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Problem from './components/Problem/Problem';
import Services from './components/Services/Services';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Pricing from './components/Pricing/Pricing';
import Comparativa from './components/Comparativa/Comparativa';
import CtaFinal from './components/CtaFinal/CtaFinal';
import Footer from './components/Footer/Footer';
import ContactModal from './components/ContactModal/ContactModal';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);

  return (
    <>
      <Navbar />
      <main id="main">
        <Hero onOpenContact={openContact} />
        <Problem />
        <Services />
        <HowItWorks />
        <Comparativa />
        <Pricing />
        <CtaFinal onOpenContact={openContact} />
      </main>
      <Footer />
      <WhatsAppButton />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
}

export default App;
