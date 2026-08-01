import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageCircle, Clock } from 'lucide-react';
import { useSEO } from '@/lib/seo';

export default function Contact() {
  useSEO({
    title: 'Contact Us',
    description: "Get in touch with Hotel Jatashankar in Chhatarpur — phone, WhatsApp, email, and address details for bookings and enquiries.",
    path: '/contact',
  });

  return (
    <div className="w-full flex flex-col bg-background pt-24 pb-0">

      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif mb-4">Contact Us</h1>
            <p className="max-w-2xl mx-auto text-primary-foreground/80 text-lg">
              We're here to help you plan your perfect stay in Chhatarpur. Reach out to us for bookings, inquiries, or special requests.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

            {/* Contact Info */}
            <div className="space-y-10">
              <div>
                <h2 className="text-3xl font-serif text-primary mb-6">Get in Touch</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Hotel Jatashankar is centrally located near the Main Bus Stand in Chhatarpur, making it highly accessible for all travelers. Feel free to contact our 24/7 reception.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4 p-4 rounded-lg bg-card border border-border shadow-sm">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-1">Our Location</h3>
                    <p className="text-muted-foreground text-sm">Near Main Bus Stand,<br />Chhatarpur, Madhya Pradesh 471001, India</p>
                    <a href="#map" className="text-secondary text-sm font-medium mt-2 inline-block hover:underline">View on Map</a>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-lg bg-card border border-border shadow-sm">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-1">Phone & WhatsApp</h3>
                    <p className="text-muted-foreground text-sm mb-1">Reception: +91 70006 17811</p>
                    <p className="text-muted-foreground text-sm mb-1">Manager: +91 75661 99040</p>
                    <p className="text-muted-foreground text-sm">Manager (Anil Kushwaha): +91 95893 32576</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-lg bg-card border border-border shadow-sm">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground text-sm">For bookings: ashutoshrra2018@gmail.com</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-lg bg-card border border-border shadow-sm">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-1">Reception Hours</h3>
                    <p className="text-muted-foreground text-sm">Open 24/7 for check-in, check-out, and guest support.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-card rounded-2xl shadow-xl p-6 md:p-10 border border-border flex flex-col justify-center">
              <h3 className="text-2xl font-serif text-primary mb-2">Reach Us Instantly</h3>
              <p className="text-muted-foreground text-sm mb-8">
                Skip the form — message or call us directly and our team will respond right away.
              </p>

              <div className="space-y-4">
                <a
                  href="https://wa.me/917566199040"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] text-white px-6 py-4 rounded-md font-semibold hover:bg-[#25D366]/90 transition-colors shadow-sm flex items-center justify-center gap-2 text-lg"
                >
                  <MessageCircle className="w-5 h-5" /> Message Us on WhatsApp
                </a>
                <a
                  href="tel:+917566199040"
                  className="w-full bg-primary text-primary-foreground px-6 py-4 rounded-md font-semibold hover:bg-primary/90 transition-colors shadow-sm flex items-center justify-center gap-2 text-lg"
                >
                  <Phone className="w-5 h-5" /> Call Reception
                </a>
                <a
                  href="mailto:ashutoshrra2018@gmail.com"
                  className="w-full bg-background border border-input text-foreground px-6 py-4 rounded-md font-semibold hover:bg-muted transition-colors flex items-center justify-center gap-2 text-lg"
                >
                  <Mail className="w-5 h-5" /> Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="w-full h-[420px] bg-muted relative scroll-mt-24">
        <iframe
          src="https://maps.google.com/maps?q=main+bus+stand+chhatarpur+madhya+pradesh&output=embed&z=16"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
          title="Hotel Jatashankar Location — Near Main Bus Stand, Chhatarpur"
        ></iframe>
      </section>
    </div>
  );
}
