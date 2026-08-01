import { Link } from 'wouter';
import { useSEO } from '@/lib/seo';

export default function NotFound() {
  useSEO({
    title: 'Page Not Found',
    description: 'The page you\u2019re looking for doesn\u2019t exist. Return to the Hotel Jatashankar homepage.',
    path: '/404',
    noindex: true,
  });

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 pt-24 text-center">
      <h1 className="text-8xl font-serif text-primary mb-4">404</h1>
      <h2 className="text-2xl font-serif text-foreground mb-6">Page Not Found</h2>
      <p className="text-muted-foreground mb-8 max-w-md mx-auto">
        We couldn't find the page you're looking for. It might have been moved or doesn't exist.
      </p>
      <Link href="/" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/90 h-11 px-8">
        Return to Homepage
      </Link>
    </div>
  );
}
