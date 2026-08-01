import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { MapPin, CheckCircle, ArrowRight, Utensils, Star, ShieldCheck, Phone, Wind, Wifi, ShoppingBag, BellRing } from 'lucide-react';
import FloatingCTAs from '@/components/ui/FloatingCTAs';
import { useSEO } from '@/lib/seo';

const FADE_IN = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const FAQS = [
  {
    q: 'How far is Hotel Jatashankar from the Khajuraho Temples?',
    a: 'Hotel Jatashankar is about 45 km from the Khajuraho Temples, roughly a 1-hour drive, making it a convenient base for sightseeing.',
  },
  {
    q: 'Does Hotel Jatashankar have AC rooms?',
    a: 'Yes, all rooms at Hotel Jatashankar are air-conditioned, with options ranging from standard to family rooms.',
  },
  {
    q: 'Is there a vegetarian restaurant at the hotel?',
    a: 'Yes, Hotel Jatashankar has an in-house pure vegetarian restaurant open from 7:00 AM to 11:00 PM.',
  },
  {
    q: 'Where exactly is Hotel Jatashankar located?',
    a: 'The hotel is located on Mahoba Road, Near Bus Stand, Chhatarpur, Madhya Pradesh 471001, India, making it easily accessible for all travelers.',
  },
  {
    q: 'What time is check-in and check-out?',
    a: 'Check-in is at 12:00 PM and check-out is at 11:00 AM. The reception desk is open 24/7 for early or late requests.',
  },
  {
    q: 'Is free parking available at Hotel Jatashankar?',
    a: 'Yes, complimentary secure parking is available for hotel guests, subject to space availability.',
  },
  {
    q: 'Is online booking available?',
    a: 'For room availability and reservations, use the booking page, call Hotel Jatashankar, or send a WhatsApp message to the hotel team.',
  },
  {
    q: 'Is Hotel Jatashankar suitable for families and business travellers?',
    a: 'Yes. The hotel offers air-conditioned rooms, WiFi, parking, a central Chhatarpur location, and a pure vegetarian restaurant for family stays and business visits.',
  },
];

