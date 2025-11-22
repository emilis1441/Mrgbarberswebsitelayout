import { Star } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { useLanguage } from "../utils/LanguageContext";

export function Testimonials() {
  const { t } = useLanguage();

  return (
    <section className="py-[7px] bg-[rgb(0,0,0)] px-[0px]">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent tracking-widest uppercase mb-4 block text-[32px]">
            {t.testimonials.label}
          </span>
          <h2 className="text-4xl md:text-5xl mb-6 text-white">
            {t.testimonials.title}
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {t.testimonials.reviews.map((testimonial, index) => (
            <Card key={index} className="p-6 border-0 shadow-md hover:shadow-lg transition-shadow bg-black/30 border border-white/10">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              
              {/* Review */}
              <p className="text-white/80 mb-4 leading-relaxed">
                "{testimonial.review}"
              </p>
              
              {/* Name */}
              <p className="text-accent">{testimonial.name}</p>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mx-[0px] my-[-27px] px-[0px] py-[35px]">
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
              {t.testimonials.bookFresha}
            </a>
          </Button>
          <p className="text-white/70 mt-4">
            {t.testimonials.joinText}
          </p>
        </div>
      </div>
    </section>
  );
}
