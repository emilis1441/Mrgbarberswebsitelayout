import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "../utils/LanguageContext";

export function Gallery() {
  const { t } = useLanguage();

  const mockInstagramPosts = [
    "https://images.unsplash.com/photo-1647220419119-316822d9d053?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXN0ZXIlMjBiYXJiZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjMzODk4MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1761931403671-d020a14928d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBjdXR0aW5nJTIwaGFpciUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjMzODk4MTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1654097801176-cb1795fd0c5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zJTIwaGFpcmN1dCUyMHN0eWxpbmd8ZW58MXx8fHwxNzYzMzkzNDQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1599447068894-089fabc9876c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFyZCUyMGdyb29taW5nfGVufDF8fHx8MTc2MzM2OTY3NXww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1759142449398-89357aa1bb36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXJzaG9wJTIwZXZlbnR8ZW58MXx8fHwxNzYzMzkzNDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1759142016096-a9d1a5ebcc09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBiYXJiZXIlMjB0ZWFtfGVufDF8fHx8MTc2MzM5MzQ0OXww&ixlib=rb-4.1.0&q=80&w=1080",
  ];

  return (
    <section id="gallery" className="py-[6px] bg-secondary px-[0px]">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent tracking-widest uppercase mb-4 block text-[32px]">
            {t.gallery.label}
          </span>
          <h2 className="text-4xl md:text-5xl mb-6 text-white">
            {t.gallery.title}
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            {t.gallery.subtitle}
          </p>
          <a
            href="https://www.instagram.com/mrg.barbers"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:underline"
          >
            {t.gallery.followCta}
          </a>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {mockInstagramPosts.map((image, index) => (
            <div
              key={index}
              className="aspect-square relative overflow-hidden rounded-sm hover:opacity-90 transition-opacity cursor-pointer"
            >
              <ImageWithFallback
                src={image}
                alt={`Instagram post ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-white/50 text-sm">
          {t.gallery.note}
        </p>
      </div>
    </section>
  );
}
