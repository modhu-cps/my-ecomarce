'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { X } from 'lucide-react';

interface MobileNavProps {
  onClose: () => void;
}

export default function MobileNav({ onClose }: MobileNavProps) {
  const links = [
    { href: '/shop', label: 'Shop' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'tween', duration: 0.3 }}
      className="fixed inset-0 z-50 lg:hidden"
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute right-0 top-0 bottom-0 w-72 glass p-6 flex flex-col">
        <div className="flex justify-end mb-8">
          <button onClick={onClose} className="text-[#94A3B8] hover:text-white">
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col space-y-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="text-lg text-[#F8FAFC] hover:text-[#00E5FF] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </motion.div>
  );
}
