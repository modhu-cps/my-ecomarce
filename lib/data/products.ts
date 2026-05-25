import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Neural Pulse Earbuds',
    price: 299.99,
    description: 'AI-powered adaptive sound earbuds with neural interface technology for an immersive audio experience.',
    category: 'ai-gadgets',
    images: ['/images/products/neural-pulse-1.jpg'],
    specifications: {
      'Battery Life': '12 hours',
      'Connectivity': 'Bluetooth 5.3',
      'AI Features': 'Adaptive ANC, Neural EQ',
      'Weight': '4.5g per earbud'
    },
    rating: 4.8,
    reviews: 234,
    inStock: true,
    isFeatured: true,
    isBestSeller: true,
    createdAt: '2024-01-15'
  },
  {
    id: '2',
    name: 'HoloDesk Pro',
    price: 899.99,
    description: 'Holographic projection desk with integrated AI workspace and ambient intelligence.',
    category: 'desk-setup',
    images: ['/images/products/holodesk-1.jpg'],
    specifications: {
      'Projection': '4K Holographic',
      'Surface': 'Premium Carbon Fiber',
      'AI': 'Workspace Assistant',
      'Dimensions': '140cm x 70cm'
    },
    rating: 4.9,
    reviews: 156,
    inStock: true,
    isFeatured: true,
    isBestSeller: false,
    createdAt: '2024-02-20'
  },
  {
    id: '3',
    name: 'CyberLens AR',
    price: 449.99,
    description: 'Augmented reality glasses with seamless digital overlay and intuitive gesture controls.',
    category: 'ai-gadgets',
    images: ['/images/products/cyberlens-1.jpg'],
    specifications: {
      'Display': 'MicroLED',
      'FOV': '90 degrees',
      'Weight': '38g',
      'Battery': '8 hours'
    },
    rating: 4.7,
    reviews: 189,
    inStock: true,
    isFeatured: true,
    isBestSeller: true,
    createdAt: '2024-03-10'
  },
  {
    id: '4',
    name: 'Quantum Mouse',
    price: 149.99,
    description: 'Zero-latency quantum tracking mouse with haptic feedback and adaptive ergonomics.',
    category: 'accessories',
    images: ['/images/products/quantum-mouse-1.jpg'],
    specifications: {
      'Sensor': 'Quantum Optical',
      'DPI': 'Up to 26000',
      'Battery': '70 hours',
      'Weight': '65g'
    },
    rating: 4.6,
    reviews: 312,
    inStock: true,
    isFeatured: false,
    isBestSeller: true,
    createdAt: '2024-01-25'
  },
  {
    id: '5',
    name: 'Aura Light Panel',
    price: 199.99,
    description: 'AI mood-sensing ambient light panel that adapts to your workspace rhythm.',
    category: 'desk-setup',
    images: ['/images/products/aura-panel-1.jpg'],
    specifications: {
      'LEDs': 'RGBIC Pro',
      'Coverage': 'Up to 6ft',
      'AI Features': 'Mood Detection',
      'Control': 'App/Gesture'
    },
    rating: 4.8,
    reviews: 267,
    inStock: true,
    isFeatured: true,
    isBestSeller: false,
    createdAt: '2024-02-15'
  },
  {
    id: '6',
    name: 'NeoCharge Pad',
    price: 79.99,
    description: 'Multi-device wireless charging pad with futuristic levitation design.',
    category: 'accessories',
    images: ['/images/products/neocharge-1.jpg'],
    specifications: {
      'Output': '65W Total',
      'Devices': 'Up to 3',
      'Technology': 'MagLev',
      'Material': 'Premium Glass'
    },
    rating: 4.5,
    reviews: 423,
    inStock: true,
    isFeatured: false,
    isBestSeller: false,
    createdAt: '2024-03-01'
  }
];
