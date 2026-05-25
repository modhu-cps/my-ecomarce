import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { CartProvider } from '@/context/CartContext';
import { WishlistProvider } from '@/context/WishlistContext';
import PageTransition from '@/components/animations/PageTransition';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mystic Rise Collective | Premium Futuristic Lifestyle',
  description: 'Discover premium AI gadgets, smart lifestyle products, and futuristic accessories. Elevate your everyday experience with Mystic Rise Collective.',
  keywords: 'AI gadgets, smart lifestyle, futuristic accessories, premium desk setup, cyber accessories',
  openGraph: {
    title: 'Mystic Rise Collective',
    description: 'Premium futuristic lifestyle brand',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <WishlistProvider>
            <Navbar />
            <PageTransition>
              <main className="min-h-screen">
                {children}
              </main>
            </PageTransition>
            <Footer />
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
