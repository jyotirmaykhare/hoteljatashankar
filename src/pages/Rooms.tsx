import { motion } from 'framer-motion';
import { CheckCircle, Wifi, Wind, Shield, Phone, Bed, Users } from 'lucide-react';
import FloatingCTAs from '@/components/ui/FloatingCTAs';
import { useSEO } from '@/lib/seo';

const ROOMS = [
  {
    id: 'standard',
    name: 'Standard AC Room',
    image: '/room-standard.jpg',
    imgWidth: 1920,
    imgHeight: 1280,
    description: 'Perfect for solo travelers or couples looking for a comfortable and budget-friendly stay without compromising on quality and hygiene.',
    occupancy: '2 Adults',
    bedType: 'Queen Size Bed',
    price: 'Contact for pricing',
    amenities: ['Air Conditioning', 'Attached Washroom', 'Hot/Cold Water', 'Free WiFi', 'Flat Screen TV', 'Room Service']
  },
  {
    id: 'deluxe',
    name: 'Deluxe AC Room',
    image: '/room-deluxe.jpg',
    imgWidth: 1280,
    imgHeight: 1920,
    description: 'Upgraded spacious rooms with elegant interiors, premium bedding, and a cozy seating area for a more relaxed stay. Children up to 6 years are included in this package; additional charges apply for older children.',
    occupancy: '2 Adults + 1 Child (up to 6 yrs free)',
    bedType: 'King Size Bed',
    price: 'Contact for pricing',
    amenities: ['Air Conditioning', 'Premium Attached Washroom', 'Hot/Cold Water', 'Free WiFi', 'Flat Screen TV', 'Seating Area', 'Tea/Coffee Maker', 'Room Service']
  }
];

export default function Rooms() {
  useSEO({
    title: 'Rooms & Suites',
    description: 'Choose from Standard and Deluxe AC rooms at Hotel Jatashankar in Chhatarpur, each with free WiFi and modern attached washrooms.',
    path: '/rooms',
  });

  return (
    <div className="w-full flex flex-col bg-background pt-24 pb-20">

      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif mb-4">Our Accommodations</h1>
            <p className="max-w-2xl mx-auto text-primary-foreground/80 text-lg">
              Experience the perfect blend of comfort, hygiene, and elegant design. All our rooms are fully air-conditioned and equipped with modern amenities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Rooms List */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-16">
            {ROOMS.map((room, index) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 bg-card rounded-2xl overflow-hidden border border-border shadow-md`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2 h-64 md:h-80 lg:h-auto relative overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    width={room.imgWidth}
                    height={room.imgHeight}
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 p-6 md:p-10 flex flex-col justify-center">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-3xl font-serif text-primary">{room.name}</h2>
                    <span className="bg-secondary/20 text-secondary-foreground px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                      {room.price}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {room.description}
                  </p>

                  <div className="flex flex-wrap gap-6 mb-8">
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <Users className="w-5 h-5 text-secondary" />
                      <span>{room.occupancy}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <Bed className="w-5 h-5 text-secondary" />
                      <span>{room.bedType}</span>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-sm font-bold uppercase tracking-wider mb-3 text-foreground/80">Room Amenities</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {room.amenities.map((amenity, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          {amenity}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-4 mt-auto">
                    <a
                      href="https://wa.me/917566199040"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary text-primary-foreground px-8 py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors shadow-sm flex-1 md:flex-none text-center"
                    >
                      Enquire via WhatsApp
                    </a>
                    <a
                      href="tel:+917566199040"
                      className="bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 px-6 py-3 rounded-md font-semibold hover:bg-[#25D366] hover:text-white transition-colors flex items-center justify-center gap-2"
                    >
                      Call Us
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Amenities Strip */}
      <section className="bg-muted py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <h3 className="text-center text-xl font-serif text-primary mb-8">Included with every stay</h3>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              { icon: <Wind className="w-6 h-6" />, label: 'Air Conditioning' },
              { icon: <Wifi className="w-6 h-6" />, label: 'High-Speed WiFi' },
              { icon: <Shield className="w-6 h-6" />, label: '24/7 Security' },
              { icon: <Phone className="w-6 h-6" />, label: 'Room Service' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2 text-foreground/70">
                <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center shadow-sm text-secondary">
                  {item.icon}
                </div>
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FloatingCTAs />
    </div>
  );
}
