import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { CheckCircle2, Calendar, Phone, ArrowLeft, MessageCircle } from 'lucide-react';
import { useSEO } from '@/lib/seo';

const WHATSAPP_NUMBER = '917566199040';
const CALL_NUMBER = '+917566199040';

const ROOM_TYPES = [
  'Standard AC Room',
  'Deluxe AC Room',
];

function whatsappBookingLink(roomType: string) {
  const message = `Hi, I'd like to book a ${roomType} at Hotel Jatashankar. Could you please share availability and pricing?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export default function Book() {
  useSEO({
    title: 'Book a Room',
    description: 'Book your stay at Hotel Jatashankar in Chhatarpur — message us on WhatsApp or call reception directly to check availability and confirm your reservation.',
    path: '/book',
  });

  return (
    <div className="w-full min-h-screen bg-muted/30 pt-24 pb-20 flex items-center justify-center">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card rounded-2xl shadow-xl overflow-hidden border border-border"
        >
          <div className="bg-primary p-6 md:p-8 text-primary-foreground text-center relative">
            <Link
              href="/"
              className="absolute left-6 top-1/2 -translate-y-1/2 text-primary-foreground/80 hover:text-white flex items-center gap-2 text-sm"
            >
              <ArrowLeft className="w-4 h-4" /> <span className="hidden md:inline">Back</span>
            </Link>
            <h1 className="text-2xl md:text-3xl font-serif mb-2">Reserve Your Stay</h1>
            <p className="text-primary-foreground/80 text-sm max-w-md mx-auto">
              We confirm bookings directly over WhatsApp or a quick phone call — no forms, no waiting on a callback.
            </p>
          </div>

          <div className="p-6 md:p-8 space-y-8">
            {/* Quick booking actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={whatsappBookingLink('room')}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-6 py-4 rounded-md font-semibold hover:bg-[#25D366]/90 transition-colors shadow-sm flex items-center justify-center gap-2 text-lg"
              >
                <MessageCircle className="w-5 h-5" /> Book on WhatsApp
              </a>
              <a
                href={`tel:${CALL_NUMBER}`}
                className="bg-primary text-primary-foreground px-6 py-4 rounded-md font-semibold hover:bg-primary/90 transition-colors shadow-sm flex items-center justify-center gap-2 text-lg"
              >
                <Phone className="w-5 h-5" /> Call Reception
              </a>
            </div>

            {/* Room type quick-select */}
            <div className="space-y-4">
              <h3 className="text-lg font-serif border-b border-border pb-2 text-primary">
                Have a room in mind? Message us with one tap
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {ROOM_TYPES.map((room) => (
                  <a
                    key={room}
                    href={whatsappBookingLink(room)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-3 bg-background border border-input rounded-md px-4 py-3 text-sm font-medium text-foreground hover:border-secondary hover:text-secondary transition-colors"
                  >
                    <span>{room}</span>
                    <MessageCircle className="w-4 h-4 shrink-0" />
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-muted p-4 rounded-lg text-sm text-muted-foreground space-y-2">
              <p className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Free cancellation up to 48 hours before check-in.
              </p>
              <p className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary shrink-0" /> Let us know your check-in/check-out dates and guest count when you message us — our reception will confirm availability right away.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
