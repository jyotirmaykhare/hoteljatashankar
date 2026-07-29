import React from 'react';
import { Link } from 'wouter';

export default function Policy({ type }: { type: 'privacy' | 'terms' | 'cancellation' }) {
  const content = {
    privacy: {
      title: 'Privacy Policy',
      date: 'May 1, 2024',
      text: (
        <div className="space-y-6">
          <p>At Hotel Jatashankar, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights.</p>
          
          <h3 className="text-xl font-serif text-primary mt-8 mb-4">1. Information We Collect</h3>
          <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier, title.</li>
            <li><strong>Contact Data:</strong> includes billing address, email address and telephone numbers.</li>
            <li><strong>Transaction Data:</strong> includes details about payments to and from you and other details of products and services you have purchased from us.</li>
          </ul>

          <h3 className="text-xl font-serif text-primary mt-8 mb-4">2. How We Use Your Data</h3>
          <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Where we need to perform the contract we are about to enter into or have entered into with you (e.g., booking a room).</li>
            <li>Where it is necessary for our legitimate interests and your interests and fundamental rights do not override those interests.</li>
            <li>Where we need to comply with a legal or regulatory obligation.</li>
          </ul>
        </div>
      )
    },
    terms: {
      title: 'Terms & Conditions',
      date: 'May 1, 2024',
      text: (
        <div className="space-y-6">
          <p>Welcome to Hotel Jatashankar. These terms and conditions outline the rules and regulations for the use of our website and services.</p>
          
          <h3 className="text-xl font-serif text-primary mt-8 mb-4">1. Booking and Reservations</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Guests must be at least 18 years of age to make a reservation.</li>
            <li>Valid government-issued photo identification (Aadhar card, Passport, Driving License, or Voter ID) is required at the time of check-in for all guests. PAN cards are not accepted as valid ID proof for hotel check-ins.</li>
            <li>The hotel reserves the right of admission. Unmarried/unrelated couples may be restricted from checking in as per local guidelines.</li>
          </ul>

          <h3 className="text-xl font-serif text-primary mt-8 mb-4">2. Check-in & Check-out</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Standard Check-in time is 12:00 PM (Noon).</li>
            <li>Standard Check-out time is 11:00 AM.</li>
            <li>Early check-in or late check-out is subject to availability and may incur additional charges.</li>
          </ul>

          <h3 className="text-xl font-serif text-primary mt-8 mb-4">3. Hotel Rules</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Hotel Jatashankar is a pure vegetarian property. Consumption of non-vegetarian food from outside is strictly prohibited in the rooms and premises.</li>
            <li>Smoking is prohibited in rooms and all enclosed public areas.</li>
            <li>Pets are not allowed on the hotel premises.</li>
          </ul>
        </div>
      )
    },
    cancellation: {
      title: 'Cancellation Policy',
      date: 'May 1, 2024',
      text: (
        <div className="space-y-6">
          <p>We understand that plans can change. Our cancellation policy is designed to be fair to our guests while allowing us time to rebook the rooms.</p>
          
          <h3 className="text-xl font-serif text-primary mt-8 mb-4">Standard Cancellation Rules</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Free Cancellation:</strong> Bookings canceled up to 48 hours before the standard check-in time (12:00 PM) will be eligible for a 100% refund of the advance paid.</li>
            <li><strong>Partial Charge:</strong> Bookings canceled between 24 and 48 hours before check-in will incur a charge equivalent to 50% of the first night's room rate.</li>
            <li><strong>Late Cancellation / No Show:</strong> Bookings canceled less than 24 hours before check-in, or in the case of a no-show, will incur a 100% charge of the first night's room rate.</li>
          </ul>

          <h3 className="text-xl font-serif text-primary mt-8 mb-4">Group Bookings</h3>
          <p>For bookings of 3 or more rooms, cancellation must be made at least 7 days prior to arrival for a full refund. Cancellations made within 7 days will be charged for the first night for all booked rooms.</p>

          <h3 className="text-xl font-serif text-primary mt-8 mb-4">Refund Process</h3>
          <p>Eligible refunds will be processed within 5-7 business days to the original mode of payment used during the booking.</p>
        </div>
      )
    }
  };

  const currentContent = content[type];

  return (
    <div className="w-full min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">← Back to Home</Link>
        </div>
        
        <div className="bg-card rounded-2xl shadow-sm border border-border p-8 md:p-12">
          <div className="border-b border-border pb-6 mb-8">
            <h1 className="text-3xl md:text-5xl font-serif text-primary mb-3">{currentContent.title}</h1>
            <p className="text-muted-foreground text-sm uppercase tracking-wider">Last Updated: {currentContent.date}</p>
          </div>
          
          <div className="prose prose-slate max-w-none text-foreground/80">
            {currentContent.text}
          </div>
        </div>
      </div>
    </div>
  );
}
