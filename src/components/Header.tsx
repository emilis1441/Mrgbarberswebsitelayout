import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import logo from "figma:asset/bd9b5f00b942f0e3fe340b8f60604447d825fa27.png";
import { useLanguage } from "../utils/LanguageContext";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: t.header.about },
    { href: "#barbershop", label: t.header.barbershop },
    { href: "#team", label: t.header.team },
    { href: "#academy", label: t.header.academy },
    { href: "#community", label: t.header.community },
    { href: "#gallery", label: t.header.gallery },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'lt' : 'en');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between h-20 bg-transparent">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <img 
              src={logo} 
              alt="Mr.G Barbers & Academy" 
              className="h-16 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`tracking-wide hover:text-primary transition-colors ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Language Toggle & CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-1 px-2 py-1.5 rounded-sm hover:bg-white/10 transition-colors ${
                isScrolled ? "text-black" : "text-white"
              }`}
              aria-label="Toggle language"
              title={language === 'en' ? 'Switch to Lithuanian' : 'Switch to English'}
            >
              <span className="text-2xl leading-none">{language === 'en' ? '🇬🇧' : '🇱🇹'}</span>
            </button>

            <Button
              size="sm"
              className="bg-accent hover:bg-accent/90 text-black"
              asChild
            >
              <a
                href="https://www.fresha.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.header.bookFresha}
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button & Language Toggle */}
          <div className="lg:hidden flex items-center gap-3">
            {/* Mobile Language Toggle */}
            <button
              onClick={toggleLanguage}
              className={`flex items-center p-1.5 rounded-sm ${
                isScrolled ? "text-black" : "text-white"
              }`}
              aria-label="Toggle language"
              title={language === 'en' ? 'Switch to Lithuanian' : 'Switch to English'}
            >
              <span className="text-2xl leading-none">{language === 'en' ? '🇬🇧' : '🇱🇹'}</span>
            </button>

            <button
              className={`p-2 ${isScrolled ? "text-black" : "text-white"}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-6 bg-white border-t border-border">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-black hover:text-primary transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button
                size="sm"
                className="bg-accent hover:bg-accent/90 text-black w-full mt-2"
                asChild
              >
                <a
                  href="https://www.fresha.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t.header.bookFresha}
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}