import image_b24bcfa9f2a43d6bbc14d636b5ceb7d6b295b8c1 from 'figma:asset/b24bcfa9f2a43d6bbc14d636b5ceb7d6b295b8c1.png';
import { Scissors, Target, Users, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "../utils/LanguageContext";

export function Barbershop() {
  const { t } = useLanguage();

  return (
    <section id="barbershop" className="py-[7px] bg-[rgb(0,0,0)] px-[0px]">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent tracking-widest uppercase mb-4 block text-[32px]">
            {t.barbershop.label}
          </span>
          <h2 className="text-4xl md:text-5xl mb-6 text-[rgb(255,255,255)]">
            {t.barbershop.title}
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            {t.barbershop.subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.barbershop.features.map((feature, index) => {
            const icons = [Target, Scissors, Sparkles, Users];
            const Icon = icons[index];
            return (
              <div key={index} className="bg-primary/20 p-8 rounded-sm hover:bg-primary/30 transition-all border border-primary/40 hover:border-accent/50 backdrop-blur-sm">
                <div className="bg-accent/30 w-14 h-14 rounded-sm flex items-center justify-center mb-6 border border-accent/50">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl mb-3 text-white">{feature.title}</h3>
                <p className="text-white/80">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Images Grid */}
        <div className="flex justify-center mb-12 mt-16">
          <div className="w-full max-w-4xl aspect-[16/10] relative overflow-hidden rounded-sm">
            <img
              src={image_b24bcfa9f2a43d6bbc14d636b5ceb7d6b295b8c1}
              alt="Mr.G Barbers Team"
              className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-black px-8 py-6"
            asChild
          >
            <a
              href="https://www.fresha.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.barbershop.bookFresha}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}