import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import FloatingCTAs from '@/components/ui/FloatingCTAs';

const CATEGORIES = ['All', 'Exterior & Lobby', 'Rooms', 'Restaurant & Food', 'Facilities'];

const IMAGES = [
  { id: 1, src: '/gallery-exterior-1.jpg', fallback: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'Exterior & Lobby', title: 'Hotel Exterior View' },
  { id: 2, src: '/gallery-lobby-1.jpg', fallback: 'https://images.unsplash.com/photo-1582719478250-c89404bb2a15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'Exterior & Lobby', title: 'Elegant Reception Area' },
  { id: 3, src: '/gallery-lobby-2.jpg', fallback: 'https://images.unsplash.com/photo-1583416750470-965b2707b355?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'Exterior & Lobby', title: 'Comfortable Lobby Seating' },
  { id: 4, src: '/room-standard.jpg', fallback: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'Rooms', title: 'Standard AC Room' },
  { id: 5, src: '/room-deluxe.jpg', fallback: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'Rooms', title: 'Deluxe AC Room' },
  { id: 6, src: '/room-executive.jpg', fallback: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'Rooms', title: 'Executive Suite' },
  { id: 7, src: '/room-family.jpg', fallback: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'Rooms', title: 'Spacious Family Room' },
  { id: 8, src: '/gallery-restaurant-1.jpg', fallback: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'Restaurant & Food', title: 'Family Restaurant Interior' },
  { id: 9, src: '/dish-thali.jpg', fallback: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'Restaurant & Food', title: 'Premium Maharaja Thali' },
  { id: 10, src: '/dish-paneer.jpg', fallback: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'Restaurant & Food', title: 'Paneer Butter Masala' },
  { id: 11, src: '/dish-biryani.jpg', fallback: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'Restaurant & Food', title: 'Veg Biryani Special' },
  { id: 12, src: '/dish-dal.jpg', fallback: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'Restaurant & Food', title: 'Dal Makhani' },
  { id: 13, src: '/gallery-facilities-1.jpg', fallback: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'Facilities', title: 'Elegant Corridors' },
  { id: 14, src: '/gallery-room-1.jpg', fallback: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'Facilities', title: 'Comfortable Common Areas' },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = IMAGES.filter(img => 
    activeCategory === 'All' || img.category === activeCategory
  );

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <div className="w-full min-h-screen bg-background pt-24 pb-20">
      
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif mb-4">Photo Gallery</h1>
            <p className="max-w-2xl mx-auto text-primary-foreground/80 text-lg">
              Take a visual tour of Hotel Jatashankar's premium facilities, luxurious rooms, and appetizing culinary offerings.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === category 
                  ? 'bg-secondary text-primary font-bold shadow-md scale-105' 
                  : 'bg-card text-muted-foreground border border-border hover:border-secondary hover:text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={image.id}
                className="group relative aspect-square overflow-hidden rounded-xl bg-muted cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <img 
                  src={image.src} 
                  alt={image.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => { (e.target as HTMLImageElement).src = image.fallback; }}
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                  <ZoomIn className="w-8 h-8 text-white mb-2 transform scale-50 group-hover:scale-100 transition-transform duration-300 delay-100" />
                  <h3 className="text-white font-medium text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">{image.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12"
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              onClick={closeLightbox}
            >
              <X className="w-8 h-8" />
            </button>
            
            <div className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center" onClick={e => e.stopPropagation()}>
              <img 
                src={filteredImages[lightboxIndex].src} 
                alt={filteredImages[lightboxIndex].title} 
                className="max-w-full max-h-[80vh] object-contain rounded-md shadow-2xl"
                onError={(e) => { (e.target as HTMLImageElement).src = filteredImages[lightboxIndex].fallback; }}
              />
              <p className="text-white/90 text-center mt-4 font-serif text-lg">
                {filteredImages[lightboxIndex].title}
              </p>
              
              <button 
                className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-2 text-4xl"
                onClick={prevImage}
              >
                &#8249;
              </button>
              <button 
                className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-2 text-4xl"
                onClick={nextImage}
              >
                &#8250;
              </button>
            </div>
            
            <div className="absolute bottom-6 left-0 right-0 text-center text-white/50 text-sm">
              {lightboxIndex + 1} / {filteredImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <FloatingCTAs />
    </div>
  );
}
