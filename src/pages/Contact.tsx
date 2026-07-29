import React from 'react';
import { Link } from 'wouter';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  email: z.string().email('Valid email is required'),
  subject: z.string().min(2, 'Subject is required'),
  message: z.string().min(10, 'Message is too short'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSuccess, setIsSuccess] = React.useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = (data: ContactFormValues) => {
    console.log('Contact message submitted:', data);
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      form.reset();
    }, 5000);
  };

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
                    <p className="text-muted-foreground text-sm">Near Main Bus Stand,<br/>Chhatarpur, Madhya Pradesh 471001, India</p>
                    <a href="#map" className="text-secondary text-sm font-medium mt-2 inline-block hover:underline">View on Map</a>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-lg bg-card border border-border shadow-sm">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-1">Phone & WhatsApp</h3>
                    <p className="text-muted-foreground text-sm mb-1">Reception: +91 99999 99999</p>
                    <p className="text-muted-foreground text-sm">Restaurant: +91 99999 88888</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-lg bg-card border border-border shadow-sm">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground text-sm">For bookings: info@hoteljatashankar.com</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <a href="tel:+919999999999" className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors shadow-sm">
                  Call Us
                </a>
                <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 px-6 py-3 rounded-md font-semibold hover:bg-[#25D366] hover:text-white transition-colors flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" /> WhatsApp Us
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="bg-card rounded-2xl shadow-xl p-6 md:p-10 border border-border">
              <h3 className="text-2xl font-serif text-primary mb-6">Send an Inquiry</h3>
              
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6 text-center"
                  >
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-6 h-6 text-green-600" />
                    </div>
                    <h4 className="text-lg font-bold mb-2">Message Sent Successfully!</h4>
                    <p className="text-sm">Thank you for contacting us. Our team will get back to you shortly.</p>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={form.handleSubmit(onSubmit)} 
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Your Name</label>
                        <input 
                          type="text" 
                          {...form.register('name')}
                          className={`w-full bg-background border ${form.formState.errors.name ? 'border-destructive' : 'border-input'} rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-secondary`}
                          placeholder="John Doe"
                        />
                        {form.formState.errors.name && <p className="text-xs text-destructive">{form.formState.errors.name.message}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Phone Number</label>
                        <input 
                          type="tel" 
                          {...form.register('phone')}
                          className={`w-full bg-background border ${form.formState.errors.phone ? 'border-destructive' : 'border-input'} rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-secondary`}
                          placeholder="+91 9876543210"
                        />
                        {form.formState.errors.phone && <p className="text-xs text-destructive">{form.formState.errors.phone.message}</p>}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Email Address</label>
                      <input 
                        type="email" 
                        {...form.register('email')}
                        className={`w-full bg-background border ${form.formState.errors.email ? 'border-destructive' : 'border-input'} rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-secondary`}
                        placeholder="john@example.com"
                      />
                      {form.formState.errors.email && <p className="text-xs text-destructive">{form.formState.errors.email.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Subject</label>
                      <select 
                        {...form.register('subject')}
                        className={`w-full bg-background border ${form.formState.errors.subject ? 'border-destructive' : 'border-input'} rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-secondary`}
                      >
                        <option value="">Select a subject</option>
                        <option value="Room Booking">Room Booking Inquiry</option>
                        <option value="Restaurant Booking">Restaurant Table Booking</option>
                        <option value="Event/Party">Event or Party Inquiry</option>
                        <option value="General">General Question</option>
                      </select>
                      {form.formState.errors.subject && <p className="text-xs text-destructive">{form.formState.errors.subject.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Your Message</label>
                      <textarea 
                        rows={5}
                        {...form.register('message')}
                        className={`w-full bg-background border ${form.formState.errors.message ? 'border-destructive' : 'border-input'} rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-secondary resize-none`}
                        placeholder="How can we help you?"
                      />
                      {form.formState.errors.message && <p className="text-xs text-destructive">{form.formState.errors.message.message}</p>}
                    </div>

                    <button 
                      type="submit" 
                      className="w-full bg-secondary text-primary font-bold py-3.5 rounded-md hover:bg-secondary/90 transition-colors shadow-sm flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" /> Send Message
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
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
