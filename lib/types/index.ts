export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'ai-gadgets' | 'desk-setup' | 'accessories' | 'lifestyle';
  images: string[];
  specifications: Record<string, string>;
  rating: number;
  reviews: number;
  inStock: boolean;
  isFeatured: boolean;
  isBestSeller: boolean;
  createdAt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface FilterState {
  category: string | null;
  priceRange: [number, number];
  sortBy: 'price-asc' | 'price-desc' | 'popularity' | 'newest';
  search: string;
}
