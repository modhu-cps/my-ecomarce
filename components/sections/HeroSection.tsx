'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import FloatingElement from '@/components/animations/FloatingElement';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050816] via-[#0B1023] to-[#050816]" />
      
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,229,255,0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Floating Elements */}
      <FloatingElement className="absolute top-20 left-10 w-20 h-20">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-[#00E5FF]/20 to-[#7C3AED]/20 backdrop-blur-xl border border-white/10" />
      </FloatingElement>
      
      <FloatingElement className="absolute bottom-20 right-10 w-32 h-32" delay={0.5}>
        <div className="w-full h-full rounded-3xl bg-gradient-to-br from-[#7C3AED]/20 to-[#00E5FF]/20 backdrop-blur-xl border border-white/10 transform rotate-45" />
      </FloatingElement>

      <FloatingElement className="absolute top-1/3 right-1/4 w-16 h-16" delay={0.3}>
        <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[#00E5FF]/10 to-[#7C3AED]/10 backdrop-blur-xl border border-white/10" />
      </FloatingElement>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[#00E5FF] text-sm lg:text-base uppercase tracking-[0.2em] font-medium"
          >
            Welcome to the Future
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-5xl sm:text-6xl lg:text-8xl font-bold leading-tight"
          >
            <span className="text-gradient">Elevate</span>
            <br />
            <span className="text-[#F8FAFC]">Your Reality</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg lg:text-xl text-[#94A3B8] max-w-2xl mx-auto leading-relaxed"
          >
            Discover premium AI gadgets and futuristic lifestyle products designed 
            to transform your everyday experience into something extraordinary.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <Link href="/shop">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-gradient-to-r from-[#00E5FF] to-[#7C3AED] rounded-full text-white font-medium flex items-center space-x-2 hover:shadow-lg hover:shadow-[#00E5FF]/20 transition-all duration-300"
              >
                <span>Explore Collection</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            
            <Link href="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 glass rounded-full text-[#F8FAFC] font-medium hover:border-[#00E5FF]/30 transition-all duration-300"
              >
                Our Story
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-[#94A3B8]/30 flex items-start justify-center p-1"
        >
          <div className="w-1.5 h-3 bg-[#00E5FF] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
                         }
