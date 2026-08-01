import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Rooms', path: '/rooms' },
  { label: 'Restaurant', path: '/restaurant' },
  { label: 'Menu', path: '/menu' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Facilities', path: '/facilities' },
  { label: 'Nearby', path: '/nearby' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
        }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col group">
            <span className={`text-2xl md:text-3xl font-serif font-bold tracking-tight transition-colors ${isScrolled ? 'text-primary' : 'text-primary lg:text-white drop-shadow-md'
              }`}>
              Hotel Jatashankar
            </span>
            <span className={`text-xs md:text-sm tracking-widest uppercase transition-colors ${isScrolled ? 'text-secondary' : 'text-secondary lg:text-gold-200 drop-shadow-md'
              }`}>
              Premium Stay & Dining
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm font-medium transition-colors hover:text-secondary ${location === link.path
                  ? 'text-secondary'
                  : isScrolled ? 'text-foreground/80' : 'text-foreground/80 lg:text-white/90 drop-shadow-sm'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+917566199040"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${isScrolled ? 'text-foreground' : 'text-foreground lg:text-white drop-shadow-sm'
                }`}
            >
              <Phone className="w-4 h-4" />
              <span>+91 75661 99040</span>
            </a>
            <a
              href="https://wa.me/917566199040"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-6 py-2.5 rounded-md text-sm font-semibold transition-all shadow-sm hover:shadow"
            >
              WhatsApp Us
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`lg:hidden p-2 -mr-2 transition-colors ${isScrolled ? 'text-foreground' : 'text-primary'
              }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] bg-background z-40 flex flex-col p-6 overflow-y-auto animate-in slide-in-from-top-2 lg:hidden">
          <nav id="mobile-navigation" aria-label="Mobile navigation" className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-lg font-medium py-2 border-b border-border/50 ${location === link.path ? 'text-secondary' : 'text-foreground'
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/917566199040"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground text-center py-3 rounded-md font-semibold mt-2 shadow-sm"
            >
              WhatsApp Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
