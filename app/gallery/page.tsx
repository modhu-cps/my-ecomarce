'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const galleryItems = [
  {
    id: 1,
    title: 'Minimal Workspace',
    description: 'Clean and futuristic desk setup with holographic displays',
    image: '/images/gallery/setup-1.jpg',
    tags: ['desk', 'minimal', 'holographic']
  },
  {
    id: 2,
    title: 'Cyber Lounge',
    description: 'Ambient lighting with smart furniture integration',
    image: '/images/gallery/setup-2.jpg',
    tags: ['living', 'ambient', 'smart']
  },
  {
    id: 3,
    title: 'Neural Workspace',
    description: 'AI-powered productivity environment',
    image: '/images/gallery/setup-3.jpg',
    tags: ['workspace', 'ai', 'productivity']
  },
  // Add more items...
];

export default function GalleryPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">Setup</span>
            <span className="text-[#F8FAFC]"> Gallery</span>
          </h1>
          <p className="text-[#94A3B8] text-lg">
            Explore aesthetic futuristic environments
          </p>
        </motion.div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="break-inside-avoid group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl bg-[#0B1023]">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  className="relative aspect-auto"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6"
                >
                  <h3 className="text-[#F8FAFC] font-semibold text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#94A3B8] text-sm mb-3">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-1 glass rounded-full text-xs text-[#00E5FF]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
    }
