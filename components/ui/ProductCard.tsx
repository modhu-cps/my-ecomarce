'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag, Star } from 'lucide-react';
import { Product } from '@/lib/types';
import { useCart } from '@/hooks/useCart';
import { useWishlist } from '@/hooks/useWishlist';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <Link href={`/product/${product.id}`}>
        <div className="relative aspect-square overflow-hidden rounded-2xl bg-[#0B1023] mb-4">
          <motion.div
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="w-full h-full"
          >
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>

          {/* Glow Effect */}
          <motion.div
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-gradient-to-t from-[#00E5FF]/10 to-transparent pointer-events-none"
          />

          {/* Quick Actions */}
          <motion.div
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
            className="absolute bottom-4 right-4 flex space-x-2"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.preventDefault();
                toggleWishlist(product.id);
              }}
              className="glass p-2 rounded-full hover:border-[#7C3AED]/50 transition-colors"
            >
              <Heart
                size={16}
                className={isInWishlist(product.id) ? 'fill-[#7C3AED] text-[#7C3AED]' : 'text-[#F8FAFC]'}
              />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.preventDefault();
                addToCart(product);
              }}
              className="glass p-2 rounded-full hover:border-[#00E5FF]/50 transition-colors"
            >
              <ShoppingBag size={16} className="text-[#00E5FF]" />
            </motion.button>
          </motion.div>
        </div>
      </Link>

      {/* Product Info */}
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <span className="text-xs text-[#00E5FF] uppercase tracking-wider">
            {product.category.replace('-', ' ')}
          </span>
        </div>
        <Link href={`/product/${product.id}`}>
          <h3 className="text-[#F8FAFC] font-medium group-hover:text-[#00E5FF] transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-gradient">${product.price}</span>
          <div className="flex items-center space-x-1">
            <Star size={14} className="fill-[#00E5FF] text-[#00E5FF]" />
            <span className="text-xs text-[#94A3B8]">{product.rating}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
          }
