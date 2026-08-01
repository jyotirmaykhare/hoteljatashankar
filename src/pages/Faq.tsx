import { Link } from 'wouter';
import { useSEO } from '@/lib/seo';

const FAQS = [
  ['Does Hotel Jatashankar provide AC rooms?', 'Yes. Hotel Jatashankar offers air-conditioned room options for a comfortable stay in Chhatarpur.'],
  ['Is parking available?', 'Yes, complimentary secure parking is available for hotel guests, subject to space availability.'],
  ['Is the restaurant pure vegetarian?', 'Yes. The in-house restaurant serves pure vegetarian food and is open from 7:00 AM to 11:00 PM.'],
  ['How far is Khajuraho from the hotel?', 'Khajuraho is about 45 km from Hotel Jatashankar, approximately a one-hour drive by road.'],
  ['Is online booking available?', 'You can enquire about room availability through the booking page, by phone, or by WhatsApp.'],
  ['Where is Hotel Jatashankar located?', 'The hotel is on Mahoba Road, Near Bus Stand, Chhatarpur, Madhya Pradesh 471001, India.'],
  ['Is the hotel suitable for families and business travellers?', 'Yes. AC rooms, WiFi, secure parking, an in-house restaurant, and a central location make the hotel suitable for family stays and business visits.'],
] as const;

export default function Faq() {
  useSEO({
    title: 'Hotel FAQs',
    description: 'Find answers about AC rooms, parking, pure vegetarian dining, booking, Khajuraho travel, and stays at Hotel Jatashankar in Chhatarpur.',
    path: '/faq',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQS.map(([name, text]) => ({
        '@type': 'Question', name,
        acceptedAnswer: { '@type': 'Answer', text },
      })),
    },
  });

  return (
    <div className="w-full min-h-screen bg-background pt-32 pb-20">
      <main className="container mx-auto max-w-4xl px-4 md:px-6">
        <header className="text-center mb-12">
          <p className="text-secondary font-bold tracking-widest uppercase text-sm mb-2">Helpful Information</p>
          <h1 className="text-4xl md:text-5xl font-serif text-primary">Frequently Asked Questions</h1>
          <p className="mt-4 text-muted-foreground">Plan your stay, dining, and travel around Chhatarpur with Hotel Jatashankar.</p>
        </header>
        <section aria-label="Hotel frequently asked questions" className="space-y-5">
          {FAQS.map(([question, answer]) => (
            <article key={question} className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-xl font-serif text-primary mb-2">{question}</h2>
              <p className="text-muted-foreground leading-relaxed">{answer}</p>
            </article>
          ))}
        </section>
        <p className="mt-10 text-center text-muted-foreground">
          Need more help? <Link href="/contact" className="font-semibold text-primary hover:text-secondary underline underline-offset-4">Contact Hotel Jatashankar</Link> or <Link href="/book" className="font-semibold text-primary hover:text-secondary underline underline-offset-4">enquire about a room</Link>.
        </p>
      </main>
    </div>
  );
}
