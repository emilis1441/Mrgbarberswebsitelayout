import image_585f1c29fa5f6c231a133ac4b48f98df4f824d19 from 'figma:asset/585f1c29fa5f6c231a133ac4b48f98df4f824d19.png';
import { Award, Trophy, Star, Globe } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "../utils/LanguageContext";

export function AboutFounder() {
  const { t, language } = useLanguage();
  
  const achievements = [
    { icon: Trophy, text: t.aboutFounder.achievements[0] },
    { icon: Award, text: t.aboutFounder.achievements[1] },
    { icon: Star, text: t.aboutFounder.achievements[2] },
    { icon: Globe, text: t.aboutFounder.achievements[3] },
  ];

  const founderAlt = language === "lt"
    ? "Gediminas Kuica - Meistras kirpėjas ir Mr.G Barbers įkūrėjas"
    : "Gediminas Kuica - Master Barber and Mr.G Barbers Founder";

  return (
    <section id="about" className="py-24 bg-black text-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[3/4] relative overflow-hidden rounded-sm">
              <ImageWithFallback
                src={image_585f1c29fa5f6c231a133ac4b48f98df4f824d19}
                alt={founderAlt}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent text-black px-8 py-4 rounded-sm">
              <p className="tracking-wider">{t.aboutFounder.badge}</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="mb-6">
              <span className="text-accent tracking-widest uppercase text-[20px]">{t.aboutFounder.label}</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl mb-6">
              {t.aboutFounder.title}
            </h2>
            
            <p className="text-lg text-white/80 mb-6 leading-relaxed">
              {t.aboutFounder.paragraph1}
            </p>
            
            <p className="text-lg text-white/80 mb-10 leading-relaxed">
              {t.aboutFounder.paragraph2}
            </p>

            {/* Achievements */}
            <div className="space-y-4">
              <h3 className="text-xl mb-6 text-accent">{t.aboutFounder.achievementsTitle}</h3>
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-accent/20 p-2 rounded-sm mt-1">
                    <achievement.icon className="w-5 h-5 text-accent" />
                  </div>
                  <p className="text-white/70 flex-1">{achievement.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}