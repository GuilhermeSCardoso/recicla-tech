import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { RecyclingGuide } from '@/components/RecyclingGuide';
import { ResponsibleDisposal } from '@/components/ResponsibleDisposal';
import { SustainableEconomy } from '@/components/SustainableEconomy';
import { EnvironmentHealth } from '@/components/EnvironmentHealth';
import { Quiz } from '@/components/Quiz';
import { About } from '@/components/About';
import { Footer } from '@/components/Footer';
import { QRCodePage } from '@/components/QRCodePage';

function App() {
  const [route, setRoute] = useState<string>(typeof window !== 'undefined' ? window.location.hash : '');

  useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // Rota especial: página apenas com o QR Code (para imprimir / screenshot)
  if (route === '#qrcode') {
    return <QRCodePage />;
  }

  return (
    <div className="min-h-screen bg-beige-50">
      <Header />
      <main>
        <Hero />
        <RecyclingGuide />
        <ResponsibleDisposal />
        <SustainableEconomy />
        <EnvironmentHealth />
        <Quiz />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
