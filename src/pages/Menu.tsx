import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';
import { Search, Info, ChefHat, Sparkles } from 'lucide-react';
import FloatingCTAs from '@/components/ui/FloatingCTAs';

// Menu data generation - robust enough for search/filter
const CATEGORIES = [
  'All', 'Soups', 'Starters', 'Main Course - Paneer', 'Main Course - Veg', 
  'Dal', 'Breads', 'Rice & Biryani', 'Chinese', 'Desserts', 'Beverages'
];

const MENU_ITEMS = [
  // Soups
  { id: 1, name: 'Tomato Soup', price: 110, category: 'Soups', veg: true, desc: 'Classic creamy tomato soup served with croutons.' },
  { id: 2, name: 'Sweet Corn Veg Soup', price: 120, category: 'Soups', veg: true, desc: 'Healthy soup with sweet corn and mixed vegetables.' },
  { id: 3, name: 'Hot & Sour Soup', price: 130, category: 'Soups', veg: true, spicy: 'Medium', desc: 'Spicy and tangy Chinese style soup.' },
  { id: 4, name: 'Manchow Soup', price: 130, category: 'Soups', veg: true, spicy: 'Spicy', desc: 'Dark brown soup prepared with various vegetables, thickened with broth and corn flour.' },

  // Starters
  { id: 5, name: 'Hara Bhara Kabab', price: 190, category: 'Starters', veg: true, popular: true, desc: 'Healthy and delicious vegetarian kababs made with spinach, potatoes and green peas.' },
  { id: 6, name: 'Paneer Tikka', price: 240, category: 'Starters', veg: true, chefReq: true, desc: 'Cottage cheese marinated in spices and grilled in a tandoor.' },
  { id: 7, name: 'Veg Manchurian Dry', price: 180, category: 'Starters', veg: true, desc: 'Deep-fried vegetable balls in a soy sauce based gravy.' },
  { id: 8, name: 'Chilly Paneer Dry', price: 220, category: 'Starters', veg: true, spicy: 'Spicy', desc: 'Crispy paneer chunks tossed in spicy Chinese sauces.' },
  { id: 9, name: 'Crispy Corn', price: 170, category: 'Starters', veg: true, desc: 'Fried sweet corn kernels tossed with spices.' },

  // Main Course - Paneer
  { id: 10, name: 'Paneer Butter Masala', price: 260, category: 'Main Course - Paneer', veg: true, popular: true, desc: 'Rich and creamy curry made with paneer, spices, onions, tomatoes, cashews and butter.' },
  { id: 11, name: 'Kadai Paneer', price: 250, category: 'Main Course - Paneer', veg: true, spicy: 'Medium', desc: 'Paneer and bell peppers cooked in a spicy masala.' },
  { id: 12, name: 'Palak Paneer', price: 240, category: 'Main Course - Paneer', veg: true, desc: 'Paneer in a thick paste made from puréed spinach and seasoned with garlic and garam masala.' },
  { id: 13, name: 'Paneer Lababdar', price: 270, category: 'Main Course - Paneer', veg: true, chefReq: true, desc: 'Luscious combination of cottage cheese and exotic gravy.' },
  { id: 14, name: 'Shahi Paneer', price: 250, category: 'Main Course - Paneer', veg: true, desc: 'Preparation of paneer in a thick gravy made up of cream, tomatoes and spices.' },

  // Main Course - Veg
  { id: 15, name: 'Mix Veg', price: 210, category: 'Main Course - Veg', veg: true, desc: 'Assorted seasonal vegetables cooked in an Indian curry base.' },
  { id: 16, name: 'Malai Kofta', price: 240, category: 'Main Course - Veg', veg: true, popular: true, desc: 'Potato and paneer balls served in a smooth, rich creamy gravy.' },
  { id: 17, name: 'Veg Kolhapuri', price: 220, category: 'Main Course - Veg', veg: true, spicy: 'Spicy', desc: 'Mixed vegetables cooked in a thick spicy Kolhapuri gravy.' },
  { id: 18, name: 'Bhindi Masala', price: 190, category: 'Main Course - Veg', veg: true, desc: 'Semi-dry okra curry cooked with onions and tomatoes.' },
  { id: 19, name: 'Jeera Aloo', price: 150, category: 'Main Course - Veg', veg: true, desc: 'Boiled potatoes sautéed in cumin seeds and Indian spices.' },

  // Dal
  { id: 20, name: 'Dal Fry', price: 140, category: 'Dal', veg: true, desc: 'Yellow lentils cooked and tempered with ghee and spices.' },
  { id: 21, name: 'Dal Tadka', price: 160, category: 'Dal', veg: true, popular: true, desc: 'Yellow lentils tempered with a smoky ghee and spice infusion.' },
  { id: 22, name: 'Dal Makhani', price: 190, category: 'Dal', veg: true, chefReq: true, desc: 'Whole black lentils and red kidney beans cooked slowly with butter and cream.' },

  // Breads
  { id: 23, name: 'Tandoori Roti', price: 20, category: 'Breads', veg: true },
  { id: 24, name: 'Butter Roti', price: 25, category: 'Breads', veg: true },
  { id: 25, name: 'Plain Naan', price: 40, category: 'Breads', veg: true },
  { id: 26, name: 'Butter Naan', price: 50, category: 'Breads', veg: true, popular: true },
  { id: 27, name: 'Garlic Naan', price: 60, category: 'Breads', veg: true },
  { id: 28, name: 'Lachha Paratha', price: 55, category: 'Breads', veg: true },
  { id: 29, name: 'Missi Roti', price: 45, category: 'Breads', veg: true },

  // Rice & Biryani
  { id: 30, name: 'Plain Rice', price: 110, category: 'Rice & Biryani', veg: true },
  { id: 31, name: 'Jeera Rice', price: 130, category: 'Rice & Biryani', veg: true, popular: true },
  { id: 32, name: 'Veg Pulao', price: 170, category: 'Rice & Biryani', veg: true },
  { id: 33, name: 'Veg Biryani', price: 220, category: 'Rice & Biryani', veg: true, chefReq: true, spicy: 'Medium', desc: 'Aromatic basmati rice cooked with mixed vegetables and rich spices. Served with raita.' },
  { id: 34, name: 'Peas Pulao', price: 160, category: 'Rice & Biryani', veg: true },

  // Chinese
  { id: 35, name: 'Veg Fried Rice', price: 180, category: 'Chinese', veg: true },
  { id: 36, name: 'Veg Hakka Noodles', price: 180, category: 'Chinese', veg: true, popular: true },
  { id: 37, name: 'Chilly Paneer Gravy', price: 240, category: 'Chinese', veg: true, spicy: 'Spicy' },
  { id: 38, name: 'Veg Manchurian Gravy', price: 200, category: 'Chinese', veg: true },

  // Desserts
  { id: 39, name: 'Gulab Jamun (2 pcs)', price: 80, category: 'Desserts', veg: true, popular: true },
  { id: 40, name: 'Rasgulla (2 pcs)', price: 70, category: 'Desserts', veg: true },
  { id: 41, name: 'Ice Cream (Vanilla/Chocolate/Strawberry)', price: 90, category: 'Desserts', veg: true },
  { id: 42, name: 'Special Kheer', price: 110, category: 'Desserts', veg: true },

  // Beverages
  { id: 43, name: 'Masala Tea', price: 30, category: 'Beverages', veg: true },
  { id: 44, name: 'Coffee', price: 40, category: 'Beverages', veg: true },
  { id: 45, name: 'Sweet Lassi', price: 80, category: 'Beverages', veg: true, popular: true },
  { id: 46, name: 'Salted Lassi', price: 70, category: 'Beverages', veg: true },
  { id: 47, name: 'Cold Coffee', price: 110, category: 'Beverages', veg: true },
  { id: 48, name: 'Fresh Lime Soda', price: 60, category: 'Beverages', veg: true },
  { id: 49, name: 'Packaged Drinking Water', price: 20, category: 'Beverages', veg: true },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMenu = MENU_ITEMS.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          (item.desc && item.desc.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full min-h-screen bg-background pt-24 pb-20">
      
      <section className="bg-primary text-primary-foreground py-16 md:py-20 bg-[url('/restaurant-interior.jpg')] bg-cover bg-center bg-blend-overlay">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif mb-4">Our Food Menu</h1>
            <p className="max-w-2xl mx-auto text-primary-foreground/90 text-lg">
              100% Pure Vegetarian Delicacies. Fresh ingredients, authentic spices, and hygienic preparation.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 border-b border-border sticky top-[72px] z-30 bg-background/95 backdrop-blur shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search dishes..." 
                className="w-full bg-card border border-border rounded-full pl-10 pr-4 py-2 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            {/* Legend */}
            <div className="flex gap-4 text-sm">
              <span className="flex items-center gap-1 text-muted-foreground"><div className="w-3 h-3 rounded-full border border-green-600 flex items-center justify-center"><div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div></div> Pure Veg</span>
              <span className="flex items-center gap-1 text-secondary font-medium"><Sparkles className="w-4 h-4" /> Popular</span>
              <span className="flex items-center gap-1 text-primary font-medium"><ChefHat className="w-4 h-4" /> Chef's Special</span>
            </div>
          </div>
          
          {/* Categories */}
          <div className="flex overflow-x-auto gap-2 py-4 mt-4 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category 
                    ? 'bg-secondary text-primary font-bold' 
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        {filteredMenu.length === 0 ? (
          <div className="text-center py-20">
            <Info className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-medium text-foreground">No dishes found</h3>
            <p className="text-muted-foreground mt-2">Try adjusting your search or category filter.</p>
            <button 
              onClick={() => {setSearchQuery(''); setActiveCategory('All');}}
              className="mt-4 text-secondary underline hover:text-primary transition-colors"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredMenu.map((item, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  key={item.id}
                  className="bg-card border border-border rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-sm border-2 border-green-600 flex items-center justify-center shrink-0">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      </div>
                      <h3 className="font-serif font-semibold text-lg text-foreground group-hover:text-primary transition-colors">{item.name}</h3>
                    </div>
                    <span className="font-semibold text-primary">₹{item.price}</span>
                  </div>
                  
                  {item.desc && (
                    <p className="text-sm text-muted-foreground mt-2 pr-4">{item.desc}</p>
                  )}
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {item.popular && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider bg-secondary/20 text-secondary-foreground px-2 py-1 rounded">
                        <Sparkles className="w-3 h-3" /> Popular
                      </span>
                    )}
                    {item.chefReq && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary px-2 py-1 rounded">
                        <ChefHat className="w-3 h-3" /> Chef's Rec
                      </span>
                    )}
                    {item.spicy && (
                      <span className={`inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded ${
                        item.spicy === 'Spicy' ? 'bg-red-100 text-red-700' : 'bg-orange-100 text-orange-700'
                      }`}>
                        {item.spicy}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </section>

      <div className="container mx-auto px-4 mt-8">
        <div className="bg-muted rounded-xl p-6 text-center md:flex justify-between items-center">
          <div className="text-left mb-4 md:mb-0">
            <h4 className="font-serif text-lg text-primary font-bold">Ready to dine with us?</h4>
            <p className="text-sm text-muted-foreground mt-1">Visit our family restaurant or order to your room.</p>
          </div>
          <div className="flex gap-4 justify-center">
            <a href="tel:+919999999999" className="bg-white text-primary border border-primary px-6 py-2 rounded-md font-semibold text-sm hover:bg-muted transition-colors">Call to Order</a>
            <Link href="/restaurant" className="bg-primary text-primary-foreground px-6 py-2 rounded-md font-semibold text-sm hover:bg-primary/90 transition-colors">Restaurant Info</Link>
          </div>
        </div>
      </div>

      <FloatingCTAs />
    </div>
  );
}
