import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "../utils/LanguageContext";

export function Hero() {
  const { t, language } = useLanguage();
  
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  const heroAlt = language === "lt" 
    ? "Profesionalus kirpėjas darbe - Mr.G Barbers Vilnius" 
    : "Professional barber at work - Mr.G Barbers Vilnius";

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1761931403671-d020a14928d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBjdXR0aW5nJTIwaGFpciUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjMzODk4MTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt={heroAlt}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <div className="mb-2 inline-block border-b border-accent px-4 pb-2">
          <span className="text-accent tracking-widest uppercase text-[20px]">{t.hero.established}</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 tracking-tight text-[rgb(255,255,255)]">
          {t.hero.title}
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 text-white/80 max-w-2xl not-italic">
          {t.hero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6"
            asChild
          >
            <a
              href="https://www.fresha.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.hero.bookFresha}
            </a>
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="border-white text-[rgb(0,0,0)] hover:bg-white hover:text-black px-8 py-6 bg-[rgb(255,255,255)]"
            onClick={scrollToAbout}
          >
            {t.hero.meetMrG}
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-12 w-[2px] bg-accent/50" />
      </div>
    </section>
  );
}