export default function Home() {
  useSEO({
    title: 'Hotel Jatashankar | Hotel in Chhatarpur & Veg Dining',
    description: 'Stay at Hotel Jatashankar for premium AC rooms and pure veg dining on Mahoba Road, Near Bus Stand, Chhatarpur. Call or WhatsApp today to book your comfortable stay.',
    path: '/',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQS.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  });

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
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width="1920"
            height="1281"
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
              Hotel Jatashankar <br />
              <span className="text-secondary">Premium AC Rooms &amp; Veg Dining</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 font-light drop-shadow">
              Comfortable • Premium • Trusted. Experience refined Indian hospitality and pure vegetarian dining on Mahoba Road, Near Bus Stand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/917566199040"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-primary px-8 py-3.5 rounded-md font-semibold text-lg hover:bg-secondary/90 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                Enquire on WhatsApp
              </a>
              <a
                href="tel:+917566199040"
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
                  width="1920"
                  height="1280"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="absolute bottom-10 -right-4 lg:-right-10 w-2/3 aspect-square rounded-full overflow-hidden border-8 border-card shadow-xl z-20">
                <img
                  src="/gallery-exterior-1.jpg"
                  alt="Hotel Exterior"
                  className="w-full h-full object-cover"
                  width="1280"
                  height="1920"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={FADE_IN}
              className="space-y-6"
            >
              <p className="text-secondary font-bold tracking-widest uppercase text-sm">Our Story</p>
              <h2 className="text-3xl md:text-5xl font-serif text-primary leading-tight">
                A Legacy of Comfort in the Heart of Chhatarpur
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Hotel Jatashankar blends traditional Indian hospitality with modern comforts. Located on Mahoba Road, Near Bus Stand, we offer a tranquil retreat for families, business travelers, and tourists alike.
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
                    <h3 className="font-semibold text-foreground">Prime Location</h3>
                    <p className="text-sm text-muted-foreground mt-1">Mahoba Road, Near Bus Stand</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Trusted Stay</h3>
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
            <p className="text-secondary font-bold tracking-widest uppercase text-sm mb-2">Our Accommodations</p>
            <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6">Rest in Elegance</h2>
            <p className="text-muted-foreground">
              Choose from our selection of premium AC rooms, each thoughtfully designed to provide maximum comfort and tranquility during your stay in Chhatarpur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { id: 'standard', name: 'Standard AC Room', img: '/room-standard.jpg', width: 1920, height: 1280, desc: 'Comfortable stay with all essential amenities.' },
              { id: 'deluxe', name: 'Deluxe AC Room', img: '/room-deluxe.jpg', width: 1280, height: 1920, desc: 'Spacious room with upgraded furnishings.' }
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
                    width={room.width}
                    height={room.height}
                    loading="lazy"
                    decoding="async"
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
              <p className="text-secondary font-bold tracking-widest uppercase text-sm mb-2">Pure Vegetarian</p>
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
                width="1920"
                height="1280"
                loading="lazy"
                decoding="async"
              />
              <img
                src="/dish-thali.jpg"
                alt="Maharaja Thali"
                className="rounded-lg object-cover h-40 w-full shadow-md"
                width="1920"
                height="1280"
                loading="lazy"
                decoding="async"
              />
              <img
                src="/Mixveg.jpg"
                alt="Mixed Veg Curry"
                className="rounded-lg object-cover h-40 w-full shadow-md"
                width="1280"
                height="1920"
                loading="lazy"
                decoding="async"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Facilities Strip */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="sr-only">Amenities at Hotel Jatashankar</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: <Wind className="w-8 h-8" />, title: 'AC Rooms' },
              { icon: <Wifi className="w-8 h-8" />, title: 'Free WiFi' },
              { icon: <ShoppingBag className="w-8 h-8" />, title: 'Secure Parking' },
              { icon: <BellRing className="w-8 h-8" />, title: '24x7 Service' },
            ].map((facility, i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <div className="text-secondary">{facility.icon}</div>
                <h3 className="font-semibold">{facility.title}</h3>
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

      {/* FAQ Section — mirrors the FAQPage structured data in useSEO() above */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto max-w-4xl px-4 md:px-6">
          <div className="text-center mb-10">
            <p className="text-secondary font-bold tracking-widest uppercase text-sm mb-2">Stay, Dine &amp; Explore</p>
            <h2 className="text-3xl md:text-4xl font-serif text-primary">Your Hotel in Chhatarpur for Every Journey</h2>
          </div>
          <article className="space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg">
            <p>Hotel Jatashankar is a welcoming hotel in Chhatarpur for families, business travellers and visitors exploring Madhya Pradesh. Located on Mahoba Road, Near Bus Stand, our location makes arrivals, local travel and onward journeys simple. Guests can choose a comfortable stay in well-kept premium AC rooms with everyday essentials, including WiFi, secure parking and attentive 24-hour reception support.</p>
            <p>Whether you are in town for work, visiting relatives or planning a trip towards Khajuraho, our team focuses on a relaxed customer experience from check-in to departure. Families appreciate a convenient central location and a calm place to rest, while business guests can stay connected and reach meetings around Chhatarpur with ease. Explore our <Link href="/rooms" className="font-semibold text-primary hover:text-secondary underline underline-offset-4">AC room options</Link> to find the right space for your visit.</p>
            <p>Dining is an important part of the Hotel Jatashankar experience. Our in-house pure veg restaurant serves vegetarian food in a family-friendly setting, with options for a meal, a quick bite or a relaxed dinner. View the <Link href="/restaurant" className="font-semibold text-primary hover:text-secondary underline underline-offset-4">restaurant details</Link> and <Link href="/menu" className="font-semibold text-primary hover:text-secondary underline underline-offset-4">food menu</Link> before you arrive. The combination of rooms and restaurant service makes the hotel convenient for guests who want stay and dining choices in one place.</p>
            <p>Chhatarpur is also a useful base for nearby attractions. Khajuraho is approximately 45 km away by road, while local places of interest can be planned from the hotel. Visit our <Link href="/nearby" className="font-semibold text-primary hover:text-secondary underline underline-offset-4">nearby attractions guide</Link> for travel inspiration, or use the <Link href="/contact" className="font-semibold text-primary hover:text-secondary underline underline-offset-4">contact page</Link> for location and stay enquiries. For availability, you can <Link href="/book" className="font-semibold text-primary hover:text-secondary underline underline-offset-4">book a room</Link>, call, or message us on WhatsApp.</p>
          </article>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/40">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif text-primary text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col gap-6">
            {FAQS.map((faq) => (
              <div key={faq.q} className="bg-card rounded-xl border border-border p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="pb-16 text-center bg-muted/40">
        <Link href="/faq" className="font-semibold text-primary hover:text-secondary underline underline-offset-4">Read all hotel FAQs</Link>
      </div>

      <FloatingCTAs />
    </div>
  );
}
