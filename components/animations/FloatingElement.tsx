'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function FloatingElement({ children, className = '', delay = 0 }: FloatingElementProps) {
  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{
        y: [0, -15, 0],
        rotate: [0, 2, -2, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        repeatType: 'reverse',
        delay,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  );
}
