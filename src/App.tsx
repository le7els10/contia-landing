import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Problem from './components/Problem/Problem';
import Services from './components/Services/Services';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Pricing from './components/Pricing/Pricing';
import Comparativa from './components/Comparativa/Comparativa';
import CtaFinal from './components/CtaFinal/CtaFinal';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Problem />
        <Services />
        <HowItWorks />
        <Comparativa />
        <Pricing />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}

export default App;
