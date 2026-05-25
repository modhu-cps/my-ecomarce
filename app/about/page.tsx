'use client';

import { motion } from 'framer-motion';
import { Target, Lightbulb, Heart, Zap } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient">Our</span>
            <span className="text-[#F8FAFC]"> Story</span>
          </h1>
          <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto leading-relaxed">
            We believe technology should enhance human experience, not complicate it. 
            Mystic Rise Collective was born from the vision of creating products that 
            seamlessly blend into your life while pushing the boundaries of what's possible.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {[
            {
              icon: Target,
              title: 'Precision',
              description: 'Every detail matters. We obsess over the smallest elements.'
            },
            {
              icon: Lightbulb,
              title: 'Innovation',
              description: 'Pushing boundaries with cutting-edge technology and design.'
            },
            {
              icon: Heart,
              title: 'Human-Centric',
              description: 'Technology that adapts to you, not the other way around.'
            },
            {
              icon: Zap,
              title: 'Performance',
              description: 'Uncompromising quality and reliability in every product.'
            }
          ].map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 glass rounded-2xl"
            >
              <value.icon size={32} className="text-[#00E5FF] mx-auto mb-4" />
              <h3 className="text-[#F8FAFC] font-semibold text-lg mb-2">
                {value.title}
              </h3>
              <p className="text-[#94A3B8] text-sm">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold text-gradient">Our Mission</h2>
            <p className="text-[#94A3B8] leading-relaxed">
              To create products that don't just serve a function, but elevate the entire 
              human experience. We're building a future where technology is invisible, 
              intuitive, and beautiful.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold text-gradient">Our Vision</h2>
            <p className="text-[#94A3B8] leading-relaxed">
              A world where every environment adapts to human needs, where design meets 
              intelligence, and where the boundaries between digital and physical blur 
              into a seamless experience.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
            }
