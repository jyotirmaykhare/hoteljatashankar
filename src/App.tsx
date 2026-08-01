import { Suspense, lazy } from 'react';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// Home is kept as an eager import since it's the most likely first-load route.
import Home from '@/pages/Home';

// All other pages are code-split per route: each becomes its own chunk that
// only downloads when the visitor actually navigates there, instead of being
// bundled into the single ~634KB initial payload (Phase 1 audit finding #3).
const Rooms = lazy(() => import('@/pages/Rooms'));
const Restaurant = lazy(() => import('@/pages/Restaurant'));
const Menu = lazy(() => import('@/pages/Menu'));
const Gallery = lazy(() => import('@/pages/Gallery'));
const About = lazy(() => import('@/pages/About'));
const Facilities = lazy(() => import('@/pages/Facilities'));
const Nearby = lazy(() => import('@/pages/Nearby'));
const Contact = lazy(() => import('@/pages/Contact'));
const Book = lazy(() => import('@/pages/Book'));
const Policy = lazy(() => import('@/pages/Policy'));
const Sitemap = lazy(() => import('@/pages/Sitemap'));
const Faq = lazy(() => import('@/pages/Faq'));
const NotFound = lazy(() => import('@/pages/not-found'));

import ScrollToTop from '@/components/layout/ScrollToTop';
import PageLoader from '@/components/layout/PageLoader';

const queryClient = new QueryClient();

function Router() {
  return (
    <Suspense fallback={<PageLoader />}>
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
        <Route path="/faq" component={Faq} />
        <Route path="/sitemap" component={Sitemap} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
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
