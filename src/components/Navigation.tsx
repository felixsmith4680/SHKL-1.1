import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <div className="bg-black/60 backdrop-blur-md rounded-full border border-cream-100/20 shadow-2xl px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <img
              src="/SHKL footing header.png"
              alt="SHKL"
              className="h-8 w-auto"
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#shop" className="text-cream-100 hover:text-forest-400 transition-colors duration-300 text-sm font-medium tracking-wider">
              SHOP
            </a>
            <a href="#skincare" className="text-cream-100 hover:text-forest-400 transition-colors duration-300 text-sm font-medium tracking-wider">
              SKINCARE
            </a>
            <a href="#haircare" className="text-cream-100 hover:text-forest-400 transition-colors duration-300 text-sm font-medium tracking-wider">
              HAIRCARE
            </a>
            <a href="#about" className="text-cream-100 hover:text-forest-400 transition-colors duration-300 text-sm font-medium tracking-wider">
              ABOUT
            </a>
            <button className="text-cream-100 hover:text-forest-400 transition-colors duration-300">
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>

          <button
            className="md:hidden text-cream-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md rounded-3xl border border-cream-100/20 mt-4 shadow-2xl">
          <div className="px-6 py-4 space-y-4">
            <a href="#shop" className="block text-cream-100 hover:text-forest-400 transition-colors duration-300 text-sm font-medium tracking-wider">
              SHOP
            </a>
            <a href="#skincare" className="block text-cream-100 hover:text-forest-400 transition-colors duration-300 text-sm font-medium tracking-wider">
              SKINCARE
            </a>
            <a href="#haircare" className="block text-cream-100 hover:text-forest-400 transition-colors duration-300 text-sm font-medium tracking-wider">
              HAIRCARE
            </a>
            <a href="#about" className="block text-cream-100 hover:text-forest-400 transition-colors duration-300 text-sm font-medium tracking-wider">
              ABOUT
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
