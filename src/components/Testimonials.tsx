"use client"

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { cn } from '@/lib/utils'

const testimonials = [
  {
    id: 1,
    name: 'Alexandra Chen',
    role: 'Fashion Editor',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    content: 'Veylorae represents everything I love about luxury fashion. The attention to detail and quality of materials is unmatched. Every piece feels like it was made just for me.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Torres',
    role: 'Entrepreneur',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    content: 'The sophistication and timeless design of Veylorae pieces have elevated my wardrobe completely. The customer experience is also exceptional—true luxury from start to finish.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Isabella Laurent',
    role: 'Art Director',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    content: 'As someone who appreciates design, I am consistently impressed by Veylorae\'s aesthetic. Their collections strike the perfect balance between classic elegance and modern sensibility.',
    rating: 5,
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-24 bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4">Testimonials</p>
          <h2 className="font-serif text-4xl sm:text-5xl mb-6">What Our Clients Say</h2>
          <div className="w-24 h-px bg-primary mx-auto" />
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div className="text-center px-8 sm:px-16">
            <img
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className="w-20 h-20 rounded-full mx-auto mb-8 object-cover border-4 border-primary/30"
            />
            
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>

            <blockquote className="font-serif text-xl sm:text-2xl leading-relaxed mb-8 italic text-white/90">
              "{testimonials[current].content}"
            </blockquote>

            <div>
              <p className="font-medium text-lg">{testimonials[current].name}</p>
              <p className="text-white/50 text-sm">{testimonials[current].role}</p>
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-3 border border-white/20 hover:bg-primary hover:border-primary transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-3 border border-white/20 hover:bg-primary hover:border-primary transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  current === index ? "bg-primary w-8" : "bg-white/30 hover:bg-white/50"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}