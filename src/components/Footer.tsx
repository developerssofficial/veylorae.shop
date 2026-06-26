import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react'

const footerLinks = {
  shop: [
    { name: 'New Arrivals', href: '#' },
    { name: 'Best Sellers', href: '#' },
    { name: 'Collections', href: '#' },
    { name: 'Sale', href: '#' },
  ],
  help: [
    { name: 'FAQs', href: '#' },
    { name: 'Shipping & Returns', href: '#' },
    { name: 'Size Guide', href: '#' },
    { name: 'Track Order', href: '#' },
  ],
  company: [
    { name: 'Our Story', href: '#about' },
    { name: 'Sustainability', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Press', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-foreground text-white">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-serif mb-4">Join Our World</h3>
            <p className="text-white/60 mb-8">
              Subscribe to receive exclusive offers, new arrivals, and style inspiration.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-3 bg-white/10 border border-white/20 rounded-none text-white placeholder-white/40 focus:outline-none focus:border-primary transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-primary hover:bg-primary/90 text-white font-medium tracking-wider uppercase text-sm transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img src="/logo.png" alt="Veylorae" className="h-20 w-auto mb-6 brightness-0 invert" />
            <p className="text-white/60 mb-6 max-w-sm">
              Where luxury meets elegance. We curate exceptional pieces that define sophistication and timeless style.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-3 bg-white/10 hover:bg-primary transition-colors rounded-full">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-white/10 hover:bg-primary transition-colors rounded-full">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-white/10 hover:bg-primary transition-colors rounded-full">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-medium tracking-wider uppercase text-sm mb-6">Shop</h4>
            <ul className="space-y-4">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/60 hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium tracking-wider uppercase text-sm mb-6">Help</h4>
            <ul className="space-y-4">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/60 hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium tracking-wider uppercase text-sm mb-6">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/60 hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-12 border-t border-white/10 flex flex-wrap justify-center gap-8 text-sm text-white/60">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span>123 Luxury Ave, Fashion District</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-primary" />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-primary" />
            <span>hello@veylorae.com</span>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-white/40">
            <p>&copy; 2025 Veylorae. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}