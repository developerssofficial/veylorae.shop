import { Instagram as InstagramIcon } from 'lucide-react'

const images = [
  'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400&h=400&fit=crop',
]

export default function InstagramFeed() {
  return (
    <section className="py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-rosegold-500 tracking-[0.3em] uppercase text-sm mb-4">@Veylorae</p>
          <h2 className="font-serif text-4xl sm:text-5xl text-foreground mb-6">Follow Our Journey</h2>
          <div className="w-24 h-px bg-primary mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {images.map((image, index) => (
            <a
              key={index}
              href="#"
              className="group relative aspect-square overflow-hidden"
            >
              <img
                src={image}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-center justify-center">
                <InstagramIcon className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}