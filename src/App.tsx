import { Hero } from "./components/Hero";
import { Header } from "./components/Header";
import { AboutFounder } from "./components/AboutFounder";
import { Barbershop } from "./components/Barbershop";
import { Team } from "./components/Team";
import { Academy } from "./components/Academy";
import { Community } from "./components/Community";
import { Gallery } from "./components/Gallery";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { LanguageProvider } from "./utils/LanguageContext";
import { SEO } from "./components/SEO";

export default function App() {
  return (
    <LanguageProvider>
      <SEO />
      <div className="min-h-screen">
        <Header />
        <Hero />
        <AboutFounder />
        <Barbershop />
        <Team />
        <Academy />
        <Community />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Footer />
      </div>
    </LanguageProvider>
  );
}