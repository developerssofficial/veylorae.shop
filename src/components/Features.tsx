import { Truck, Shield, RefreshCcw, Clock } from 'lucide-react'

const features = [
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'Complimentary shipping on orders over $500',
  },
  {
    icon: Shield,
    title: 'Secure Payment',
    description: '100% secure payment processing',
  },
  {
    icon: RefreshCcw,
    title: 'Easy Returns',
    description: '30-day hassle-free returns',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Dedicated customer service team',
  },
]

export default function Features() {
  return (
    <section className="py-16 border-y border-border bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <feature.icon className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-medium text-foreground mb-2">{feature.title}</h3>
              <p className="text-foreground/50 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}