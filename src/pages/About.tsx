import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { History, Target, Heart, Award } from 'lucide-react';
import FloatingCTAs from '@/components/ui/FloatingCTAs';

export default function About() {
  return (
    <div className="w-full flex flex-col bg-background pt-24 pb-20">
      
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24 bg-[url('/gallery-exterior-1.jpg')] bg-cover bg-center bg-blend-overlay">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-serif mb-4 text-white">Our Story</h1>
            <p className="max-w-2xl mx-auto text-white/90 text-lg font-light">
              A legacy of authentic Indian hospitality, modern comfort, and trusted service in the heart of Chhatarpur.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-serif text-primary">Rooted in Tradition, Designed for Today</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Hotel Jatashankar was founded with a singular vision: to provide travelers arriving in Chhatarpur with a stay that feels both luxurious and intimately familiar, like a home away from home.
                </p>
                <p>
                  Situated strategically near the Main Bus Stand, our hotel bridges the gap between historical reverence—serving as a comfortable base for pilgrims and tourists visiting the Khajuraho temples—and modern necessity, offering top-tier AC rooms and amenities for business professionals.
                </p>
                <p>
                  We are deeply proud of our roots in Indian hospitality. This is reflected not just in our architecture's haveli-inspired warmth, but in the genuine smiles of our staff and the authentic flavors of our purely vegetarian restaurant. 
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl relative z-10 w-4/5 ml-auto">
                <img src="/gallery-lobby-1.jpg" alt="Hotel Lobby" className="w-full h-full object-cover" 
                  onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1582719478250-c89404bb2a15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; }}
                />
              </div>
              <div className="absolute top-10 -left-4 lg:-left-10 w-2/3 aspect-square rounded-xl overflow-hidden shadow-xl z-20 border-8 border-background">
                <img src="/restaurant-interior.jpg" alt="Restaurant Interior" className="w-full h-full object-cover" 
                  onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'; }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card p-10 rounded-2xl shadow-sm border border-border">
              <Target className="w-10 h-10 text-secondary mb-6" />
              <h3 className="text-2xl font-serif text-primary mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver uncompromising comfort, impeccable hygiene, and warm hospitality to every guest. We strive to create an environment where every traveler feels valued, safe, and entirely at ease.
              </p>
            </div>
            <div className="bg-card p-10 rounded-2xl shadow-sm border border-border">
              <Heart className="w-10 h-10 text-secondary mb-6" />
              <h3 className="text-2xl font-serif text-primary mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted and preferred premium accommodation in Chhatarpur, setting the benchmark for ethical hospitality, vegetarian culinary excellence, and sustainable practices in the region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6">Why Choose Us</h2>
            <p className="text-muted-foreground">The pillars that uphold our commitment to you.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🏛️', title: 'Refined Ambience', desc: 'Spaces designed with elegant aesthetics and warm lighting to soothe the senses.' },
              { icon: '✨', title: 'Spotless Hygiene', desc: 'Rigorous daily cleaning protocols for rooms, washrooms, and the restaurant kitchen.' },
              { icon: '🍲', title: 'Pure Vegetarian', desc: '100% vegetarian premises ensuring a trusted dining experience for families and pilgrims.' },
              { icon: '🤝', title: 'Genuine Care', desc: 'A dedicated staff trained to anticipate your needs with traditional Indian hospitality.' }
            ].map((value, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
                  {value.icon}
                </div>
                <h4 className="text-xl font-serif text-primary mb-3">{value.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FloatingCTAs />
    </div>
  );
}
