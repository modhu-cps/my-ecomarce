'use client';

import { motion } from 'framer-motion';

export default function BrandStory() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              <span className="text-gradient">Born from</span>
              <span className="text-[#F8FAFC]"> Curiosity</span>
            </h2>
            <p className="text-[#94A3B8] leading-relaxed text-lg">
              Mystic Rise Collective started with a simple question: What if technology could feel like magic? 
              We craft products that don't just work—they inspire. Every curve, every light, every interaction 
              is designed to elevate your space and mindset.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-video rounded-2xl overflow-hidden bg-[#0B1023] glass"
          >
            <div className="absolute inset-0 flex items-center justify-center text-[#94A3B8]">
              Brand Video Placeholder
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
