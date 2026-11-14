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
    const trackPageView = () => {
      const gtag = (window as any).gtag;

      if (typeof gtag === 'function') {
        gtag('event', 'page_view', {
          page_title: document.title,
          page_location: window.location.href,
          page_path: window.location.pathname + window.location.search + window.location.hash
        });
      }
    };

    const onHashChange = () => {
      setRoute(window.location.hash);
      trackPageView();
    };

    // Registra o acesso inicial
    trackPageView();

    // Registra as navegações internas
    window.addEventListener('hashchange', onHashChange);

    return () => {
      window.removeEventListener('hashchange', onHashChange);
    };
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
