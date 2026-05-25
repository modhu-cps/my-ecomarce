'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils/cn';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  type = 'button',
  disabled = false
}: ButtonProps) {
  const baseStyles = 'relative inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 rounded-lg';
  
  const variants = {
    primary: 'bg-gradient-to-r from-[#00E5FF] to-[#7C3AED] text-white hover:shadow-lg hover:shadow-[#00E5FF]/20',
    secondary: 'bg-white/5 backdrop-blur-xl border border-white/10 text-[#F8FAFC] hover:bg-white/10 hover:border-[#00E5FF]/30',
    outline: 'border border-[#00E5FF]/30 text-[#00E5FF] hover:bg-[#00E5FF]/10',
    ghost: 'text-[#94A3B8] hover:text-[#00E5FF] hover:bg-white/5'
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base'
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
    >
      {children}
    </motion.button>
  );
}
