'use client';

import { motion } from 'framer-motion';
import { products } from '@/lib/data/products';
import ProductCard from '@/components/ui/ProductCard';
import SectionWrapper from '@/components/ui/SectionWrapper';

export default function FeaturedProducts() {
  const featuredProducts = products.filter(p => p.isFeatured);

  return (
    <SectionWrapper>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">Featured</span>
            <span className="text-[#F8FAFC]"> Products</span>
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
            Curated selection of our most innovative products
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
