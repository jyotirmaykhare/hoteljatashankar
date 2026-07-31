import { motion } from 'framer-motion';
import { Navigation, Car } from 'lucide-react';
import FloatingCTAs from '@/components/ui/FloatingCTAs';
import { useSEO } from '@/lib/seo';

const ATTRACTIONS = [
  {
    name: 'Jatashankar Temple, Bijawar',
    distance: '50 km (approx. 1 to 1.5 hours drive)',
    img: '/jatashankar-temple-bijawar.jpg',
    width: 1280,
    height: 960,
    fallback: '/gallery-exterior-1.jpg',
    desc: 'A revered Shiva shrine in the forested hills near Bijawar, known as the "Kedarnath of Bundelkhand."',
    type: 'Temple / Pilgrimage'
  },
  {
    name: 'Bageshwar Dham, Chhatarpur',
    distance: '25 km (approx. 40 minutes drive)',
    img: '/bageshwar-dham-chhatarpur.jpg',
    width: 578,
    height: 1280,
    fallback: '/gallery-exterior-1.jpg',
    desc: 'A widely visited Hanuman temple in Gadha, seat of Bageshwar Dham Sarkar.',
    type: 'Temple / Pilgrimage'
  },
  {
    name: 'Dhubela Museum, Nowgaon',
    distance: '15 km (approx. 20-25 minutes drive)',
    img: '/dhubela-museum-nowgaon.jpg',
    width: 1080,
    height: 704,
    fallback: '/gallery-exterior-1.jpg',
    desc: 'A lakeside palace museum housing Bundela-era sculptures, arms, and artifacts.',
    type: 'Museum / Historical'
  },
  {
    name: 'Khajuraho Temples',
    distance: '45 km (approx. 1 hour drive)',
    img: '/khajuraho-temples.jpeg',
    width: 800,
    height: 600,
    fallback: '/gallery-exterior-1.jpg',
    desc: 'UNESCO World Heritage Site famed for its nagara-style temple architecture and sculptures.',
    type: 'Historical / Temple'
  },
  {
    name: 'Raneh Falls',
    distance: '65 km (approx. 1.5 hours drive)',
    img: '/raneh-falls.jpeg',
    width: 800,
    height: 600,
    fallback: '/gallery-exterior-1.jpg',
    desc: 'A dramatic waterfall in the Ken river canyon with multi-colored granite rock formations.',
    type: 'Nature / Waterfall'
  },
  {
    name: 'Panna National Park',
    distance: '70 km (approx. 1.5 hours drive)',
    img: '/panna-national-park.jpeg',
    width: 800,
    height: 600,
    fallback: '/gallery-exterior-1.jpg',
    desc: 'A tiger reserve offering wildlife safaris, home to tigers, leopards, and 200+ bird species.',
    type: 'Wildlife / Safari'
  },
  {
    name: 'Pandav Falls',
    distance: '55 km (approx. 1 hour 15 mins)',
    img: '/pandav-falls.jpeg',
    width: 800,
    height: 600,
    fallback: '/gallery-exterior-1.jpg',
    desc: 'A serene waterfall inside Panna National Park, linked to the Pandavas\u2019 exile.',
    type: 'Nature / Mythological'
  },
  {
    name: 'Ken Gharial Sanctuary',
    distance: '65 km (approx. 1.5 hours drive)',
    img: '/ken-gharial-sanctuary.jpeg',
    width: 800,
    height: 600,
    fallback: '/gallery-exterior-1.jpg',
    desc: 'A reserve protecting the endangered Indian Gharial (fish-eating crocodile).',
    type: 'Wildlife'
  }
];

export default function Nearby() {
  useSEO({
    title: 'Nearby Attractions',
    description: 'Discover top attractions near Hotel Jatashankar in Chhatarpur, including Jatashankar Temple (Bijawar), Bageshwar Dham, Dhubela Museum, and the Khajuraho Temples, all within easy reach of the hotel.',
    path: '/nearby',
  });

  return (
    <div className="w-full min-h-screen bg-background pt-24 pb-20">
      
      <section className="bg-primary text-primary-foreground py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')` }} />
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
                    width={place.width}
                    height={place.height}
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
            <a href="tel:+917000617811" className="bg-primary text-primary-foreground px-8 py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors shrink-0 whitespace-nowrap">
              Contact Reception
            </a>
          </div>
        </div>
      </section>

      <FloatingCTAs />
    </div>
  );
}
