import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ChefHat, Utensils, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import FloatingCTAs from '@/components/ui/FloatingCTAs';
import { useSEO } from '@/lib/seo';

export default function Restaurant() {
  useSEO({
    title: 'Restaurant',
    description: 'Dine at Hotel Jatashankar\u2019s in-house pure vegetarian restaurant in Chhatarpur, serving North Indian, South Indian, and Chinese cuisine in a hygienic setting.',
    path: '/restaurant',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Restaurant',
      name: 'Hotel Jatashankar Restaurant',
      servesCuisine: ['North Indian', 'South Indian', 'Chinese'],
      acceptsReservations: 'True',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Mahoba Road, Near Bus Stand',
        addressLocality: 'Chhatarpur',
        addressRegion: 'Madhya Pradesh',
        postalCode: '471001',
        addressCountry: 'IN',
      },
      telephone: '+91-75661-99040',
      openingHours: 'Mo-Su 07:00-23:00',
      menu: 'https://jatashankarhotel.com/menu',
    },
  });

  return (
    <div className="w-full flex flex-col bg-background pt-24 pb-20">

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/restaurant-interior.jpg"
            alt="Hotel Jatashankar Restaurant"
            className="w-full h-full object-cover"
            width="1920"
            height="1280"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/30 text-white/90 text-sm mb-6 bg-white/10 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-green-500"></span> Pure Vegetarian
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight mb-6">
              Divine Dining
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light drop-shadow">
              Experience the finest culinary traditions in an elegant family setting.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro & Highlights */}
      <section className="py-20 bg-card border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="md:col-span-2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif text-primary">A Taste of Tradition</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                At Hotel Jatashankar's restaurant, dining is an experience crafted with passion. Our chefs bring together the rich, diverse flavors of India, serving 100% pure vegetarian cuisine that satisfies both the palate and the soul.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you're craving a robust North Indian thali, comforting Dal Makhani, or contemporary Chinese delicacies, our menu offers a wide array of choices prepared with fresh, locally sourced ingredients and authentic spices.
              </p>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex flex-col text-center">
                  <span className="text-3xl font-serif text-secondary mb-1">100+</span>
                  <span className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Dishes</span>
                </div>
                <div className="w-px h-12 bg-border"></div>
                <div className="flex flex-col text-center">
                  <span className="text-3xl font-serif text-secondary mb-1">100%</span>
                  <span className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Pure Veg</span>
                </div>
              </div>
            </div>

            <div className="bg-primary text-primary-foreground p-8 rounded-xl shadow-lg h-fit">
              <h3 className="text-xl font-serif mb-6 text-secondary">Dining Info</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Opening Hours</p>
                    <p className="text-primary-foreground/70 text-sm">7:00 AM – 11:00 PM Daily</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Utensils className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Services</p>
                    <p className="text-primary-foreground/70 text-sm">Dine-in, Room Service, Takeaway</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Hygiene Promise</p>
                    <p className="text-primary-foreground/70 text-sm">Strictly sanitized kitchen & utensils</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Chef's Specials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 text-secondary mb-2">
              <ChefHat className="w-5 h-5" />
              <span className="font-bold tracking-widest uppercase text-sm">Chef's Recommendations</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-primary">Signature Dishes</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Matar Paneer', img: '/Mixveg.jpg', width: 1280, height: 1920, desc: 'Tender cottage cheese and green peas cooked in a spiced tomato-onion gravy.', price: '₹240' },
              { name: 'Dal Makhani', img: '/ThaliPackaged.jpg', width: 1920, height: 1280, desc: 'Slow-cooked black lentils simmered with butter and cream.', price: '₹190' },
              { name: 'Maharaja Thali', img: '/dish-thali.jpg', width: 1920, height: 1280, desc: 'A grand feast featuring assorted curries, bread, rice, and dessert.', price: '₹350' },
              { name: 'Lassi', img: '/Lassi.jpg', width: 1280, height: 1920, desc: 'Thick, creamy yogurt drink — sweet or salted — a refreshing companion to any meal.', price: '₹60' },
              { name: 'Chaach', img: '/Chaach.jpg', width: 1280, height: 1920, desc: 'Light, spiced buttermilk seasoned with cumin and fresh herbs.', price: '₹40' },
              { name: 'Kheer', img: '/Kheer.jpg', width: 1280, height: 1920, desc: 'Traditional Indian rice pudding slow-cooked with milk, sugar, and cardamom.', price: '₹80' },
              { name: 'Butter Naan', img: '/dish-paneer.jpg', width: 1920, height: 1280, desc: 'Soft, fluffy tandoor-baked bread brushed with pure butter.', price: '₹50' }
            ].map((dish, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={dish.img}
                    alt={dish.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    width={dish.width}
                    height={dish.height}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-bold text-primary shadow-sm">
                    {dish.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold mb-2">{dish.name}</h3>
                  <p className="text-muted-foreground text-sm">{dish.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/menu" className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors shadow-sm group">
              Explore Full Menu
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Family Dining Callout */}
      <section className="py-20 relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 opacity-10 bg-[url('/gallery-restaurant-1.jpg')] bg-cover bg-center" />
        <div className="container relative z-10 mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-secondary">Perfect for Families & Gatherings</h2>
          <p className="text-lg text-primary-foreground/80 mb-10 leading-relaxed">
            Our spacious, elegantly lit dining area is designed to host families comfortably. With prompt service, a kid-friendly environment, and large seating arrangements, we make sure your dining experience is as memorable as the food.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+917566199040" className="bg-secondary text-primary px-8 py-3 rounded-md font-semibold hover:bg-secondary/90 transition-colors shadow-sm">
              Reserve a Table
            </a>
            <a href="https://wa.me/917566199040" target="_blank" rel="noopener noreferrer" className="bg-transparent border-2 border-secondary text-secondary px-8 py-3 rounded-md font-semibold hover:bg-secondary/10 transition-colors">
              Pre-order via WhatsApp
            </a>
          </div>
        </div>
      </section>

      <FloatingCTAs />
    </div>
  );
}
