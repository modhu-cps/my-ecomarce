'use client';

import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import Button from './Button';

export default function NewsletterForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center glass rounded-3xl p-8 lg:p-12 max-w-2xl mx-auto"
    >
      <h2 className="text-2xl lg:text-3xl font-bold mb-3">
        <span className="text-gradient">Join</span>
        <span className="text-[#F8FAFC]"> the Collective</span>
      </h2>
      <p className="text-[#94A3B8] mb-8 max-w-md mx-auto">
        Get early access to new drops, exclusive offers, and futuristic inspiration.
      </p>
      <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-[#F8FAFC] placeholder-[#94A3B8] focus:outline-none focus:border-[#00E5FF] transition-colors"
          required
        />
        <Button type="submit" variant="primary">
          <Send size={16} className="mr-2" />
          Subscribe
        </Button>
      </form>
    </motion.div>
  );
}
