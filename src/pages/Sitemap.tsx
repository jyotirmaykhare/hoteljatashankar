import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { useSEO } from '@/lib/seo';

const LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Rooms & Suites', path: '/rooms' },
  { name: 'Book Now', path: '/book' },
  { name: 'Restaurant', path: '/restaurant' },
  { name: 'Food Menu', path: '/menu' },
  { name: 'Photo Gallery', path: '/gallery' },
  { name: 'About Us', path: '/about' },
  { name: 'Facilities', path: '/facilities' },
  { name: 'Nearby Attractions', path: '/nearby' },
  { name: 'Contact Us', path: '/contact' },
  { name: 'Frequently Asked Questions', path: '/faq' },
  { name: 'Privacy Policy', path: '/privacy' },
  { name: 'Terms & Conditions', path: '/terms' },
  { name: 'Cancellation Policy', path: '/cancellation' },
];

export default function Sitemap() {
  useSEO({
    title: 'Sitemap',
    description: 'Browse a full list of pages on the Hotel Jatashankar website.',
    path: '/sitemap',
    noindex: true,
  });

  return (
    <div className="w-full min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card rounded-2xl shadow-sm border border-border p-8 md:p-12"
        >
          <div className="border-b border-border pb-6 mb-8 text-center">
            <h1 className="text-3xl md:text-5xl font-serif text-primary mb-3">Sitemap</h1>
            <p className="text-muted-foreground">Complete index of Hotel Jatashankar website.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {LINKS.map((link) => (
              <Link 
                key={link.path} 
                href={link.path}
                className="flex items-center gap-2 p-4 bg-background border border-border rounded-lg hover:border-secondary hover:text-secondary transition-colors font-medium text-foreground"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
