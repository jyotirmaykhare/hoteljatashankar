import React from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { MapPin, CheckCircle, ArrowRight, Utensils, Star, ShieldCheck, Phone, Wind, Wifi, ShoppingBag, BellRing } from 'lucide-react';
import FloatingCTAs from '@/components/ui/FloatingCTAs';

const FADE_IN = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-bg.jpg"
            alt="Hotel Jatashankar Exterior"
            className="w-full h-full object-cover object-center"
            onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1542314831-c6a4d81d7247?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/30" />
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm mb-6">
              <Star className="w-4 h-4 text-secondary fill-secondary" />
              <span>Premium Stay in Chhatarpur</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white font-bold tracking-tight mb-4 drop-shadow-lg leading-tight">
              Welcome to <br />
              <span className="text-secondary">Hotel Jatashankar</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 font-light drop-shadow">
              Comfortable • Premium • Trusted. Experience refined Indian hospitality and pure vegetarian dining near the Main Bus Stand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-primary px-8 py-3.5 rounded-md font-semibold text-lg hover:bg-secondary/90 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                Enquire on WhatsApp
              </a>
              <a
                href="tel:+919999999999"
                className="bg-white/15 backdrop-blur text-white border border-white/30 px-8 py-3.5 rounded-md font-semibold text-lg hover:bg-white/25 transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" /> Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={FADE_IN}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-t-full overflow-hidden border-8 border-card shadow-2xl relative z-10 w-4/5 mx-auto lg:mr-auto lg:ml-0">
                <img 
                  src="/gallery-lobby-2.jpg" 
                  alt="Hotel Lobby" 
                  className="w-full h-full object-cover" 
                  onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1582719478250-c89404bb2a15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; }}
                />
              </div>
              <div className="absolute bottom-10 -right-4 lg:-right-10 w-2/3 aspect-square rounded-full overflow-hidden border-8 border-card shadow-xl z-20">
                <img 
                  src="/gallery-exterior-1.jpg" 
                  alt="Hotel Exterior" 
                  className="w-full h-full object-cover" 
                  onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; }}
                />
              </div>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={FADE_IN}
              className="space-y-6"
            >
              <h4 className="text-secondary font-bold tracking-widest uppercase text-sm">Our Story</h4>
              <h2 className="text-3xl md:text-5xl font-serif text-primary leading-tight">
                A Legacy of Comfort in the Heart of Chhatarpur
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Hotel Jatashankar blends traditional Indian hospitality with modern comforts. Strategically located near the Main Bus Stand, we offer a tranquil retreat for families, business travelers, and tourists alike.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Step into our refined spaces featuring warm amber lighting, handcrafted textures, and rich emerald accents. Whether you're here to visit the historic Khajuraho temples or for a business trip, our meticulously designed AC rooms and renowned pure vegetarian restaurant ensure a memorable stay.
              </p>
              
              <div className="pt-4 grid grid-cols-2 gap-6">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground">Prime Location</h5>
                    <p className="text-sm text-muted-foreground mt-1">Steps away from Main Bus Stand</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground">Trusted Stay</h5>
                    <p className="text-sm text-muted-foreground mt-1">Secure, hygienic, family-friendly</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-6">
                <Link href="/about" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors group">
                  Read our full story
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rooms Preview */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h4 className="text-secondary font-bold tracking-widest uppercase text-sm mb-2">Our Accommodations</h4>
            <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6">Rest in Elegance</h2>
            <p className="text-muted-foreground">
              Choose from our selection of premium AC rooms, each thoughtfully designed to provide maximum comfort and tranquility during your stay in Chhatarpur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {[
              { id: 'standard', name: 'Standard AC Room', img: '/room-standard.jpg', fallback: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', desc: 'Comfortable stay with all essential amenities.' },
              { id: 'deluxe', name: 'Deluxe AC Room', img: '/room-deluxe.jpg', fallback: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', desc: 'Spacious room with upgraded furnishings.' },
              { id: 'executive', name: 'Executive AC Room', img: '/room-executive.jpg', fallback: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', desc: 'Premium comfort for business travelers.' },
              { id: 'family', name: 'Family AC Room', img: '/room-family.jpg', fallback: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', desc: 'Extra space to accommodate your entire family.' }
            ].map((room, i) => (
              <motion.div 
                key={room.id}
                initial="hidden" whileInView="visible" viewport={{ once: true }} 
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } } }}
                className="group bg-background rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={room.img} 
                    alt={room.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    onError={(e) => { (e.target as HTMLImageElement).src = room.fallback; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 relative">
                  <h3 className="text-xl font-serif font-semibold mb-2 group-hover:text-secondary transition-colors">{room.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{room.desc}</p>
                  <ul className="flex flex-wrap gap-2 mb-6">
                    <li className="text-xs font-medium px-2 py-1 bg-muted rounded text-muted-foreground">AC</li>
                    <li className="text-xs font-medium px-2 py-1 bg-muted rounded text-muted-foreground">Free WiFi</li>
                    <li className="text-xs font-medium px-2 py-1 bg-muted rounded text-muted-foreground">TV</li>
                  </ul>
                  <Link href={`/rooms`} className="flex items-center justify-between w-full text-sm font-semibold text-primary group-hover:text-secondary transition-colors">
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/rooms" className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary font-semibold rounded-md hover:bg-primary hover:text-primary-foreground transition-colors">
              View All Rooms
            </Link>
          </div>
        </div>
      </section>

      {/* Restaurant Preview */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 z-0" />
        
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_IN} className="order-2 lg:order-1">
              <h4 className="text-secondary font-bold tracking-widest uppercase text-sm mb-2">Pure Vegetarian</h4>
              <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6">A Culinary Journey</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                Indulge in authentic flavors at our in-house family restaurant. We serve 100% pure vegetarian cuisine prepared with the finest ingredients in a hygienic environment.
              </p>
              
              <ul className="space-y-3 mb-8">
                {['North Indian Specialties', 'South Indian Delicacies', 'Chinese Flavors', 'Premium Thalis'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-4">
                <Link href="/restaurant" className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors">
                  Dining Experience
                </Link>
                <Link href="/menu" className="bg-white border-2 border-primary text-primary px-6 py-3 rounded-md font-semibold hover:bg-muted transition-colors flex items-center gap-2">
                  <Utensils className="w-4 h-4" /> View Menu
                </Link>
              </div>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } } }} className="order-1 lg:order-2 grid grid-cols-2 gap-4">
              <img 
                src="/restaurant-interior.jpg" 
                alt="Restaurant Interior" 
                className="rounded-lg object-cover h-64 w-full shadow-md col-span-2" 
                onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; }}
              />
              <img 
                src="/dish-thali.jpg" 
                alt="Maharaja Thali" 
                className="rounded-lg object-cover h-40 w-full shadow-md" 
                onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'; }}
              />
              <img 
                src="/dish-paneer.jpg" 
                alt="Paneer Dish" 
                className="rounded-lg object-cover h-40 w-full shadow-md" 
                onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'; }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Facilities Strip */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: <Wind className="w-8 h-8" />, title: 'AC Rooms' },
              { icon: <Wifi className="w-8 h-8" />, title: 'Free WiFi' },
              { icon: <ShoppingBag className="w-8 h-8" />, title: 'Secure Parking' },
              { icon: <BellRing className="w-8 h-8" />, title: '24x7 Service' },
            ].map((facility, i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <div className="text-secondary">{facility.icon}</div>
                <h4 className="font-semibold">{facility.title}</h4>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/facilities" className="text-secondary hover:text-white transition-colors text-sm font-semibold tracking-wider uppercase underline underline-offset-4">
              View All Facilities
            </Link>
          </div>
        </div>
      </section>

      <FloatingCTAs />
    </div>
  );
}
