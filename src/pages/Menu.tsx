import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Info, MapPin, MessageCircle, Phone, Search, Utensils } from 'lucide-react';
import FloatingCTAs from '@/components/ui/FloatingCTAs';
import { SITE_URL, useSEO } from '@/lib/seo';

type MenuItem = {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  keywords: string[];
};

const CATEGORY_DATA: Record<string, string[]> = {
  Thali: ['Veg Thali|150'],
  'Main Course': [
    'Spl. Mix Veg Vegetable|170', 'Paneer Tikka|190', 'Green Pees Masala|160', 'Paneer Reshmi|190', 'Paneer Bhurji|190', 'Paneer Do Pyaja|190', 'Butter Paneer Masala|190', 'Shahi Paneer|190', 'Paneer Pasanda|200', 'Paneer Jaipuri|200', 'Handi Paneer|200', 'Tamatar Paneer Masala|160', 'Shahi Korma|170', 'Chilli Paneer|200', 'Sev Tamatar|170', 'Methi Mutter Malai|170', 'Milk Sev|160', 'Mutter Paneer|190', 'Kadhai Paneer|200', 'Aalu Dum|150', 'Stuffed Tamatar|160', 'Malai Kofta|180', 'Palak Paneer|160', 'Khoya Paneer|180', 'Kaju Curry|220', 'Kaju Paneer|250', 'Chole Masala|160', 'Chole Punjabi|180', 'Chole Paneer|190', 'Paneer Masala|190', 'Aalu Tamatar Fry|140', 'Jeera Aalu|140', 'Mutter Masala|150', 'Tamatar Chatani|140', 'Butter Dal Fry|110', 'Dal Fry|100', 'Dal Tadka|110', 'Dal Sada|70', 'Dal Makhani|140', 'Dal Muglai|130', 'Kadhi Fry|100', 'Papad Dry|15', 'Papad Fry|20', 'Butter Makhan|15', 'Curd Half|50', 'Boondi Raita|100', 'Veg Raita|120', 'Fruit Raita|140', 'Salad|50', 'Kachumar Salad|60',
  ],
  Seasonal: ['Gobhi Aalu Masala|120', 'Parval Aalu|120', 'Bhindi Masala|120', 'Baigan Bharta|120', 'Kathal|120', 'Karela|120', 'Methi Aalu|120', 'Aalu Mutter|120', 'Aalu Tamatar|120'],
  Pulav: ['Mutter Pulav|150', 'Mix Veg Pulav|170', 'Veg Biryani|170', 'Paneer Pulav|180', 'Dal Rice Fry|160', 'Paneer Butter Rice|170', 'Rajma Rice|180', 'Chole Rice|180', 'Punjabi Pulav|160'],
  Rice: ['Sada Rice|120', 'Jeera Rice|140'],
  Paratha: ['Aalu Paratha|50', 'Stuffed Paratha|50', 'Aalu Butter Paratha|60', 'Lachha Paratha|50', 'Gobhi Paratha|50', 'Gobhi Butter Paratha|60', 'Paneer Paratha|60', 'Paneer Butter Paratha|70', 'Methi Paratha|50', 'Methi Butter Paratha|60', 'Plain Paratha|35', 'Plain Butter Paratha|40'],
  'Roti & Naan': ['Tava Roti|10', 'Butter Tava Roti|15', 'Tandoori Roti|10', 'Butter Tandoori Roti|15', 'Butter Naan|40', 'Paneer Naan|45', 'Garlic Naan|50', 'Masala Kulcha|40', 'Paneer Kulcha|50', 'Missi Roti Butter|30'],
  'Soup & Drinks': ['Tomato Soup|60', 'Chaach Namkeen|35', 'Lassi|50'],
  Sweets: ['Kheer|50', 'Gajar Halwa|50', 'Ras Malai|35', 'Tea|20', 'Coffee|40', 'Mineral Water|20'],
  Snacks: ['Chole Roasted|130', 'Mutter Fry|110', 'Paneer Dry|105', 'Paneer Fry|120', 'Papad Masala|30', 'Finger Chips|110', 'Peanut Masala|120', 'Paneer Pakoda|120'],
  'Ice Cream': ['Butter Scotch|40', 'Choco Vanilla|30', 'Strawberry Cup|15', 'Vanilla Cup|15', 'Senior Chocobar|20', 'Shahi Kulfi|20'],
};

