"use client"

import { useState } from 'react'
import { ArrowRight, Heart } from 'lucide-react'
import { cn } from '@/lib/utils'

const categories = ['All', 'Apparel', 'Accessories', 'Jewelry']

const products = [
  {
    id: 1,
    name: 'Silk Evening Dress',
    category: 'Apparel',
    price: 890,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop',
    badge: 'New',
  },
  {
    id: 2,
    name: 'Rose Gold Chain',
    category: 'Jewelry',
    price: 320,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop',
    badge: null,
  },
  {
    id: 3,
    name: 'Cashmere Wrap Coat',
    category: 'Apparel',
    price: 1250,
    image: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=600&h=800&fit=crop',
    badge: 'Popular',
  },
  {
    id: 4,
    name: 'Leather Clutch Bag',
    category: 'Accessories',
    price: 480,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=800&fit=crop',
    badge: null,
  },
  {
    id: 5,
    name: 'Pearl Drop Earrings',
    category: 'Jewelry',
    price: 275,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=800&fit=crop',
    badge: 'New',
  },
  {
    id: 6,
    name: 'Merino Wool Blazer',
    category: 'Apparel',
    price: 780,
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=800&fit=crop',
    badge: null,
  },
]

export default function Collections() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory)

  return (
    <section id="collections" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-rosegold-500 tracking-[0.3em] uppercase text-sm mb-4">Curated for You</p>
          <h2 className="font-serif text-4xl sm:text-5xl text-foreground mb-6">Our Collections</h2>
          <div className="w-24 h-px bg-primary mx-auto" />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-8 py-3 text-sm tracking-wider uppercase transition-all duration-300",
                activeCategory === category
                  ? "bg-foreground text-white"
                  : "bg-transparent text-foreground/60 hover:text-foreground border border-foreground/20 hover:border-foreground/40"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden bg-cream-100 mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Badge */}
                {product.badge && (
                  <span className="absolute top-4 left-4 px-4 py-1 bg-foreground text-white text-xs tracking-wider uppercase">
                    {product.badge}
                  </span>
                )}

                {/* Hover Actions */}
                <div className={cn(
                  "absolute inset-0 bg-foreground/10 flex items-center justify-center gap-4 transition-opacity duration-300",
                  hoveredId === product.id ? "opacity-100" : "opacity-0"
                )}>
                  <button className="p-4 bg-white hover:bg-primary hover:text-white transition-colors rounded-full">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="px-6 py-3 bg-white hover:bg-foreground hover:text-white transition-colors text-sm tracking-wider uppercase">
                    Quick View
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="text-center">
                <p className="text-foreground/50 text-xs tracking-wider uppercase mb-2">{product.category}</p>
                <h3 className="font-serif text-lg text-foreground mb-2">{product.name}</h3>
                <p className="text-rosegold-600 font-medium">${product.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-16">
          <a
            href="#"
            className="group inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm tracking-wider uppercase">View All Products</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}