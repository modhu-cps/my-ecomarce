/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',            // ← এটাই স্ট্যাটিক এক্সপোর্ট সক্রিয় করে
  images: {
    unoptimized: true,         // স্ট্যাটিক সাইটে ইমেজ অপটিমাইজেশন বন্ধ
  },
}

module.exports = nextConfig
