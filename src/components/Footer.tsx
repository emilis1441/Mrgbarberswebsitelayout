import { MapPin, Instagram, Facebook, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "../utils/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-secondary text-white py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & About */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl mb-4">
              Mr.G Barbers<br />& Academy
            </h3>
            <p className="text-white/70 mb-6 max-w-md">
              {t.footer.description}
            </p>
            <div className="h-1 w-16 bg-accent rounded mb-6" />
            <p className="text-sm text-white/70">
              {t.footer.founder}
            </p>
          </div>

          {/* Visit Us */}
          <div>
            <h4 className="text-xl mb-4">{t.footer.visitUs}</h4>
            <div className="flex items-start gap-3 mb-4">
              <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
              <div className="text-white/70">
                <p>Žalgirio g. 131, Vilnius, 08217 Vilniaus m. sav.</p>
                <p>{t.footer.location[1]}</p>
              </div>
            </div>
            <p className="text-white/70 mb-2">{t.footer.hours[0]}</p>
            <p className="text-white/70 mb-2">{t.footer.hours[1]}</p>
            <p className="text-white/70">{t.footer.hours[2]}</p>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xl mb-4">{t.footer.connect}</h4>
            <div className="space-y-4">
              <a
                href="https://www.instagram.com/mrg.barbers"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-accent transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span>@mrg.barbers</span>
              </a>
              <a
                href="https://www.facebook.com/mrgbarbers"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-accent transition-colors"
              >
                <Facebook className="w-5 h-5" />
                <span>/mrgbarbers</span>
              </a>
              <a
                href="mailto:info@mrgbarbers.lt"
                className="flex items-center gap-3 text-white/70 hover:text-accent transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>info@mrgbarbers.lt</span>
              </a>
            </div>
          </div>
        </div>

        {/* Big CTA */}
        <div className="border-t border-white/10 pt-12 text-center">
          <h3 className="text-3xl mb-6">{t.footer.readyTitle}</h3>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-black px-12 py-6"
            asChild
          >
            <a
              href="https://www.fresha.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.footer.bookFresha}
            </a>
          </Button>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/70">
          <p>
            © {new Date().getFullYear()} {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}