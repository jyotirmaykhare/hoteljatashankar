import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Clock, Car } from 'lucide-react';
import FloatingCTAs from '@/components/ui/FloatingCTAs';

const ATTRACTIONS = [
  {
    name: 'Khajuraho Temples',
    distance: '45 km (approx. 1 hour drive)',
    img: '/khajuraho.jpg',
    fallback: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    desc: 'UNESCO World Heritage Site famous for its stunning nagara-style architectural symbolism and erotic sculptures built by the Chandela dynasty.',
    type: 'Historical / Temple'
  },
  {
    name: 'Raneh Falls',
    distance: '65 km (approx. 1.5 hours drive)',
    img: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    fallback: '/gallery-exterior-1.jpg',
    desc: 'A stunning waterfall situated in the Ken river canyon, featuring unique multi-colored crystalline granite rock formations.',
    type: 'Nature / Waterfall'
  },
  {
    name: 'Panna National Park',
    distance: '70 km (approx. 1.5 hours drive)',
    img: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    fallback: '/gallery-exterior-1.jpg',
    desc: 'Famous tiger reserve offering wildlife safaris. Home to tigers, leopards, and over 200 species of birds.',
    type: 'Wildlife / Safari'
  },
  {
    name: 'Pandav Falls',
    distance: '55 km (approx. 1 hour 15 mins)',
    img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    fallback: '/gallery-exterior-1.jpg',
    desc: 'A serene waterfall located inside Panna National Park, believed to be the place where the Pandavas sought refuge during their exile.',
    type: 'Nature / Mythological'
  },
  {
    name: 'Ken Gharial Sanctuary',
    distance: '65 km (approx. 1.5 hours drive)',
    img: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    fallback: '/gallery-exterior-1.jpg',
    desc: 'A nature reserve dedicated to the conservation of the endangered Indian Gharials (fish-eating crocodiles).',
    type: 'Wildlife'
  },
  {
    name: 'Chaturbhuj Temple',
    distance: '45 km (Near Khajuraho)',
    img: '/khajuraho.jpg',
    fallback: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    desc: 'One of the prominent temples of the Southern Group in Khajuraho, known for its massive 9-foot tall idol of Lord Vishnu.',
    type: 'Temple'
  }
];

export default function Nearby() {
  return (
    <div className="w-full min-h-screen bg-background pt-24 pb-20">
      
      <section className="bg-primary text-primary-foreground py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url('/khajuraho.jpg')` }} />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif mb-4 text-white">Explore Nearby Attractions</h1>
            <p className="max-w-2xl mx-auto text-primary-foreground/90 text-lg">
              Hotel Jatashankar is the perfect base camp for exploring the historical and natural wonders of the Bundelkhand region.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ATTRACTIONS.map((place, index) => (
              <motion.div
                key={place.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow group flex flex-col"
              >
                <div className="relative h-56 overflow-hidden bg-muted">
                  <img 
                    src={place.img}
                    alt={place.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => { (e.target as HTMLImageElement).src = place.fallback; }}
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-primary text-xs font-bold px-2 py-1 rounded shadow-sm">
                    {place.type}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-2xl font-serif text-primary mb-2">{place.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-secondary font-medium mb-3">
                    <Navigation className="w-4 h-4" />
                    <span>{place.distance} from Hotel</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {place.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 bg-muted p-8 rounded-2xl border border-border flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-serif text-primary mb-2 flex items-center gap-2">
                <Car className="w-6 h-6 text-secondary" /> Need a Taxi?
              </h3>
              <p className="text-muted-foreground">
                Our front desk can arrange reliable local taxis and tour guides for your sightseeing trips.
              </p>
            </div>
            <a href="tel:+919999999999" className="bg-primary text-primary-foreground px-8 py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors shrink-0 whitespace-nowrap">
              Contact Reception
            </a>
          </div>
        </div>
      </section>

      <FloatingCTAs />
    </div>
  );
}
