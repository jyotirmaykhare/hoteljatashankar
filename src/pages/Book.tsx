import React, { useState } from 'react';
import { useLocation } from 'wouter';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Calendar, Users, Phone, ArrowLeft } from 'lucide-react';

const bookingSchema = z.object({
  checkIn: z.string().min(1, 'Check-in date is required'),
  checkOut: z.string().min(1, 'Check-out date is required'),
  guests: z.string().min(1, 'Number of guests is required'),
  roomType: z.string().min(1, 'Room type is required'),
  name: z.string().min(3, 'Name must be at least 3 characters'),
  phone: z.string().regex(/^[0-9]{10,12}$/, 'Please enter a valid phone number (10-12 digits)'),
  email: z.string().email('Please enter a valid email address'),
  requests: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

export default function Book() {
  const [_, setLocation] = useLocation();
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      guests: '2',
      roomType: 'Standard AC Room',
      requests: '',
    },
  });

  const onSubmit = (data: BookingFormValues) => {
    // In a real app, send this to API.
    console.log('Booking submitted:', data);
    setIsSuccess(true);
  };

  return (
    <div className="w-full min-h-screen bg-muted/30 pt-24 pb-20 flex items-center justify-center">
      <div className="container mx-auto px-4 max-w-3xl">
        
        <AnimatePresence mode="wait">
          {!isSuccess ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-card rounded-2xl shadow-xl overflow-hidden border border-border"
            >
              <div className="bg-primary p-6 md:p-8 text-primary-foreground text-center relative">
                <button 
                  onClick={() => window.history.back()}
                  className="absolute left-6 top-1/2 -translate-y-1/2 text-primary-foreground/80 hover:text-white flex items-center gap-2 text-sm"
                >
                  <ArrowLeft className="w-4 h-4" /> <span className="hidden md:inline">Back</span>
                </button>
                <h1 className="text-2xl md:text-3xl font-serif mb-2">Reserve Your Stay</h1>
                <p className="text-primary-foreground/80 text-sm max-w-md mx-auto">
                  Complete this form to request a booking. Our team will contact you within 2 hours to confirm your reservation and arrange payment.
                </p>
              </div>

              <div className="p-6 md:p-8">
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  
                  {/* Stay Details */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-serif border-b border-border pb-2 text-primary">Stay Details</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Check-in Date *</label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <input 
                            type="date" 
                            {...form.register('checkIn')}
                            className={`w-full bg-background border ${form.formState.errors.checkIn ? 'border-destructive' : 'border-input'} rounded-md pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary`}
                          />
                        </div>
                        {form.formState.errors.checkIn && <p className="text-xs text-destructive">{form.formState.errors.checkIn.message}</p>}
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Check-out Date *</label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <input 
                            type="date" 
                            {...form.register('checkOut')}
                            className={`w-full bg-background border ${form.formState.errors.checkOut ? 'border-destructive' : 'border-input'} rounded-md pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary`}
                          />
                        </div>
                        {form.formState.errors.checkOut && <p className="text-xs text-destructive">{form.formState.errors.checkOut.message}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Number of Guests *</label>
                        <div className="relative">
                          <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <select 
                            {...form.register('guests')}
                            className="w-full bg-background border border-input rounded-md pl-10 pr-4 py-2 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-secondary"
                          >
                            <option value="1">1 Adult</option>
                            <option value="2">2 Adults</option>
                            <option value="3">3 Adults</option>
                            <option value="4">4 Adults</option>
                            <option value="5+">5+ (Multiple Rooms)</option>
                          </select>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Room Type *</label>
                        <select 
                          {...form.register('roomType')}
                          className="w-full bg-background border border-input rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                        >
                          <option value="Standard AC Room">Standard AC Room</option>
                          <option value="Deluxe AC Room">Deluxe AC Room</option>
                          <option value="Executive AC Room">Executive AC Room</option>
                          <option value="Family AC Room">Family AC Room</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Guest Details */}
                  <div className="space-y-4 pt-4">
                    <h3 className="text-lg font-serif border-b border-border pb-2 text-primary">Guest Details</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Full Name *</label>
                        <input 
                          type="text" 
                          placeholder="John Doe"
                          {...form.register('name')}
                          className={`w-full bg-background border ${form.formState.errors.name ? 'border-destructive' : 'border-input'} rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary`}
                        />
                        {form.formState.errors.name && <p className="text-xs text-destructive">{form.formState.errors.name.message}</p>}
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Phone Number *</label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <input 
                            type="tel" 
                            placeholder="9876543210"
                            {...form.register('phone')}
                            className={`w-full bg-background border ${form.formState.errors.phone ? 'border-destructive' : 'border-input'} rounded-md pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary`}
                          />
                        </div>
                        {form.formState.errors.phone && <p className="text-xs text-destructive">{form.formState.errors.phone.message}</p>}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Email Address *</label>
                      <input 
                        type="email" 
                        placeholder="john@example.com"
                        {...form.register('email')}
                        className={`w-full bg-background border ${form.formState.errors.email ? 'border-destructive' : 'border-input'} rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary`}
                      />
                      {form.formState.errors.email && <p className="text-xs text-destructive">{form.formState.errors.email.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Special Requests (Optional)</label>
                      <textarea 
                        rows={3}
                        placeholder="Late check-in, extra bed, ground floor preference..."
                        {...form.register('requests')}
                        className="w-full bg-background border border-input rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
                      />
                    </div>
                  </div>

                  <div className="bg-muted p-4 rounded-lg text-sm text-muted-foreground">
                    <p className="flex items-center gap-2 mb-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Free Cancellation up to 48 hours before check-in.</p>
                    <p className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> No payment required right now. Architecture ready for payment gateway integration.</p>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-secondary text-primary font-bold py-3.5 rounded-md hover:bg-secondary/90 transition-colors shadow-md text-lg"
                  >
                    Request Booking
                  </button>
                </form>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-card rounded-2xl shadow-xl overflow-hidden border border-border p-8 md:p-12 text-center"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-serif text-primary mb-4">Booking Request Received!</h2>
              <p className="text-lg text-muted-foreground mb-2">Thank you, {form.getValues('name')}.</p>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                We have received your request for a {form.getValues('roomType')}. Our reservation team will confirm availability and contact you via WhatsApp or Call within 2 hours.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button 
                  onClick={() => setLocation('/')}
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors"
                >
                  Return to Home
                </button>
                <button 
                  onClick={() => {
                    setIsSuccess(false);
                    form.reset();
                  }}
                  className="bg-background border border-border text-foreground px-6 py-3 rounded-md font-semibold hover:bg-muted transition-colors"
                >
                  Book Another Room
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