const CATEGORY_NAMES = Object.keys(CATEGORY_DATA);
const MAP_URL = 'https://www.google.com/maps/search/?api=1&query=Hotel+Jatashankar+Chhatarpur+Madhya+Pradesh';
const WHATSAPP_URL = 'https://wa.me/917000617811?text=Hello%20Hotel%20Jatashankar%2C%20I%20would%20like%20to%20order%20food.';

function makeDescription(name: string, category: string) {
  return `${name} is a freshly prepared pure vegetarian ${category.toLowerCase()} selection at Hotel Jatashankar in Chhatarpur. Cooked with quality ingredients and balanced Indian spices, it is a comforting choice for family lunch, dinner, takeaway, or a relaxed meal at our vegetarian restaurant.`;
}

function makeKeywords(name: string, category: string) {
  return [
    name,
    `${name} Chhatarpur`,
    `${category} menu Chhatarpur`,
    'Pure Veg Restaurant Chhatarpur',
    'Best Veg Restaurant in Chhatarpur',
    'Veg Food Chhatarpur',
    'Family Restaurant Chhatarpur',
  ];
}

const MENU_ITEMS: MenuItem[] = CATEGORY_NAMES.flatMap((category) =>
  CATEGORY_DATA[category].map((entry, index) => {
    const [name, price] = entry.split('|');
    return {
      id: `${category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${index + 1}`,
      name,
      price: Number(price),
      category,
      description: makeDescription(name, category),
      keywords: makeKeywords(name, category),
    };
  }),
);

const FAQS = [
  {
    question: 'Is Hotel Jatashankar a pure veg restaurant in Chhatarpur?',
    answer: 'Yes. Hotel Jatashankar serves a 100% pure vegetarian menu, with North Indian favourites, paneer dishes, veg thali, rice, breads, snacks, desserts, and beverages for lunch and dinner.',
  },
  {
    question: 'What is the price of a veg thali at Hotel Jatashankar?',
    answer: 'The Veg Thali is priced at ₹150. Please call the restaurant for current availability, serving details, and any seasonal updates.',
  },
  {
    question: 'Does the restaurant offer North Indian and Punjabi food?',
    answer: 'Yes. The menu includes Paneer Butter Masala, Shahi Paneer, Dal Makhani, Chole Punjabi, Kadhai Paneer, parathas, naan, kulcha, and other North Indian vegetarian dishes.',
  },
  {
    question: 'Can I order food or get directions to Hotel Jatashankar?',
    answer: 'Yes. Use the Call or Order buttons on this page to contact the restaurant, or use Get Directions to find Hotel Jatashankar in Chhatarpur, Madhya Pradesh.',
  },
];

