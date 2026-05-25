'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function AISection() {
  return (
    <section className="py-16 lg:py-24 bg-[#0B1023]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Sparkles size={40} className="text-[#00E5FF] mx-auto mb-6" />
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient">AI-Powered</span>
            <span className="text-[#F8FAFC]"> Intelligence</span>
          </h2>
          <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
            Every product in our collection is enhanced with adaptive artificial intelligence, 
            learning from you to create a truly personalized experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
