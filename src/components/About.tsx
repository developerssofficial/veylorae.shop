import { Award, Leaf, Heart, Sparkles } from 'lucide-react'

const values = [
  {
    icon: Award,
    title: 'Exceptional Quality',
    description: 'Every piece is crafted with meticulous attention to detail, using only the finest materials.',
  },
  {
    icon: Leaf,
    title: 'Sustainable Luxury',
    description: 'We are committed to ethical practices and sustainable sourcing throughout our supply chain.',
  },
  {
    icon: Heart,
    title: 'Timeless Design',
    description: 'Our designs transcend trends, creating enduring pieces that become cherished possessions.',
  },
  {
    icon: Sparkles,
    title: 'Exclusive Experience',
    description: 'From discovery to delivery, we ensure every touchpoint reflects the luxury of our brand.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=1000&fit=crop"
                alt="Our atelier"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-primary/30 -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 -z-10" />
          </div>

          {/* Content */}
          <div>
            <p className="text-rosegold-500 tracking-[0.3em] uppercase text-sm mb-4">Our Story</p>
            <h2 className="font-serif text-4xl sm:text-5xl text-foreground mb-6 leading-tight">
              A Legacy of <span className="italic text-rosegold-500">Elegance</span>
            </h2>
            <div className="w-24 h-px bg-primary mb-8" />
            <div className="space-y-6 text-foreground/70 leading-relaxed">
              <p>
                Founded with a passion for exceptional craftsmanship, Veylorae represents the pinnacle of luxury fashion. 
                Our journey began with a simple belief: true elegance lies in the details.
              </p>
              <p>
                Each piece in our collection tells a story of artistry and dedication. We collaborate with master 
                artisans and emerging talents alike, creating pieces that honor traditional techniques while 
                embracing contemporary vision.
              </p>
              <p>
                At Veylorae, luxury is not just about what you wear—it's about how it makes you feel. 
                Confident, refined, and unmistakably yourself.
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 mt-8 text-foreground hover:text-primary transition-colors group"
            >
              <span className="text-sm tracking-wider uppercase font-medium">Discover More</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>

        {/* Values */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <div key={value.title} className="text-center p-8 bg-white hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-primary/10 rounded-full">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-4">{value.title}</h3>
              <p className="text-foreground/60 text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}