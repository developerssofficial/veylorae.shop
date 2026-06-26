"use client"

import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream-50 to-cream-100">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-rosegold-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-rosegold-300/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-rosegold-100/40 rounded-full blur-3xl" />
      </div>

      {/* Decorative lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-rosegold-300/20 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-rosegold-300/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Small tagline */}
          <p className="text-rosegold-600 tracking-[0.3em] uppercase text-sm mb-6 font-medium">
            Luxury Redefined
          </p>

          {/* Main heading */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground mb-6 leading-tight">
            Welcome to
            <span className="block text-rosegold-500 italic">Veylorae</span>
          </h1>

          {/* Subtitle */}
          <p className="text-foreground/60 text-lg sm:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Discover our curated collection of exceptional pieces, where timeless elegance meets contemporary sophistication.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#collections"
              className="group inline-flex items-center justify-center px-10 py-4 bg-foreground text-white hover:bg-foreground/90 transition-all duration-300 tracking-wider uppercase text-sm"
            >
              Explore Collection
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center px-10 py-4 border-2 border-foreground/20 text-foreground hover:border-primary hover:text-primary transition-all duration-300 tracking-wider uppercase text-sm"
            >
              Our Story
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex flex-col items-center">
            <span className="text-foreground/40 text-xs tracking-widest uppercase mb-3">Scroll</span>
            <div className="w-px h-16 bg-gradient-to-b from-foreground/40 to-transparent animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}