'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { products } from '@/lib/data/products';
import { categories } from '@/lib/data/categories';
import ProductGrid from '@/components/ui/ProductGrid';
import FilterBar from '@/components/ui/FilterBar';
import SearchBar from '@/components/ui/SearchBar';
import { FilterState } from '@/lib/types';

export default function ShopPage() {
  const [filters, setFilters] = useState<FilterState>({
    category: null,
    priceRange: [0, 1000],
    sortBy: 'popularity',
    search: ''
  });

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (filters.category) {
      filtered = filtered.filter(p => p.category === filters.category);
    }

    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(searchLower) ||
        p.description.toLowerCase().includes(searchLower)
      );
    }

    filtered = filtered.filter(p => 
      p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
    );

    switch (filters.sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      default:
        filtered.sort((a, b) => b.rating - a.rating);
    }

    return filtered;
  }, [filters]);

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">Shop</span>
            <span className="text-[#F8FAFC]"> All</span>
          </h1>
          <p className="text-[#94A3B8] text-lg">
            Discover products that define the future
          </p>
        </motion.div>

        <div className="space-y-8">
          <SearchBar 
            value={filters.search}
            onChange={(search) => setFilters(prev => ({ ...prev, search }))}
          />
          
          <FilterBar 
            filters={filters}
            onFilterChange={setFilters}
            categories={categories}
          />
          
          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </div>
  );
                      }
