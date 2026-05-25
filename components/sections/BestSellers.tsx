'use client';

import { products } from '@/lib/data/products';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Carousel from '@/components/ui/Carousel';
import ProductCard from '@/components/ui/ProductCard';

export default function BestSellers() {
  const bestSellers = products.filter(p => p.isBestSeller);

  return (
    <SectionWrapper>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center">
          <span className="text-gradient">Best</span>
          <span className="text-[#F8FAFC]"> Sellers</span>
        </h2>
        <Carousel>
          {bestSellers.map((product, index) => (
            <div key={product.id} className="min-w-[280px] max-w-[320px]">
              <ProductCard product={product} index={index} />
            </div>
          ))}
        </Carousel>
      </div>
    </SectionWrapper>
  );
}
