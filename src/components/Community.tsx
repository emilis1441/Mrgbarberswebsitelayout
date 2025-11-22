import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "../utils/LanguageContext";

export function Community() {
  const { t } = useLanguage();

  const eventImages = [
    "https://images.unsplash.com/photo-1759142449398-89357aa1bb36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXJzaG9wJTIwZXZlbnR8ZW58MXx8fHwxNzYzMzkzNDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1759142016096-a9d1a5ebcc09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBiYXJiZXIlMjB0ZWFtfGVufDF8fHx8MTc2MzM5MzQ0OXww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1761931403671-d020a14928d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBjdXR0aW5nJTIwaGFpciUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjMzODk4MTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1654097801176-cb1795fd0c5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zJTIwaGFpcmN1dCUyMHN0eWxpbmd8ZW58MXx8fHwxNzYzMzkzNDQ5fDA&ixlib=rb-4.1.0&q=80&w=1080"
  ];

  return (
    <section id="community" className="py-24 bg-black">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="">
            <span className="text-accent tracking-widest uppercase block text-[20px]">
              {t.community.label}
            </span>
            <h2 className="text-4xl md:text-5xl mb-6 text-white">
              {t.community.title}
            </h2>
            <p className="text-lg text-white/80 mb-6 leading-relaxed">
              {t.community.paragraph1}
            </p>
            <p className="text-lg text-white/80 mb-6 leading-relaxed">
              {t.community.paragraph2}
            </p>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              {t.community.paragraph3}
            </p>
            
            <div className="grid grid-cols-3 gap-4 text-center">
              {t.community.stats.map((stat, index) => (
                <div key={index} className="border border-accent/30 p-4 rounded-sm bg-primary/30">
                  <div className="text-3xl text-accent mb-2">{stat.value}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            {eventImages.map((image, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-sm ${
                  index === 0 ? "col-span-2 aspect-[16/9]" : "aspect-square"
                }`}
              >
                <ImageWithFallback
                  src={image}
                  alt={`Community event ${index + 1}`}
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
