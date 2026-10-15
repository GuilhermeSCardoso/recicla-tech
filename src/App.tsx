import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { RecyclingGuide } from '@/components/RecyclingGuide';
import { ResponsibleDisposal } from '@/components/ResponsibleDisposal';
import { SustainableEconomy } from '@/components/SustainableEconomy';
import { EnvironmentHealth } from '@/components/EnvironmentHealth';
import { Quiz } from '@/components/Quiz';
import { About } from '@/components/About';
import { Footer } from '@/components/Footer';

function App() {
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
