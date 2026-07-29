import React from 'react';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

import Home from '@/pages/Home';
import Rooms from '@/pages/Rooms';
import Restaurant from '@/pages/Restaurant';
import Menu from '@/pages/Menu';
import Gallery from '@/pages/Gallery';
import About from '@/pages/About';
import Facilities from '@/pages/Facilities';
import Nearby from '@/pages/Nearby';
import Contact from '@/pages/Contact';
import Book from '@/pages/Book';
import Policy from '@/pages/Policy';
import Sitemap from '@/pages/Sitemap';
import NotFound from '@/pages/not-found';
import ScrollToTop from '@/components/layout/ScrollToTop';

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/rooms" component={Rooms} />
      <Route path="/restaurant" component={Restaurant} />
      <Route path="/menu" component={Menu} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/about" component={About} />
      <Route path="/facilities" component={Facilities} />
      <Route path="/nearby" component={Nearby} />
      <Route path="/contact" component={Contact} />
      <Route path="/book" component={Book} />
      <Route path="/privacy" component={() => <Policy type="privacy" />} />
      <Route path="/terms" component={() => <Policy type="terms" />} />
      <Route path="/cancellation" component={() => <Policy type="cancellation" />} />
      <Route path="/sitemap" component={Sitemap} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">
              <Router />
            </main>
            <Footer />
          </div>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
