'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Youtube, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B1023] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold">
              <span className="text-gradient">MYSTIC</span>
              <span className="text-[#F8FAFC] ml-2">RISE</span>
            </Link>
            <p className="text-[#94A3B8] text-sm leading-relaxed">
              Elevating human experience through intelligent design and futuristic innovation.
            </p>
            <div className="flex space-x-4">
              {[Instagram, Twitter, Youtube].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.2, color: '#00E5FF' }}
                  className="text-[#94A3B8] hover:text-[#00E5FF] transition-colors"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#F8FAFC] font-semibold mb-4">Explore</h4>
            <ul className="space-y-3">
              {['Shop All', 'New Arrivals', 'Best Sellers', 'Gallery'].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-[#94A3B8] hover:text-[#00E5FF] transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-[#F8FAFC] font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {['Contact Us', 'FAQs', 'Shipping', 'Returns'].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-[#94A3B8] hover:text-[#00E5FF] transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-[#F8FAFC] font-semibold mb-4">Stay Connected</h4>
            <p className="text-[#94A3B8] text-sm mb-4">
              Subscribe for exclusive updates and early access.
            </p>
            <form className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-[#F8FAFC] placeholder-[#94A3B8] focus:outline-none focus:border-[#00E5FF] transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-[#00E5FF] hover:text-[#7C3AED] transition-colors"
                >
                  <Mail size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-[#94A3B8] text-sm">
            © {currentYear} Mystic Rise Collective. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
