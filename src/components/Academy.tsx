import { GraduationCap, Calendar, Users, Award, Check } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { useLanguage } from "../utils/LanguageContext";

export function Academy() {
  const { t } = useLanguage();

  const offeringIcons = [GraduationCap, Calendar, Users, Award];

  return (
    <section id="academy" className="py-[25px] bg-black px-[0px]">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent tracking-widest uppercase mb-4 block text-[32px]">
            {t.academy.label}
          </span>
          <h2 className="text-4xl md:text-5xl mb-6 text-white">
            {t.academy.title}
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            {t.academy.subtitle}
          </p>
        </div>

        {/* What We Offer */}
        <div className="mb-20">
          <h3 className="text-3xl text-center mb-12 text-white">
            {t.academy.whatWeOffer}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.academy.offers.map((offer, index) => {
              const Icon = offeringIcons[index];
              return (
                <div key={index} className="text-center">
                  <div className="bg-accent/20 w-16 h-16 rounded-sm flex items-center justify-center mx-auto mb-4 border border-accent/50">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="text-xl mb-3 text-white">{offer.title}</h4>
                  <p className="text-white/70">{offer.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Training Packages */}
        <div className="mb-20">
          <h3 className="text-3xl text-center mb-12 text-white text-[48px]">
            {t.academy.packagesTitle}
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {t.academy.packages.map((tier, index) => (
              <Card 
                key={index}
                className={`relative p-8 border-2 transition-all ${
                  tier.badge ? "border-accent bg-primary/30 shadow-2xl scale-105" : "border-primary/50 bg-primary/20"
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-black px-4 py-1 rounded-full text-sm uppercase tracking-wider">
                    {tier.badge}
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h4 className="text-2xl mb-2 text-white font-bold">{tier.name}</h4>
                  <p className="text-white/70 text-sm mb-4">{tier.tagline}</p>
                  <div className="text-4xl text-accent font-bold">{tier.price.split(' /')[0]}</div>
                  <div className="text-white/60 mx-[0px] my-[10px]">{tier.price.split(' / ')[1]}</div>
                </div>

                <div className="space-y-3 mb-[-3px] mt-[-38px] mr-[0px] ml-[0px]">
                  {tier.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-white/80 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className={`w-full ${
                    tier.badge
                      ? "bg-accent hover:bg-accent/90 text-black"
                      : "bg-primary hover:bg-primary/80 text-white"
                  }`}
                  asChild
                >
                  <a
                    href="https://form.typeform.com/to/Y4IUErWk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {tier.cta}
                  </a>
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Services */}
        <div className="mt-24">
          <h3 className="text-3xl text-center mb-4 text-white">
            {t.academy.additionalTitle}
          </h3>
          <p className="text-center text-white/60 mb-12 max-w-2xl mx-auto">
            Specialūs mokymai grupėms ir ilgalaikės programos pradedantiesiems
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {t.academy.additionalServices.map((service, index) => (
              <Card 
                key={index} 
                className="p-6 border border-white/20 bg-white/5 hover:bg-white/10 transition-all hover:border-white/30"
              >
                <div className="mb-6">
                  <h4 className="text-xl mb-2 text-white/90 font-bold">{service.name}</h4>
                  <p className="text-white/50 text-sm mb-4">{service.tagline}</p>
                  <div className="text-2xl text-white/90 mb-1 font-bold">{service.price.split(' /')[0]}</div>
                  <div className="text-white/50 text-xs">{service.price.split(' / ')[1]}</div>
                </div>

                <div className="space-y-2.5 mb-[-5px] mt-[-31px] mr-[0px] ml-[0px]">
                  {service.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-white/60 flex-shrink-0 mt-0.5" />
                      <span className="text-white/70 text-xs leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30"
                  asChild
                >
                  <a
                    href="https://form.typeform.com/to/Y4IUErWk"
                    target="__blank"
                    rel="noopener noreferrer"
                  >
                    {service.cta}
                  </a>
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl mb-4 text-white">{t.academy.joinAcademy}</h3>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            {t.academy.contactInfo}
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-black px-8 py-6"
            asChild
          >
            <a
              href="https://form.typeform.com/to/Y4IUErWk"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.academy.joinAcademy}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}