function VegMark() {
  return <span aria-label="Pure vegetarian" className="flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border-2 border-green-600"><span className="h-2 w-2 rounded-full bg-green-600" /></span>;
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const structuredData = useMemo(() => {
    const menuSections = CATEGORY_NAMES.map((category) => ({
      '@type': 'MenuSection',
      name: category,
      hasMenuItem: MENU_ITEMS.filter((item) => item.category === category).map((item) => ({
        '@type': 'MenuItem',
        name: item.name,
        description: item.description,
        keywords: item.keywords.join(', '),
        suitableForDiet: 'https://schema.org/VegetarianDiet',
        offers: { '@type': 'Offer', price: item.price, priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
      })),
    }));
    const itemList = MENU_ITEMS.map((item, position) => ({
      '@type': 'ListItem', position: position + 1, name: item.name,
      item: { '@type': 'MenuItem', name: item.name, description: item.description, offers: { '@type': 'Offer', price: item.price, priceCurrency: 'INR' } },
    }));
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@id': `${SITE_URL}/#restaurant`, '@type': 'Restaurant', name: 'Hotel Jatashankar Restaurant',
          description: 'Pure vegetarian family restaurant in Chhatarpur, Madhya Pradesh.', servesCuisine: ['North Indian', 'Punjabi', 'Vegetarian Indian'],
          telephone: '+91-70006-17811', priceRange: '₹', menu: `${SITE_URL}/menu`,
          address: { '@type': 'PostalAddress', addressLocality: 'Chhatarpur', addressRegion: 'Madhya Pradesh', postalCode: '471001', addressCountry: 'IN' },
          hasMenu: { '@id': `${SITE_URL}/menu#menu` },
        },
        {
          '@id': `${SITE_URL}/#localbusiness`, '@type': 'LocalBusiness', name: 'Hotel Jatashankar',
          telephone: '+91-70006-17811', url: SITE_URL,
          address: { '@type': 'PostalAddress', addressLocality: 'Chhatarpur', addressRegion: 'Madhya Pradesh', postalCode: '471001', addressCountry: 'IN' },
        },
        { '@id': `${SITE_URL}/menu#menu`, '@type': 'Menu', name: 'Hotel Jatashankar Pure Veg Restaurant Menu', hasMenuSection: menuSections },
        { '@type': 'ItemList', name: 'Hotel Jatashankar Menu Items', numberOfItems: MENU_ITEMS.length, itemListElement: itemList },
        { '@type': 'BreadcrumbList', itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Restaurant', item: `${SITE_URL}/restaurant` },
          { '@type': 'ListItem', position: 3, name: 'Menu', item: `${SITE_URL}/menu` },
        ] },
        { '@type': 'FAQPage', mainEntity: FAQS.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) },
      ],
    };
  }, []);

  useSEO({
    title: 'Best Veg Restaurant Menu in Chhatarpur',
    description: 'Explore Hotel Jatashankar’s pure veg menu in Chhatarpur: veg thali, paneer, Punjabi, North Indian, lunch and dinner favourites.',
    path: '/menu', image: '/restaurant-interior.jpg', structuredData,
  });

  const normalizedSearch = searchQuery.trim().toLowerCase();
  const filteredItems = MENU_ITEMS.filter((item) => {
    const categoryMatches = activeCategory === 'All' || item.category === activeCategory;
    const searchMatches = !normalizedSearch || [item.name, item.description, item.category, ...item.keywords].join(' ').toLowerCase().includes(normalizedSearch);
    return categoryMatches && searchMatches;
  });

  return (
    <main className="min-h-screen bg-background pb-20 pt-24">
      <section className="bg-primary bg-[url('/restaurant-interior.jpg')] bg-cover bg-center bg-blend-overlay py-14 text-primary-foreground md:py-20">
        <div className="container mx-auto px-4 text-center">
          <nav aria-label="Breadcrumb" className="mb-5 flex justify-center gap-2 text-sm text-primary-foreground/80"><Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/restaurant">Restaurant</Link><span aria-hidden="true">/</span><span aria-current="page">Menu</span></nav>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-secondary">Hotel Jatashankar • Chhatarpur</p>
            <h1 className="font-serif text-4xl md:text-5xl">Pure Veg Restaurant Menu</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/90">A family-friendly Chhatarpur menu of vegetarian thalis, paneer favourites, Punjabi dishes, fresh breads, rice, snacks, and sweets.</p>
          </motion.div>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href="tel:+917000617811" className="inline-flex items-center gap-2 rounded-md bg-secondary px-4 py-2.5 font-semibold text-primary transition-colors hover:bg-secondary/90"><Phone className="h-4 w-4" />Call</a>
            <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/60 px-4 py-2.5 font-semibold text-white transition-colors hover:bg-white/15"><MapPin className="h-4 w-4" />Get Directions</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/60 px-4 py-2.5 font-semibold text-white transition-colors hover:bg-white/15"><MessageCircle className="h-4 w-4" />Order</a>
            <a href="#menu" className="inline-flex items-center gap-2 rounded-md border border-white/60 px-4 py-2.5 font-semibold text-white transition-colors hover:bg-white/15"><Utensils className="h-4 w-4" />View Menu</a>
          </div>
        </div>
      </section>

      <section id="menu" aria-label="Menu filters" className="sticky top-[72px] z-30 border-b border-border bg-background/95 py-5 shadow-sm backdrop-blur">
        <div className="container mx-auto px-4">
          <label className="relative block max-w-xl" htmlFor="menu-search"><Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" /><span className="sr-only">Search the menu</span><input id="menu-search" type="search" placeholder="Search dishes, such as paneer, thali, naan..." className="w-full rounded-full border border-border bg-card py-2.5 pl-10 pr-4 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} /></label>
          <div className="-mx-4 mt-4 flex gap-2 overflow-x-auto px-4 pb-1 md:mx-0 md:px-0" role="tablist" aria-label="Menu categories">
            {['All', ...CATEGORY_NAMES].map((category) => <button key={category} type="button" role="tab" aria-selected={activeCategory === category} onClick={() => setActiveCategory(category)} className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${activeCategory === category ? 'bg-secondary font-bold text-primary' : 'bg-muted text-muted-foreground hover:bg-muted/80'}`}>{category}</button>)}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10" aria-live="polite">
        <div className="mb-6 flex items-center justify-between gap-4"><p className="text-sm text-muted-foreground">{filteredItems.length} vegetarian {filteredItems.length === 1 ? 'dish' : 'dishes'} shown</p><span className="flex items-center gap-2 text-sm text-muted-foreground"><VegMark />100% Pure Veg</span></div>
        {filteredItems.length === 0 ? <div className="py-20 text-center"><Info className="mx-auto mb-4 h-12 w-12 text-muted-foreground" /><h2 className="text-xl font-semibold">No dishes found</h2><p className="mt-2 text-muted-foreground">Try a different dish name or select another category.</p><button type="button" onClick={() => { setSearchQuery(''); setActiveCategory('All'); }} className="mt-4 font-medium text-secondary underline">Clear filters</button></div> : <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">{filteredItems.map((item, index) => <motion.article key={item.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2, delay: Math.min(index, 8) * 0.03 }} className="group rounded-xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md"><div className="flex items-start justify-between gap-4"><div className="flex items-start gap-2"><VegMark /><div><h2 className="font-serif text-lg font-semibold text-foreground group-hover:text-primary">{item.name}</h2><p className="mt-1 text-xs font-medium uppercase tracking-wide text-secondary">{item.category}</p></div></div><data value={item.price} className="shrink-0 font-semibold text-primary">₹{item.price}</data></div><p className="mt-4 text-sm leading-6 text-muted-foreground">{item.description}</p></motion.article>)}</div>}
      </section>

      <section className="border-y border-border bg-muted/40 py-12"><div className="container mx-auto px-4"><div className="mx-auto max-w-3xl"><p className="text-center text-sm font-semibold uppercase tracking-[0.16em] text-secondary">Menu FAQs</p><h2 className="mt-2 text-center font-serif text-3xl text-primary">Pure Veg Dining in Chhatarpur</h2><div className="mt-8 space-y-3">{FAQS.map((faq) => <details key={faq.question} className="rounded-lg border border-border bg-card p-5"><summary className="cursor-pointer font-semibold text-foreground">{faq.question}</summary><p className="mt-3 leading-7 text-muted-foreground">{faq.answer}</p></details>)}</div></div></div></section>

      <section className="container mx-auto px-4 py-12"><div className="rounded-xl bg-primary p-6 text-primary-foreground md:flex md:items-center md:justify-between"><div><h2 className="font-serif text-2xl text-secondary">Planning lunch or dinner in Chhatarpur?</h2><p className="mt-2 text-primary-foreground/80">Explore our <Link href="/restaurant" className="underline">pure veg restaurant</Link>, see our <Link href="/nearby" className="underline">nearby attractions</Link>, or call for today’s availability.</p></div><div className="mt-5 flex flex-wrap gap-3 md:mt-0"><a href="tel:+917000617811" className="rounded-md bg-secondary px-5 py-2.5 font-semibold text-primary hover:bg-secondary/90">Call Restaurant</a><Link href="/contact" className="rounded-md border border-secondary px-5 py-2.5 font-semibold text-secondary hover:bg-secondary/10">Contact Us</Link></div></div></section>
      <FloatingCTAs />
    </main>
  );
}
