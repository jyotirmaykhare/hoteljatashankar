import { motion } from 'framer-motion';
import { Wind, Wifi, Car, Phone, ShieldCheck, Clock, CheckCircle2, BedDouble, Droplets, Camera, Utensils, Zap, Bus } from 'lucide-react';
import FloatingCTAs from '@/components/ui/FloatingCTAs';
import { useSEO } from '@/lib/seo';

const FACILITIES = [
  { id: 'ac', icon: Wind, name: 'Air-Conditioned Rooms', desc: 'Powerful ACs in all rooms for maximum comfort during hot summers.' },
  { id: 'wifi', icon: Wifi, name: 'Free High-Speed WiFi', desc: 'Stay connected with complimentary wireless internet across the property.' },
  { id: 'dining', icon: Utensils, name: 'Pure Veg Restaurant', desc: 'In-house family restaurant serving hygienic and delicious vegetarian meals.' },
  { id: 'parking', icon: Car, name: 'Secure Parking', desc: 'Safe, dedicated parking space for guests arriving by personal vehicles.' },
  { id: 'room-service', icon: Phone, name: 'Room Service', desc: 'Dine in the comfort of your room with our prompt room service.' },
  { id: 'housekeeping', icon: CheckCircle2, name: 'Daily Housekeeping', desc: 'Thorough cleaning and linen changes to maintain impeccable hygiene.' },
  { id: 'hot-water', icon: Droplets, name: '24x7 Hot & Cold Water', desc: 'Attached modern washrooms with geysers ensuring round-the-clock hot water.' },
  { id: 'power', icon: Zap, name: '100% Power Backup', desc: 'Uninterrupted power supply with high-capacity generators.' },
  { id: 'cctv', icon: Camera, name: 'CCTV Security', desc: '24/7 surveillance in all public areas ensuring complete guest safety.' },
  { id: 'reception', icon: Clock, name: '24x7 Reception', desc: 'Round-the-clock front desk assistance for late check-ins and inquiries.' },
  { id: 'travel', icon: Bus, name: 'Travel Assistance', desc: 'Help with taxi bookings and local sightseeing itineraries.' },
  { id: 'beds', icon: BedDouble, name: 'Premium Bedding', desc: 'Comfortable mattresses and clean linens for a restful sleep.' },
];

export default function Facilities() {
  useSEO({
    title: 'Hotel Facilities',
    description: 'Explore Hotel Jatashankar\u2019s facilities: air-conditioned rooms, free WiFi, secure parking, 24x7 power backup, CCTV security, and round-the-clock reception.',
    path: '/facilities',
  });

  return (
    <div className="w-full min-h-screen bg-background pt-24 pb-20">

      <section className="bg-primary text-primary-foreground py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/gallery-facilities-1.jpg')] bg-cover bg-center opacity-20" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif mb-4">World-Class Facilities</h1>
            <p className="max-w-2xl mx-auto text-primary-foreground/90 text-lg">
              Everything you need for a comfortable, secure, and hassle-free stay in Chhatarpur.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {FACILITIES.map((facility, index) => {
              const Icon = facility.icon;
              return (
                <motion.div
                  key={facility.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-card border border-border p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/5 text-primary flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-primary transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{facility.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{facility.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-primary/5 py-16 border-t border-border">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <ShieldCheck className="w-12 h-12 text-secondary mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-serif text-primary mb-4">Your Comfort & Safety First</h2>
          <p className="text-muted-foreground mb-8">
            At Hotel Jatashankar, we take hygiene and security very seriously. The entire premises are monitored, and our staff is trained to provide a safe, respectful environment for all guests, especially families and solo travelers.
          </p>
          <a href="https://wa.me/917566199040" target="_blank" rel="noopener noreferrer" className="bg-primary text-primary-foreground px-8 py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors inline-block">
            Enquire via WhatsApp
          </a>
        </div>
      </section>

      <FloatingCTAs />
    </div>
  );
}
