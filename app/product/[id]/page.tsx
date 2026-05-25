'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Heart, ShoppingBag, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { products } from '@/lib/data/products';
import { useCart } from '@/hooks/useCart';
import { useWishlist } from '@/hooks/useWishlist';
import Button from '@/components/ui/Button';
import ProductGrid from '@/components/ui/ProductGrid';

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === params.id);
  const [currentImage, setCurrentImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  if (!product) {
    return (
      <div className="pt-24 text-center">
        <h1 className="text-2xl text-[#F8FAFC]">Product not found</h1>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#0B1023]">
              <Image
                src={product.images[currentImage]}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              
              {/* Navigation Arrows */}
              <button
                onClick={() => setCurrentImage(prev => Math.max(0, prev - 1))}
                className="absolute left-4 top-1/2 -translate-y-1/2 glass p-2 rounded-full hover:border-[#00E5FF]/50 transition-all"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => setCurrentImage(prev => Math.min(product.images.length - 1, prev + 1))}
                className="absolute right-4 top-1/2 -translate-y-1/2 glass p-2 rounded-full hover:border-[#00E5FF]/50 transition-all"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            
            {/* Thumbnail Gallery */}
            <div className="flex gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImage(idx)}
                  className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    currentImage === idx ? 'border-[#00E5FF]' : 'border-transparent'
                  }`}
                >
                  <Image src={img} alt="" fill className="object-cover" />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <p className="text-[#00E5FF] text-sm uppercase tracking-wider mb-2">
                {product.category.replace('-', ' ')}
              </p>
              <h1 className="text-3xl lg:text-4xl font-bold text-[#F8FAFC] mb-4">
                {product.name}
              </h1>
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-3xl font-bold text-gradient">
                  ${product.price}
                </span>
                <div className="flex items-center space-x-1">
                  <Star size={18} className="fill-[#00E5FF] text-[#00E5FF]" />
                  <span className="text-[#F8FAFC]">{product.rating}</span>
                  <span className="text-[#94A3B8]">({product.reviews} reviews)</span>
                </div>
              </div>
              <p className="text-[#94A3B8] leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Specifications */}
            <div className="glass rounded-xl p-6">
              <h3 className="text-[#F8FAFC] font-semibold mb-4">Specifications</h3>
              <dl className="space-y-3">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <dt className="text-[#94A3B8]">{key}</dt>
                    <dd className="text-[#F8FAFC]">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center glass rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 text-[#94A3B8] hover:text-[#F8FAFC]"
                >
                  -
                </button>
                <span className="px-4 py-2 text-[#F8FAFC]">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 text-[#94A3B8] hover:text-[#F8FAFC]"
                >
                  +
                </button>
              </div>
              <Button
                variant="primary"
                size="lg"
                onClick={() => {
                  for (let i = 0; i < quantity; i++) {
                    addToCart(product);
                  }
                }}
                className="flex-1"
              >
                <ShoppingBag size={20} className="mr-2" />
                Add to Cart
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => toggleWishlist(product.id)}
              >
                <Heart
                  size={20}
                  className={isInWishlist(product.id) ? 'fill-[#7C3AED]' : ''}
                />
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-24">
            <h2 className="text-2xl font-bold text-[#F8FAFC] mb-8">
              <span className="text-gradient">Related</span> Products
            </h2>
            <ProductGrid products={relatedProducts} />
          </div>
        )}
      </div>
    </div>
  );
                                                                }
