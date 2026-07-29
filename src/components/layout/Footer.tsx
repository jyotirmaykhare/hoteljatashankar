import React from 'react';
import { Link } from 'wouter';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8 border-t-4 border-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div>
              <h2 className="text-2xl font-serif text-secondary mb-1">Hotel Jatashankar</h2>
              <p className="text-primary-foreground/80 text-sm">Comfortable • Premium • Trusted</p>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mt-4">
              Your home away from home in Chhatarpur. Experience refined Indian hospitality, premium AC rooms, and a renowned pure vegetarian family restaurant.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-secondary hover:bg-secondary hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-secondary hover:bg-secondary hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-secondary hover:bg-secondary hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif text-secondary mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-0.5 after:bg-secondary">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              <li><Link href="/about" className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm flex items-center gap-2"><span className="text-secondary text-xs">◆</span> About Us</Link></li>
              <li><Link href="/rooms" className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm flex items-center gap-2"><span className="text-secondary text-xs">◆</span> Our Rooms</Link></li>
              <li><Link href="/restaurant" className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm flex items-center gap-2"><span className="text-secondary text-xs">◆</span> Restaurant</Link></li>
              <li><Link href="/menu" className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm flex items-center gap-2"><span className="text-secondary text-xs">◆</span> Food Menu</Link></li>
              <li><Link href="/facilities" className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm flex items-center gap-2"><span className="text-secondary text-xs">◆</span> Facilities</Link></li>
              <li><Link href="/gallery" className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm flex items-center gap-2"><span className="text-secondary text-xs">◆</span> Gallery</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-serif text-secondary mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-0.5 after:bg-secondary">Contact Us</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3 text-primary-foreground/80 text-sm">
                <MapPin className="w-5 h-5 text-secondary shrink-0" />
                <span>Near Main Bus Stand, Chhatarpur, Madhya Pradesh 471001, India</span>
              </li>
              <li className="flex gap-3 text-primary-foreground/80 text-sm items-center">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <a href="tel:+919999999999" className="hover:text-secondary transition-colors">+91 99999 99999</a>
              </li>
              <li className="flex gap-3 text-primary-foreground/80 text-sm items-center">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <a href="mailto:info@hoteljatashankar.com" className="hover:text-secondary transition-colors">info@hoteljatashankar.com</a>
              </li>
              <li className="flex gap-3 text-primary-foreground/80 text-sm">
                <Clock className="w-5 h-5 text-secondary shrink-0" />
                <div>
                  <p>Reception: 24×7</p>
                  <p className="mt-1">Restaurant: 7:00 AM - 11:00 PM</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h3 className="text-lg font-serif text-secondary mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-0.5 after:bg-secondary">Contact Us</h3>
            <p className="text-primary-foreground/80 text-sm mb-6">
              Reach out via WhatsApp or call us directly for reservations and inquiries.
            </p>
            <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="inline-block w-full text-center bg-secondary text-primary font-semibold py-3 px-6 rounded-md hover:bg-secondary/90 transition-colors shadow-sm">
              WhatsApp Us
            </a>
            
            <div className="mt-8">
              <h4 className="text-sm font-semibold mb-3">Newsletter</h4>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-primary-foreground/10 border border-primary-foreground/20 rounded-md px-3 py-2 text-sm w-full focus:outline-none focus:border-secondary text-white"
                />
                <button type="submit" className="bg-secondary text-primary px-4 py-2 rounded-md text-sm font-medium hover:bg-secondary/90 transition-colors">
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Hotel Jatashankar, Chhatarpur. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-primary-foreground/60">
            <Link href="/privacy" className="hover:text-secondary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-secondary transition-colors">Terms & Conditions</Link>
            <Link href="/cancellation" className="hover:text-secondary transition-colors">Cancellation Policy</Link>
            <Link href="/sitemap" className="hover:text-secondary transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
