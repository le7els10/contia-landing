import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Problem from './components/Problem/Problem';
import Services from './components/Services/Services';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Pricing from './components/Pricing/Pricing';
import CtaFinal from './components/CtaFinal/CtaFinal';
import Footer from './components/Footer/Footer';
import ContactModal from './components/ContactModal/ContactModal';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <Navbar onOpenModal={openModal} />
      <main id="main">
        <Hero onOpenModal={openModal} />
        <Problem />
        <Services />
        <HowItWorks />
        <Pricing onOpenModal={openModal} />
        <CtaFinal onOpenModal={openModal} />
      </main>
      <Footer />
      <ContactModal isOpen={modalOpen} onClose={closeModal} />
    </>
  );
}

export default App;
