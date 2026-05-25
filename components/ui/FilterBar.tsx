'use client';

import { motion } from 'framer-motion';
import { FilterState, Category } from '@/lib/types';

interface FilterBarProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  categories: Category[];
}

export default function FilterBar({ filters, onFilterChange, categories }: FilterBarProps) {
  return (
    <div className="space-y-4">
      {/* Category Filters */}
      <div className="flex flex-wrap gap-3">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onFilterChange({ ...filters, category: null })}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            !filters.category
              ? 'bg-gradient-to-r from-[#00E5FF] to-[#7C3AED] text-white'
              : 'glass text-[#94A3B8] hover:text-[#F8FAFC]'
          }`}
        >
          All
        </motion.button>
        {categories.map((category) => (
          <motion.button
            key={category.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onFilterChange({ ...filters, category: category.slug })}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              filters.category === category.slug
                ? 'bg-gradient-to-r from-[#00E5FF] to-[#7C3AED] text-white'
                : 'glass text-[#94A3B8] hover:text-[#F8FAFC]'
            }`}
          >
            {category.icon} {category.name}
          </motion.button>
        ))}
      </div>

      {/* Sort Options */}
      <div className="flex items-center space-x-4">
        <span className="text-sm text-[#94A3B8]">Sort by:</span>
        <select
          value={filters.sortBy}
          onChange={(e) => onFilterChange({ ...filters, sortBy: e.target.value as FilterState['sortBy'] })}
          className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-sm text-[#F8FAFC] focus:outline-none focus:border-[#00E5FF]"
        >
          <option value="popularity">Popularity</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="newest">Newest</option>
        </select>
      </div>
    </div>
  );
}
