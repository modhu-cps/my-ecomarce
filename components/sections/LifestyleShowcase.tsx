'use client';

import { motion } from 'framer-motion';

const lifestyles = [
  { title: 'Work', description: 'Redefine productivity with intelligent workspaces' },
  { title: 'Create', description: 'Tools that amplify your creative vision' },
  { title: 'Relax', description: 'Ambient intelligence for your sanctuary' },
];

export default function LifestyleShowcase() {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">
          <span className="text-gradient">Designed for</span>
          <span className="text-[#F8FAFC]"> Every Moment</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {lifestyles.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-8 hover:border-[#00E5FF]/30 transition-all group"
            >
              <h3 className="text-2xl font-bold text-[#F8FAFC] mb-4 group-hover:text-[#00E5FF] transition-colors">
                {item.title}
              </h3>
              <p className="text-[#94A3B8]">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
